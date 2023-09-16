// [1안] 일반적인 stack
function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    stack.push(S[i]);
    let stackLen = stack.length;

    if (stack.length >= 2) {
      if (stack[stackLen - 2] === '(' && stack[stackLen - 1] === ')') {
        stack.pop();
        stack.pop();
      }
      if (stack[stackLen - 2] === '{' && stack[stackLen - 1] === '}') {
        stack.pop();
        stack.pop();
      }
      if (stack[stackLen - 2] === '[' && stack[stackLen - 1] === ']') {
        stack.pop();
        stack.pop();
      }
    }
  }

  if (!stack.length) {
    return 1;
  } else {
    return 0;
  }
}

let S = '([)()]';

console.log(solution(S));

// [2안] dictionary 사용
// function solution(S) {
//     const stack = [];
//     const brackets = {
//       '(': ')',
//       '{': '}',
//       '[': ']',
//     };

//     for (let i = 0; i < S.length; i++) {
//       const char = S[i];

//       if (brackets[char]) {
//         stack.push(char);
//       } else {
//         // 닫힌 괄호인 경우
//         if (!stack.length || brackets[stack.pop()] !== char) {
//           return 0;
//         }
//       }
//     }
//     return stack.length === 0 ? 1 : 0;
//   }

//   let S = '([)()]';

// console.log(solution(S));
