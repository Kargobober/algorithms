/**
 * Получение суммы чисел.
 *
 * @algoComplexity aO(N)
 */
function getSum(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]!;
  }
  return sum;
}

// Найти индексы чисел, дающих в сумме target. Решение во входных данных всегда есть и оно одно.
function twoSum_v1(nums: number[], target: number): number[] {
  const maper = nums.map((num, idx) => ({ num, idx }));

  maper.sort((a, b) => a.num - b.num);

  let l = 0;
  let r = maper.length - 1;

  while (l < r) {
    const sum = maper[l]!.num + maper[r]!.num;

    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [maper[l]!.idx, maper[r]!.idx];
    }
  }

  return [];
}

function twoSum_v2(nums: number[], target: number): number[] {
  // number value --> index
  const mapa = new Map<number, number>();

  mapa.set(nums[0]!, 0);

  for (let i = 1; i < nums.length; i++) {
    const complement = target - nums[i]!;

    if (mapa.has(complement)) {
      return [mapa.get(complement)!, i];
    } else {
      mapa.set(nums[i]!, i);
    }
  }

  return [];
}
