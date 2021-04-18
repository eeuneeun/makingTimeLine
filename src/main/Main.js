import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "../components/modules/CardItem";
import { Card } from 'semantic-ui-react'


function Main() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="main">
      <div className="inner">
        {/* 슬라이더 영역 */}
        <div className="slider">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
       
        {/* 카드 리스트 영역 */}
        <div className="card-list">
          <Card.Group>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Card.Group>
          <Card.Group>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Card.Group>
          <Card.Group>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Card.Group>
        </div>
      </div>
    </div>
  );
}

export default Main;
