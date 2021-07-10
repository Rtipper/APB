import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCard12(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.michaelWillard}>Michael Willard</Text>
          <Text style={styles.subtitleStyle}>Subtitle here</Text>
        </View>
        <Image
          source={require("../assets/images/cardImage9.png")}
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
    justifyContent: "space-between",
    left: 0,
    width: 357,
    top: 0,
    height: 205
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1,
    left: 0,
    width: 205,
    top: 0,
    height: 41
  },
  michaelWillard: {
    fontSize: 15,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontFamily: "antonio-regular",
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 120,
    width: 120,
    margin: 16
  }
});

export default MaterialCard12;
