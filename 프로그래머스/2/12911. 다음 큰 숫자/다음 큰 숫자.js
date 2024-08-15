function solution(n) {
        let cnt1 = count(n);
        let large = n+1;
        // cnt가 같아질 때까지 
        while(cnt1 >= 0) {
            if(cnt1 === count(large)) {
                break;
            }
            large++;
        }

        return large;
    }

    function count(num) {
        // 2진수로 변환
        let binaryArr = [];
        while(num >= 1) { 
            binaryArr.push(num%2);
            num = Math.floor(num/2);
        }
        let binary = binaryArr.reverse().toString().replaceAll(',','');
        //1의 갯수 카운트
        let cnt = binary.replaceAll('0', '').length;
        return cnt;
    }
