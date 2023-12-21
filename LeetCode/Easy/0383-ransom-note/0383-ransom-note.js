/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const createObj = (string) => {
  const obj = {};
  string.split('').forEach(str => {
    obj[str] = (obj[str] ?? 0) + 1;
  })
  return obj;
}

var canConstruct = function(ransomNote, magazine) {
  const magazineObj = createObj(magazine);
  const ransomNoteObj = createObj(ransomNote);
  const result = Object.keys(ransomNoteObj).filter(key => magazineObj[key] >= ransomNoteObj[key]);
  if(result.length === Object.keys(ransomNoteObj).length) return true;
  else return false;
};