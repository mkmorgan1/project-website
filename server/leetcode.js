var romanToInt = function(s) {
  const romans = [
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
  ]
  // 990 XM
  // IC
  let romanNumeral = '';
  const romanfy = () => {
    for (let i = romans.length - 1; i >= 0; i--) {
      let key = romans[i][0];
      let value = romans[i][1];
      if (s >= value) {
        romanNumeral = romanNumeral + key;
        s -= value;
      } else if (s < value && s > (romans[i - 1][1] + (romans[i - 2][1] * 3 ))) {

      }
    }
  }

};