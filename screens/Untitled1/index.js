import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.hmoREHiy}><Pressable onPress={() => navigation.navigate("Untitled2")}><Text style={styles.mhyHSwyU}>Lorem ipsum…</Text></Pressable><Pressable onPress={{}}><Text style={styles.LfHzCEDq}>Lorem ipsum…</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  boqBmJTP: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  ZVDmDxpa: {
    width: 100000,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    top: 173,
    left: -478,
    position: "absolute"
  },
  OeOSDEYh: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 90,
    color: "#777777",
    borderWidth: 30
  },
  XxQVgzys: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  mhyHSwyU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  hmoREHiy: {
    width: 357,
    height: 573
  },
  LfHzCEDq: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;