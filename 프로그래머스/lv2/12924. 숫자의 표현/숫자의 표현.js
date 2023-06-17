function solution(n) {
    var sum = 0;
    var cnt = 0;
    for(var i=1; i <= n; i++){
        sum = 0;
        for(var j=i; j <=n; j++){
            sum += j;
            if(sum == n) {
                cnt++;
                break;
            }else if(sum > n){
                break;
            }
        }
    }
    return cnt;
}