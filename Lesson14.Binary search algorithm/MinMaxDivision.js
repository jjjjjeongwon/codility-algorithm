function solution(K, M, A) {
  let left = Math.min(...A); // 최소값을 기준으로 초기화
  let right = A.reduce((a, b) => a + b, 0); // 모든 원소의 합을 기준으로 초기화

  while (left <= right) {
    // 이 부분을 수정
    const mid = Math.floor((left + right) / 2);

    let currentSum = 0;
    let count = 1; // 초기값을 1로 설정

    for (let i = 0; i < A.length; i++) {
      currentSum += A[i];

      if (currentSum > mid) {
        currentSum = A[i];
        count++; // 부분 배열 개수 증가
      }
    }

    if (count <= K) {
      right = mid - 1; // 이 부분을 수정
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// 테스트
let K = 3;
let M = 5;
let A = [2, 1, 5, 1, 2, 2, 2];

console.log(solution(K, M, A)); // 6 출력

K = 1;
M = 1;
A = [0];

console.log(solution(K, M, A)); // 0 출력
