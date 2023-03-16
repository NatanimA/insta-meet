import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'



export const options = {
  // Pass your app ID here
  appId: "76fec87d9191432e8041796e7fd33a64",
  // Pass a token if your project enables the App Certificate
  token: "007eJxTYDCSurZ/j8aZLO+bDeU33jEKxi62WHBOUHsms2VPwU6WJgEFBnOztNRkC/MUS0NLQxNjo1QLAxNDc0uzVPO0FGPjRDMTE3HhlIZARgYZEScGRigE8VkYchMz8xgYAIP6GwA=",
};

export const config ={mode:"rtc", codec:'vp8',appId:options.appId,token:options.token}
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

// This can be associated with uniqueUsername
export const channelName = "main"

