import React, { Component } from 'react';
import { MDBContainer,MDBCol,MDBRow, MDBModal, MDBModalHeader, MDBIcon, MDBView, MDBMask, MDBModalBody } from 'mdbreact';

class LatestContentPage extends Component{

    constructor(props){

        super(props)   
        this.state = {
                    modal14 : false,
                    showModal:false,
                    activatedModal : 0,
                    imageHeader : ["https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg", "https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg", "https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"],
                    heading : ["New Content 1", "New Content 2", "New Content 3"],
                    summaryOfContent : ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"+
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
                    "enim ad minim veniam, quis nostrud exercitation ullamco laboris....",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"+
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
                    "enim ad minim veniam, quis nostrud exercitation ullamco laboris....",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"+
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
                    "enim ad minim veniam, quis nostrud exercitation ullamco laboris...."],
                    fullContent : ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"+
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
                    "enim ad minim veniam, quis nostrud exercitation ullamco laboris"+
                    "nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit"+
                    "amet, consectetur adipisicing elit, sed do eiusmod tempor"+
                    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim"+
                    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"+
                    "ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur"+
                    "adipisicing elit, sed do eiusmod tempor incididunt ut labore et"+
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"+
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
                    "consequat. Lorem ipsum dolor sit amet, consectetur adipisicing"+
                    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna"+
                    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"+
                    "laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor"+
                    "sit amet, consectetur adipisicing elit, sed do eiusmod tempor"+
                    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim"+
                    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"+
                    "ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur"+
                    "adipisicing elit, sed do eiusmod tempor incididunt ut labore et"+
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"+
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
                    "consequat. Lorem ipsum dolor sit amet, consectetur adipisicing"+
                    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna"+
                    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"+
                    "laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor"+
                    "sit amet, consectetur adipisicing elit, sed do eiusmod tempor"+
                    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim"+
                    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"+
                    "ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur"+
                    "adipisicing elit, sed do eiusmod tempor incididunt ut labore et"+
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"+
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
                    "consequat. Lorem ipsum dolor sit amet, consectetur adipisicing"+
                    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna"+
                    "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"+
                    "laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor"+
                   " sit amet, consectetur adipisicing elit, sed do eiusmod tempor"+
                    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim"+
                    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"+
                    "ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur"+
                    "adipisicing elit, sed do eiusmod tempor incididunt ut labore et"+
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"+
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
                    "consequat.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"+
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
                    "enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"+
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
                    "enim ad minim veniam, quis nostrud exercitation ullamco laboris"]
            }
        console.log(""+this.props.activated)

        this.toggle();
    }
    
    toggle = (index) =>{

        console.log(this.state.showModal);
        this.setState({
            showModal: !this.state.showModal,
            activatedModal : index
        });

    }

    showCards(){

        const cards = []; 

        for(const [index,value ] of this.state.heading.entries()){
        cards.push(
            <MDBCol className = "col-md-4" style = {{marginTop : "5%", marginRight:'-2%'}}>
            <div className = "card card-cascade wider" >

                {/* Card Image */}
                <div className = "view view-cascade overlay">
                    <img  class="card-img-top" src={this.state.imageHeader[index]} alt="Card image cap"/>
                    <a href="#!">
                    <div class="mask rgba-white-slight"/>
                    </a>
                </div>

                {/*  Card content */}
                <div class="card-body card-body-cascade text-center pb-0">
                    <h5 class="blue-text pb-2"><strong>{value}</strong></h5>
                    <p class="card-text">{this.state.summaryOfContent[index]} </p>
                    <a href="#!" class="orange-text d-flex flex-row-reverse p-2">
                    <h8 class="waves-effect waves-light" onClick = {() => this.toggle(index)} >Read more<i class="fas fa-angle-double-right ml-2"></i></h8>
                    </a>
                    <div class="card-footer text-muted text-center mt-4">
                    2 days ago
                    </div>
                </div>
            </div>
            </MDBCol>
        );
        }

        return cards;
    }

    showPopUp(id){
        {
        const showSelectedPopUp = [];
        showSelectedPopUp.push(
            <MDBContainer>
            <MDBModal isOpen={this.state.showModal} centered size="lg">
                        <MDBModalHeader>
                            <MDBView>
                                <p className = "black-text" style = {{marginLeft : "95%"}}><MDBIcon far icon="times-circle" onClick = {() => this.toggle(0)}/> </p>
                                <hr style = {{marginTop : "-2%"}}></hr>
                                <img style = {{width : "40%", marginLeft: '28%'}} src={this.state.imageHeader[id]} alt="Card image cap"/>
                            </MDBView>
                        </MDBModalHeader>

                        <MDBModalBody>
                            <p>
                                {this.state.fullContent[id]}
                            </p>

                        </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
        )

        return showSelectedPopUp;

        }
    }

    canShow(){

        return this.state.showModal;
    }

    render(){

        return(
            <div>
                <MDBRow>
                    {this.showCards()}
                </MDBRow>

                {this.showPopUp(this.state.activatedModal)}
            </div>
        )
    }
}

export default LatestContentPage;