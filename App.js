import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Keyboard } from "react-native";
import Animated, { useCode, cond ,eq, set, interpolate, SpringUtils, call, Easing} from "react-native-reanimated";
import { withTimingTransition, onGestureEvent, withSpringTransition ,delay} from "react-native-redash";
import { SCREEN_HEIGHT,LOGIN_VIEW_HEIGHT } from "./Constants";
import { TextInput , TapGestureHandler, State} from "react-native-gesture-handler";
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";

//Components
import Logo from "./components/Logo";
import OverlayBG from "./components/OverlayBG";
import HeaderBackArrow from "./components/HeaderBackArrow";
import AnimatedPlaceholder from "./components/AnimatedPlaceholde";
import ForwardArrow from "./components/ForwardArrow";
//Screens
import DashboardScreen from "./screens/DashboardScreen";

export default function App() {
  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current);
  const textInputref = useRef(null);

  const keyboardHeight = new Animated.Value(0);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return function cleanUp (){
      Keyboard.removeListener("keyboardDidHide");
      Keyboard.removeListener("keyboardDidShow");
    };
  });

  const innerLoginY = interpolate(scaleAnimation, {
    inputRange: [0,1],
    outputRange: [LOGIN_VIEW_HEIGHT,0],
  })

  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({ state: gestureState.current });

  const backArrowGesturestate = useRef(new Animated.Value(State.UNDETERMINED));
  const backArrowGestureHandler = onGestureEvent({ state: backArrowGesturestate.current });

  const isOpen = useRef(new Animated.Value(0));
  const isOpenAnimation = withSpringTransition(isOpen.current,{
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping:true,
    damping:new Animated.Value(20),
  });

  const outerLoginY = interpolate(isOpenAnimation, {
    inputRange: [0,1],
    outputRange:[SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, LOGIN_VIEW_HEIGHT/2],
  });

  const headingOpacity = interpolate(isOpenAnimation, {
    inputRange: [0,1],
    outputRange: [1,0],
  });

  const focusTextInput = () => {
    //focus text input
    textInputref.current.focus();
  };

  const blurTextInput = () => {
    textInputref.current.blur();
  };

  const keyboardDidShow = e => {

    //
    let toValue = - e.endCoordinates.height

    Animated.timing(keyboardHeight, {
      toValue,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const keyboardDidHide = e => {
    Animated.timing(keyboardHeight, {
      toValue: 0,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useCode(() => 
  ([cond(
    eq(gestureState.current, State.END), 
    [
      cond(eq(isOpen.current, 0), [
        set(isOpen.current, 1),
      ],
      cond(eq(isOpen.current,1), delay(call([], focusTextInput), 750)),
    ),],
    )]),[gestureState.current],
  );

  useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

  useCode(() => cond(eq(backArrowGesturestate.current,State.END), [
    set(gestureState.current, State.UNDETERMINED),
    call([],blurTextInput),
    delay(set(isOpen.current,0),250),
  ],[backArrowGesturestate.current]),
  );

  // const AppStackNavigator = createStackNavigator({
  //   Dashboard: DashboardScreen,
  // });
  // const AppContainer = createAppContainer(AppStackNavigator);
  
  return (
    <View style={styles.container}>
      <View style={{ ...styles.logoContainer }}>
        <Logo scale={scaleAnimation} />
      </View>
      <HeaderBackArrow isOpenAnimation={isOpenAnimation} gestureHandler={backArrowGestureHandler} />
      <Animated.View 
      style={{
        backgroundColor: "white",
        ...StyleSheet.absoluteFill,
        transform: [{ translateY: outerLoginY}],
      }}>

        <OverlayBG isOpenAnimation= {isOpenAnimation} />
        <ForwardArrow keyboardHeight={keyboardHeight} />
        <Animated.View style={{
          height: LOGIN_VIEW_HEIGHT,
           alignItems: "center",
            justifyContent: "center",
             backgroundColor: "#1d3557",
             position: "absolute",
             top: 0,
             left: 0,
             right: 0,
             }}>
        </Animated.View>

        <Animated.View>
          <Animated.View style ={{
            height: LOGIN_VIEW_HEIGHT,
            backgroundColor:"white",
            transform: [{ translateY: innerLoginY}],
          }}>
            <Animated.View style= {{ ...styles.heading, opacity: headingOpacity }}>
              <Text style={{ fontSize: 24 }}>Register now your work place!</Text>
            </Animated.View>

            <TapGestureHandler {...gestureHandler}>
              <Animated.View>
            {/* LoginView Text Section */}
            <Animated.View 
            pointerEvents="none"
            style={{ ...styles.textInputContainer }}>        
            <AnimatedPlaceholder isOpenAnimation={isOpenAnimation} />      
              <Image source={require("./assets/flag.jpg")}
              style={{ ...styles.image }} 
              />
                <Text style = {{ ...styles.prefix}}>+49</Text>
                <TextInput 
                ref={textInputref}
                keyboardType="number-pad"
                style = {{ ...styles.textInput}}
                placeholder="Enter your phone number" />
            </Animated.View>
            </Animated.View>
            </TapGestureHandler>

          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d3557",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    alignItems: "flex-start",
    marginHorizontal: 25,
    marginTop: 50,
  },
  image: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  prefix: {
    fontSize: 20, 
    paddingHorizontal: 10
  },
  textInputContainer: {
    flexDirection: "row", 
    margin: 25,
  },
  textInput: {
    flex:1, 
    fontSize: 20,
  },
});
