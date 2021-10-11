import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './TextCountryStyle';
import ResourceContries from '../../services/data/countries.json';
import TextLabelBooking from '../TextLabeBooking/TextLabelBooking';
import SelectOptionText from '../SelectOptionText/SelectOptionText';

const TextCountry = ({text = 'Where are you now?', onChange = () => {}}) => {
  const [showTextSelect, setShowTextSelect] = useState(true);

  const countries = ResourceContries.map(
    value => `${value.name}, ${value.cities[0]}`,
  );
  const activeSelectText = (selectedItem) => {
    setShowTextSelect(false);
    onChange(selectedItem);
  };

  return (
    <View style={styles.container}>
      <TextLabelBooking
        style={styles.textInputLabel}
        text={text}
      />
      <View style={styles.rowBoxSelect}>
        <SelectOptionText
          SelectState={showTextSelect}
          action={activeSelectText}
          data={countries}
        />
      </View>
    </View>
  );
};

export default TextCountry;
