import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialStackedLabelTextbox3 from "../components/MaterialStackedLabelTextbox3";
import MaterialStackedLabelTextbox2 from "../components/MaterialStackedLabelTextbox2";
import MaterialHelperTextBox1 from "../components/MaterialHelperTextBox1";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

function Contact(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.rect2StackColumn}>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}>
              <View style={styles.icon5StackRow}>
                <View style={styles.icon5Stack}>
                  <MaterialCommunityIconsIcon
                    name="home"
                    style={styles.icon5}
                  ></MaterialCommunityIconsIcon>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Home")}
                    style={styles.button}
                  ></TouchableOpacity>
                </View>
                <View style={styles.icon4Stack}>
                  <EntypoIcon name="map" style={styles.icon4}></EntypoIcon>
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
                <IoniconsIcon
                  name="md-baseball"
                  style={styles.icon2}
                ></IoniconsIcon>
                <View style={styles.icon1Stack}>
                  <MaterialCommunityIconsIcon
                    name="lead-pencil"
                    style={styles.icon1}
                  ></MaterialCommunityIconsIcon>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Contact")}
                    style={styles.button5}
                  ></TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Stats")}
              style={styles.button4}
            ></TouchableOpacity>
          </View>
          <View style={styles.textStackStack}>
            <View style={styles.textStack}>
              <Text style={styles.text}>CONTACT</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Contact")}
                style={styles.button6}
              ></TouchableOpacity>
            </View>
            <Text style={styles.questions}>QUESTIONS?</Text>
          </View>
          <MaterialStackedLabelTextbox3
            style={styles.materialStackedLabelTextbox3}
          ></MaterialStackedLabelTextbox3>
          <MaterialStackedLabelTextbox2
            style={styles.materialStackedLabelTextbox2}
          ></MaterialStackedLabelTextbox2>
          <MaterialHelperTextBox1
            style={styles.materialHelperTextBox1}
          ></MaterialHelperTextBox1>
          <MaterialButtonSuccess
            style={styles.materialButtonSuccess}
          ></MaterialButtonSuccess>
        </View>
        <View style={styles.rect2StackColumnFiller}></View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum1}>@AdamsPiratesBaseball2021</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 414,
    height: 896,
    backgroundColor: "rgba(35,35,35,1)",
    overflow: "visible"
  },
  rect2: {
    top: 3,
    left: 0,
    width: 414,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(80,80,80,0.34299999999999997)",
    flexDirection: "row"
  },
  icon5: {
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
    width: 49,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon5Stack: {
    width: 49,
    height: 56
  },
  icon4: {
    top: 9,
    left: 8,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button2: {
    top: 0,
    left: 0,
    width: 52,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon4Stack: {
    width: 52,
    height: 56,
    marginLeft: 30
  },
  icon3: {
    top: 9,
    left: 17,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button3: {
    top: 0,
    left: 0,
    width: 64,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon3Stack: {
    width: 64,
    height: 56,
    marginLeft: 29
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 29,
    marginLeft: 37,
    marginTop: 9
  },
  icon1: {
    top: 6,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button5: {
    top: 0,
    left: 0,
    width: 59,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  icon1Stack: {
    width: 59,
    height: 56,
    marginLeft: 33
  },
  icon5StackRow: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 12
  },
  button4: {
    top: 0,
    left: 258,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  rect2Stack: {
    width: 414,
    height: 59
  },
  text: {
    top: 0,
    left: 32,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  button6: {
    top: 0,
    left: 0,
    width: 185,
    height: 86,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  textStack: {
    top: 0,
    left: 0,
    width: 185,
    height: 86,
    position: "absolute"
  },
  questions: {
    top: 58,
    left: 55,
    position: "absolute",
    fontFamily: "antonio-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 3,
    fontSize: 10,
    opacity: 0.54
  },
  textStackStack: {
    width: 185,
    height: 86,
    marginTop: 20,
    marginLeft: 117
  },
  materialStackedLabelTextbox3: {
    height: 60,
    width: 375,
    marginTop: 28,
    marginLeft: 20
  },
  materialStackedLabelTextbox2: {
    height: 60,
    width: 375,
    marginTop: 34,
    marginLeft: 19
  },
  materialHelperTextBox1: {
    height: 244,
    width: 375,
    backgroundColor: "rgba(255,255,255,0.06)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    borderWidth: 0,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 42,
    marginLeft: 19
  },
  materialButtonSuccess: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(239,177,18,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 41,
    marginLeft: 165
  },
  rect2StackColumn: {
    width: 414,
    marginTop: 59
  },
  rect2StackColumnFiller: {
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

export default Contact;
