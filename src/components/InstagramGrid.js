import React, { useEffect, useState } from 'react'

const InstagramGrid = () => {
  const [instagramGrid, setinstagramGrid] = useState()
  useEffect(() => {
    fetch('https://safqat.pixelflames.net/wp-json/wp/instagram_feeds')
    .then(response => response.json())
    .then(json => {setinstagramGrid(json) ;})  

    return () => {
      // second
    }
  }, [])
  return (
    <ul className="latest_post_listing">
    <h3>Instagram</h3>
    <div className="row instagram">
    {        instagramGrid?.instagram_feeds.length>9?
            instagramGrid?.instagram_feeds.slice(1,10).map(feed =>{
              return(
                <a href={feed.permalink} target='_blank' className="col-4" key={feed.id}>
                  <img src={feed.media_url} alt="image"/>
                </a>
              )
            })
            :
            instagramGrid?.instagram_feeds.map(feed =>{
          return(
            <a href={feed.permalink} target='_blank' className="col-4" key={feed.id}>
              <img src={feed.media_url} alt="image"/>
            </a>
          )
        })
      }
    </div>
  </ul>
  )
}

export default InstagramGrid;