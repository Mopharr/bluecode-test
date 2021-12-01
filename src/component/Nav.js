import React from 'react'
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import '../style/nav.css'

const Nav = () => {
    return (
      <div className="main">
        <div className="searchInput">
          <div>
            <BsSearch
              style={{ color: "rgb(202, 202, 202)", fontSize: "25px", marginLeft: '20px'}}
            />
            <input type="text" placeholder="Find Something" />
          </div>
          <button type="submit">Search</button>
        </div>
        <BsFillBellFill style={{ color: "rgb(94, 0, 94)", fontSize: "30px" }} />
        <div className="user">
          <img src="/image1.jpg" alt="" />
          <p>Quadri </p>
        </div>
      </div>
    );
}

export default Nav
