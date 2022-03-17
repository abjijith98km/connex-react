import React from 'react'

const PixelOfferbanner = ({offers}) => {
  return (
    <section className="pixel_banner_split_block">
    <div className="container">
      <div className="pixel_banner_split_block_wrap">
        <div className="row">
          {
            offers?.map(offer =>{
              return(
                <div className="col-md-6"  key={offer.title}>
                <div className="pixel_banner_split-item">
                  <div className="pixel_banner_split-img">
                    <img src={offer.background_image} alt=""/>
                  </div>
                  <div className="pixel_banner_split-cnt">
                    <h5>{offer.title}</h5>
                    {
                      offer.cta_link&&
                    <a href={offer.cta_link.url} target={offer.cta_link.target} className="cta-btn">{offer.cta_link.title}</a>
                    }
                  </div>
                </div>
              </div>
              )
            })
          }
          {/* <div className="col-md-6">
            <div className="pixel_banner_split-item">
              <div className="pixel_banner_split-img">
                <img src="./uploads/press/fruits.jpg" alt=""/>
              </div>
              <div className="pixel_banner_split-cnt">
                <h5>Fresh Fruits & Vegetables</h5>
                <button className="cta-btn">Know more</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pixel_banner_split-item">
              <div className="pixel_banner_split-img">
                <img src="./uploads/press/lab.jpg" alt=""/>
              </div>
              <div className="pixel_banner_split-cnt">
                <h5>Modern Technology</h5>
                <button className="cta-btn">Know more</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default PixelOfferbanner;