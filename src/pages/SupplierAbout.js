import React,{useState , useEffect} from 'react'
import BuyerFeatureBlock from '../components/BuyerFeatureBlock'
import BuySafqatBanner from '../components/BuySafqatBanner'
import DualImageOffer from '../components/DualImageOffer'
import PixelOfferbanner from '../components/PixelOfferbanner'
import SupplierOverviewBlock from '../components/SupplierOverviewBlock'
import { Banner } from './Press'

const SupplierAbout = () => {
  const [supplierAbout, setsupplierAbout] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/acf/v3/pages?slug[]=supplier-about')
    .then(response => response.json())
    .then(json => setsupplierAbout(json[0].acf))
  
    return () => {
      
    }
  }, [])
  return (
    <>
    <Banner bannerTitle={supplierAbout?.banner_title} bannerImage={supplierAbout?.banner_image} bannerSubtitle={supplierAbout?.banner_sub_title} />
    {
      console.log(supplierAbout)
    }
    <SupplierOverviewBlock mainTitle={supplierAbout?.overview.title} otherInfo={supplierAbout?.other_info} certification={supplierAbout?.certification} mainPdts={supplierAbout?.main_products} delivery={supplierAbout?.delivery} typeContent={supplierAbout?.type} payment={supplierAbout?.payment_methods}/>
 
    <PixelOfferbanner offers={supplierAbout?.categories_links}/>

    <DualImageOffer offers={supplierAbout?.offer}/>

    <BuySafqatBanner registerData={supplierAbout?.supplier_details}/>
    </>
  )
}

export default SupplierAbout;