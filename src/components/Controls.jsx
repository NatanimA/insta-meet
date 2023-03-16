import React, {useState} from "react";
import { useClient} from '../constants/index'
import { Grid,Button} from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from '@material-ui/icons/Videocam'
import { ExitToApp } from "@material-ui/icons";
import VideocamOffIcon from '@material-ui/icons/VideocamOff'


const Controls = (props) => {
    const client = useClient();
    const {tracks,setStart,setInCall } = props
    const [trackState,setTrackState] = useState({video:true,audio:true})

    const mute = async (type) => {
        if(type === "audio"){
            await tracks[0].setEnabled(!trackState.audio)
            setTrackState((ps) => {
                return {...ps,audio:!ps.audio}
            })
        }

        if(type === "video"){
            await tracks[1].setEnabled(!trackState.video)
            setTrackState((ps) => {
                return {...ps,video:!ps.audio}
            })
        }
    }
    const leaveChannel = async () => {
        await client.leave()
        client.removeAllListeners()
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setInCall(false);
    }
    return(
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <Button variant="contained" color={trackState.audio ? "primary" : "secondary"} onClick={() => mute("audio")}>
                    {trackState.audio ? <MicIcon />: <MicOffIcon />}
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color={trackState.video ? "primary" : "secondary"} onClick={() => mute("video")}>
                    {trackState.video ? <VideocamIcon />: <VideocamOffIcon />}
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color={trackState.video ? "primary" : "secondary"} onClick={() => leaveChannel()}>
                    Leave
                    <ExitToApp />
                </Button>
            </Grid>
        </Grid>
    )
}

export default Controls;
