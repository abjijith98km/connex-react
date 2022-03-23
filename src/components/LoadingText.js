import React from 'react'

const LoadingText = () => {
  return (
    <div className='d-flex justif justify-content-center'>
    <h3 className='text-black text-center h5 mr-1'>Loading... </h3>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ background: 'rgb(241, 242, 243)', display: 'block', shapeRendering: 'auto'}} width="27px" height="27px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#1d0e0b" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
      </svg>
  </div>
  )
}

export default LoadingText;