import { randomUUID } from 'crypto';

/**
 * Generates a random string of the specified length using characters from the given charset.
 * Optionally appends the current timestamp with a custom separator.
 *
 * @param {number} [length=10]
 * @param {boolean} [withTimestamp=false]
 * @param {string} [separator='']
 * @param {string} [charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789']
 * @returns {string}
 */
export function rsgUtil(
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
 * @param {boolean} [withTimestamp=false]
 * @param {string} [separator='']
 * @returns {string}
 */
export function rsgUtilShort(withTimestamp = false, separator = '') {
  return rsgUtil(6, withTimestamp, separator);
}

/**
 * Generates a hex-style string using 'abcdef0123456789'.
 *
 * @param {number} [length=8]
 * @param {boolean} [withTimestamp=false]
 * @param {string} [separator='']
 * @returns {string}
 */
export function rsgUtilHex(length = 8, withTimestamp = false, separator = '') {
  const hexCharset = 'abcdef0123456789';
  return rsgUtil(length, withTimestamp, separator, hexCharset);
}

/**
 * Generates a UUID v4 string.
 *
 * @returns {string}
 */
export function rsgUtilUUID() {
  return randomUUID();
}

