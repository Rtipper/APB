import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCard124(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <Image
          source={require("../assets/images/badley.jpg")}
          style={styles.cardItemImagePlace}
        ></Image>
        <View style={styles.bodyContent}>
          <Text style={styles.chrisBadley}>Chris Badley</Text>
          <Text style={styles.subtitleStyle}># 32 | P, CF</Text>
        </View>
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
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 175,
    width: 175,
    margin: 16
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  chrisBadley: {
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
  }
});

export default MaterialCard124;
