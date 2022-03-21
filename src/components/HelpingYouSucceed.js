import React from 'react'

const HelpingYouSucceed = ({title,subTitle,row}) => {
  return (
    <section className="success">
  <div className="container">
    <div className="success-box">
      <h2>{title}</h2>
      <span className="sub-head">{subTitle}</span>
      <div className="row">
        {
          row?.map((item,index) =>{
            return(
                <div className="col-xl-3 col-lg-3 col-md-3" key={index}>
                  <div className="success-inner">
                    <div className="icon">
                      <img src={item.icon} alt="matck lead icon"/>
                    </div>
                    <div className="succes-texts">
                      <span className="texts-head">{item.heading}</span>
                      <div dangerouslySetInnerHTML={{__html:item.description}}></div>
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

export default HelpingYouSucceed