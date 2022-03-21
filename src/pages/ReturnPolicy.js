import React,{useState , useEffect} from 'react'
import TermsPrivacyReturn from '../components/TermsPrivacyReturn'

const ReturnPolicy = () => {
  const [returnData, setreturnData] = useState()
  useEffect(() => {
    fetch(`https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=return-and-refund-policy`)
      .then(response => response.json())
      .then(json => {setreturnData(json[0]?.acf) ;})  

    return () => {
      // second
    }
  }, [])
  return (
    <TermsPrivacyReturn mainTitle={returnData?.page_title} bodyCopy={returnData?.return_refund}/>

  )
}

export default ReturnPolicy;