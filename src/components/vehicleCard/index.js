import React, { forwardRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "~components/button";
import AppColors from "~utills/AppColors";
import styles from "./styles";

const VehicleData = ({
  Carname,
  CarType,
  CarColor,
  RegNumber,
  containerStyle = {},
  itemNo,
  onPressDelete,
  onPressEdit,
}) => {
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <Text>{`${itemNo}:`}</Text>
        <Text style={styles.textStyle} color={AppColors.black}>
          {Carname}
        </Text>
        <Text style={styles.textStyle} color={AppColors.black}>
          {CarType}
        </Text>
        <Text style={styles.textStyle} color={AppColors.black}>
          {CarColor}
        </Text>
        <Text style={styles.textStyle} color={AppColors.black}>
          {RegNumber}
        </Text>
      </View>
      <View style={styles.btnsContainer}>
        <Button
          onPress={onPressDelete}
          containerStyle={styles.deltebtnStyle}
          title={"Delete"}
        />
        <Button
          onPress={onPressEdit}
          containerStyle={styles.editBtnStyle}
          title={"Edit"}
        />
      </View>
    </View>
  );
};

export default VehicleData;
