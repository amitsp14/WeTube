import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'
import {Videos, ChannelCard} from './';
import { fetchFromApi } from '../utils/FetchFromApi';
import { BorderClear } from '@mui/icons-material';

const ChannelDetails = () => {

  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  
  console.log(channelDetail, videos);

  useEffect(() => {
    
    fetchFromApi(`channels?part="snipper&id=${id}`)
      .then((data)=> setchannelDetail(data?.items[0]));

      fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items));

  }, [id])
  
  
  return (
    <Box minHeight="95vh">
      <Box>
         <div
         style={{
          background: 'linear-gradient(90deg, rgba(4,0,0,1) 0%, rgba(44,0,0,0.9921218487394958) 50%, rgba(152,0,0,1) 100%)',
          zIndex : 10,
          height : '300px'
         }}
         
         />

         <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
          
      </Box>

      <Box display="flex" p="2">
           <Box sx={{mr : {sm:'100px'}}} />
          <Videos videos = {videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails 