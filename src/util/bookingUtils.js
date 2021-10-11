export const getSelectedCountryAndCode = (selectedItem) => {
  const [countryName, city] = selectedItem.split(',');
  const countryCode = city.substring(0, 4).toUpperCase();
  return [countryName, countryCode];  
};