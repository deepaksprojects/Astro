import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { WIDTH } from "@/constants/styles";
import CustomDatePicker from "@/components/pickers/dateTimePicker";

const Numerology = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Numerology</Text>
      <Text variant="titleMedium">Know how number effect</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id facere
        provident reprehenderit libero corporis ex, laboriosam quaerat numquam
        temporibus? Temporibus rem error quos recusandae quae numquam
        asperiores, veritatis vel!
      </Text>
      <Button style={styles.button} mode="contained">
        Select Your Date
      </Button>
      <CustomDatePicker onDateChange={() => null} wants="calender" />
      <Button>Go</Button>
    </View>
  );
};

export default Numerology;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 8,
    padding: 4,
    marginTop: 20,
    width: WIDTH / 2,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 80,
    marginTop: 40,
  },
});
