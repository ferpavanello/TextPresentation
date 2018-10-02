import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ChangeText extends Component {
  constructor(props) {
    super(props);

    this.state = { choice: "" };

    this.changeChoice();
  }

  changeChoice() {
    var choices = ["Watch TV", "Play Football", "Eat Pizza", "Sleep"];

    setInterval(() => {
      this.setState(previousSate => {
        var n = Math.floor(Math.random() * choices.length);

        return { choice: choices[n] };
      });
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text style={styles.textTitle}>What do we do?</Text>
        <Text style={styles.textChoice}>{this.state.choice}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "red"
  },

  textChoice: {
    textAlign: "center",
    fontSize: 20
  }
});
