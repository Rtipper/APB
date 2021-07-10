import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCard53(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/russroad.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text style={styles.nationals}>@ Nationals</Text>
        <Text style={styles.subtitleStyle}>Subtitle here</Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>ACTION 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>ACTION 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton3}>
          <Icon name="chevron-up" style={styles.iconStyle}></Icon>
        </TouchableOpacity>
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
    left: -1,
    width: 357,
    top: 199,
    height: 97
  },
  nationals: {},
  subtitleStyle: {},
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {},
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {},
  actionText2: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton3: {},
  iconStyle: {
    fontSize: 24,
    color: "#000",
    opacity: 0.7
  }
});

export default MaterialCard53;
