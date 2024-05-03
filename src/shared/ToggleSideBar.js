import React, { useState } from 'react'
import UserSiderBAr from './UserSiderBAr';

const ToggleSideBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar=()=>{
        setSidebar(!sidebar);
    }
  return (
    <div>
    <div className="d-block d-lg-none customiconbar">
    {sidebar
    ?<div className='customiconbar' onClick={handleSidebar}>
    <i class="fa-solid fa-xmark" ></i>
    </div>
    :   <div className='customiconbar' onClick={handleSidebar}>
    <i class="fa-solid fa-bars" ></i>
    </div>
} {
    sidebar && <div style={{position:"absolute",width:"20rem",zIndex:"999"}}>
        <UserSiderBAr/>
    </div>
}
    </div>
    </div>
  )
}

export default ToggleSideBar
