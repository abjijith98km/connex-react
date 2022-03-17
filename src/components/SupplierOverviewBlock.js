import React from 'react'

const SupplierOverviewBlock = ({mainTitle,mainPdts,delivery,typeContent,certification,payment,otherInfo}) => {
  return (
    <section className="pixel_pdt_overview">
    <div className="container">
      <div className="pixel_pdt_overview-wrap">
        <div className="row">
          <div className="col-md-8">
            <div className="pdt_overview_details">
              <div className="details_contents">
                <div className="overview_wrap">
                  <h6>{mainTitle}</h6>
                  <p>Al Ain Farms Development Co Ltd (Dubai) is a branch of a Saudi Based Company established in the year 1999. It is strategically located about 50 kms south of Dubai on the main DUBAI  HATTA highway. Cras nulla diam, mattis eu massa nec, sollicitudin tempor libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className="pdt_info">
                  {
                    mainPdts &&
                  <aside>
                    <h6>{mainPdts?.title}</h6>
                    <p>{mainPdts?.products}</p>
                  </aside>
                  }
                  {
                    delivery &&
                  <aside>
                    <h6>{delivery?.title}</h6>
                    <span>{delivery?.delivery_address}</span>
                    <p>{delivery?.delivery_details}</p>
                  </aside>
                  }
                  {
                    mainPdts?.cta_link &&
                  <a href={mainPdts?.cta_link.url} target={mainPdts?.cta_link.target} type="submit" className="cta-btn">{mainPdts?.cta_link.title}</a>
                  }
                </div>
                {
                  typeContent&&
                <div className="pdt_specialities">
                  <h6>{typeContent?.title}</h6>
                  <p>{typeContent?.content}</p>
                </div>
                }
              </div>
              <div className="pdt_certifications">
                {
                  certification &&
                <div className="pdt_certification_labels">
                  <h5>{certification?.title}</h5>
                  <div className="pdt_certification_label-images">
                        {
                          certification?.certification.map(certificate =>{
                            return ( 
                            <div className="label_img">
                            <img src={certificate.icon} alt="Certification"/>
                          </div>
                          )
                          })
                        }
                  </div>
                </div>
                }
                {
                  payment &&
                <div className="pdt_certification_labels">
                  <h5>{payment?.title}</h5>
                  <div className="payment_methods_images">
                    {
                      payment.payment_methods?.map(method =>{
                        return(
                          <div className="payment_method">
                          <img src={method.payments} alt="payment method"/>
                        </div>
                        )
                      })
                    }
                  </div>
                </div>
                }
                {
                  otherInfo&&
                  otherInfo?.map(info =>{
                    return(
                        <div className="website_links">
                          <h6>{info.heading}</h6>
                          <p>{info.content}</p>
                        </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-md-4">
         <SupplierCard/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

const SupplierCard = ()=>{
  return(
    <div className="supplier-item">
    <div className="supplier-name">
      <img src="./uploads/press/f1.png" alt=""/>
      <div className="supplier-name-wrap">
        <h4>Al Ain Group</h4>
        <div className="verified-supplier">
          <img src="./uploads/press/check.png" alt="verified"/>Verified Supplier
        </div>
        <ul>
          <li className="star full">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star full">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star full">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star half">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li className="star">
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </div>
    <div className="supplier-detail">
      <div className="supplier-spec">
        <h5>Seller Based in:</h5>
        <span>
          <img src="./uploads/press/uae.png" alt=""/> United Arab Emirates
        </span>
        <button className="view-profile">View profile</button>
      </div>
    </div>
    <button type="submit" className="cta-btn">Message supplier</button>
  </div>
  )
}
export default SupplierOverviewBlock