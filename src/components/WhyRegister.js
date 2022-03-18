import React from 'react'

const WhyRegister = ({mainTitle,subTitle,rows}) => {
  return (
    <section className="pixel-register-with-us">
    <div className="container">
        {/* </span> */}
        <div className="register-us">
            <h3>{mainTitle}</h3>
            <span className="sub-main">{subTitle}</span>
            {
                rows?.map((row,index) =>{
                    return(
                        <div className="row" key={index}>

                            {
                                row?.steps_row.map((item,index) =>{
                                    return(
                                        <div className="register-step" key={index}>
                                            <div className="step-icon">
                                                <img src={item.icon} alt="register icon"/>
                                            </div>
                                            <div className="step-texts">
                                                <span className="step-title">{item.step_number}</span>
                                                <span className="step-main-title">{item.head}</span>
                                                <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                    </div>
                    )
                })
            }
        </div>
    </div>
</section>
  )
}

export default WhyRegister