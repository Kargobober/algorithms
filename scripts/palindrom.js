// @ts-check
// Является ли слово палиндромом

const str1 = 'Искать такси';

/**
 * Решение в лоб.
 *
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrom(str) {
  return str === str.split('').reverse().join();
}

/**
 * Решение через два указателя.
 *
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrom2(str) {
  // левый указатель
  let l = 0;
  // правый указатель
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

// Граничные случаи
// - учитывать ли регистр символов
// - поддержка суррогатных пар (смайлики)
