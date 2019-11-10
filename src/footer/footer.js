import React, { Component } from 'react'
import './footer.css'

class ContactUs extends Component{

    render(){ 
        return (
<section className="page-section" id="contact"  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Contact Us</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row" style ={{marginTop:'-70%'}} >
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>

              <div class="col-lg-12 text-center"  style ={{marginTop:'-18%'}}>
                <ul class="list-inline social-buttons" >
                  <li class="list-inline-item" >
                    <a href="https://twitter.com/GOLDENDNA_" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://m.facebook.com/Goldenn3000/" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://instagram.com/goldendna_?igshid=1dnycz9vncxgp" target="_blank">
                    <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://instagram.com/goldendna_?igshid=1dnycz9vncxgp" target="_blank">
                    <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-12 text-center" style ={{marginTop:'-30%'}}>
                <div id="success"></div>
                <button id="sendMessageButton" class="btn  btn-xl text-uppercase" type="submit" style = {{backgroundColor:'#fed136'}}>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    )
}
   
}
 
export default ContactUs;