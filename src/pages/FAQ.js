import React,{useEffect , useState} from 'react'


const FAQ = () => {
  const [faaqData, setfaaqData] = useState()
  const [faqs, setfaqs] = useState()

  useEffect(() => {
    fetch(`https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=faq`)
      .then(response => response.json())
      .then(json => {setfaaqData(json[0]?.acf) ;})  

    return () => {
      // second
    }
  }, [faqs])
  const searchHandler = (e) =>{
     setfaqs(  faaqData?.faq.filter(faq =>faq.question.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <>
    
    <section className="cnt-banner faq-banner">
    <div className="container">
        <div className="banner-cnt">
            <picture>
                <img src={faaqData?.banner_image} alt="faq banner"/>
              </picture>
            <div className="banner-cnt-txt">
                <h3>{faaqData?.banner_title}</h3>
                <p>{faaqData?.banner_sub_title}</p>
            </div>
        </div>
       
    </div>
</section>
<section className="faq-q">
    <div className="container">
        <div className="faq-inner">
            <div className="search-box">
                <span className="search-icon">
                    <img src="uploads/faq/Shape.svg" alt="search icon"/>
                </span>
                <input type="text" className="faq-serach-field" placeholder="Describe your issue" onKeyDown={(e)=> searchHandler(e)} onKeyUp={(e)=> searchHandler(e)}/>
            </div>
            <div className="faq-q-collapse">

              {faqs ? 
              (  faqs?.map((faq,index)=>{
                  return(
                      <div className="faq-q-collapse-box" key={index}>
                          <input id={`collapsible${index+1}`} className="toggle" type="checkbox" />
                          <label htmlFor={`collapsible${index+1}`} className="lbl-toggle">{faq.question}</label>
                          <div className="collapse-box">
                              <div className="collapse-box-open" dangerouslySetInnerHTML={{__html:faq.answer}}>
                              </div>
                          </div>
                      </div>
                  )
                }))
                :
                (
                  faaqData?.faq.map((faq,index)=>{
                    return(
                        <div className="faq-q-collapse-box" key={index}>
                            <input id={`collapsible${index+1}`} className="toggle" type="checkbox" />
                            <label htmlFor={`collapsible${index+1}`} className="lbl-toggle">{faq.question}</label>
                            <div className="collapse-box">
                                <div className="collapse-box-open" dangerouslySetInnerHTML={{__html:faq.answer}}>
                                </div>
                            </div>
                        </div>
                    )
                  })
                )
              }
            </div>
        </div>
    </div>
</section></>
  )
}

export default FAQ;