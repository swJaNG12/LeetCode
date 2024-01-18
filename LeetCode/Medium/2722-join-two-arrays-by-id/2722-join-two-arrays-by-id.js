/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  let merged = {};

  for(const obj of arr1) {
    merged[obj.id] = obj;
  }
  for(const obj of arr2) {
    merged[obj.id] = merged[obj.id] ? {...merged[obj.id], ...obj} : {...obj};
  }

  return Object.values(merged).sort((a,c) => a.id - c.id, 0);
};
