import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
const styles = StyleSheet.create({
  container: {
    height: height(6.8),
    width: width(80),
    // backgroundColor: "green",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(2),
    borderBottomColor: AppColors.black,
    borderBottomWidth: width(0.3),
  },
  iconStyle: {
    width: width(8),
    alignItems: "flex-end",
  },
  textInputView: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    fontSize: width(3.8),
    color: AppColors.black,
    left: -width(1),
    height: height(5),
  },
});
export default styles;
