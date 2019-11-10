import React, { Component } from 'react';
import './main.css';
import imgAudioVisuals from '../img/Sub-Divisions/Audio-Visual-Services.jpeg';
import imgAudioVisualsDetails from '../img/Sub-Divisions/AudioVisualsDetails.png';
import imgClothingDesign from '../img/Sub-Divisions/clothing-design.jpeg';
import imgClothingDesignDetails from '../img/Sub-Divisions/clothing-design-details.png';
import imgDigitalMedia from '../img/Sub-Divisions/digital-media-strategy.jpeg';
import imgDigitalMediaDetails from '../img/Sub-Divisions/digital-media-strategy-details.png';
import imgPhotography from '../img/Sub-Divisions/photography.jpeg';
import imgPhotographyDetails from '../img/Sub-Divisions/photography-details.png';
import imgVideography from '../img/Sub-Divisions/videography.jpeg';
import imgVideographyDetails from '../img/Sub-Divisions/videography-details.png';
class SubDivisions extends Component{

    constructor(props) {

        super(props);
        this.state = {backgrounds: [imgAudioVisuals, imgClothingDesign,imgDigitalMedia, imgPhotography, imgVideography],
                      backgroundsDetails:[imgAudioVisualsDetails, imgClothingDesignDetails, imgDigitalMediaDetails, imgPhotographyDetails, imgVideographyDetails],
                      hovered:[false,false,false,false,false],  
                      linksLength:5}
    }

    createSubDivisions(){

        const subDivisionList = [];
    
        for(const [index,value] of this.state.backgrounds.entries()){
    
            subDivisionList.push(                        
                <div class={"col-md-4 col-sm-6 Sub-Divisions-item" + ((index == 3) ? " Sub-Division-Left" : "")}>
                    <a class="Sub-Divisions-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="Sub-Divisions-hover">
                            <img class="img-fluid" src={this.state.backgroundsDetails[index]} alt=""/>
                        </div>
                        <img class="img-fluid" src={this.state.backgrounds[index]} alt=""/>
                    </a>
                    {console.log(this.state.hovered[index])}
                    <p className={"contactusLink " + ((this.state.hovered[index])? "animated tada infinite":"")} onMouseEnter={()=>this.isHovered(index)} onMouseLeave={()=>this.resetIsHovered()} onClick={()=> this.onClickContactus()}> <i class="fas fa-comment-medical"></i> GET IN TOUCH</p>
                </div>
            );
        }
    
        return subDivisionList;
    }

    isHovered(index){

        this.state.hovered[index] = true;       
        // console.log(this.state.isActive[index]);
        this.setState(this.state);
    }

    resetIsHovered(){

        for(const [r,value] of this.state.hovered.entries()){
            
            this.state.hovered[r] = false;
        }
        this.setState(this.state);
    }

    onClickContactus(){

        window.location.href="#Contact Us";
    }

    render(){

        return(

            <div id="Sub-Divisions" style = {{marginTop : "3%"}}>
                <div class="container">
                <div class="row">
                {this.createSubDivisions()}
                </div>
                </div>
            </div>
        )
    }
}

export default SubDivisions;