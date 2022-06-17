export default function appendToEachArrayValue(array, appendString) {
    var arr = Array();  
    for (idx of array) {
      arr.push(appendString + idx);
    }
  
    return arr;
}