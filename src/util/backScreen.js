export default function backScreen(navigation, ws = null) {
  if(ws !== null) {  
    ws.close();
  }
  navigation.navigate('Lobby');
}