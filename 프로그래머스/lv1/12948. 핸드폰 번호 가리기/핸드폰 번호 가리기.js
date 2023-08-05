    function solution(phone_number) {
        var answer = '';
        for(var i = 0; i < phone_number.length-4; i++){
            answer += '*';
        }
        answer = answer+phone_number.substring(phone_number.length-4, phone_number.length);
        return answer;
    }