import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
const styles = StyleSheet.create({
  container: {
    height: height(6),
    width: width(90),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: height(1),
    paddingHorizontal: width(4),
  },
  textStyle: {
    fontSize: width(4),
    fontWeight: "bold",
  },
  btnsContainer: {
    width: width(50),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deltebtnStyle: {
    borderRadius: width(3),
    backgroundColor: AppColors.red,
    width: width(20),
  },
  editBtnStyle: {
    borderRadius: width(3),
    backgroundColor: "green",
    width: width(20),
  },
});
export default styles;
