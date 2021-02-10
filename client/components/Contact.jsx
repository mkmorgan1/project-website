import React from 'react';
import style from '../design/styles.module.css';
import { clicked } from './functions.js';

const Contact = () => {
  return (
    <div className={style.contact}>
      <br/>
      <small>For further inquiries, please contact:</small>
      <small
        className={style.email}
        onClick={() => clicked ('email')}
      >
        <a className={style.email} href="mailto:mkmorgan1994@gmail.com?subject=Job Offer&body=Hey Matt, your website is spectacular! How do you feel about coming and working for us?">
          mkmorgan1994@gmail.com
        </a>
      </small>
      <br/>
    </div>
  );
}

export default Contact;