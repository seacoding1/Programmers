function solution(myString) {
    var answer = [];

        var arr = myString.split('x');

         for(let i in arr){
            answer[i] = arr[i].length;
         }

        return answer;
}