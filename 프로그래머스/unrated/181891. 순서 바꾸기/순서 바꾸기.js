function solution(num_list, n) {
    var answer = [];
              var arr1 = num_list.slice(n,num_list.length)
              var arr2 = num_list.slice(0,n)

              for(i of arr1){
                answer.push(i);
              }

              for(i of arr2){
                answer.push(i);
              }
              return answer;
}