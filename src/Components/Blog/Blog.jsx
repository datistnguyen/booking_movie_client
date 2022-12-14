import React from 'react'
import"../Blog/Blog.css"
export default function Blog() {
  return (
    <footer>
    <div className="container" style={{ marginTop: 100 }}>
        <div>
            <ul
                className="nav nav-pills mb-3 justify-content-center"
                id="pills-tab"
                role="tablist"
            >
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        data-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        style={{
                            backgroundColor: "#212121",
                            fontSize: "50px",
                            fontWeight: 500,
                            fontFamily: "cursive"
                        }}

                    >
                        BLOG
                    </button>
                </li>

            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="showcases__content" >
                        <div className="showcase__item">
                            <img src="./img/endgame.jpg" />

                            <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                <div className="showcase__icon">
                                    <a href="../img/showcase_img_1.webp" data-fancybox="gallery">
                                        <i className="fa fa-search-plus" />
                                    </a>
                                </div>
                                <div className="showcase__name">
                                    <p>LOGO</p>
                                    <h3>FLIPPIN BIRD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <img src="./img/stranger-things-bicycle-lights-children.jpg" />
                            <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                <div className="showcase__icon">
                                    <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                        <i className="fa fa-search-plus" />
                                    </a>
                                </div>
                                <div className="showcase__name">
                                    <p>LOGO</p>
                                    <h3>FLIPPIN BIRD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <img src="./img/th (3).jpg" />
                            <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                <div className="showcase__icon">
                                    <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                        <i className="fa fa-search-plus" />
                                    </a>
                                </div>
                                <div className="showcase__name">
                                    <p>LOGO</p>
                                    <h3>FLIPPIN BIRD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <img src="./img/th (4).jpg" />
                            <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                <div className="showcase__icon">
                                    <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                        <i className="fa fa-search-plus" />
                                    </a>
                                </div>
                                <div className="showcase__name">
                                    <p>LOGO</p>
                                    <h3>FLIPPIN BIRD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <img src="./img/bgmovie.jpg" />
                            <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                <div className="showcase__icon">
                                    <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                        <i className="fa fa-search-plus" />
                                    </a>
                                </div>
                                <div className="showcase__name">
                                    <p>LOGO</p>
                                    <h3>FLIPPIN BIRD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="showcase__item">
                            <img src="./img/anh2.png" />
                            <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                <div className="showcase__icon">
                                    <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                        <i className="fa fa-search-plus" />
                                    </a>
                                </div>
                                <div className="showcase__name">
                                    <p>LOGO</p>
                                    <h3>FLIPPIN BIRD</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    </div>

    <div className="feature ">
        <div
            className="container title d-flex"
            style={{ justifyContent: "space-between" }}
        >
            <div className="tiltle_child" style={{ marginTop: "80px" }}>
                <h1
                    className="text-light mt-5"
                    style={{ fontSize: "50px", width: "70%" }}
                >
                    Ứng dụng tiện lợi dành cho người yêu điện ảnh
                </h1>
                <p style={{ fontSize: "15px", color: "white", marginTop: "80px" }}>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
                    đổi quà hấp dẫn.
                </p>
                <button
                    className="btn btn-primary mt-3"
                    style={{
                        backgroundColor: "#60c5ef",
                        width: "30%",
                        height: "50px",
                    }}
                >
                    APP MIỄN PHÍ-TẢI VỀ NGAY
                </button>
            </div>

            <div className="image animate__animated animate__slideInRight" style={{ marginTop: "80px" }}>
                <img src="./img/mobile.png" alt="" />
                <img className="mobile_home" src="./img/th (5).jpg"></img>
                <img className="mobile_end" src="./img/th (6).jpg"></img>
            </div>
        </div>
    </div>
</footer>
  )
}
