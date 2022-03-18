import React ,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
const CategorySelector = (props) => {
  const [categorylist, setcategorylist] = useState()
  useEffect(() => {
    fetch(props.url)
    .then(response => response.json())
    .then(json => {setcategorylist(json) ;})  
    return () => {
      // second
    }
  }, [])
  return (
    <ul className="latest_post_listing">
      <h3>{props.title}</h3>
      {
        categorylist?.map(item =>{
          // console.log(item);
          return   <li className="category" key={item.id}><a href={`/blog-listing?category=${item.id}`} dangerouslySetInnerHTML={{__html:item.name}}></a></li>
          // console.log(item)
        })
      }
  </ul>
  )
}

export default CategorySelector;