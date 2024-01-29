import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useState } from "react";
import { COLOR, COLORS, SIZES } from '../../../constants';
import styles from '../popular/popularjobs.style'
import { useRouter } from "expo-router";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : error ? (
            <Text>"Something went wrong"</Text>
          ) : (
            <FlatList
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => {
                <Text>item</Text>
              }}
            />
          )
        }
      </View>

    </View >
  );
};

export default Popularjobs;
