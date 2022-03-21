import React from 'react'

const TermsPrivacyReturn = ({mainTitle,bodyCopy}) => {
  return (
    <section className="terms-n-condition title">
    <div className="container ">
        <div className="terms-n-condition-wrap">
            <h2>{mainTitle}</h2>
            <div className="terms-n-condition-bodycopy">
              {
               bodyCopy?.map((data,index)=>{
                  return(
                    <div key={index}>
                    <b > {data?.title}</b>
                    <div dangerouslySetInnerHTML={{__html:data?.description}}></div>
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

export default TermsPrivacyReturn;
