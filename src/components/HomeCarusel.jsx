import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const HomeCarousel = () => {
  return (
    <StyledCarousel
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={80}
      showThumbs={true}
      dynamicHeight={true}
      interval={3000}
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover={true}
      swipeable={true}
      showStatus={false}
      useKeyboardArrows={true}
      emulateTouch={true}
    >
      <CarouselContent>
        <CarouselImage
          src="https://i.ebayimg.com/images/g/LT8AAOSwTx5gCe9i/s-l1600.webp"
          alt=""
        />
      </CarouselContent>
      <CarouselContent>
        <CarouselImage
          src="https://wallpapercave.com/wp/wp2751453.jpg"
          alt=""
        />
      </CarouselContent>
      <CarouselContent>
        <CarouselImage
          src="https://www.pixel4k.com/wp-content/uploads/2020/05/bloodshot-2020_1589578356-2048x1152.jpg.webp"
          alt=""
        />
      </CarouselContent>
      <CarouselContent>
        <CarouselImage
          src="https://images7.alphacoders.com/614/thumb-1920-614832.jpg"
          alt=""
        />
      </CarouselContent>
      <CarouselContent>
        <CarouselImage
          src="https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg"
          alt=""
        />
      </CarouselContent>
      <CarouselContent>
        <CarouselImage
          src="https://www.pixel4k.com/wp-content/uploads/2019/05/black-panther-movie-4k_1558219995.jpg.webp"
          alt=""
        />
      </CarouselContent>
    </StyledCarousel>
  );
};

export default HomeCarousel;

const StyledCarousel = styled(Carousel)`
  .carousel .slide {
    background: transparent;
  }

  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }

  .carousel .control-next.control-arrow::before,
  .carousel .control-prev.control-arrow::before {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }

  .carousel .control-next.control-arrow::before {
    border-left: 8px solid #fff;
  }

  .carousel .control-prev.control-arrow::before {
    border-right: 8px solid #fff;
  }

  .carousel .thumb {
    border: 2px solid #ddd;
    &:hover {
      border: 2px solid #fff;
    }
  }

  .carousel .carousel-status {
    color: #fff;
    font-size: 12px;
  }
`;

const CarouselContent = styled.div`
  position: relative;
`;

const CarouselImage = styled.img`
  border-radius: 2%;
  width: 100%;
  height: auto;
  max-width: 1000px;
  max-height: 600px;
  margin-top: 10px;
  background-size: cover;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1200px) {
    max-width: 800px;
    max-height: 480px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    max-height: 360px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 200px; 
  }
`;
