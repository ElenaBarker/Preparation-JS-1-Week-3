function getTruthiness(expression) {
  if (expression) {
    return true;
  } else {
    return false;
  }
}

getTruthiness(0); // false
getTruthiness(4); // true
getTruthiness(-1); // true
getTruthiness(""); // false
getTruthiness("hello"); //true
getTruthiness(undefined); //false
getTruthiness(); // false