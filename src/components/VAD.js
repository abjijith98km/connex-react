import React from 'react'

const VAD = ({title,list}) => {
  
    return (
      <section className="pixel-value-add">
      <div className="container">
          
          <div className="value-add-in">
              <h3>{title}</h3>
              {
                  list?.map(item =>{
                      return(
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 value-added-image">
                            <img src={item.related_image} alt="value add image"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 value-added-content">
                            <div className="value-add-texts">
                                <h6 >{item.heading}</h6>
                                    <div className="value-add-points" dangerouslySetInnerHTML={{__html:item.description}}>
                                    </div>
                            </div>
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

export default VAD