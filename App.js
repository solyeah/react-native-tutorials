import React from "react"; // 반드시 존재해야한다.
import { StyleSheet, Text, View } from "react-native"; // react-native 컴포넌트 import

// import HelloWorld from "./src/components/HelloWorld"; // Component import
import Bananas from "./src/components/Bananas"; // HelloWorld--> Bananas
import GreetingGroup from "./src/components/GreetingGroup";

export default function App() {
  // 함수형 컴포넌트
  // JSX 문법
  // JSX에서 javascript코드를 작성하려면 {}로 감싸준다!
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      {/* <Bananas /> */}
      <GreetingGroup />
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
