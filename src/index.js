module.exports = function solveSudoku(matrix) {
    var solver = true;
    var count = 0;
    var sd = 0;

    while (solver === true) {console.log('pass ----  '+sd); 

    var condidator = true;

        while (condidator === true) {console.log('condidator  *********************')

            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix.length; j++) {
                    if (typeof(matrix[i][j])==='object') matrix[i][j] = 0;
                }
            }

            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix.length; j++) {
                    if (matrix[i][j]===0) {
                    matrix[i][j] = condodates(i, j);                   
                    
                    }
                }
            }
            count > 0 ? count = 0 : condidator = false;          
        }

                for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix.length; j++) {
                if (typeof(matrix[j][i])==='number'&&i!==2&&i!==5&&i!==8) {
                    nakedCouplesColl(j, i);
                }
            }
        }

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix.length; j++) {
                if (typeof(matrix[i][j])==='number'&&i!==2&&i!==5&&i!==8) {
                    // nakedCouplesRow(i, j);                    
                }                
            }
        }





        // for (var i = 0; i < matrix.length; i++) {
        //     if (matrix[i].indexOf(0)!==-1) {
        //         // zerosFinder(i);
        //     }
        // }

        // (function () {
        //     var arr = 0;
        //     for (var i = 0; i < matrix.length; i++) {
        //         for (var j = 0; j < matrix.length; j++) {
        //             if (typeof(matrix[i][j])==='object') {
        //                 arr++;
        //             }
        //         }
        //         if (arr === 1) {
        //             arr = 0;
        //             zerosFinder(i);
        //         }
        //     }
        // })();


        count > 0 ? count = 0: solver = false;
        sd++;
    }





    

    

    function condodates(arg1, arg2) {
        var allCandidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var condidates;
        var coll = [];
        var row = [];
        var sqr = [];

        for (var i = 0; i < matrix.length; i++) {
            if (typeof(matrix[arg1][i])==='number'
                &&matrix[arg1][i]!==0) {
                row.push(matrix[arg1][i]);
            }
        }
        for (var i = 0; i < matrix.length; i++) {
            if (typeof(matrix[i][arg2])==='number'
                &&matrix[i][arg2]!==0) {
                coll.push(matrix[i][arg2]);
            }
        }
        var begH, endH, begW, endW;

        if (arg1<3) {
            begH = 0;
            endH = 2;
        }else if (arg1>2&&arg1<6) {
            begH = 3;
            endH = 5;
        }else if (arg1>5) {
            begH = 6;
            endH = 8;
        }

        if (arg2<3) {
            begW = 0;
            endW = 2;
        }else if (arg2>2&&arg2<6) {
            begW = 3;
            endW = 5;
        }else if (arg2>5) {
            begW = 6;
            endW = 8;
        }

        for (var i = begH; i <= endH; i++) {
            for (var j = begW; j <= endW; j++) {
                if (typeof(matrix[i][j])==='number'
                    &&matrix[i][j]!==0) {
                    sqr.push(matrix[i][j]);
                }
            }
        }

        condidates = row.join('')+coll.join('')+sqr.join('');

        for (var i = 0; i < condidates.length; i++) {

            if (allCandidates.indexOf(+condidates[i])!==-1) {
                allCandidates.splice(allCandidates.indexOf(+condidates[i]), 1);
            }
        }

        if (allCandidates.length === 1) {
            count++;
            return +allCandidates.join('');
        }else if (allCandidates.length === 0) {
            return 0;
        } else {
            return allCandidates;
        }
    }//condodates

    function nakedCouplesRow(arg1, arg2) {
        var row1 = arg1 + 1;
        var row2;
        arg1 === 1||arg1 === 4||arg1 === 7 ? row2 = arg1 - 1 : row2 = row1 + 1;

        if (matrix[row1].indexOf(matrix[arg1][arg2])!==-1) {
            var sum = 0;
            for (var i = 0; i < matrix.length; i++) {
                if (typeof(matrix[row2][i])==='object'&&matrix[row2][i].indexOf(matrix[arg1][arg2])!==-1) {
                    sum++;
                }
            }
            if (sum === 1) {
                for (var i = 0; i < matrix.length; i++) {
                    if (typeof(matrix[row2][i])==='object'&&matrix[row2][i].indexOf(matrix[arg1][arg2])!==-1) {
                        matrix[row2][i] = matrix[arg1][arg2];
                        count++;
                    }
                }
            }
        }

        if (matrix[row2].indexOf(matrix[arg1][arg2])!==-1) {
            var sum = 0;
            for (var i = 0; i < matrix.length; i++) {
                if (typeof(matrix[row1][i])==='object'&&matrix[row1][i].indexOf(matrix[arg1][arg2])!==-1) {
                    sum++;
                }
            }
            if (sum === 1) {
                for (var i = 0; i < matrix.length; i++) {
                    if (typeof(matrix[row1][i])==='object'&&matrix[row1][i].indexOf(matrix[arg1][arg2])!==-1) {
                        matrix[row1][i] = matrix[arg1][arg2];
                        count++;
                    }
                }
            }
        }
    }//nakedCouples

    function nakedCouplesColl(arg1, arg2) {
        var coll1 = arg2 + 1;
        var coll2;
        arg2 === 1||arg2 === 4||arg2 === 7 ? coll2 = arg2 - 1 : coll2 = coll1 + 1;
        
        var num = false;

        (function () {
            var num = false;            
            for (var i = 0; i < matrix.length; i++) {
                if (matrix[i][coll1]===matrix[arg1][arg2]) {
                    num = true;
                }
            }
            if (num === true) {
                var sum = 0;
                for (var i = 0; i < matrix.length; i++) {
                    if (typeof(matrix[i][coll2])==='object'&&matrix[i][coll2].indexOf(matrix[arg1][arg2])!==-1) {
                        sum++;
                    }
                }
            }
            if (sum === 1) {
                sum = 0;num = false;
                for (var i = 0; i < matrix.length; i++) {
                    if (typeof(matrix[i][coll2])==='object'&&matrix[i][coll2].indexOf(matrix[arg1][arg2])!==-1) {
                        matrix[i][coll2] = matrix[arg1][arg2];
                        count++;

                    }
                }
            }
        })();

        (function () {
            var num = false;            
            for (var i = 0; i < matrix.length; i++) {
                if (matrix[i][coll2]===matrix[arg1][arg2]) {
                    num = true;
                }
            }
            if (num === true) {
                var sum = 0;
                for (var i = 0; i < matrix.length; i++) {
                    if (typeof(matrix[i][coll1])==='object'&&matrix[i][coll1].indexOf(matrix[arg1][arg2])!==-1) {
                        sum++;
                    }
                }
            }
            if (sum === 1) {
                sum = 0;num = false;
                for (var i = 0; i < matrix.length; i++) {
                    if (typeof(matrix[i][coll1])==='object'&&matrix[i][coll1].indexOf(matrix[arg1][arg2])!==-1) {                        
                        matrix[i][coll1] = matrix[arg1][arg2];
                        count++;

                    }
                }
            }
        })();
    }//nakedCouplesColl

    function zerosFinder(arg1) {
        var arg2;
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            if (typeof(matrix[arg1][i])==='number') {
                sum = sum + matrix[arg1][i];
            }
            if (typeof(matrix[arg1][i])==='object') arg2 = i;
        }
        matrix[arg1][arg2] = 45 - sum;
    }






// triplexRow(0,1);
return matrix;
}
