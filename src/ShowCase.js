import React from 'react'
import Forms from './Forms'
import Alerts from './Alerts'
import Collapses from './Collapses'
import Cards from './Cards'
import Carousels from './Carousels'
import Tables from './Tables'
import Paginations from './Paginations'
import Breadcrumbs from './Breadcrumbs'
import Modals from './Modals'
import Badges from './Badges'

const ShowCase = () => {
  return (
    <>
        <h1>1. Card Component (Ant Design)</h1>
        <Cards/>
        <hr/>
        <h1>2. Carousel Component (Ant Design)</h1>
        <Carousels/>
        <hr/>
        <h1>3. Table Component (Ant Design)</h1>
        <Tables/>
        <hr/>
        <h1>4. Pagination Component (Ant Design)</h1>
        <Paginations/>
        <hr/>
        <h1>5. Breadcrumb Component (Ant Design)</h1>
        <Breadcrumbs/>
        <hr/>
        <h1>6. Modal Component (Ant Design)</h1>
        <Modals/>
        <hr/>
        <h1>7. Badge Component (Ant Design)</h1>
        <Badges/>
        <hr/>
        <h1>8. Form Component (Ant Design)</h1>
        <Forms/>
        <hr/>
        <h1>9. Alert Component (Ant Design)</h1>
        <Alerts/>
        <hr/>
        <h1>10. Collapse Component (Ant Design)</h1>
        <Collapses/>
    </>
  )
}

export default ShowCase