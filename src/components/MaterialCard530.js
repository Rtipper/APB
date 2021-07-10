import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCard530(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/stevecox2.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text style={styles.nationals}>@ Nationals</Text>
        <Text style={styles.subtitleStyle}>
          Steve Cox Field | 1230PM Sun 8/29
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    height: 103
  },
  nationals: {
    fontFamily: "antonio-regular",
    fontSize: 35,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  }
});

export default MaterialCard530;
