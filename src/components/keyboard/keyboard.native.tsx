import React, {
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
} from "react";
import {Platform} from "react-native";
import {
  Animated,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import {useKeyboard} from "@react-native-community/hooks";

export const KeyboardShift = (props: PropsWithChildren<{}>) => {
  const [shift] = useState(new Animated.Value(0));
  const keyboard = useKeyboard();
  // iOS: React Native's KeyboardAvoidingView with header offset and
  // behavior 'padding' works fine on all ios devices (and keyboard types)
  const headerHeight = useHeaderHeight();

  const {children} = props;

  const handleKeyboardDidShow = useCallback(() => {
    const {height: windowHeight} = Dimensions.get("window");
    const keyboardHeight = keyboard.keyboardHeight;
    const currentlyFocusedInputRef = TextInput.State.currentlyFocusedInput();
    currentlyFocusedInputRef?.measure((x, y, width, height, pageX, pageY) => {
      console.log({height, keyboardHeight, windowHeight, pageY});
      const fieldHeight = 100;
      const fieldTop = pageY;
      const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);

      console.log({gap});

      if (gap >= 0) {
        return;
      }

      Animated.timing(shift, {
        toValue: gap,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  }, [keyboard.keyboardHeight, shift]);

  const handleKeyboardDidHide = useCallback(() => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [shift]);

  // On mount, add keyboard show and hide listeners
  // On unmount, remove them
  useEffect(() => {
    if (Platform.OS === "ios") {
      return;
    }

    Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow);
    Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide);
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, [handleKeyboardDidHide, handleKeyboardDidShow]);

  // Android: we need an animated view since the keyboard style can vary widely
  // And React Native's KeyboardAvoidingView isn't always reliable
  if (Platform.OS === "android") {
    return (
      <Animated.View
        style={[styles.container, {transform: [{translateY: shift}]}]}>
        {children}
      </Animated.View>
    );
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      style={styles.container}
      behavior={"padding"}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
