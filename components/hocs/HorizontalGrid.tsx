import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { GridItem, HorizontalGridType } from "@/constants/types/hoc";
import { Text } from "react-native-paper";

const HorizontalGrid = ({
  data,
  onSeeAll,
  renderItem,
  title,
}: HorizontalGridType<GridItem>) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text variant="titleLarge" style={styles.text}>
          {title}
        </Text>
        {/* Think About expo link for routing */}
        <Text variant="titleMedium" onPress={onSeeAll} style={styles.text}>
          See All
        </Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {data?.map((item, index) => renderItem(item, index))}
      </ScrollView>
    </View>
  );
};

export default HorizontalGrid;
const styles = StyleSheet.create({
  scrollContainer: {
    gap: 20,
  },
  text: { color: "white" },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
});
