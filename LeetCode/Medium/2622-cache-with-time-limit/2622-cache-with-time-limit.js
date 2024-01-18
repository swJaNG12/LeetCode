var TimeLimitedCache = function() {
  this.cache = {};
  this.timeouts = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const keyExists = Object.hasOwn(this.cache, key);
  if(keyExists) {
    clearTimeout(this.timeouts[key]);
  }
  this.cache[key] = value;

  this.timeouts[key] = setTimeout(() => {
    delete this.cache[key]
    delete this.timeouts[key];
  }, duration);

  return keyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  const keyExists = Object.hasOwn(this.cache, key);
  return keyExists ? this.cache[key] : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  return Object.keys(this.cache).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */