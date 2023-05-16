function solution(food) {
     var answer = '';
        var stack = [];
        for(var i = 1; i < food.length; i++){
            for(var j = 1; j <= food[i]/2; j++){
                answer += i;
                stack.push(i);
            }
            if(i == food.length-1){
                    answer += 0;
                }

        }

        while(stack.length != 0){
            answer += stack.pop();
        }

        return answer;
}