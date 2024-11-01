import { FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { WIDTH } from "@/constants/styles";
import { ZODIAC_SIGN } from "@/constants/dummy";
import SignsCard from "@/components/cards/SignsCard";

const ITEM_HEIGHT = 90;
const ITEM_GAP = 10;
const CONTAINER_HEIGHT = ITEM_HEIGHT * 5 + ITEM_GAP * 4;

const Compatibility = () => {
  const onScrollEnd = (
    data: number[],
    offsetY: number,
    onSelect: (value: number) => void
  ) => {
    const centerIndex = Math.round(offsetY / (ITEM_HEIGHT + ITEM_GAP));
    const selectedItem = data[centerIndex];
    onSelect(selectedItem);
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Compatibility</Text>
      <Text variant="titleMedium">Check Love and Business Compatibility</Text>

      {/* Row Container with FlatLists, Line, and Button */}
      <View style={styles.rowContainer}>
        {/* Left Zodiac Signs List */}
        <View style={styles.listWrapper}>
          <FlatList
            pagingEnabled
            data={ZODIAC_SIGN}
            renderItem={({ item }) => (
              <SignsCard label={item.name} key={item.id}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </SignsCard>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT + ITEM_GAP}
            decelerationRate="fast"
            contentContainerStyle={styles.listContainer}
            getItemLayout={(_, index) => ({
              length: ITEM_HEIGHT + ITEM_GAP,
              offset: (ITEM_HEIGHT + ITEM_GAP) * index,
              index,
            })}
            ItemSeparatorComponent={() => <View style={{ height: ITEM_GAP }} />}
          />
        </View>

        {/* Center Section with Button and Line */}
        {/* Horizontal Line through the center of button */}
        <View style={styles.horizontalLine} />
        <Button style={styles.button}>Go</Button>

        {/* Right Zodiac Signs List */}
        <View style={styles.listWrapper}>
          <FlatList
            pagingEnabled
            data={ZODIAC_SIGN}
            renderItem={({ item }) => (
              <SignsCard label={item.name} key={item.id}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </SignsCard>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT + ITEM_GAP}
            decelerationRate="fast"
            contentContainerStyle={styles.listContainer}
            getItemLayout={(_, index) => ({
              length: ITEM_HEIGHT + ITEM_GAP,
              offset: (ITEM_HEIGHT + ITEM_GAP) * index,
              index,
            })}
            ItemSeparatorComponent={() => <View style={{ height: ITEM_GAP }} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Compatibility;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 50,
    width: "100%",
    overflow: "hidden",
  },
  listWrapper: {
    height: CONTAINER_HEIGHT,
    // width: WIDTH / 3,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: CONTAINER_HEIGHT,
    position: "relative",
  },
  button: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: ITEM_GAP,
    zIndex: 2, // Ensures the button stays above the line
    backgroundColor: "red",
    borderRadius: 30,
    alignSelf: "center",
  },
  horizontalLine: {
    position: "absolute",
    top: "50%",
    left: 100,
    right: 0,
    height: 1,
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "gray",
    zIndex: -2,
    width: "50%",
  },
  listContainer: {
    paddingVertical: (ITEM_HEIGHT + ITEM_GAP) * 2,
  },
  image: {
    height: 30,
    width: 30,
  },
});
