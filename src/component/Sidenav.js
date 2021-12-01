import React from "react";
import { AiFillHome, AiFillMessage, AiOutlineLink } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { GiPodiumWinner, GiPartyPopper, GiRomanToga } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import "../style/sidenav.css";

const Sidenav = () => {
  return (
    <div className="side">
      <label>Logo</label>
      <div className="mainList">
        <ul>
          <li>
            <AiFillHome className="icon" /> Home
          </li>
          <li>
            <AiFillMessage className="icon" />
            Message
          </li>
          <p>Share</p>
          <li>
            <BsBarChartFill className="icon" />
            Ranking
          </li>
          <li>
            <GiPodiumWinner className="icon" /> Challenge
          </li>
          <li>
            <GiPartyPopper className="icon" />
            Party
          </li>
          <li>
            <AiOutlineLink className="icon" />
            Connect
          </li>
          <li>
            <GiRomanToga className="icon" />
            Parade
          </li>
          <li>
            <HiUserGroup className="icon" />
            Group
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
