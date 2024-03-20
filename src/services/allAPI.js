import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverUrl"


//api for uploading video

export const uploadVideoApi = async(reqBody)=>{
  return await commonAPI('POST',`${serverURL}/myvideos`,reqBody)
}

//api to get uploaded video

export const getUploadedVideoApi = async()=>{
   return  await commonAPI('GET',`${serverURL}/myvideos`,"")
}


//api to delete a particular video

export const deleteAVideo = async(id)=>{
 return await commonAPI('DELETE',`${serverURL}/myvideos/${id}`,{})
}

//api to add video into history

export const AddToHistory = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/history`,reqBody)
}

//api to get the video from history

export const getAllVideosHistory = async()=>{
  return await commonAPI('GET',`${serverURL}/history`,"")
}

// api to delete watch history

export const deleteWatchHistory = async(id)=>{
   return await commonAPI ('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category

export const addCategoryApi = async(reqBody)=>{
     return await commonAPI('POST',`${serverURL}/category`,reqBody)

}

//api to get the category
export const getCategoryApi = async()=>{
   return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to delete category
export const deleteCategoryApi = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get a single video from video

export const  getAVideoApi = async(id)=>{
   return await commonAPI('GET',`${serverURL}/myvideos/${id}`,"")
}

//api to update category

export const updateCategory = async(id,reqBody)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}