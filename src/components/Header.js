import React from 'react'
import logo from './KL_University_logo.svg';
const user={
    logo: logo
}
const Header = () => {
  return (
    <div>
      <div class="red">
    <header>
      <div class="left-section">
      <img src={user.logo}/>
      </div>
      <div class="center-section">
        <h1>Student Portal <span class="erp">- ERP</span></h1>
      </div>
      <div class="right-section">
        <span>2300032536</span>
        <button>Logout</button>
      </div>
    </header>
    </div>
</div>
  )
}

export default Header
