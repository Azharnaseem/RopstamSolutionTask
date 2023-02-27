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
    fontSize: width(6),
    marginBottom: height(2),
  },
  inputContainer: {
    height: height(40),
    marginVertical: height(4),
    justifyContent: "space-between",
    alignItems: "center",
  },
  signupText: {
    color: AppColors.blue,
    fontStyle: "italic",
    fontWeight: "900",
  },
  btnContainer: {
    marginVertical: height(1),
    backgroundColor: AppColors.blue,
  },
  conditionCon: {
    marginTop: height(1),
    flexDirection: "row",
  },
});
export default styles;
