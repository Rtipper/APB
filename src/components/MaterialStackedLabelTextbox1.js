import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialStackedLabelTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.enterName}>Enter Name</Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
      <Text style={styles.pastSchedules1}>PAST SCHEDULES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent"
  },
  enterName: {
    fontSize: 12,
    textAlign: "left",
    color: "rgba(86,85,85,1)",
    opacity: 0.6,
    paddingTop: 16
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  pastSchedules1: {
    top: 24,
    left: 139,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 3,
    fontSize: 10,
    opacity: 0.54,
    textDecorationLine: "underline"
  }
});

export default MaterialStackedLabelTextbox1;
