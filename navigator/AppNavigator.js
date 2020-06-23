import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    //Section: SectionScreen
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(TabNavigator);
