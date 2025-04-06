const crypto = require('crypto');

/**
 * Generates a random string of the specified length using characters from the given charset.
 * Optionally appends the current timestamp, with a customizable separator.
 *
 * @function rsgUtil
 * @param {number} [length=10] - Length of the random part of the string.
 * @param {boolean} [withTimestamp=false] - Whether to append the current timestamp.
 * @param {string} [separator=''] - Separator between the random string and the timestamp.
 * @param {string} [charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'] - Characters to randomly pick from.
 * @returns {string} A random string, optionally suffixed with a timestamp.
 */
function rsgUtil(
  length = 10,
  withTimestamp = false,
  separator = '',
  charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
) {
  let result = '';
  const charsetLength = charset.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    result += charset[randomIndex];
  }

  return withTimestamp ? `${result}${separator}${Date.now()}` : result;
}

/**
 * Generates a short 6-character alphanumeric string.
 *
 * @function rsgUtilShort
 * @param {boolean} [withTimestamp=false] - Whether to append the current timestamp.
 * @param {string} [separator=''] - Separator between the string and timestamp.
 * @returns {string} A 6-character string, optionally with timestamp.
 */
function rsgUtilShort(withTimestamp = false, separator = '') {
  return rsgUtil(6, withTimestamp, separator);
}

/**
 * Generates a hex-style string using `abcdef0123456789`.
 *
 * @function rsgUtilHex
 * @param {number} [length=8] - Length of the hex string.
 * @param {boolean} [withTimestamp=false] - Whether to append the current timestamp.
 * @param {string} [separator=''] - Separator between the string and timestamp.
 * @returns {string} A hex string, optionally with timestamp.
 */
function rsgUtilHex(length = 8, withTimestamp = false, separator = '') {
  const hexCharset = 'abcdef0123456789';
  return rsgUtil(length, withTimestamp, separator, hexCharset);
}

/**
 * Generates a UUID v4-compliant string.
 *
 * @function rsgUtilUUID
 * @returns {string} A UUID v4 string.
 */
function rsgUtilUUID() {
  return crypto.randomUUID();
}

module.exports = {
  rsgUtil,
  rsgUtilShort,
  rsgUtilHex,
  rsgUtilUUID
};
