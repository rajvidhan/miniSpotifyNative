import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { playListData } from '../constants';
import SongInfo from '../Components/SongInfo';
import SongSlider from '../Components/SongSlider';
import { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';

const {width}=Dimensions.get('window');


const MusicPlayer = () => {

const [track,setTrack] =useState<Track | null>()

useTrackPlayerEvents([Event.PlaybackActiveTrackChanged],()=>{

})




const renderArtWork = ()=>{
    return (
        <View style={styles.listArtWrapper}>
            <View style={styles.albumContainer}>
                {track?.artwork && (
                    <Image  style={styles.albumArtImg} 
                    source={{
                        uri: track?.artwork?.toString()
                    }}
                    />
                )}
            </View>
        </View>
    )
}

  return (
    <View>
      <Text>MusicPlayer</Text>
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });
  