function solution(left, right) {
     var answer = 0;

            var arr = [];
            var num = 0; 
            var cnt = 0;

            for(var i = left; i <= right; i++){
                arr[num] = i;
                num++;
            }

            for(var i = 0; i < arr.length; i++){
                cnt = 0;
                for(var j = 1; j <= arr[i]; j++){
                    if(arr[i] % j == 0)cnt++
                }
                if(cnt%2==0){
                    answer += arr[i];
                }else {
                    answer -= arr[i];
                }
            }
            return answer;
}