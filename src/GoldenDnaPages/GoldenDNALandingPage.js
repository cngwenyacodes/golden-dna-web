import React, { Component } from 'react'
import './main.css'
import golden_dna_img from '../img/CroppedLogo2.png'
import backgoundhandsimg from '../img/hands2.jpeg';
import backgoundhandsimg1 from '../img/GoldenDnaBackGround.JPG'
import { MDBIcon } from 'mdbreact';
import ContactUs  from '../footer/footer'
import SubDivisions from './Sub-Divisions'


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
            <div>
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

                    <h2 className="heading text-uppercase" style={{fontSize:25, marginTop:'2%', fontWeight:'bold', color:'#fed136'}}> <u> Our golden story </u></h2>

                    <p className="ourGoldenStory"> 
                        Golden DNA is an indepedent creative house that positions itself as the hub of creative genius. The company focuses
                        on solving business problems through creative and critical thinking. It was founded by two creatives, Zazi Ntozini
                        and Caleb Kalonji whou sought out to create an in-house agency that can evolve to be the best at what it does.
                    </p>
                </div>

                <div className="headingsDiv animated slideInUp" id = "Services">

                    <h2 className="heading text-uppercase animated slideInUp" style={{fontSize:25, marginTop:5, fontWeight:'bold', color:'#fed136'}}> <u> SERVICES </u></h2>
                </div>

                <div className="row" style={{height:"50%"}}>

                    <div className="col-sm-4"  style={{marginTop:5, marginLeft:"16%"}}>
                        <MDBIcon icon="users" size="3x" className="amber-text pr-3" />
                        <h4 className="headingAfterLogo"> Social Media Marketing & Management</h4>
                        <p> 
                            It is an undeniable truth that social media has become one of the most powerful tools in marketing  
                            One of the most cost-effective, measurable means of enabling marketers to rapidly build brand awareness, 
                            drive and maintain a positive reputation, retain consumer loyalty and promote lead generation. 
                            Boasting a veritable tribe of social media whizz kids, we specialize in strategic social media campaigns 
                            work. Using real-time metrics and guided by delivering on your ROI, we can help you navigate the New World 
                            that is social media via: social media strategy development, consulting, advertising, community engagement 
                            and management. 
                        </p>
                    </div>

                    <div className="col-sm-4"  style={{marginTop:5,}}>
                        <MDBIcon icon="play" size="3x" className="amber-text pr-3" />
                        <h4 className="headingAfterLogo"> Digital Content & Video Compilation</h4>
                        <p> Content is King. And nowhere is this more important than in today’s continuously evolving marketing 
                            landscape. Driven to create stand-out content that truly engages with your audience, our innovative team 
                            of professionals are always on point, on brief and on budget. We specialise in digital content strategy, 
                            graphic design, and multi-language content and video production. Let us assist you to strategically plan, 
                            produce, and actively promote content that speaks both to your market and your bottom line. Enquire Now
                        </p>
                    </div>


                </div>

                <div className="row" style={{height:"50%", marginTop:20}}>

                        <div className="col-sm-4"  style={{marginLeft:"16%",}}>
                            <MDBIcon icon="laptop" size="3x" className="amber-text pr-3" />
                            <h4 className="headingAfterLogo"> Digital Campaigns and Strategies</h4>
                            <p> 
                                In a digital thriving industry we make sure to formulate stand out digital strategies and campaigns for 
                                our clients. Campaigns that not only get you noticed but additionally deliver tangible results. We develop 
                                Tailor-made strategies around your specific objectives, budget and vision, our winning team of digital prodigies 
                                are here to take your digital campaigns quite simply into the ether. Enquire Now
                            </p>
                        </div>

                        <div className="col-sm-4"  style={{marginTop:5,}}>
                            <MDBIcon icon="edit" size="3x" className="amber-text pr-3" />
                            <h4 className="headingAfterLogo"> Video Production & Editing</h4>
                            <p> 
                            Quality work is always our aim when it comes to video content. Our group of experienced visual creative have major capabilities 
                            when it comes this art we provide our clients with pioneering technology, class-led expertise, unrivalled turnaround times at 
                            a fraction of the cost we. We are here to serve you. From a simple editing job, to a corporate video to an all-out production 
                            we have what it takes. 
                            </p>
                        </div>

                </div>

       
</div>

<div className={"headingsDiv "+this.state.isActive[0]?"animated slideInUp":""} id = "Sub-Divisions">

<h2 className="heading text-uppercase" style={{fontSize:25, marginTop:'2%', fontWeight:'bold', color:'#fed136'}}> <u> Sub-Divisons </u></h2>
<SubDivisions/>

</div>

<div id="Contact Us">

<ContactUs/>
</div>
</div>




        );
    }
}

export default GoldenDNALandingPage;
