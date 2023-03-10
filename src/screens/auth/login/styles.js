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
    height: height(20),
    marginVertical: height(4),
    justifyContent: "space-between",
  },
  btnContainer: {
    marginVertical: height(1),
    backgroundColor: AppColors.blue,
  },
  signupText: {
    color: AppColors.blue,
    fontWeight: "900",
    fontStyle: "italic",
  },
  conditionCon: {
    marginTop: height(1),
    flexDirection: "row",
  },
});
export default styles;
