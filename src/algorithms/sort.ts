/**
 * @algoComplexity O(N²)
 */
export function bubbleSort(arr: number[]) {
  for (let j = arr.length - 1; j > 0; j--) {
    // С каждой итерацией верхняя граница j уменьшается на единицу, поскольку мы знаем,
    // что элемент с данным индексом уже отсортирован.
    for (let i = 0; i < j; i++) {
      if (arr[i]! > arr[i + 1]!) {
        const swap = arr[i]!;
        arr[i] = arr[i + 1]!;
        arr[i + 1] = swap;
      }
    }
  }
}
