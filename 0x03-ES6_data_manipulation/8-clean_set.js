export default function cleanSet(set, startString) {
  let str = '';
  if (startString.length !== 0) {
    for (const one of set) {
      if (one.includes(startString, 0)) {
        str = `${str}-${one.slice(startString.length)}`;
        // console.log(str);
      }
    }
  }
  return str.slice(1);
}
