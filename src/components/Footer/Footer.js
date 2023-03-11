import React from 'react'
import './Footer.css'
import footer_logo from './../../images/Logo.svg'

const Footer = () => {
  return (
    <div className='footer__div'>
        <img
        src={footer_logo}
        alt='Footer Logo'
        className='footer__logo'
        />
        <ul className='footer__table'>
            <label className='footer__label'>Footer Navigation</label>
            <li>
                <a href='#/Header' className='footer__link'>Header</a>
            </li>
            <li>
                <a href='#/Main' className='footer__link'>Main</a>
            </li>
            <li>
                <a href='#/Footer' className='footer__link'>Footer</a>
            </li>
        </ul>
        <ul className="footer__table">
            <label className="footer__label">Contact</label>
            <li className="footer__address">Chicago</li>
            <li className="footer__address">+1 123 456 78 90</li>
            <li className="footer__address">company@gmail.com</li>
        </ul>
        <ul className="footer__table">
            <label className="footer__label">Social Media Links</label>
            <li>
            <a href="#/instagram" className="footer__link">Instagram</a>
            </li>
            <li>
            <a href="#/twitter" className="footer__link">Twitter</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer