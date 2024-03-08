import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {setupPlayer,addTrack,playbackServices} from "../musicPlayerServices"

const App = () => {
  
  const [isPlayerReady,setPlayerReady] = useState(false);


  async function setUp(){
    let isSetup =await setupPlayer()
    if(isSetup){
      await addTrack();
    }

    setPlayerReady(isSetup)
  }

  useEffect(() => {
    setUp();
  }, [])
  
if(!isPlayerReady){
  return (
   <SafeAreaView>
    <ActivityIndicator />
   </SafeAreaView>
  )
}


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
