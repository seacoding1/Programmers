function solution(my_string, indices) {
     indices.sort(function compare(a, b) {
            return a - b;
        });

        var answer = '';
        var j = 0;
        for(var i = 0; i < my_string.length; i++){
           if(indices[j] == i){
                j++;
           }else {
                answer+= my_string.split('')[i];
           }

        }

        return answer;
}