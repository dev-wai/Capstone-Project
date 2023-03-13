import React from 'react';
import "./Header.css";
import headerimg from "./../../images/restauranfood.jpg";
import Button from '../Button/Button';

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header_container'>
                <div className='header_col_1'>
                    <h1 className='header_heading'>Little Lemons</h1>
                    <h3 className='header_subheading'>Chicago</h3>
                    <p className='header_para'>
                        We are a faimly owned
                        mediterrnean restaurant
                        focused on traditional
                        recipes served with modern
                        twist.
                    </p>
                    <div className='header_button'>
                        <Button title="Reserve a Table" link="/" />
                    </div>
                </div>
                <div className='header_col_2'>
                    <img
                        src={headerimg}
                        alt="Header image"
                        className='header_image'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
