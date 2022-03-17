import React from 'react'

const SafqatBenefits = ({featureImage,mainTitle , benefits , highlight }) => {
  return (
    <section className="pixel_reasons_to_sell ">
  <div className="container">
    <div className="pixel_reasons_to_sell_wrap">
      <div className="reasons_banner">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="reasons_featured_image_wrap">
              <img src={featureImage} alt="image"/>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="reasons_description">
              <h3>{mainTitle}</h3>
              <div className="row">
                {
                 benefits?.map(benefit =>{
                   return (
                    <div className="col-6">
                    <h5>{benefit.title}</h5>
                    <div dangerouslySetInnerHTML={{__html:benefit.description}}></div>
                  </div>
                   )
                 }) 
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pixel_safqat_tools">
        <h3>{highlight?.heading}</h3>
        <div dangerouslySetInnerHTML={{__html:highlight?.description}}></div>
      </div>
    </div>
  </div>
</section>
  )
}

export default SafqatBenefits