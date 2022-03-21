import React,{useState , useEffect} from 'react'
import TermsPrivacyReturn from '../components/TermsPrivacyReturn'


function PrivacyPolicy() {
  const [privacyData, setprivacyData] = useState()
  useEffect(() => {
    fetch(`https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=privacy-policy`)
      .then(response => response.json())
      .then(json => {setprivacyData(json[0]?.acf) ;})  

    return () => {
      // second
    }
  }, [])
  return (
    <TermsPrivacyReturn mainTitle={privacyData?.page_title} bodyCopy={privacyData?.privacy_policy}/>

  )
}

export default PrivacyPolicy;
