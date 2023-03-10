import React from 'react'
import "./Carousel.css";
import Carousel from 'react-bootstrap/Carousel';

function CarouselBlock() {
    return (
        <div className="carousel">
            <Carousel slide={false} variant={"dark"} indicators={false} nextLabel={''} prevLabel={''} prevIcon={<span aria-hidden='true' className='carousel-control-prev-icon' />} nextIcon={<span aria-hidden='true' className='carousel-control-next-icon' />} interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61icIfBHPBL._SX3000_.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
                        alt="Four slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg"
                        alt="Five slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                        alt="Six slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselBlock;