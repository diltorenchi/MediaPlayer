import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddToHistory, deleteAVideo } from '../services/allAPI';

function VideoCard( {displayVideo, setDeleteVideoStatus,isPresent}) {
  console.log(displayVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //function to add to history
  const handleShow = async() => {
    setShow(true);
    let caption = displayVideo.caption
    let url = displayVideo.embedLink
    let time = new Date()
    let timeStamp =  new Intl.DateTimeFormat('en-GB', {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

    // console.log(caption,url,timeStamp);
   
    let reqBody = {
      caption,url,timeStamp

    }
 

    const response = await AddToHistory(reqBody)
    console.log(response);

  }
  //function to delete a video
  const handleDelete = async(id)=>{
    const response = await deleteAVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)

  }

  //function to drag
  const videoDrag = (e,id)=>{
    console.log(`card with id ${id} have dragged`);
    e.dataTransfer.setData("VideoId",id)
  }
  return (
    <>
       <Card onClick={handleShow} style={{ width: '100%',cursor:'pointer' }} className='mt-4' draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
     { !isPresent && <Card.Img style={{cursor:'pointer'}}  variant="top" src={displayVideo?.imageUrl} width={"100%"} height={'300px'} />}
      <Card.Body className='d-flex'>
        
        <Card.Text>
          {displayVideo?.caption.slice(0,18)}
        </Card.Text>
        {!isPresent && <Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)} className='ms-auto'><FontAwesomeIcon icon={faTrash} /></Button>}
      </Card.Body>
    </Card>


     <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <iframe width="100%" height="489" src={`${displayVideo?.embedLink}`} title="Kuthanthram - Manjummel Boys Promo Song | Chidambaram | Sushin Shyam ft. Vedan | Parava Films" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default VideoCard