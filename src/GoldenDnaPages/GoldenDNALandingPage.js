import React, { Component } from 'react'
import './main.css'
import golden_dna_img from '../img/CroppedLogo2.png'
import backgoundhandsimg from '../img/hands2.jpeg';
import backgoundhandsimg1 from '../img/GoldenDnaBackGround.JPG'
import { MDBIcon } from 'mdbreact';

class GoldenDNALandingPage extends Component{

    constructor(props) {

        super(props);
        this.state = {links: ["About", "Services", "Sub-Divisions", "Contact Us"],
                      isActive:[false, false, false, false],  
                    linksLength:4}
    }

    createNavPanel(){

        const linksList = [];
    
        for(const [index,value] of this.state.links.entries()){
    
            linksList.push(                        
            <li key={index} className="nav-item ">

                {console.log(this.state.isActive[index])}
             <a className={"nav-link js-scroll-trigger " + (this.state.isActive[index]?"active":"")} href={"#"+value} onClick = {() => this.changeColor(index)}>{value}</a>
            </li>
            );
        }
    
        return linksList;
    }

    changeColor(index){
        
        this.resetLinks();

        this.state.isActive[index] = true;
        
        // console.log(this.state.isActive[index]);
        this.setState(this.state);
    }

    resetLinks(){

        for(const [r,value] of this.state.isActive.entries()){
            
            this.state.isActive[r] = false;
        }

    }

    render(){

        return(

            //NAVIGATION-BAR
            <div  id="page-top" data-spy="scroll" data-target=".navbar" data-offset="50">
                
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav"  >
                    <div className="container ">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={() => this.resetLinks()}><img className="Logo" src ={golden_dna_img}/></a>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            {this.createNavPanel()}
                        </ul>
                    </div>
                    </div>
                </nav>

                <div className="animated slideInLeft" id="bgImg">
                    <row className="topPageSlidingPane">
                        {/* <img src={backgoundhandsimg} className="img-fluid background-img" alt="" /> */}
                        {/* <img src={backgoundhandsimg1} className="img-fluid background-img" alt="" /> */}
                    </row>
                </div>


                <div className={"headingsDiv "+this.state.isActive[0]?"animated slideInUp":""} id = "About">

                    <h2 className="heading text-uppercase" style={{fontSize:25, marginTop:5, fontWeight:'bold', color:'#fed136'}}> <u> Our golden story </u></h2>

                    <p className="ourGoldenStory"> Lorem ipsum dolor sit amet, amet arcu, odio quis, sollicitudin tincidunt dolor sodales sociis sed. Libero sodales dignissim. 
                        Nisl justo turpis ligula ultrices ultrices etiam. Tempus nonummy amet diam dui in nunc, pretium morbi laoreet, 
                        rhoncus imperdiet sed pellentesque nemo. Vitae morbi porttitor, arcu augue felis risus ac, molestie luctus diam aptent volutpat 
                        vivamus nulla, nunc sociosqu ac, lectus nam aenean lectus. Lorem orci lectus ridiculus eu tincidunt, potenti nonummy et nam mi 
                        quisque luctus. Sodales arcu eu nunc sapien leo tellus. Sed maecenas eget sed nulla, curabitur elementum erat dolor ut inceptos, 
                        dui congue, mauris id sit, sollicitudin dui et non velit porttitor fringilla. Vestibulum sed eu dictum, morbi auctor, vitae pede 
                        phasellus aliquam. Torquent elit, iaculis feugiat molestie cras lorem voluptatem, tellus rhoncus. Ac et, orci nascetur mi id nulla 
                        tus felis, placerat mauris rutrum maecenas, urna ut pellentesque donec. Tellus eleifend pellentesque, gravida sed platea nulla ut integer,
                         quia mollit sapien malesuada erat, quidem massa quisque ut tincidunt, pulvinar fusce non est.</p>
                </div>

                <div className="headingsDiv animated slideInUp" id = "Services">

                    <h2 className="heading text-uppercase animated slideInUp" style={{fontSize:25, marginTop:5, fontWeight:'bold', color:'#fed136'}}> <u> SERVICES </u></h2>
                </div>

                <div className="row" style={{height:"50%"}}>

                    <div className="col-sm-4"  style={{marginTop:5, marginLeft:"16%"}}>
                        <MDBIcon icon="edit" size="3x" className="amber-text pr-3" />
                        <h4 className="headingAfterLogo"> Content Marketing</h4>
                        <p> Suspendisse vulputate rutrum et vivamus gravida et. Wisi gravida egestas. Dolor eget tincidunt sed pharetra, in auctor ut integer nulla faucibus class, 
                            vel justo amet massa odio. Magna id bibendum habitasse aliquam. Morbi consectetuer pellentesque,
                            amet aut donec ex nunc duis eu</p>
                    </div>

                    <div className="col-sm-4"  style={{marginTop:5,}}>
                        <MDBIcon icon="users" size="3x" className="amber-text pr-3" />
                        <h4 className="headingAfterLogo"> Brand Planning</h4>
                        <p> Suspendisse vulputate rutrum et vivamus gravida et. Wisi gravida egestas. Dolor eget tincidunt sed pharetra, in auctor ut integer nulla faucibus class, 
                            vel justo amet massa odio. Magna id bibendum habitasse aliquam. Morbi consectetuer pellentesque,
                            amet aut donec ex nunc duis eu</p>
                    </div>


                </div>

                <div className="row" style={{height:"50%", marginTop:20}}>

                        <div className="col-sm-4"  style={{marginLeft:"16%",}}>
                            <MDBIcon icon="chart-bar" size="3x" className="amber-text pr-3" />
                            <h4 className="headingAfterLogo"> Content Marketing</h4>
                            <p> Suspendisse vulputate rutrum et vivamus gravida et. Wisi gravida egestas. Dolor eget tincidunt sed pharetra, in auctor ut integer nulla faucibus class, 
                            vel justo amet massa odio. Magna id bibendum habitasse aliquam. Morbi consectetuer pellentesque,
                            amet aut donec ex nunc duis eu</p>
                        </div>

                        <div className="col-sm-4"  style={{marginTop:5,}}>
                            <MDBIcon icon="laptop" size="3x" className="amber-text pr-3" />
                            <h4 className="headingAfterLogo"> PR and Marketing</h4>
                            <p> Suspendisse vulputate rutrum et vivamus gravida et. Wisi gravida egestas. Dolor eget tincidunt sed pharetra, in auctor ut integer nulla faucibus class, 
                            vel justo amet massa odio. Magna id bibendum habitasse aliquam. Morbi consectetuer pellentesque,
                            amet aut donec ex nunc duis eu</p>
                        </div>

                </div>
</div>


        );
    }
}

export default GoldenDNALandingPage;
