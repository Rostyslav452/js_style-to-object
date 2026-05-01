'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedRules = sourceString
    .trim()
    .split(';')
    .map((e) =>
      e
        .split(':')
        .map((v) => v.trim())
        .filter((l) => l.length > 0));

  return parsedRules.reduce(
    (acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] }),
    {},
  );
}

module.exports = convertToObject;
