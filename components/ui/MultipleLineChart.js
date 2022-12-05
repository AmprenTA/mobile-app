import { Text, View, Dimensions, ScrollView, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Colors } from "../../constants/styles";
function MultipleLineChart() {
  const min = 0;
  const max = 100;
  return (
    <View>
      <ScrollView horizontal={true}>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                color: (opacity = 1) => `rgba(255, 97, 101, ${1})`,
                strokeWidth: "1.5",
              },
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                color: (opacity = 1) => `rgba(252, 211, 81, ${1})`,
                strokeWidth: "1.5",
              },
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                color: (opacity = 1) => `rgba(80, 144, 70, ${1})`,
                strokeWidth: "1.5",
              },
              {
                data: [min, max],
                color: () => "transparent",
                strokeWidth: 0,
                withDots: false,
              },
            ],
            // legend: ["CĂLĂTORII", "ALIMENTAȚIE", "GOSPODĂRIE"],
          }}
          width={Dimensions.get("window").width} // from react-native
          // width={1000}
          height={220}
          yAxisSuffix="kg"
          withShadow={false}
          withInnerLines={false}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: Colors.background,
            backgroundGradientTo: Colors.background,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${1})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              // stroke: "#ffa726",
            },
            // propsForBackgroundLines: {
            //   strokeDasharray: "", // solid background lines with no dashes
            // },
          }}
          style={{
            borderRadius: 16,
          }}
        />
      </ScrollView>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View
            style={[styles.legendColor, { backgroundColor: Colors.red }]}
          ></View>
          <Text style={styles.legendText}>Transport</Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[styles.legendColor, { backgroundColor: Colors.yellow }]}
          ></View>
          <Text style={styles.legendText}>Alimentație</Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[styles.legendColor, { backgroundColor: Colors.green }]}
          ></View>
          <Text style={styles.legendText}>Gospodărie</Text>
        </View>
      </View>
    </View>
  );
}

export default MultipleLineChart;

const styles = StyleSheet.create({
  legend: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: "row",
  },
  legendColor: {
    width: 20,
    height: 18,
  },
  legendText: {
    fontSize: 12,
    marginLeft: 8,
  },
});
