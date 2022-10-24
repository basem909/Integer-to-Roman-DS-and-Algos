const intToRoman = (num) => {
  if (!/^\d+$/.test(num)) {
    return true;
  }
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = "";
  let multiplyer = 0;
  for (let i = 0; i < symbols.length; i++) {
    if (num % values[i] == 0) {
      multiplyer = num / values[i];
    } else {
      multiplyer = Math.floor(num / values[i]);
    }
    multiplyer = symbols[i].repeat(multiplyer);
    roman = roman + multiplyer;
    num = num % values[i];
  }
  return roman;
};
