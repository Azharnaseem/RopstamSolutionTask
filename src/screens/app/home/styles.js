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
  headerContainer: {
    width: width(90),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    color: AppColors.blue,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
  dataContainer: {
    height: height(30),
    justifyContent: "space-between",
  },
  inputStyle: {
    borderRadius: width(3),
    borderWidth: width(0.1),
    borderColor: AppColors.black,
    height: height(6),
    justifyContent: "center",
  },
  logoutBtnStyle: {
    borderRadius: width(3),
    backgroundColor: AppColors.blue,
    width: width(16),
    height: height(6),
    marginVertical: height(2),
  },
});
export default styles;
