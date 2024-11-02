import React from 'react'
import logo from './KL_University_logo.svg';

const user = {
    logo: logo
}

const head = () => {
  return (
    <div id="mainlayout_header" className="">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <div style={{float: 'left'}}>
                        <span>
                            <a href="https://www.kluniversity.in">
                                <img src={user.logo} style={{width: 'auto', height: '45px'}} alt="Logo"/>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="text-center hidden-xs hidden-md">
                        <h3 style={{color: '#a51c24', textAlign: 'center', fontSize: '25px !important', fontWeight: 600, marginTop: '8px'}}>
                            <span style={{color: '#a90000 !important'}}>Student Portal </span>
                            <span style={{color: '#337ab7 !important', fontStyle: 'italic !important'}}> -ERP</span>
                        </h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <span className="mainlayout_user" style={{float: 'right'}}>
                        <b style={{textTransform: 'capitalize', fontSize: '14px'}}>
                            <span id="loggedIn">2300033403</span>
                        </b>
                    </span>
                    <span className="mainlayout_user" style={{float: 'right'}}>
                        <img src={user.logo} alt="User Logo"/>
                    </span>
                </div>
                <div style={{clear: 'both'}}></div>
            </div>
        </div>
    </div>
  )
}

export default head;
