import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialHelperTextBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.enterName}>Enter Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  enterName: {
    fontSize: 12,
    textAlign: "left",
    color: "rgba(115,114,114,1)",
    opacity: 0.6,
    paddingTop: 16
  }
});

export default MaterialHelperTextBox;
