/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const originalColor = image[sr][sc]; 
  if (originalColor === color) return image;
  const pixels = [[sr, sc]];
  
  while(pixels.length !== 0) {
    const [x,y] = pixels.pop();
    if(image[x][y] !== originalColor) continue;
    image[x][y] = color
    
    if(y - 1 >= 0 && image[x][y-1] === originalColor) {
      pixels.push([x,y-1]);
    }
    if(y + 1 < image[0].length && image[x][y+1] === originalColor) {
      pixels.push([x, y+1]);
    }
    if(x - 1 >= 0 && image[x-1][y] === originalColor) {
      pixels.push([x-1, y]);
    }
    if(x + 1 < image.length && image[x+1][y] === originalColor) {
      pixels.push([x+1,y]);
    }
  }
  return image;
};