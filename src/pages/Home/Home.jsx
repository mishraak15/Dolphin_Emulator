import React from 'react';
import "./Home.css";
import HomeTop from '../../components/HomeTop/HomeTop';
import HomeMid from '../../components/HomeMid/HomeMid';
import HomeBottom from '../../components/HomeBottom/HomeBottom';

export default function Home() {
  return (
    <div className='Home'>
      <HomeTop/>
      <HomeMid/>
      <HomeBottom/>
    </div>
  )
}
