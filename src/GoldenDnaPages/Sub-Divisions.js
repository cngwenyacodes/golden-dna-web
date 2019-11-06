import React, { Component } from 'react';
import './main.css';
import backgoundhandsimg from '../img/Sub-Divisions/Audio-Visual-Services.jpeg';
class SubDivisions extends Component{

    render(){

        return(

            <div className="page-section"  id="Sub-Divisions">
            <div class="row">
                <div class="col-md-4 col-sm-6 Sub-Divisions-item">
                <a class="Sub-Divisions-link" data-toggle="modal" href="#portfolioModal1">
                    <div class="Sub-Divisions-hover">
                    <div class="Sub-Divisions-hover-content">
                        <i class="fas fa-plus fa-3x"></i>
                    </div>
                    </div>
                    <img class="img-fluid" src={backgoundhandsimg} alt=""/>
                </a>
                <div class="Sub-Divisions-caption">
                    <h4>Threads</h4>
                    <p class="text-muted">Illustration</p>
                </div>
                </div>
            </div>

            </div>
        )
    }
}

export default SubDivisions;