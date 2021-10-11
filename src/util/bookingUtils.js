export const getSelectedCountryAndCode = (selectedItem) => {
  const [countryName, city] = selectedItem.split(',');
  const countryCode = city.substring(0, 4).toUpperCase();
  return [countryName, countryCode];  
};

export const handleSelectorChange = (selectedItem, setSelectedOption) => {
  const [fromCountryName, fromCountryCode] = getSelectedCountryAndCode(selectedItem); 
  setSelectedOption({fromCountryName, fromCountryCode});
};