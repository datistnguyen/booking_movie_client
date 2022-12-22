import React, { useEffect, useState } from 'react'
import { Button, Rate } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';
import _ from 'lodash';

const Review = () => {
  const [rateStar, setRateStar]= useState(0)
  const [commentContent, setCommentContent]= useState("")
  const {idFilm}= useParams()
  const disable= commentContent.length <= 0 ? true : false
  const {userLogin} = useSelector(state=>state.UserManageReducer)
  const [listComment, setListComment]= useState([])
  const [change, setChange]= useState(false)
  useEffect(()=> {
    (async()=> {
        const res= await axios({
            url: "http://localhost:8080/comment/detail/"+ userLogin?.id,
            method: "get",
            params: {
                idFilm: idFilm
            }
        })
        const result= await res.data
        return setListComment(result)
    })()
  }, [change, userLogin?.id, idFilm])
  const sendComment= async ()=> {
    const res= await axios({
        url: "http://localhost:8080/comment/create",
        method: "post",
        data: {
            rate: rateStar,
            content: commentContent,
            userId: userLogin.id,
            filmId: idFilm
        }
    })
    const result= await res.data
    setCommentContent("")
    setRateStar(0)
    return setChange(prev=> !prev)
  }
  return (
    <div className={"review-container"} style={{width: '100%', display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <div className={"wrapper-review-container"} style={{width: "100%", maxWidth: 1140, display: "flex", justifyContent: "center", gap: 12}}>
            <div className={"wrap-1-1"} style={{width: "100%", maxWidth: 736}}>
                <div className={"wrap-review-1"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 0", background: "#242526"}}>
                    <div className={"review-zx"} style={{width: "100%", padding: 10, flex: "1 1 0"}}>
                        <span className={"count-review"} style={{fontSize: 36, color: "#fff", fontWeight: 600}}>{listComment.length > 0 ? _.round(_.sumBy(listComment, function(e) {return parseInt(e.rate)}) / listComment.length, 2) : "Chưa có đánh giá"}</span> 
                        
                            {
                                listComment?.length > 0 && 
                            <Rate value={parseInt(_.sumBy(listComment, function(e) {return parseInt(e.rate)}) / listComment.length)} disabled={true} />
                            }
                    </div>
                    <div className={"review-stats-x"} style={{flex: " 1 1 0", padding: 10}}>
                        <div style={{color: "#fff"}}><strong>Avatar2 - Dòng chảy của nước</strong> được nhận 25 lượt đánh giá với số sao trung bình là <strong>3.74</strong></div>
                    </div>
                </div>
                <br />
                <div style={{color: "#fff"}}>
                    <div>Viết bình luận của bạn</div>
                    <br />
                    <div>
                        <input value={commentContent} onChange={(e)=> setCommentContent(e.target.value)} type="text" style={{width: 400, height: 40, borderRadius: 80, border: "none", outlineColor: "#2e89ff", color: "#000", padding: 10, }} placeholder={"Nhập bình luận của bạn "} />
                    </div>
                    <br />
                    <div>Đánh giá</div>
                    <div>
                        <Rate onChange={(e)=> setRateStar(e)} value={rateStar} />
                    </div>
                    <br />
                    <Button onClick={sendComment} disabled={disable} type={"primary"}>Gửi</Button>
                    
                </div>
            </div>
            <div className={"wrap-1-2"} style={{flex: "1 1 0"}}>
                <div style={{fontSize: 24, fontWeight: 600, color: "#fff", textAlign: "center"}}>Các bình luận khác</div>
                <br />
                <div style={{maxHeight: 700, overflow: "auto"}}>
                    {
                        _.orderBy(listComment, function(e) {return parseInt(moment(e.createdAt).valueOf())}, "desc")?.map((item, key)=> <div style={{color: "#fff"}} key={key}>
                            <div className={"item-comment-1"} style={{padding: 10, borderRadius: 5, background: "#242526", marginBottom: 12}}>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <strong style={{marginBottom: 8}}>{item.username}</strong>
                                    <div>{moment(moment(item.createdAt).valueOf() + 7 * 3600 * 1000).fromNow()}</div>
                                </div>
                                <div>
                                    <Rate value={parseInt(item?.rate)} />
                                </div>
                                <br />
                                <div>{item.content}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review