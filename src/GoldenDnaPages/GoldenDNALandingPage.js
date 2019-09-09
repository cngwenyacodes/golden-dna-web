import React from 'react'
import './main.css'
import golden_dna_img from '../img/CroppedLogo2.png'
import backgoundhandsimg from '../img/hands2.jpeg';
import { MDBContainer } from 'mdbreact';

function GoldenDNALandingPage(){

    return(

        //NAVIGATION-BAR
        <div className="animated slideInLeft" id="page-top">
            
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav"  >
                <div className="container ">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img className="Logo" src ={golden_dna_img}/></a>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        {createNavPanel()}
                    </ul>
                </div>
                </div>
            </nav>

            <div >
                <row className="topPageSlidingPane">
                    <img src={backgoundhandsimg} className="img-fluid background-img" alt="" />
                </row>
            </div>

            <div className="headingsDiv animated slideInUp" id = "About">

                <h2 className="heading text-uppercase animated slideInUp"> Our golden story</h2>

            </div>
        </div>


    );
}

function createNavPanel(){

    const links = ["About", "Services", "Sub-Divisions", "Contact Us"];
    const linksList = [];

    for(const [index,value] of links.entries()){

        linksList.push(                        
        <li key={index} className="nav-item">
         <a className="nav-link js-scroll-trigger" href={"#"+value}>{value}</a>
        </li>
        );
    }

    return linksList;

}

export default GoldenDNALandingPage;
