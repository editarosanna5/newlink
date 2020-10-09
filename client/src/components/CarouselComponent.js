import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { reactBaseUrl } from '../shared/baseUrl';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={reactBaseUrl + "assets/images/number-1.png"} />
                </div>
                <div>
                    <img src={reactBaseUrl + "assets/images/number-1.png"} />
                </div>
                <div>
                    <img src={reactBaseUrl + "assets/images/number-1.png"} />
                </div>
            </Carousel>
        </div>
    );
}