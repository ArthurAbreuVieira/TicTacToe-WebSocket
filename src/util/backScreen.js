export default function backScreen(route, navigation, params, ws = undefined) {
  if(ws !== undefined) {  
    ws.disconnect();
  }
  navigation.navigate(route, params);
}