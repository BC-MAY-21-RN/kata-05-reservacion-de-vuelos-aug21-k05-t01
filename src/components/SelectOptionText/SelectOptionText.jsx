import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './SelectOptionTextStyle';

const SelectOptionText = ({data, SelectState, action}) => {
  return (
    <SelectDropdown
      buttonStyle={SelectState ? styles.buttonSelect : styles.buttonSelectNext}
      buttonTextStyle={SelectState ? styles.textSelect : styles.textSelectText}
      defaultButtonText="Select location"
      data={data}
      onSelect={(selectedItem, index) => {
        action();
      }}
    />
  );
};
export default SelectOptionText;
