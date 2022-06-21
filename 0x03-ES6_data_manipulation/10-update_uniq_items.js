/**
  * updateUniqueItems - A function updates map object
  * @param {Map} map - Map object to update
  * @returns {Map} Updated map where value of 1 is updated to 100
  */
export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const one of map.keys()) {
      if (map.get(one) === 1) {
        map.set(one, 100);
      }
    }
    return map;
  }
  throw Error('Cannot process');
}
