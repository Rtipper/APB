import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCard122(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <Image
          source={require("../assets/images/jade.JPG")}
          style={styles.cardItemImagePlace}
        ></Image>
        <View style={styles.bodyContent}>
          <Text style={styles.jadeBraff}>Jade Braff</Text>
          <Text style={styles.subtitleStyle}># 9 | OF</Text>
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
    width: 176,
    margin: 16
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  jadeBraff: {
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

export default MaterialCard122;
