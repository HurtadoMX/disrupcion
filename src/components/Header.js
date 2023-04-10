import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Importa los estilos de slick-carousel
import "slick-carousel/slick/slick-theme.css";

export const Header = () => {
  const { selectMonth } = useContext(GlobalContext);

  const [selectedSlide, setSelectedSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => {
      setSelectedSlide(newIndex);
    },
  };

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const onSlideClick = (index) => {
    setSelectedSlide(index);
    selectMonth(index);
  };

  return (
    <div className="header-container">
      <div className="slider-container">
        <Slider {...settings}>
          {months.map((month, index) => (
            <h4
              key={index}
              className="slider-item"
              onClick={() => onSlideClick(index)}
            >
              {month}
            </h4>
          ))}
        </Slider>
      </div>
    </div>
  );
};
