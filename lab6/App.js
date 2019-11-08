import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: "hotpink",
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 50,
    paddingRight: 50
  },
  titletext: {
    color: "white",
    fontWeight: "bold"
  },
  bodytext: {
    color: "white"
  },
  meangirlsgif: {
    marginTop: 20,
    width: "auto"
  }
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titletext}>What's my favorite movie?</Text>
        <Text style={styles.bodytext}>Mean Girls</Text>
        <Text style={styles.titletext}>Why do I like this movie?</Text>
        <Text style={styles.bodytext}>Mean Girls is a pop culture phenomenon that has remained iconic despite being released back in 2004. It's hilariously absurd and contains some of the most quoted lines from a movie ever (don't know if that's a fact, but whatever). Plus I never get sick of watching it and probably never will! </Text>
        <Image style={styles.meangirlsgif} source={require("./assets/meangirls.gif")} />
      </View>
    );
  }
}

export default App;
