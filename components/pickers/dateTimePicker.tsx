import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

interface CustomDatePickerProps {
  onDateChange: (date: Date) => void;
  wants: "date" | "year" | "months" | "calender" | "All";
}

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;
const YEARS_BACK = 50;

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  onDateChange,
  wants = "All",
}) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const years = Array.from(
    { length: YEARS_BACK },
    (_, i) => new Date().getFullYear() - i
  ).reverse();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from(
    {
      length: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
      ).getDate(),
    },
    (_, i) => i + 1
  );

  const updateSelectedDate = (year: number, month: number, day: number) => {
    const newDate = new Date(year, month - 1, day);
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  const onScrollEnd = (
    data: number[],
    offsetY: number,
    onSelect: (value: number) => void
  ) => {
    const centerIndex = Math.round(offsetY / ITEM_HEIGHT);
    const selectedItem = data[centerIndex];
    onSelect(selectedItem);
  };

  const renderItem = (item: number, selected: number) => (
    <View style={[styles.item, selected === item && styles.selectedItem]}>
      <Text
        style={[styles.itemText, selected === item && styles.selectedItemText]}
      >
        {item.toString().padStart(2, "0")}
      </Text>
    </View>
  );

  function datePicker() {
    return (
      <FlatList
        data={days}
        renderItem={({ item }) => renderItem(item, selectedDate.getDate())}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        initialScrollIndex={currentDate.getDate() - 1} // Set initial scroll index based on current day
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          onScrollEnd(days, e.nativeEvent.contentOffset.y, (day) =>
            updateSelectedDate(
              selectedDate.getFullYear(),
              selectedDate.getMonth() + 1,
              day
            )
          )
        }
        contentContainerStyle={styles.listContainer}
        // getItemLayout={(_, index) => ({
        //   length: ITEM_HEIGHT,
        //   offset: ITEM_HEIGHT * index,
        //   index,
        // })}
      />
    );
  }

  function monthPicker() {
    return (
      <FlatList
        data={months}
        renderItem={({ item }) => renderItem(item, selectedDate.getMonth() + 1)}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          onScrollEnd(months, e.nativeEvent.contentOffset.y, (month) =>
            updateSelectedDate(
              selectedDate.getFullYear(),
              month,
              selectedDate.getDate()
            )
          )
        }
        contentContainerStyle={styles.listContainer}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    );
  }

  function yearPicker() {
    return (
      <FlatList
        data={years}
        renderItem={({ item }) => renderItem(item, selectedDate.getFullYear())}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          onScrollEnd(years, e.nativeEvent.contentOffset.y, (year) =>
            updateSelectedDate(
              year,
              selectedDate.getMonth() + 1,
              selectedDate.getDate()
            )
          )
        }
        contentContainerStyle={styles.listContainer}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    );
  }

  function calender() {
    return (
      <View style={styles.dateContainer}>
        {/* // Date */}
        <View style={styles.subContainer}>
          <Text>Date</Text>
          {datePicker()}
        </View>
        {/* // month  */}
        <View style={styles.subContainer}>
          <Text>Month</Text>
          {monthPicker()}
        </View>
        {/* // year */}
        <View style={styles.subContainer}>
          <Text>Year</Text>
          {yearPicker()}
        </View>
      </View>
    );
  }

  return wants == "calender" ? (
    calender()
  ) : (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        {/* Selection Overlay */}
        <View style={styles.selectionOverlay} />
        {/* Day picker */}
        {["date", "calender", "All"].includes(wants) && datePicker()}
        {/* Month picker */}
        {["month", "calender", "All"].includes(wants) && monthPicker()}
        {/* Year picker */}
        {["year", "calender", "All"].includes(wants) && yearPicker()}
      </View>
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    borderColor: "#ddd",
    // borderRadius: 10,
    // overflow: "hidden",
    // backgroundColor: "#f9f9f9",
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
  },
  listContainer: {
    paddingVertical: ITEM_HEIGHT * 2,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItem: {
    // backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
  selectedItemText: {
    fontWeight: "bold",
    color: "#000",
  },
  selectionOverlay: {
    position: "absolute",
    top: (ITEM_HEIGHT * VISIBLE_ITEMS) / 2 - ITEM_HEIGHT / 2,
    width: "100%",
    height: ITEM_HEIGHT,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#007aff",
    zIndex: 1,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 80,
    marginTop: 40,
  },
  subContainer: { height: 200, marginBottom: 9 },
});
