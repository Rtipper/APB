import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCard125(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.ryanTipper}>Ryan Tipper</Text>
          <Text style={styles.subtitleStyle}># 44 | 1B, OF, P</Text>
        </View>
        <Image
          source={require("../assets/images/tipper.JPG")}
          style={styles.cardItemImagePlace}
        ></Image>
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  ryanTipper: {
    fontFamily: "antonio-regular",
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 175,
    width: 175,
    margin: 16
  }
});

export default MaterialCard125;
