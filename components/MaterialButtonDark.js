import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonDark(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.roster}>ROSTER</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  roster: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "antonio-regular"
  }
});

export default MaterialButtonDark;