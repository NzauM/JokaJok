import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTachometerAlt, faAddressBook, faClone, faCalendarAlt, faChartBar, faCopy } from "@fortawesome/free-solid-svg-icons";


function Navbar({onSearch}) {
    function getSearchTerm(event){
        event.preventDefault()
        console.log(event.target.searchWord.value)
        onSearch(event.target.searchWord.value)
    }
    return (
        <>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Saved Jokes</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                <form onSubmit={getSearchTerm} className="form-inline my-2 my-lg-0">
                    <input name="searchWord"  className="form-control mr-sm-2" id="searchTerm" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav> */}
         <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faAddressBook} />Address Book</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faClone} />Components</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faCalendarAlt} />Calendar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faChartBar} />Charts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);"><FontAwesomeIcon icon={faCopy} />Documents</a>
          </li>
        </ul>
      </div>
    </nav>
        </>
        
    )
}

export default Navbar;