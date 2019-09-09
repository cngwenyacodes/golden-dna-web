import React, { Component } from 'react'
import { Redirect,  withRouter } from 'react-router-dom';
import './landing-page.css'
import golden_dna_img from '../img/CroppedLogo2.png'
import studios_logo_img from '../img/CroppedLogo1.png'

class Landingpage extends Component{
    
    render(){return(

        <div className="row animated heartBeat">
            
            <div className="col-sm">
                <div className="leftDiv zoom" >
                    <img src={golden_dna_img} className="img" alt="logo" onClick ={() => this.gotToGoldenPage()} />
                    <h3 className="label "> OUR CREATIVE HOUSE </h3>
                </div>
            </div>
            
            <div className="col-sm">
                <div className="rightDiv zoom">
                    <img src={studios_logo_img} className="img img2" alt="logo" />
                    <h3 className="label label2 "> OUR MEDIA HOUSE </h3>
                </div>
            </div>

        </div>

    );
}


gotToGoldenPage(){

    console.log("HELLO");
    return (
       this.props.history.push('/golden-dna-home')
    );

}

}

export default Landingpage;