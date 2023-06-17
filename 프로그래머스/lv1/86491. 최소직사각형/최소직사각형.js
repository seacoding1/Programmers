function solution(sizes) {
     var min = sizes[0][0]<sizes[0][1]?sizes[0][0]:sizes[0][1];
    var max = sizes[0][0]>sizes[0][1]?sizes[0][0]:sizes[0][1];

    for(var i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            min = min>sizes[i][0]?min:sizes[i][0];
            max = max>sizes[i][1]?max:sizes[i][1];
        } else {
            min = min>sizes[i][1]?min:sizes[i][1];
            max = max>sizes[i][0]?max:sizes[i][0];
        }

    }
    return min*max;
}