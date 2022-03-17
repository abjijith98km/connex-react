import React from 'react'

const DualImageOffer = ({offers}) => {
  return (
    <section className="Pixel_split_ad_block">
    <div className="container">
      <div className="Pixel_split_ad_block_wrap">
        <div className="row">
          {
            offers?.map(offer =>{
              return(
                    <div className="col-md-6">
                    <div className="split_ad_container">
                        <div className="ad_image_wrap">
                          <img src={offer.offer_image} alt=""/>
                        </div>
                        {/* <div className="ad_cnt">
                          <h4>3 Flavor in one box</h4>
                          <h5>AED 1999/-</h5>
                          <h6>100ml x 300 package</h6>
                          <span>BUY NOW!</span>
                        </div> */}
                      </div>
                    </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </section>
  )
}

export default DualImageOffer