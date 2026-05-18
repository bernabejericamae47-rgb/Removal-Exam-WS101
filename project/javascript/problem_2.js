const assert = require('node:assert'); // Do not touch this

/*
 * You'll earn points for each test your function passes.
 * There are 15 tests total: 5 that you can see and work with,
 * plus 10 hidden tests that I'll use to evaluate your final submission.
 */

function findTwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

/*
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Ignore everything under this part as this is only to help you asses if what you built is accurate.
 * DO NOT MODIFY ANYTHING UNDER THIS COMMENT, ANY MODIFICATION COULD RESULT WITH THE INVALIDATION OF YOUR
 * SUBMISSION.
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

function runTest(id, nums, target, expected) {
  try {
    const result = findTwoSum(nums, target);
    assert.deepStrictEqual(result, expected);
    console.log(`Test ${id} Passed: [${nums}], target ${target} => [${result}]`);
  } catch (err) {
    console.error(`Test ${id} Failed: [${nums}], target ${target} | Expected [${expected}] but got [${findTwoSum(nums, target)}]`);
  }
}

console.log("Starting Two Sum Validation Tests...\n");

runTest(1, [2, 7, 11, 15], 9, [0, 1]);
runTest(2, [3, 2, 4], 6, [1, 2]);
runTest(3, [3, 3], 6, [0, 1]);
runTest(4, [1, 5, 7, 11], 12, [0, 3]);
runTest(5, [10, 20, 30, 40, 50], 90, [3, 4]);

console.log("\nTests Completed.");
