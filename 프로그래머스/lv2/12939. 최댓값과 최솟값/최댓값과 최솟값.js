function solution(s) {
    var answer = '';
    var arr = s.split(' ').map(Number);
    arr.sort();

    answer += arr[0] + ' ' + arr[arr.length-1];
    return answer;
}