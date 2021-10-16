import React from 'react'
import moviesData from "../data/movieStore"

const Banner = () => {


    moviesData.addRandomBanner();
    const bannerImages = moviesData.bannerSelected;
    return (
        <div className="banner">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={bannerImages[0].poster} class="d-block w-100" alt={bannerImages[0].title}/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{bannerImages[0].title}</h5>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={bannerImages[1].poster} class="d-block w-100" alt={bannerImages[1].title}/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{bannerImages[1].title}</h5>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={bannerImages[2].poster} class="d-block w-100" alt={bannerImages[2].title}/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{bannerImages[2].title}</h5>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    )
}

export default Banner
