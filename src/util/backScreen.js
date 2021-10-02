export default function backScreen(route, navigation, params, ws = undefined, gameData = undefined) {
  if(ws !== undefined) {  
    ws.emit("close_connection", gameData);
  }
  navigation.navigate(route, params);
}