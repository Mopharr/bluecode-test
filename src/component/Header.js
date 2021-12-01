import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import '../style/header.css'

const Header = () => {
    return (
        <div className='header'>
          <div className='heading'>
            <h4>World</h4>
            <span><BiChevronDown /></span>
          </div>
          <div className='heading'>
            <h4>Following</h4>
            <span><BiChevronDown /></span>
          </div>
          <div className='heading'>
            <h4>Popular</h4>
            <span><BiChevronDown /></span>
          </div>
          <div className='heading'>
            <h4>First</h4>
            <span><BiChevronDown /></span>
          </div>
          <div className='heading'>
            <h4>Gender</h4>
            <span><BiChevronDown /></span>
          </div>
          <div className='heading'>
            <h4>Location</h4>
            <span><BiChevronDown /></span>
          </div>
          <div className='heading'>
            <h4>Profession</h4>
            <span><BiChevronDown /></span>
          </div>
        </div>
    )
}

export default Header
