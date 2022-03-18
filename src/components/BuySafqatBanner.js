import React from 'react'

const BuySafqatBanner = ({registerData}) => {
  return (
    <section className="pixel-buy-safqat">
    <div className="container">
        <div className="buy-safqat-in">
            <div className="buy-safqat-txts">
                <h4>{registerData?.title}</h4>
            <p>{registerData?.description}</p>
            <a className="cta-btn" href={registerData?.cta_link.url} target={registerData?.cta_link.target}>{registerData?.cta_link.title}</a>
            </div>
            
            <img src={registerData?.background_image} alt="buy banner bg"/>
        </div>
    </div>
</section>
  )
}

export default BuySafqatBanner