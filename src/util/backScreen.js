export default function backScreen(route, navigation, params, ws = undefined) {
  if(ws !== undefined) {  
    ws.close();
  }
  navigation.navigate(route, params);
}