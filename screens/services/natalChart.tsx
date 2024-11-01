import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";

const NatalChart = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text>Natal Chart Calculation</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit
            et perspiciatis dolor laudantium est architecto sed aliquid
            possimus, id ipsa magni eos similique cum impedit voluptatem commodi
            unde reprehenderit.
          </Text>
        </View>
        <View>
          <Text>Name</Text>
          <TextInput placeholder="Enter Your Name" />
          <Text>Date Of Birth</Text>
          <TextInput placeholder="Select Your Date of birth" />
          <Text>Time of birth</Text>
          <TextInput placeholder="Select your time of birth" />
          <Text>birth location</Text>
          <TextInput placeholder="Birth Location" />
        </View>
      </ScrollView>
      <Button>Continue</Button>
    </>
  );
};

export default NatalChart;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
});
