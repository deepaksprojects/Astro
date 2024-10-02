import { ScrollView, View } from "react-native";
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
      <View>
        <Text variant="labelSmall"> {title}</Text>
        {/* Think About expo link for routing */}
        <Text variant="labelSmall" onPress={onSeeAll}>
          See All
        </Text>
      </View>
      <ScrollView horizontal>
        {data?.map((item, index) => renderItem(item, index))}
      </ScrollView>
    </View>
  );
};

export default HorizontalGrid;
