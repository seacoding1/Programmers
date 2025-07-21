function solution(cards1, cards2, goal) {
            var answer = true;
            var ver1 = cards1;
            var ver2 = cards2;

            for (var i=0; i<goal.length; i++) {
                let current = goal[i];
                
                if (ver1.length && ver1[0] === goal[i]) {
                    ver1.shift();
                }
                else if (ver2.length && ver2[0] === goal[i]) {
                    ver2.shift();
                }
                else {
                    answer = false;
                }
            }

            return answer ? 'Yes' : 'No';
        }