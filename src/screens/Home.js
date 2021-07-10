import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
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
                  style={styles.button6}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon2Stack}>
                <EntypoIcon name="map" style={styles.icon2}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Schedule")}
                  style={styles.button7}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon3Stack}>
                <MaterialCommunityIconsIcon
                  name="account-supervisor"
                  style={styles.icon3}
                ></MaterialCommunityIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Roster")}
                  style={styles.button8}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon4Stack}>
                <IoniconsIcon
                  name="md-baseball"
                  style={styles.icon4}
                ></IoniconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Stats")}
                  style={styles.button9}
                ></TouchableOpacity>
              </View>
              <View style={styles.icon5Stack}>
                <MaterialCommunityIconsIcon
                  name="lead-pencil"
                  style={styles.icon5}
                ></MaterialCommunityIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Contact")}
                  style={styles.button11}
                ></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.adamsPiratesStackStack}>
            <View style={styles.adamsPiratesStack}>
              <Text style={styles.adamsPirates}>ADAMS PIRATES</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.button10}
              ></TouchableOpacity>
            </View>
            <Text style={styles.baseball}>BASEBALL</Text>
          </View>
          <Text style={styles.pssbl}>PSSBL</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Schedule")}
            style={styles.button2}
          >
            <Text style={styles.schedule}>SCHEDULE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Roster")}
            style={styles.button3}
          >
            <Text style={styles.roster}>ROSTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Stats")}
            style={styles.button5}
          >
            <Text style={styles.stats}>STATS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Contact")}
            style={styles.button4}
          >
            <Text style={styles.contact}>CONTACT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect2ColumnFiller}></View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum}>@AdamsPiratesBaseball2021</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    width: 428,
    height: 916,
    backgroundColor: "rgba(35,35,35,1)",
    marginLeft: -5
  },
  rect2: {
    width: 414,
    height: 56,
    backgroundColor: "rgba(80,80,80,0.34299999999999997)",
    flexDirection: "row"
  },
  icon1: {
    top: 9,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button6: {
    top: 0,
    left: 0,
    width: 53,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon1Stack: {
    width: 53,
    height: 56
  },
  icon2: {
    top: 9,
    left: 17,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button7: {
    top: 0,
    left: 0,
    width: 63,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 63,
    height: 56,
    marginLeft: 18
  },
  icon3: {
    top: 9,
    left: 14,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button8: {
    top: 0,
    left: 0,
    width: 63,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    width: 63,
    height: 56,
    marginLeft: 30
  },
  icon4: {
    top: 9,
    left: 14,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 28
  },
  button9: {
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4Stack: {
    width: 56,
    height: 56,
    marginLeft: 21
  },
  icon5: {
    top: 6,
    left: 18,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button11: {
    top: 0,
    left: 0,
    width: 66,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon5Stack: {
    width: 66,
    height: 56,
    marginLeft: 9
  },
  icon1StackRow: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 11
  },
  adamsPirates: {
    top: 0,
    left: 18,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 48
  },
  button10: {
    top: 8,
    left: 0,
    width: 287,
    height: 86,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  adamsPiratesStack: {
    top: 0,
    left: 0,
    width: 287,
    height: 94,
    position: "absolute"
  },
  baseball: {
    top: 62,
    left: 104,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  adamsPiratesStackStack: {
    width: 287,
    height: 94,
    marginTop: 18,
    marginLeft: 64
  },
  pssbl: {
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 5,
    fontSize: 10,
    opacity: 0.54,
    marginTop: 11,
    marginLeft: 185
  },
  button2: {
    width: 304,
    height: 87,
    backgroundColor: "rgba(239,177,18,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    borderRadius: 5,
    marginTop: 47,
    marginLeft: 56
  },
  schedule: {
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    letterSpacing: 5,
    marginTop: 21,
    marginLeft: 74
  },
  button3: {
    width: 304,
    height: 87,
    backgroundColor: "rgba(239,177,18,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    borderRadius: 5,
    marginTop: 40,
    marginLeft: 54
  },
  roster: {
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    letterSpacing: 5,
    marginTop: 20,
    marginLeft: 101
  },
  button5: {
    width: 305,
    height: 87,
    backgroundColor: "rgba(239,177,18,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 36,
    marginLeft: 55
  },
  stats: {
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    letterSpacing: 5,
    marginTop: 24,
    marginLeft: 111
  },
  button4: {
    width: 305,
    height: 40,
    backgroundColor: "rgba(239,177,18,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    borderRadius: 5,
    marginTop: 31,
    marginLeft: 54
  },
  contact: {
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    letterSpacing: 5,
    marginTop: 7,
    marginLeft: 108
  },
  rect2Column: {
    width: 414,
    marginTop: 62,
    marginLeft: 5
  },
  rect2ColumnFiller: {
    flex: 1
  },
  rect3: {
    width: 414,
    height: 35,
    backgroundColor: "rgba(80,80,80,0.34299999999999997)",
    marginBottom: 63,
    marginLeft: 5
  },
  loremIpsum: {
    fontFamily: "antonio-regular",
    color: "rgba(128,128,128,1)",
    opacity: 0.85,
    marginTop: 9,
    marginLeft: 133
  }
});

export default Home;
