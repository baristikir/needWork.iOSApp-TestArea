import React from "react";
import { Text,View ,StyleSheet, TouchableHighlight } from "react-native";
import Animated, { interpolate } from "react-native-reanimated";
import { Ionicons as Icon} from "@expo/vector-icons";
import { LOGIN_VIEW_HEIGHT } from "../Constants";
import DashboardScreen from "../screens/DashboardScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const ForwardArrow = ({keyboardHeight}) => {

    const opacity = interpolate(keyboardHeight, {
        inputRange: [0,keyboardHeight],
        outputRange: [0,1],
    });

    return(
    <Animated.View style={{...styles.forwardArrow, opacity, transform: [{ translateY:keyboardHeight }]}}>

          <TouchableHighlight onPress={() => this.props.navigation.navigate("DashboardScreen")}>
           <Icon name="md-arrow-forward" color="white" />
         </TouchableHighlight>
        
    </Animated.View>
    );
};
export default ForwardArrow;

// const Stack = createStackNavigator();
// const StackNavigator = (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="DashboardScreen"
//       component={} // <----
//     />
//   </Stack.Navigator>
// );

const styles = StyleSheet.create({
    forwardArrow: {
        position: "absolute",
        height: 60,
        width: 60,
        right: 10,
        bottom: LOGIN_VIEW_HEIGHT/2,
        zIndex: 100,
        backgroundColor: "#54575e",
        alignItems: "center",
        justifyContent:"center",
    },
});

