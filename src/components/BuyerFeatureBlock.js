import React from 'react'

const BuyerFeatureBlock = ({services}) => {
  return (
    <section className="pixel-buyer-features">
    <div className="container">
        <div className="feature-section">
            <div className="row">
                {
                    services?.map((service,index) =>{
                        return(
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6" key={index}>
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <img src={service.icon} alt=" find what you need"/>
                                </div>
                                <div className="feature-cnt">
                                    <span className="feature-h6">
                                        {service.head} 
                                    </span>
                                    <div dangerouslySetInnerHTML={{__html:service.description}}>

                                    </div>
                                </div>
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

export default BuyerFeatureBlock