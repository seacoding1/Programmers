function solution(s){
       var answer = true;
        let count = 0;

        for (item of s)
        {
            if (item == '(') count++;
            else count--;

            if (count < 0) return false;
        }

        if (count != 0) return false;

        return answer;
    }