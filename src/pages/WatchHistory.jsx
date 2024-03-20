import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllVideosHistory } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WatchHistory() {

  const [historyVideos,setHistoryVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  //function to get all videos in history
  const getHistory = async()=>{
    const response =  await getAllVideosHistory()
    // console.log(response);
    setHistoryVideos(response.data)
  }
  // console.log(historyVideos);
//funtion to delete video from history

const handleDelete = async(id)=>{
  const response = await deleteWatchHistory(id)
  // console.log(response);
  if(response.status>=200 && response.status<300){
    setDeleteVideoStatus(true)
  }
  else{
    toast.error('something went wrong')
  }
}
  useEffect(()=>{
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])
  return (
   <>
      <div className=' d-flex justify-content-between align-items-center p-5 m-5'>
        <h3>Watch History</h3>
        <h6><Link to={'/home'} style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon className='me-2' icon={faArrowLeft} beat />Back to Home</Link></h6 >
      </div>

      <div className=' d-flex justify-content-between align-items-center p-4 mx-5'>
        {historyVideos?.length>0?
          <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           { historyVideos.map((item , index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td><a href={item.url} target='blank'>{item.url}</a></td>
            <td>{item.timeStamp}</td>
            <td>
              <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </td>
          </tr>

           ))}

          </tbody>
           
        </table>: //: is mentioned as OR
        <p className='text-danger fs-4'>No Watch History</p>
        }
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
   </>
  )
}

export default WatchHistory