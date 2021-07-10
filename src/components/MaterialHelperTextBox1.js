import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialHelperTextBox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 8,
    flex: 1,
    paddingBottom: 8,
    width: 375
  }
});

export default MaterialHelperTextBox1;
