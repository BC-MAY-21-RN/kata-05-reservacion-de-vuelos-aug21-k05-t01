export const getSelectedCountryAndCode = (selectedItem) => {
  const [countryName, city] = selectedItem.split(',');
  const countryCode = city.substring(0, 4).toUpperCase();
  return [countryName, countryCode];  
};

export const handleSelectorChange = (selectedItem, setSelectedOption) => {
  const [fromCountryName, fromCountryCode] = getSelectedCountryAndCode(selectedItem); 
  setSelectedOption({fromCountryName, fromCountryCode});
};

export const parsedMonths = {
  0: 'January',
  1: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
}
