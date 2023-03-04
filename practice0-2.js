function getPhoneNumber(number, prefix) {
  if (prefix) {
    if (number.startsWith("0")) {
      number = number.substring(1); // substring(1) removes one character at the start of the string
    }
    return `${prefix}${number}`;
  } else {
    return `${number}`;
  }
}

getPhoneNumber("073858489"); // false
getPhoneNumber("73858489", "+49"); // true
getPhoneNumber("073858489", "+33"); // false