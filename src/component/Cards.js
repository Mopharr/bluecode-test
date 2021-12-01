import React from "react";
import { MdPlace } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import "../style/card.css";

const Cards = () => {
  const totalCards = 10
  let cards = new Array(totalCards).fill(null)
  return (
    <div className="box_container">
      {cards.map(i => (
        <div className="box box2" key={i}>
        <img
          src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="caption">
          <div className="content">
            <span>William, 28</span>
            <span>
              <small><MdPlace /></small>
              <small>New york, USA</small>
            </span>
            <div className='icons'>
            <a className='red' href='#heart'><FaHeart /></a>
            <a className='blue' href='#heart'><FaHeart /></a>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Cards;
