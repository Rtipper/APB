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
import MaterialCard121 from "../components/MaterialCard121";
import MaterialCard122 from "../components/MaterialCard122";
import MaterialCard123 from "../components/MaterialCard123";
import MaterialCard124 from "../components/MaterialCard124";
import MaterialCard125 from "../components/MaterialCard125";

function Roster(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
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
                <Text style={styles.text}>ROSTER</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Roster")}
                  style={styles.button6}
                ></TouchableOpacity>
              </View>
              <Text style={styles.pssbl1}>2021</Text>
            </View>
            <MaterialCard121 style={styles.materialCard121}></MaterialCard121>
            <MaterialCard122 style={styles.materialCard122}></MaterialCard122>
            <MaterialCard123 style={styles.materialCard123}></MaterialCard123>
            <MaterialCard124 style={styles.materialCard124}></MaterialCard124>
            <MaterialCard125 style={styles.materialCard125}></MaterialCard125>
          </View>
          <View style={styles.rect2ColumnFiller}></View>
          <View style={styles.rect3}>
            <Text style={styles.loremIpsum1}>@AdamsPiratesBaseball2021</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    width: 414,
    height: 1549,
    backgroundColor: "rgba(35,35,35,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 1549,
    width: 414,
    overflow: "scroll"
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
    width: 51,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon1Stack: {
    width: 51,
    height: 56
  },
  icon2: {
    top: 9,
    left: 16,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button2: {
    top: 0,
    left: 0,
    width: 66,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon2Stack: {
    width: 66,
    height: 56,
    marginLeft: 20
  },
  icon3: {
    top: 9,
    left: 19,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button3: {
    top: 0,
    left: 0,
    width: 71,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon3Stack: {
    width: 71,
    height: 56,
    marginLeft: 21
  },
  icon4: {
    top: 9,
    left: 18,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 29
  },
  button4: {
    top: 0,
    left: 0,
    width: 61,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon4Stack: {
    width: 61,
    height: 56,
    marginLeft: 15
  },
  icon5: {
    top: 6,
    left: 11,
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
    marginLeft: 14
  },
  icon1StackRow: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 12
  },
  text: {
    top: 0,
    left: 24,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  button6: {
    top: 0,
    left: 0,
    width: 141,
    height: 85,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  textStack: {
    top: 0,
    left: 0,
    width: 141,
    height: 85,
    position: "absolute"
  },
  pssbl1: {
    top: 58,
    left: 55,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 0,
    fontSize: 20
  },
  textStackStack: {
    width: 141,
    height: 85,
    marginTop: 19,
    marginLeft: 134
  },
  materialCard121: {
    height: 198,
    width: 359,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 28
  },
  materialCard122: {
    height: 206,
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
    marginLeft: 28
  },
  materialCard123: {
    height: 206,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 38,
    marginLeft: 28
  },
  materialCard124: {
    height: 206,
    width: 359,
    marginTop: 39,
    marginLeft: 27
  },
  materialCard125: {
    height: 206,
    width: 359,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 40,
    marginLeft: 26
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
    marginBottom: 36
  },
  loremIpsum1: {
    fontFamily: "antonio-regular",
    color: "rgba(128,128,128,1)",
    opacity: 0.85,
    marginTop: 10,
    marginLeft: 149
  }
});

export default Roster;
