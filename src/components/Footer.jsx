import React from 'react'
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-100 justify-content-center align-items-center d-flex flex-column'>
        <div className='w-100 row'>
          <div className="col-md-3"><div className='website' >
            <FontAwesomeIcon icon={faHeadphonesSimple} style={{color:'orange', fontSize:'30px'}}/>
                <span  className='ms-2' style={{color:'white', fontSize:'30px'}}>Music player</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident facilis perferendis est nesciunt deleniti nostrum temporibus! Iste quasi maiores at dolores quis. Earum beatae magni impedit praesentium tempore culpa?</p>
            </div></div>
          <div className="col-md-3"><div className='links'>
              <h4>Links</h4>
              <p className='mt-3'><Link to={'/'}>Landing page</Link></p>
              <p><Link to={'/home'}>Home</Link></p>
              <p><Link to={'/watch-history'}>Watch History</Link></p>
            </div></div>
          <div className="col-md-3"><div className='guides'>
            <h4>Guides</h4>
              <p className='mt-3'>React</p>
              <p>React-Bootstrap</p>
              <p>Bootswatch</p>
            </div></div>
          <div className="col-md-3"><div className='contact'>
              <h4>Contacts</h4>
           <div className='d-flex mt-3'>
            <input type="text" className='form-control' placeholder='Enter your Email id' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
           </div>
           <div className='d-flex justify-content-center mt-3'>
           <i class="fa-brands fa-facebook fa-2x me-5"></i>
           <i class="fa-brands fa-instagram fa-2x me-5"></i>
           <i class="fa-brands fa-twitter fa-2x me-5"></i>
           <i class="fa-brands fa-linkedin fa-2x me-5"></i>

           </div>
            </div></div>
            
            
            
            
        </div>
    </div>
  )
}

export default Footer