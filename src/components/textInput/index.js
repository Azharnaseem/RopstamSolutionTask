import React, { forwardRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppColors from "~utills/AppColors";
import styles from "./styles";

const Input = (
  {
    title,
    placeholder,
    placeholderTextColor = AppColors.black + "80",
    onChangeText,
    keyboardType = "default",
    secureTextEntry = false,
    Icon,
    containerStyle = {},
    textInputStyle = {},
    textinputViewStyle = {},
    onIconPress,
    selectionColor = AppColors.black2,
    onSubmitEditing,
    autoCapitalize,
    maxLength,
    numberOfLines,
    editable = true,
    multiline = false,
    textAlignVertical,
    onTextInputBlur,
    returnKeyType,
    onPressIn,
    value,
    tittleTextStyle,
    containerWidth = 82,
  },
  ref
) => {
  return (
    <View>
      <View style={[styles.container, textinputViewStyle]}>
        <View style={styles.textInputView}>
          <Text style={tittleTextStyle} color={AppColors.black}>
            {title}
          </Text>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            style={[styles.input, textInputStyle]}
            secureTextEntry={secureTextEntry}
            selectionColor={selectionColor}
            blurOnSubmit
            onSubmitEditing={onSubmitEditing}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            editable={editable}
            numberOfLines={numberOfLines}
            multiline={multiline}
            ref={ref}
            textAlignVertical={textAlignVertical}
            returnKeyType={returnKeyType}
            onPressIn={onPressIn}
          />
        </View>
        {Icon && (
          <TouchableOpacity onPress={onIconPress} style={styles.iconStyle}>
            {Icon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default forwardRef(Input);
