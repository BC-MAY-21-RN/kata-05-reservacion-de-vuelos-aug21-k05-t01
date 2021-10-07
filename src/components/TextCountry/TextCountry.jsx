import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './TextCountryStyle';
import ResourceContries from '../../services/data/countries.json';
import TextLabelBooking from '../TextLabeBooking/TextLabelBooking';
import SelectOptionText from '../SelectOptionText/SelectOptionText';
export const TextCountry = () => {
  const [showTextSelect, setShowTextSelect] = useState(true);

  const countries = ResourceContries.map(
    value => `${value.name}, ${value.cities[0]}`,
  );
  const activeSelectText = () => {
    setShowTextSelect(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextLabelBooking
          style={styles.textInputLabel}
          text="Where are you now?"
        />
        <View style={styles.rowBoxSelect}>
          <SelectOptionText
            SelectState={showTextSelect}
            action={activeSelectText}
            data={countries}
          />
        </View>
      </View>
    </ScrollView>
  );
};
