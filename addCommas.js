function addCommas(num) {
  const num_arr = Array.from(num.toString());
  const end = num_arr[0] === "-" ? 2 : 1;
  for (let i = num_arr.length - 3; i >= end; i = i - 3) {
    num_arr.splice(i, 0, ",");
  }
  return num_arr.join("");
}

module.exports = addCommas;
