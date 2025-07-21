function solution(s) {
            var answer = s;
            var number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

            for(var i=0; i<number.length; i++) {
                answer = answer.replaceAll(number[i], i);
            }

            return Number(answer);
}