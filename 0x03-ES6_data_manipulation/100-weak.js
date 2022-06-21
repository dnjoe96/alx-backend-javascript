const weakMap = new WeakMap();

/**
  * queryAPI - A function to query API
  * @param {obj} endpoint - An endpoint object
  */
export default function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    if (weakMap.get(endpoint) >= 5) {
      throw Error('Endpoint load is high');
    }
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    return;
  }
  weakMap.set(endpoint, 1);
}

module.exports = { queryAPI, weakMap };
