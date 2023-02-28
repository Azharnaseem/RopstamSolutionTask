import React, { useState } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, ScreenWrapper } from "~components";
import { setAppLoader } from "~redux/slices/config";
import {
  selectUserMeta,
  setIsLoggedIn,
  setUserMeta,
  setVehicelsData,
} from "~redux/slices/user";
import styles from "./styles";
import { SelectList } from "react-native-dropdown-select-list";
import { height } from "~utills/Dimension";
import { erroMessage } from "~utills/Methods";
import ScreenNames from "~routes/routes";
export default function Home({ navigation, route }) {
  const dispatch = useDispatch();
  const carTypes = [
    { key: "1", value: "Limousine Car" },
    { kye: "2", value: "Sports Car" },
    { key: "3", value: "Race Cars" },
    { key: "4", value: " Small Mehran " },
  ];
  const carNames = [
    { key: "1", value: "Limousine" },
    { kye: "2", value: "Vigo" },
    { key: "3", value: "Corrola" },
    { key: "4", value: "Taxi" },
  ];
  const carColors = [
    { key: "1", value: "Red" },
    { kye: "2", value: "Black" },
    { key: "3", value: "Green" },
    { key: "4", value: "Yellow" },
  ];
  const userInfo = useSelector(selectUserMeta);
  const [selectedData, setSelectedData] = useState({
    CarName: "",
    CarType: "",
    CarColor: "",
    regNo: "",
  });
  const AddData = () => {
    if (selectedData?.CarName == "" && selectedData?.CarName == undefined) {
      erroMessage("select car name");
      return;
    } else if (selectedData?.CarType == "") {
      erroMessage("select car Type");
      return;
    } else if (selectedData?.CarColor == "") {
      erroMessage("select car Color");
      return;
    } else if (selectedData?.regNo == "") {
      erroMessage("select car RegNo");
      return;
    } else {
      dispatch(setVehicelsData(selectedData));
      navigation.navigate(ScreenNames.ADDEDDATASCREEN);
    }
  };
  return (
    <ScreenWrapper scrollEnabled>
      <View style={styles.mainViewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Select Cars</Text>
          <Button
            containerStyle={styles.logoutBtnStyle}
            title={"Logout"}
            onPress={() => {
              dispatch(setAppLoader(true));
              setTimeout(() => {
                dispatch(setUserMeta(null));
                dispatch(setIsLoggedIn(false));
                dispatch(setAppLoader(false));
              }, 600);
            }}
          />
        </View>
        <View style={styles.dataContainer}>
          <SelectList
            defaultOption={{ key: "1", value: "Select Car Name" }}
            setSelected={(val) =>
              setSelectedData({ ...selectedData, CarName: val })
            }
            data={carNames}
            search={false}
            save="value"
          />
          <SelectList
            defaultOption={{ key: "1", value: "Select Car Type" }}
            setSelected={(val) =>
              setSelectedData({ ...selectedData, CarType: val })
            }
            data={carTypes}
            save="value"
            search={false}
          />
          <SelectList
            defaultOption={{ key: "1", value: "Select Car " }}
            setSelected={(val) =>
              setSelectedData({ ...selectedData, CarColor: val })
            }
            data={carColors}
            save="value"
            search={false}
          />
          <Input
            textinputViewStyle={styles.inputStyle}
            value={selectedData?.regNo}
            onChangeText={(val) =>
              setSelectedData({ ...selectedData, regNo: val })
            }
            placeholder={"Enter Registration Number"}
            returnKeyType={"done"}
          />
        </View>
        <View style={{ marginTop: height(40), alignItems: "center" }}>
          <Text
            style={styles.title}
          >{` User Name: ${userInfo?.firstName} ${userInfo?.lastname}`}</Text>
          <Text style={styles.title}>{userInfo?.email}</Text>
          <Button
            title={"Add Car Detail"}
            containerStyle={{ marginTop: height(1) }}
            onPress={() => AddData()}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
