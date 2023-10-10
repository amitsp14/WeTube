import { Link } from "react-router-dom"

import { Typography, Card, CardContent, CardMedia } from "@mui/material"

import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle} from "../utils/constants"


const VideoCard = ({video : {id: {videoId}, snippet } }) => {
//    console.log(videoId, snippet)
  
    return (
    <Card sx={{width : {xs : "100%", sm :'358px', md : '308px', xs : '100%'}, backgroundColor : 'black', boxShadow :'none', borderRadius : 3}}>

        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
        
        <CardMedia 
         image={snippet?.thumbnails?.high?.url}
         alt={snippet?.title}
         sx={{width: {
          xs : '100%', sm : '358px' , md : '320px'},
           height :180, borderRadius : 3}}/>
        </Link> 
        
        <CardContent sx={{backgroundColor :'#1e1e1e', height :'106px'}}>
          <Link to={videoId ?`/video/${videoId}` : demoVideoUrl}>
             <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)} 
               <CheckCircle sx={{fontSize : 12, color  : 'gray', ml :'5px'}}/>   
             </Typography>
          
          </Link>

        </CardContent>

    </Card>
  )
}

export default VideoCard