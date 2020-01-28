import React, {Component} from 'react';
import './main.css';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBNavItem, MDBNavLink, MDBMask, MDBCard,
        MDBContainer, MDBView, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBCardImage} from 'mdbreact';

import LatestContentPage from './LatestContentPage' 
        
class OverheadStudiosLandingPage extends Component{

    constructor(){

        super();

        this.state = {navLinksLabel:['Articles', 'Photography', 'Videos', 'Music', 'Fashion'],
                      numbNavLinks:5,
                      activeLink:0,
                      sliderIMageLinks:[
                        "https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg",
                        "https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg",
                        "https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                      ],
                      numImages:3,
                      showPopUpNumber:0
        }

        this.setActive = this.setActive.bind(this);
    }

    generateNavLinks(){
        
        const navLInkList = [];

        for(const [index, value] of this.state.navLinksLabel.entries()){

            if(index != this.state.activeLink){
                navLInkList.push(
                    <MDBNavItem>            
                        <MDBNavLink to={"#" + value} onClick = {() => this.setActive(index)}>{value}</MDBNavLink>
                    </MDBNavItem>
                );
            }else{
                navLInkList.push(
                    <MDBNavItem active>            
                        <MDBNavLink to={"#" + value} onClick = {() => this.setActive(index)}>{value}</MDBNavLink>
                    </MDBNavItem>
                );
            }
        }

        return navLInkList;

    }

    generateSlideShow(){

        const slides = [];

        for(const [index, value] of this.state.sliderIMageLinks.entries()){

            slides.push(
                <MDBCarouselItem itemId = {index+1}>

                    <MDBView>
                        <img className="d-block w-100" src={value} alt={index+1}/>
                    </MDBView>

                </MDBCarouselItem>
            )

        }

        return slides;
    }

    setActive(index){

        this.state.activeLink = index;
        this.setState(this.state);
    }

    showPopUpNumber(id){

        this.state.showPopUpNumber = id;

        this.setState(this.state);
    }

    render(){

        return(
            <div>
                <MDBNavbar color="warning-color" fixed = "top" dark expand="md" scrollling >

                    <MDBNavbarBrand className = "NavBrand">

                        <h6> OVERHEAD<br/>STUDIOS </h6>

                    </MDBNavbarBrand>

                    <MDBNavbarNav right style ={{marginRight : "24%"}}>
                      {this.generateNavLinks()}
                    </MDBNavbarNav>
                </MDBNavbar>

                <MDBContainer className="animated slideInUp" style={{marginTop:"8%"}}>

                    <MDBCarousel className="z-depth-1" activeItem={1} length={this.state.numImages} showControls={true} showIndicators = {true}>

                        <MDBCarouselInner>

                            {this.generateSlideShow()}
                            
                        </MDBCarouselInner>

                    </MDBCarousel>

                </MDBContainer>

                <MDBContainer style = {{marginTop : "5%"}}>
                    <MDBRow style = {{marginLeft : "1%",height : "1vh"}}>
                        <h5> <strong> <u> Latest Content </u> </strong> </h5>
                    </MDBRow>

                    {/* <MDBRow>
                        <MDBCol className = "col-md-4" style = {{marginTop : "5%", marginRight:'-2%'}}>
                            {/* <img className = "img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%2810%29.jpg" alt="" style = {{height : '35vh'}}/> }
                            <div className = "card card-cascade wider" >

                                {/* Card Image }
                                <div className = "view view-cascade overlay">
                                    <img  class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap"/>
                                    <a href="#!">
                                    <div class="mask rgba-white-slight"/>
                                    </a>
                                </div>

                                {/*  Card content }
                                <div class="card-body card-body-cascade text-center pb-0">
                                    <h4 class="card-title"><strong>Alison Belmont</strong></h4>
                                    <h5 class="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
                                    <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                                    <div class="card-footer text-muted text-center mt-4">
                                    2 days ago
                                    </div>
                                 </div>
                            </div>
                        </MDBCol>
                        <MDBCol className = "col-md-4" style = {{marginTop : "5%", marginRight:'-2%'}}>
                        <div className = "card card-cascade wider" >
                            {/* Card Image }
                            <div className = "view view-cascade overlay">
                                <img  class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap"/>
                                <a href="#!">
                                <div class="mask rgba-white-slight"/>
                                </a>
                            </div>

                            {/*  Card content }
                            <div class="card-body card-body-cascade text-center pb-0">
                                <h4 class="card-title"><strong>Alison Belmont</strong></h4>
                                <h5 class="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
                                <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                                <div class="card-footer text-muted text-center mt-4">
                                2 days ago
                                </div>
                            </div>
                        </div>
                        </MDBCol>
                        <MDBCol className = "col-md-4" style = {{marginTop : "5%", marginRight:'-2%'}}>
                        <div className = "card card-cascade wider" >

                            {/* Card Image }
                            <div className = "view view-cascade overlay">
                                <img  class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap"/>
                                <a href="#!">
                                <div class="mask rgba-white-slight"/>
                                </a>
                            </div>

                            {/*  Card content }
                            <div class="card-body card-body-cascade text-center pb-0">
                                <h4 class="card-title"><strong>Alison Belmont</strong></h4>
                                <h5 class="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
                                <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                                <a href="#!" class="orange-text d-flex flex-row-reverse p-2">
                                <h8 class="waves-effect waves-light" onClick = {() => this.showPopUpNumber(14)} >Read more<i class="fas fa-angle-double-right ml-2"></i></h8>
                                </a>
                                <div class="card-footer text-muted text-center mt-4">
                                2 days ago
                                </div>
                            </div>
                        </div>
                        </MDBCol>
                    </MDBRow> */}

                    <LatestContentPage activated = {this.state.showPopUpNumber}/>
                </MDBContainer>
                



            </div>
        );
    }
}

export default OverheadStudiosLandingPage;
