import React from "react";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact(){
    const currentYear=new Date().getFullYear()
    return(
        <div className="contact justify-content-between">
            <div className="card bg-light text-dark m-3 border-0 ">
            <div className="card-header border-0 card4"><h1>Contact Me</h1></div>
            <div className="form-floating margin">
  <input type="email" className="form-control" id="floatingInput" placeholder="name" />
  <label htmlFor="floatingInput">Enter your name</label>
<div id="passwordHelpBlock" className="form-text">
 <label>Your Name must be more than 3 characters</label> 
</div>
</div>
<div className="form-floating m-3">
<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
  <label htmlFor="floatingInput">Enter Your Email</label>
  <div id="passwordHelpBlock" className="form-text">
  <label>Email type: admin@gmail.com</label>
</div>
</div>
<div className="form-floating m-3">
  <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea2" style={{height: 200,width: 730}}></textarea>
  <label htmlFor="floatingTextarea2">Message</label>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-outline-dark" type="submit" style={{width: 100}}>Send</button>
  </div>
  <div className="footer">
  <div className="card-footer bg-transparent border-0">© {currentYear} Hritvik Dadhich</div>
</div>
  <div className="card border-0  side-card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
        <h6>Name</h6>
        <p>Hritvik Dadhich</p>
    </li>
    <li className="list-group-item">
       <h6>Email</h6>
        <p>Hritvik16000@gmail.com</p>
    </li>
    <li className="list-group-item">
        <h6>Contact No</h6>
        <p>+91 9549549810</p>
    </li>
    <div className="icon1">
                            <a className="link" href="https://www.linkedin.com/feed/"
                            target="_blank" rel="noreferrer">
                                <IconButton>
                                    <LinkedInIcon color="primary"/>
                                </IconButton></a>
                                <a className="link" href="https://github.com/Hritvik16000"
                                target="_blank" rel="noreferrer">
                                <IconButton>
                                    <GitHubIcon style={{color: "grey"}}/>
                                </IconButton></a>
                                <a className="link" href="https://whatsapp.com/" 
                                target="_blank" rel="noreferrer">
                                <IconButton>
                                    <WhatsAppIcon color="success"/>
                                </IconButton></a>
                                <a className="link" href="mailto: Hritvik16000@gmail.com" 
                                target="_blank" rel="noreferrer">
                                <IconButton>
                                    <EmailIcon color="error"/>
                                </IconButton></a>
                            </div>
    
  </ul>
</div>
</div>


        </div>
    )
}
