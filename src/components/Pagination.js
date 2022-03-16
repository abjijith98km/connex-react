import React,{useState} from 'react'

const Pagination = (props) => {
 const [firstList, setfirstList] = useState(false)
 const [lastList, setlastList] = useState(false)
//  if(props.currentPage == 1){
//   setfirstList(true)
//   setlastList(false)
//  }else if(props.currentPage == pagenumbers.length){
//   setfirstList(false)
//   setlastList(true)
//  }
  const pagenumbers = []
  for(var i=1;i <= Math.ceil(props.total / props.itemperpage);i++){
    // console.log(i);
    pagenumbers.push(i);
  }
  {
    // console.log(props.total );
    console.log( props.itemperpage);
  }
  return (
    <>
    <div className="pagination-wrap justify-content-start">
    <span className="">
      <a href="#" onClick={()=>props.paginate(1)}>First</a>
    </span>
    <ul className="a-pagination">
      <li>
        <a href="#" className="prev-toggle" onClick={()=>props.paginate(props.currentPage - 1)}>
          <img src="uploads/products/left-ar.svg" alt=""/>
        </a>
      </li>
      {/* {
        pagenumbers.map(num=>(
          <li className="a-selected ">
          <a href="#" aria-current="page" onClick={()=>props.paginate(num)}>{num}</a>
        </li>
  ))
      } */}

      <li className="a-selected active">
        <a href="#" aria-current="page" onClick={()=>props.paginate()}>{props.currentPage}</a>
      </li>
      <li className="a-selected">
        <a href="#" onClick={props.currentPage<pagenumbers.length?()=>{props.paginate(props.currentPage + 1)}:''}>{props.currentPage<pagenumbers.length? props.currentPage + 1: '' }</a>
      </li>
      <li className="a-disabled" aria-disabled="true">...</li>
      {/* <li className="a-selected">
        <a href="#">...</a>
      </li> */}
      <li className="a-selected">
        <a href="#">{pagenumbers.length}</a>
      </li>
      <li>
        <a href="#" className="next-toggle" onClick={()=>props.paginate(props.currentPage + 1)}>
          <img src="uploads/products/right-ar.svg" alt=""/>
        </a>
      </li>
    </ul>
    <span className="">
      <a href="#" onClick={()=>props.paginate(pagenumbers.length)}>Last</a>
    </span>
  </div>
  {/* <ul>
   {
     pagenumbers.map(num =>(
        <li key={num}><a href='#' onClick={()=>props.paginate(num)}>{num}</a></li>
     ))
   }
  </ul> */}
    </>
  )
}

export default Pagination;