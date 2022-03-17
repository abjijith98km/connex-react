import React,{useState} from 'react'

const Pagination = (props) => {


  return (
    <>
    {/* <div className="pagination-wrap justify-content-start">
    <span className="">
      <a href="#" onClick={()=>props.paginate(1)}>First</a>
    </span>
    <ul className="a-pagination">
      <li>
        <a href="#" className="prev-toggle" onClick={()=>props.paginate(props.currentPage - 1)}>
          <img src="uploads/products/left-ar.svg" alt=""/>
        </a>
      </li>
      <li className="a-selected active">
        <a href="#" aria-current="page" onClick={()=>props.paginate()}>{props.currentPage}</a>
      </li>
      <li className="a-selected">
        <a href="#" onClick={props.currentPage<pagenumbers.length?()=>{props.paginate(props.currentPage + 1)}:''}>{props.currentPage<pagenumbers.length? props.currentPage + 1: '' }</a>
      </li>
      <li className="a-disabled" aria-disabled="true">...</li>
     
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
  </div> */}
   <div className="pagination-wrap justify-content-start">
            <span className="">
              <a href="#">First</a>
            </span>
            <ul className="a-pagination">
              <li>
                <a href="#" className="prev-toggle">
                  <img src="uploads/products/left-ar.svg" alt=""/>
                </a>
              </li>
              <li className="a-selected active">
                <a href="#" aria-current="page">10</a>
              </li>
              <li className="a-selected">
                <a href="#">11</a>
              </li>
              <li className="a-disabled" aria-disabled="true">...</li>
              <li className="a-selected">
                <a href="#">25</a>
              </li>
              <li className="a-selected">
                <a href="#">26</a>
              </li>
              <li>
                <a href="#" className="next-toggle">
                  <img src="uploads/products/right-ar.svg" alt=""/>
                </a>
              </li>
            </ul>
            <span className="">
              <a href="#">Last</a>
            </span>
          </div>
    </>
  )
}

export default Pagination;