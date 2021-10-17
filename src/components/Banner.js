import React from 'react';
import moviesData from "../data/movieStore";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
const Banner = () => {

    moviesData.addRandomBanner();

    const bannerImages = moviesData.bannerSelected;

    return (
        <div className="banner container">
            <Carousel 
            fade={false}
            interval={2500}
            className="banner-slideshow">
                <Carousel.Item>
                    <Link to={`/movies/${bannerImages[0].id}`}>
                        <img
                        className="d-block w-100"
                        src={bannerImages[0].poster}
                        alt={bannerImages[0].title}
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to={`/movies/${bannerImages[1].id}`}>
                        <img
                        className="d-block w-100"
                        src={bannerImages[1].poster}
                        alt={bannerImages[1].title}
                        />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to={`/movies/${bannerImages[2].id}`}>
                        <img
                        className="d-block w-100"
                        src={bannerImages[2].poster}
                        alt={bannerImages[2].title}
                        />
                    </Link>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default Banner
