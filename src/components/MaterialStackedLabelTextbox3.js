import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialStackedLabelTextbox3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.enterName}>Enter Name</Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
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
    color: "white",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default MaterialStackedLabelTextbox3;
