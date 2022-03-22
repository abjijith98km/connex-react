import React from 'react'

const AboutDescriptionBlock = ({primaryTitle,primaryDescription,primaryRow ,otherbenefits, otherDetails}) => {
  return (
    <>
    <section className="about-safqat">
  <div className="container">
    <div className="about-safqat-inner">
      {
      primaryTitle &&
      <div className="safqat-inner-section">
        <h3>{primaryTitle}</h3>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div dangerouslySetInnerHTML={{__html:primaryDescription}}>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="about-list-box">
              {
                primaryRow?.map((item,index) =>{
                  return(
                    <div key={index}>
                        <span className="list-head">{item?.title} </span>
                        <div dangerouslySetInnerHTML={{__html:item?.description}}></div>
                    </div>
                  )
                })
              }
            </div>
              {
              otherDetails && <div className="careers-developments" dangerouslySetInnerHTML={{__html:otherDetails}}></div>
              }
            
          </div>
        </div>
      </div>
      }
      {
        otherbenefits?.map((row,index)=>{
          return(
              <div className="safqat-inner-section " key={index}>
                <h3>{row?.benefits_heading}</h3>
                <div className="banner-sub-image">
                  <picture>
                    <img src={row?.benefits_image} alt="about banner"/>
                  </picture>
                </div>
                <div className="row">
                      {
                        row?.benefits.map((benefit,index) =>{
                          return(
                              <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                                <div className="about-list-box why">
                                  <span className="list-head">{benefit?.heading}  </span>
                                <div dangerouslySetInnerHTML={{__html:benefit?.description}}></div>
                                  
                                </div>
                                
                              </div>
                          )
                        })
                      }
                </div>
              </div>

          )
        })
      }
    
    </div>
  </div>
</section>
    </>
  )
}

export default AboutDescriptionBlock;