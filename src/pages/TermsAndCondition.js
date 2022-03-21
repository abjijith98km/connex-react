import React,{useState , useEffect} from 'react'
import TermsPrivacyReturn from '../components/TermsPrivacyReturn'

const TermsAndCondition = () => {
  const [termsData, settermsData] = useState()
  useEffect(() => {
    fetch(`https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=user-terms-and-conditions`)
      .then(response => response.json())
      .then(json => {settermsData(json[0]?.acf) ;})  

    return () => {
      // second
    }
  }, [])
  return (
 <TermsPrivacyReturn mainTitle={termsData?.page_title} bodyCopy={termsData?.terms_condition}/>
  )
}

export default TermsAndCondition;