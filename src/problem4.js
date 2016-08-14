
export const isPalindrome = num => {
  const str = num.toString();
  let res = true;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(str.length - (i + 1))) {
      res = false;
    }
  }

  return res;
};

export default digits => {
  const max = Math.pow(10, digits) - 1;
  const min = max / 2;

  let maxPalindrome = 0;

  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      if (isPalindrome(i * j) && (i * j) > maxPalindrome) {
        maxPalindrome = i * j;
      }
    }
  }

  return maxPalindrome;
};
