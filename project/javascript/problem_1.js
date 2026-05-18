const assert = require('node:assert'); // Do not touch this

/*
 * You'll earn points for each test your function passes.
 * There are 15 tests total: 5 that you can see and work with,
 * plus 10 hidden tests that I'll use to evaluate your final submission.
 */

function isValidParentheses(str) {
  const matchingOpen = { ')': '(', '}': '{', ']': '[' };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== matchingOpen[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

/*
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Ignore everything under this part as this is only to help you asses if what you built is accurate.
 * DO NOT MODIFY ANYTHING UNDER THIS COMMENT, ANY MODIFICATION COULD RESULT WITH THE INVALIDATION OF YOUR
 * SUBMISSION.
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

function runTest(id, input, expected) {
  try {
    const result = isValidParentheses(input);
    assert.strictEqual(result, expected);
    console.log(`Test ${id} Passed: "${input}" => ${expected}`);
  } catch (err) {
    console.error(`Test ${id} Failed: "${input}" | Expected ${expected} but got ${!expected}`);
  }
}

console.log("Starting Parentheses Validation Tests...\n");

// Basic Valid Cases
runTest(1, "()", true);
runTest(2, "[]", true);
runTest(3, "{}", true);

// Combined Valid Cases
runTest(4, "()[]{}", true);
runTest(5, "{[()]}", true);

console.log("\nTests Completed.");
