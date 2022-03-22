import React,{useEffect , useState} from 'react'
import AboutDescriptionBlock from '../components/AboutDescriptionBlock';
import { Banner } from './Press';

const Careers = () => {
  const [careersData, setcareersData] = useState()

  useEffect(() => {
    fetch(`https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=careers`)
      .then(response => response.json())
      .then(json => {setcareersData(json[0]?.acf) ;})  

    return () => {
      // second
    }
  }, [])

  return (
    <>
    <Banner bannerTitle={careersData?.banner_title} bannerImage={careersData?.banner_image} />
    <AboutDescriptionBlock primaryTitle='Careers' primaryDescription={careersData?.career_about} otherDetails={careersData?.career_other_details} careeerBtn={careersData?.career_cta_button}/>
    </>
  )
}

export default Careers;