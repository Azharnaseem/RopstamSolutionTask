import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: AppColors.blue,
    fontWeight: "bold",
    fontSize: width(4),
  },

  headerConStyle: {
    width: width(90),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    paddingHorizontal: width(4),
    marginVertical: height(1),
  },
  backIconContainer: {
    height: height(8),
    width: height(8),
    backgroundColor: AppColors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width(8),
  },
});
export default styles;
