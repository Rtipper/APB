import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCard56 from "../components/MaterialCard56";
import MaterialCard51 from "../components/MaterialCard51";
import MaterialCard52 from "../components/MaterialCard52";
import MaterialCard54 from "../components/MaterialCard54";
import MaterialCard57 from "../components/MaterialCard57";
import MaterialCard58 from "../components/MaterialCard58";
import MaterialCard59 from "../components/MaterialCard59";
import MaterialCard511 from "../components/MaterialCard511";
import MaterialCard512 from "../components/MaterialCard512";
import MaterialCard513 from "../components/MaterialCard513";
import MaterialCard515 from "../components/MaterialCard515";
import MaterialCard516 from "../components/MaterialCard516";
import MaterialCard518 from "../components/MaterialCard518";
import MaterialCard520 from "../components/MaterialCard520";
import MaterialCard521 from "../components/MaterialCard521";
import MaterialCard522 from "../components/MaterialCard522";
import MaterialCard523 from "../components/MaterialCard523";
import MaterialCard524 from "../components/MaterialCard524";
import MaterialCard526 from "../components/MaterialCard526";
import MaterialCard527 from "../components/MaterialCard527";
import MaterialCard530 from "../components/MaterialCard530";
import MaterialCard529 from "../components/MaterialCard529";

function Schedule(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rect1StackColumn}>
            <View style={styles.rect1Stack}>
              <View style={styles.rect1}>
                <View style={styles.icon1Row}>
                  <MaterialCommunityIconsIcon
                    name="home"
                    style={styles.icon1}
                  ></MaterialCommunityIconsIcon>
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.button}
              ></TouchableOpacity>
            </View>
            <View style={styles.textStackStack}>
              <View style={styles.textStack}>
                <Text style={styles.text}>SCHEDULE</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Schedule")}
                  style={styles.button6}
                ></TouchableOpacity>
              </View>
              <Text style={styles.pssbl1}>2021</Text>
              <Text style={styles.pastSchedules}>PAST SCHEDULES</Text>
            </View>
            <MaterialCard56 style={styles.materialCard56}></MaterialCard56>
            <MaterialCard51 style={styles.materialCard51}></MaterialCard51>
            <MaterialCard52 style={styles.materialCard52}></MaterialCard52>
            <MaterialCard54 style={styles.materialCard54}></MaterialCard54>
            <MaterialCard57 style={styles.materialCard57}></MaterialCard57>
            <MaterialCard58 style={styles.materialCard58}></MaterialCard58>
            <MaterialCard59 style={styles.materialCard59}></MaterialCard59>
            <MaterialCard511 style={styles.materialCard511}></MaterialCard511>
            <MaterialCard512 style={styles.materialCard512}></MaterialCard512>
            <MaterialCard513 style={styles.materialCard513}></MaterialCard513>
            <View style={styles.materialCard515Stack}>
              <MaterialCard515 style={styles.materialCard515}></MaterialCard515>
              <Text style={styles.text2}>000000</Text>
            </View>
            <MaterialCard516 style={styles.materialCard516}></MaterialCard516>
            <MaterialCard518 style={styles.materialCard518}></MaterialCard518>
            <MaterialCard520 style={styles.materialCard520}></MaterialCard520>
            <MaterialCard521 style={styles.materialCard521}></MaterialCard521>
            <MaterialCard522 style={styles.materialCard522}></MaterialCard522>
            <MaterialCard523 style={styles.materialCard523}></MaterialCard523>
            <MaterialCard524 style={styles.materialCard524}></MaterialCard524>
            <MaterialCard526 style={styles.materialCard526}></MaterialCard526>
            <MaterialCard527 style={styles.materialCard527}></MaterialCard527>
            <MaterialCard530 style={styles.materialCard530}></MaterialCard530>
            <MaterialCard529 style={styles.materialCard529}></MaterialCard529>
          </View>
          <View style={styles.rect1StackColumnFiller}></View>
          <View style={styles.rect2}>
            <Text style={styles.adamsPirates}>@AdamsPiratesBaseball2021</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(15,15, 15,1)"
  },
  scrollArea: {
    backgroundColor: "rgba(35,35,35,1)"
  },
  scrollArea_contentContainerStyle: {
    overflow: "visible"
  },
  rect1: {
    top: 0,
    left: 0,
    width: 414,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(80,80,80,0.34299999999999997)",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35,
    marginTop: 9
  },
  icon2: {
    top: 9,
    left: 15,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button2: {
    top: 0,
    left: 0,
    width: 62,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 62,
    height: 56,
    marginLeft: 29
  },
  icon3: {
    top: 3,
    left: 11,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button3: {
    top: 0,
    left: 0,
    width: 58,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    width: 58,
    height: 50,
    marginLeft: 32,
    marginTop: 6
  },
  icon4: {
    top: 8,
    left: 14,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 29
  },
  button4: {
    top: 0,
    left: 0,
    width: 53,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4Stack: {
    width: 53,
    height: 56,
    marginLeft: 20
  },
  icon5: {
    top: 6,
    left: 10,
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
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon5Stack: {
    width: 54,
    height: 56,
    marginLeft: 23
  },
  icon1Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 28,
    marginLeft: 20
  },
  button: {
    top: 6,
    left: 15,
    width: 48,
    height: 55,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  rect1Stack: {
    width: 414,
    height: 61
  },
  text: {
    top: 0,
    left: 25,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  button6: {
    top: 0,
    left: 0,
    width: 177,
    height: 89,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  textStack: {
    top: 0,
    left: 0,
    width: 177,
    height: 89,
    position: "absolute"
  },
  pssbl1: {
    top: 52,
    left: 73,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 0,
    fontSize: 20
  },
  pastSchedules: {
    top: 88,
    left: 42,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 3,
    fontSize: 10,
    opacity: 0.54,
    textDecorationLine: "underline"
  },
  textStackStack: {
    width: 177,
    height: 101,
    marginTop: 14,
    marginLeft: 116
  },
  materialCard56: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 53,
    marginLeft: 28
  },
  materialCard51: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 32,
    marginLeft: 28
  },
  materialCard52: {
    height: 350,
    width: 359,
    overflow: "scroll",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 35,
    marginLeft: 28
  },
  materialCard54: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 34,
    marginLeft: 28
  },
  materialCard57: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 31,
    marginLeft: 26
  },
  materialCard58: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 27,
    marginLeft: 28
  },
  materialCard59: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 28
  },
  materialCard511: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 32,
    marginLeft: 28
  },
  materialCard512: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 31,
    marginLeft: 26
  },
  materialCard513: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 35,
    marginLeft: 26
  },
  materialCard515: {
    height: 350,
    width: 359,
    position: "absolute",
    left: 0,
    top: 0,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0
  },
  text2: {
    top: 310,
    left: 179,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  materialCard515Stack: {
    width: 359,
    height: 350,
    marginTop: 37,
    marginLeft: 28
  },
  materialCard516: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 28,
    marginLeft: 28
  },
  materialCard518: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 33,
    marginLeft: 27
  },
  materialCard520: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 27
  },
  materialCard521: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 37,
    marginLeft: 26
  },
  materialCard522: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 35,
    marginLeft: 26
  },
  materialCard523: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 26
  },
  materialCard524: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 32,
    marginLeft: 26
  },
  materialCard526: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 34,
    marginLeft: 20
  },
  materialCard527: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 32,
    marginLeft: 20
  },
  materialCard530: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 32,
    marginLeft: 18
  },
  materialCard529: {
    height: 350,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 35,
    marginLeft: 20
  },
  rect1StackColumn: {
    width: 414,
    marginTop: 62
  },
  rect1StackColumnFiller: {
    flex: 1
  },
  rect2: {
    width: 414,
    height: 35,
    backgroundColor: "rgba(80,80,80,0.34299999999999997)",
    marginBottom: 43
  },
  adamsPirates: {
    fontFamily: "antonio-regular",
    color: "rgba(128,128,128,1)",
    marginTop: 9,
    marginLeft: 125
  }
});

export default Schedule;
