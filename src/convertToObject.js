'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const map = new Map();

  const trimmed = sourceString
    .trim()
    .split(';')
    .flatMap((e) => e.split(':'))
    .flatMap((e) => e.trim())
    .filter((e) => e.length > 0);

  for (let i = 0; i < trimmed.length; i += 2) {
    map.set(trimmed[i], trimmed[i + 1]);
  }

  return Object.fromEntries(map);
}

module.exports = convertToObject;
