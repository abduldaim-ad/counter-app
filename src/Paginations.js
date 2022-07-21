import { Pagination } from 'antd';
import React from 'react'

const Paginations = () => {
    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
      };      
  return (
    <>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        <br />
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
    </>
  )
}

export default Paginations