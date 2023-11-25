// import React from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-carousel-minimal";

const Banner = () => {
  const data = [
    {
      image: "https://i.ibb.co/bgJ1BNj/ce632827adec4e1842caa762f10e643d.webp",
    },
    {
      image: "https://i.ibb.co/ZVbvsKN/gallery-1-3.png",
    },
    {
      image: "https://i.ibb.co/z6GTvQB/KM350-1.webp",
    },
    {
      image: "https://i.ibb.co/dr87ZpC/Optical-mouse.jpg",
    },
    {
      image:
        "https://i.ibb.co/mGQnXpx/digitalfoundry-best-graphics-card-every-amd-nvidia-tested-7001-1587745896837.webp",
    },
    {
      image: "https://i.ibb.co/WfrZDYb/tech-gifts-for-men-3.jpg",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 0px",
          }}
        >
          <Carousel
            data={data}
            time={4000}
            width="1200px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailsStyle={thumbnailsStyle}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              maxHeight: "700px",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
