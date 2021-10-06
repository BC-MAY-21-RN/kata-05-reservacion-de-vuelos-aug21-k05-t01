import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {View} from 'react-native';
import {colors} from '../../util/colors';
import {styles} from './CalendarStyle';

const Calendar = ({selectedDate, setSelectedDate}) => {

  const handleChange = (date, type) => {
    if(type === 'END_DATE') {
      setSelectedDate({...selectedDate, endDate: date});
    } else {
      setSelectedDate({...selectedDate, startDate: date});
    }
  };

  const minDate = Date();

  return(
    <View style={styles.calendarContainer}>
      <CalendarPicker 
        startFromMonday={true}
        minDate={minDate}
        selectedDayColor={colors.blue}
        selectedDayTextColor={colors.white}
        onDateChange={handleChange}
      />
    </View>
  );
};

export default Calendar;
