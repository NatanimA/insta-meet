import { AgoraVideoPlayer} from 'agora-rtc-react'
import { Grid } from '@material-ui/core'
import React , { useState,useEffect } from 'react'



const Videos = (props) => {
  const { users,tracks } = props
  const [gridSpacing,setGridSpacing] = useState(12)

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12/ (users.length + 1))),4)
  }, [users,tracks])

  return (
    <Grid container style={{height:"100%"}}>
        <Grid item xs={gridSpacing} >
            <AgoraVideoPlayer videoTrack={tracks[1]} style={{height:"100%",width:"100%"}} />
        </Grid>
         {
            users.map((user) => {
                if(user.videoTrack){
                    return <Grid  item xs={gridSpacing} >
                        <AgoraVideoPlayer key={user.uid} videoTrack={user.videoTrack} style={{height:"100%",width:"100%"}} />
                    </Grid>
                }
                else {
                    return null
                }
            })
         }

    </Grid>
  )
}

export default Videos
