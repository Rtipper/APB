import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Stats(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.rect2Column}>
          <View style={styles.rect2}>
            <View style={styles.icon1StackRow}>
              <View style={styles.icon1Stack}>
                <MaterialCommunityIconsIcon
                  name="home"
                  style={styles.icon1}
                ></MaterialCommunityIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Home")}
                  style={styles.button}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon2Stack}>
                <EntypoIcon name="map" style={styles.icon2}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Schedule")}
                  style={styles.button2}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon3Stack}>
                <MaterialCommunityIconsIcon
                  name="account-supervisor"
                  style={styles.icon3}
                ></MaterialCommunityIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Roster")}
                  style={styles.button3}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon4Stack}>
                <IoniconsIcon
                  name="md-baseball"
                  style={styles.icon4}
                ></IoniconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Stats")}
                  style={styles.button4}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon5Stack}>
                <MaterialCommunityIconsIcon
                  name="lead-pencil"
                  style={styles.icon5}
                ></MaterialCommunityIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Contact")}
                  style={styles.button5}
                ></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.textStackStack}>
            <View style={styles.textStack}>
              <Text style={styles.text}>STATS</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Stats")}
                style={styles.button6}
              ></TouchableOpacity>
            </View>
            <Text style={styles.pssbl1}>2021</Text>
          </View>
          <Text style={styles.comingSoon}>Coming soon..</Text>
        </View>
        <View style={styles.rect2ColumnFiller}></View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum1}>@AdamsPiratesBaseball2021</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  rect1: {
    width: 414,
    height: 896,
    backgroundColor: "rgba(35,35,35,1)",
    overflow: "visible"
  },
  rect2: {
    width: 414,
    height: 56,
    backgroundColor: "rgba(80,80,80,0.34299999999999997)",
    flexDirection: "row"
  },
  icon1: {
    top: 9,
    left: 8,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button: {
    top: 0,
    left: 0,
    width: 54,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon1Stack: {
    width: 54,
    height: 56
  },
  icon2: {
    top: 9,
    left: 11,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button2: {
    top: 0,
    left: 0,
    width: 59,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon2Stack: {
    width: 59,
    height: 56,
    marginLeft: 22
  },
  icon3: {
    top: 9,
    left: 21,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button3: {
    top: 0,
    left: 0,
    width: 75,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon3Stack: {
    width: 75,
    height: 56,
    marginLeft: 21
  },
  icon4: {
    top: 9,
    left: 15,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 29
  },
  button4: {
    top: 0,
    left: 0,
    width: 62,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon4Stack: {
    width: 62,
    height: 56,
    marginLeft: 15
  },
  icon5: {
    top: 6,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button5: {
    top: 0,
    left: 0,
    width: 54,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon5Stack: {
    width: 54,
    height: 56,
    marginLeft: 13
  },
  icon1StackRow: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 12
  },
  text: {
    top: 0,
    left: 21,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  button6: {
    top: 0,
    left: 0,
    width: 119,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  textStack: {
    top: 0,
    left: 0,
    width: 119,
    height: 90,
    position: "absolute"
  },
  pssbl1: {
    top: 57,
    left: 42,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 0,
    fontSize: 20
  },
  textStackStack: {
    width: 119,
    height: 90,
    marginTop: 20,
    marginLeft: 147
  },
  comingSoon: {
    fontFamily: "antonio-regular",
    color: "rgba(80,80,80,1)",
    marginTop: 60,
    marginLeft: 170
  },
  rect2Column: {
    width: 414,
    marginTop: 62
  },
  rect2ColumnFiller: {
    flex: 1
  },
  rect3: {
    width: 414,
    height: 35,
    backgroundColor: "rgba(80,80,80,0.34299999999999997)",
    marginBottom: 43
  },
  loremIpsum1: {
    fontFamily: "antonio-regular",
    color: "rgba(128,128,128,1)",
    opacity: 0.85,
    marginTop: 9,
    marginLeft: 133
  }
});

export default Stats;
