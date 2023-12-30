import React from 'react';
import banner from '../assets/black-friday.jpg';

const BannerImage = () => {
  return (
    <div>
      <img src={banner} class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" />
    </div>
  )
}

export default BannerImage;