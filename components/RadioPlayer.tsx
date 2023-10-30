import TrackPlayer, {
    AppKilledPlaybackBehavior,
    Capability,
} from 'react-native-track-player';
  
export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  }
  catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  }
  finally {
    return isSetup;
  }
}

export async function addTrack() {
  await TrackPlayer.add([
    {
      id: '1',
      url: 'https://fm.unam.edu.ar/fm.m3u',
      artwork: require('../assets/images/splash.png'),
      title: '97.8 Transmedia',
      artist: 'Universidad de Misiones',
      duration: 160
    },
  ]);
}
