export default function backScreen(navigation, ws = undefined) {
  if(ws !== undefined) {  
    ws.close();
  }
  navigation.navigate('Lobby');
}