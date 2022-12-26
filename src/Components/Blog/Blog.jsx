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
                            <img alt="" src="./img/endgame.jpg" />

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
                            <img alt="" src="./img/stranger-things-bicycle-lights-children.jpg" />
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
                            <img alt="" src="./img/th (3).jpg" />
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
                            <img alt="" src="./img/th (4).jpg" />
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
                            <img alt="" src="./img/bgmovie.jpg" />
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
                            <img alt="" src="./img/anh2.png" />
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
                    Convenient app for movie lovers
                </h1>
                <p style={{ fontSize: "15px", color: "white", marginTop: "80px" }}>
                Not only can you book tickets, you can also comment on movies, score theaters and
                    attractive gift exchange.
                </p>
                <button
                    className="btn btn-primary mt-3"
                    style={{
                        backgroundColor: "#60c5ef",
                        width: "30%",
                        height: "50px",
                    }}
                >
                    Available now
                </button>
            </div>

            <div className="image animate__animated animate__slideInRight" style={{ marginTop: "80px" }}>
                <img alt="" src="./img/mobile.png" />
                <img alt="" className="mobile_home" src="./img/th (5).jpg"></img>
                <img alt="" className="mobile_end" src="./img/th (6).jpg"></img>
            </div>
        </div>
    </div>
</footer>
  )
}
