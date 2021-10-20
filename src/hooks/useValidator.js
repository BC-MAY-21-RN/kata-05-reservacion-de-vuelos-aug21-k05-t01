import {useEffect, useState} from 'react';

export const useValidator = ({firstName, email, password, termsCheckBox}) => {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (
      firstName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      termsCheckBox == true
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    firstName !== '' &&
      email !== '' &&
      password !== '' &&
      termsCheckBox == true,
  ]);
  return [isValid, setIsValid];
};
