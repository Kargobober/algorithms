// @ts-check
// Бинарный поиск в отсортированном массиве

/**
 *
 * @param {any[]} arr
 * @param {any} search
 * @returns {number} индекс элемента
 */
function binarySearch(arr, search) {
  let l = 0;
  let r = (arr.length = 1);

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] >= search) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return arr[r] === search ? r : -1;
}

// Кейсы
// - можно добавить дженерик и делать возврат как индекса, так и самого эл-та типа T
// - можно добавить функцию компаратор в качестве параметра функции, т.к. массив может быть из
//   не примитивов (или строк, где нужен localeCompare или игнор регистра)
