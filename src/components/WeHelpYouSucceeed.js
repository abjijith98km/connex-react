import React from 'react'

const WeHelpYouSucceeed = ({mainTitle , features}) => {
  return (
    <section className="pixel_we_help_you_succeed">
  <div className="container">
    <h3>{mainTitle}</h3>
    <div className="our_services_card row">
      {
        features?.map((feature,index) =>{
          return(
            <div className="col-lg-4 col-md-6 col-12" key={index}>
            <div className="services_card_wrap">
              <div className="service_image">
                <img src={feature?.related_image} alt="image"/>
              </div>
              <h3>{feature?.title}</h3>
              <div dangerouslySetInnerHTML={{__html:feature?.description}}></div>
            </div>
          </div>
          )
        })
      }
    </div>
  </div>
</section>
  )
}

export default WeHelpYouSucceeed;