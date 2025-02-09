import React, { useState, useEffect } from "react";
import { Shadow } from "react-native-shadow-2";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Platform,
} from "react-native";
import { createShimmerPlaceHolder } from "expo-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstHeader}>
        <TouchableOpacity style={styles.headerButton}>
          <Image
            style={styles.headerButtonIcon}
            source={require("../assets/icons/settings.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.secondHeader}>
        <Text style={styles.headerTitle}>Habits</Text>
      </View>
      {loading ? (
        <View style={styles.shimmerContainer}>
          <ShimmerPlaceHolder visible={!loading} style={styles.shimmer} shimmerColors={["#FFFFFF", "#E8E8E8", "#FFFFFF"]}/>
          <ShimmerPlaceHolder visible={!loading} style={styles.shimmer} shimmerColors={["#FFFFFF", "#E8E8E8", "#FFFFFF"]}/>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.habitContainer}>
              <View style={styles.habitConHeader}>
                <View style={styles.firstHabitConHeader}>
                  <Image
                    style={styles.firstHeaderConIcon}
                    source={require("../assets/icons/sport.png")}
                  />
                  <Text style={styles.firstHeaderConTitle}>Sport</Text>
                </View>
                <View style={styles.secondHeaderConHeader}>
                  <View style={styles.secondHeaderConStreak}>
                    <Text style={styles.secondHeaderConStreakText}>2</Text>
                    <Image
                      style={styles.secondHeaderConStreakIcon}
                      source={require("../assets/icons/streak_grey.png")}
                    />
                  </View>
                  <TouchableOpacity style={styles.secondHeaderConButton}>
                    <Image
                      style={styles.secondHeaderConIcon}
                      source={require("../assets/icons/check_grey.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.dateContainer}>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Mon</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>27</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Tue</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>28</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Wed</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>28</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Thu</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>29</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Fri</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>30</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Sat</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>31</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Sun</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>1</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.habitContainer}>
              <View style={styles.habitConHeader}>
                <View style={styles.firstHabitConHeader}>
                  <Image
                    style={styles.firstHeaderConIcon}
                    source={require("../assets/icons/book.png")}
                  />
                  <Text style={styles.firstHeaderConTitle}>Lesen</Text>
                </View>
                <View style={styles.secondHeaderConHeader}>
                  <View style={styles.secondHeaderConStreak}>
                    <Text style={styles.secondHeaderConStreakTextActive}>
                      1
                    </Text>
                    <Image
                      style={styles.secondHeaderConStreakIcon}
                      source={require("../assets/icons/streak.png")}
                    />
                  </View>
                  <TouchableOpacity style={styles.secondHeaderConButtonActive}>
                    <Image
                      style={styles.secondHeaderConIcon}
                      source={require("../assets/icons/check.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.dateContainer}>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Mon</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>27</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Tue</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>28</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Wed</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>28</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Thu</Text>
                  <View style={styles.backroundDateGreen}>
                    <Text style={styles.backroundDateTextGreen}>29</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Fri</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>30</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Sat</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>31</Text>
                  </View>
                </View>
                <View style={styles.dayContainer}>
                  <Text style={styles.dayConText}>Sun</Text>
                  <View style={styles.backroundDate}>
                    <Text style={styles.backroundDateText}>1</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      <View style={styles.fabContainer}>
        <Shadow
          distance={5}
          startColor="rgba(0, 0, 0, 0.03)"
          endColor="rgba(0, 0, 0, 0.01)"
          offset={[0, 0]}
        >
          <TouchableOpacity style={styles.FAB}>
            <Image
              style={styles.fabIcon}
              source={require("../assets/icons/add.png")}
            />
          </TouchableOpacity>
        </Shadow>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },

  firstHeader: {
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "transparent",
    marginTop: Platform.OS === "android" ? RNStatusBar.currentHeight || 0 : 0,
  },

  headerButton: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
  },

  headerButtonIcon: {
    height: 24,
    width: 24,
  },

  secondHeader: {
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "transparent",
  },

  headerTitle: {
    fontSize: 28,
    fontFamily: "Poppins-SemiBold",
    marginTop: 6,
  },

  shimmerContainer: {
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },

  shimmer: {
    width: "100%",
    height: 150,
    borderRadius: 25,
  },

  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },

  habitContainer: {
    height: "auto",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 15,
  },

  habitConHeader: {
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  firstHabitConHeader: {
    height: "auto",
    width: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },

  firstHeaderConIcon: {
    height: 24,
    width: 24,
  },

  firstHeaderConTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: "#000000",
    marginBottom: -3,
  },

  secondHeaderConHeader: {
    height: "auto",
    width: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 15,
  },

  secondHeaderConStreak: {
    height: 24,
    width: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 2.5,
  },

  secondHeaderConStreakText: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#D0D0D0",
  },

  secondHeaderConStreakTextActive: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#000000",
  },

  secondHeaderConStreakIcon: {
    height: 24,
    width: 24,
  },

  secondHeaderConButton: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 30,
  },

  secondHeaderConButtonActive: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10EC29",
    borderRadius: 30,
  },

  secondHeaderConIcon: {
    height: 24,
    width: 24,
  },

  dateContainer: {
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 25,
  },

  dayContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  dayConText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#D0D0D0",
    marginBottom: -5,
  },

  backroundDate: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 30,
  },

  backroundDateGreen: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10EC29",
    borderRadius: 30,
  },

  backroundDateText: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#818181",
    marginTop: 3,
  },

  backroundDateTextGreen: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#ffffff",
    marginTop: 3,
  },

  fabContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  FAB: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 100,
  },

  fabIcon: {
    height: 60,
    width: 60,
  },
});

export default HomeScreen;
