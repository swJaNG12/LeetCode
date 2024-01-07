/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 var strStr = function (haystack, needle) {
   const lps = createTable(needle);
   let haystackIdnex = 0;
   let needleIndex = 0;

   while(haystackIdnex < haystack.length) {
     if(haystack[haystackIdnex] === needle[needleIndex]) {
       if(needleIndex === needle.length - 1) {
         return haystackIdnex - needleIndex;
       }
       needleIndex++;
       haystackIdnex++;
     } else if(needleIndex > 0) {
       needleIndex = lps[needleIndex - 1];
     } else {
       haystackIdnex++;
     }
   }
   return -1;
 }

function createTable (needle) {
  const lps = new Array(needle.length).fill(0);
  let prev = 0
  let i = 1;

  while(i < needle.length) {
    if(needle[prev] === needle[i]) {
      prev++;
      lps[i] = prev;
      i++;
    } else {
      if(prev === 0) {
        lps[i] = 0;
        i++
      } else {
        prev = lps[prev - 1];
      }
    }
  }
  return lps;
}

