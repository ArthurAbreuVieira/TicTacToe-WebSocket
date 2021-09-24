import { BackHandler } from "react-native";

export default function disableBackButton() {
  BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
}