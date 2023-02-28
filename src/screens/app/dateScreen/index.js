import React from "react";
import { FlatList } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ScreenWrapper, VehicleData } from "~components";
import { CaretLeftSVG } from "~components/assets/svg";

import { dataVehicle, deleteCard } from "~redux/slices/user";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import { erroMessage, successMessage } from "~utills/Methods";
import styles from "./styles";
export default function AddedDataScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const data = useSelector(dataVehicle);
  const DeleteCar = (index) => {
    dispatch(deleteCard(index));
    successMessage("Card deleted successfully");
  };
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginTop: height(1) }}>
        <VehicleData
          itemNo={index + 1}
          Carname={item?.CarName}
          CarType={item?.CarType}
          CarColor={item?.CarColor}
          RegNumber={item?.regNo}
          onPressDelete={() => DeleteCar(index)}
          onPressEdit={() =>
            erroMessage("Edit functionality ic implement by Developer")
          }
        />
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View style={styles.headerConStyle}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIconContainer}
          >
            <CaretLeftSVG
              height={height(3)}
              width={width(4)}
              color={AppColors.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Click Back To add More Cars</Text>
        </View>

        <View style={{ height: height(50) }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(i, n) => n}
            contentContainerStyle={{ paddingBottom: height(6) }}
            style={{ paddingVertical: height(1), backgroundColor: "gray" }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
