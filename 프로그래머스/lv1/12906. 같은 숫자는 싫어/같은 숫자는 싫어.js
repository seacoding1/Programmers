function solution(arr)
{
    var answer = '';
    var stack = [];

        for(var i = 0; i < arr.length; i++){
            while(i != 0 && stack[stack.length-1] == arr[i]){
                stack.pop();
            }
            stack.push(arr[i]);
        }

        return stack;
}