module.exports = function solveSudoku(matrix) {
'use strict';

function sudoku(matrix) {

	var max = 0;
	var protectNumber = [];

	function findMaxNumbers() {
		for (var i = 0; i < matrix.length; i++) {
			for (var j = 0; j < matrix.length; j++) {
				if (matrix[i][j]===0) {
					matrix[i][j] = searchCondidats(i, j);
				}
			}
		}
	}findMaxNumbers();

	function searchCondidats(arg1, arg2) {
		var beg, end;
		if (arg2<3) {
			beg = 0;
			end = 2;
		}else if (arg2>2&&arg2<6) {
			beg = 3;
			end = 5
		}else{
			beg = 6;
			end = 8;
		}
		for (var i = beg; i <= end; i++) {
			for (var j = beg; j <= end; j++) {
				if (matrix[i][j] !== 0) {
					protectNumber.push(matrix[i][j]);
				}
			}
		}
	}



}sudoku ([
    [8, 7, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 0, 4, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 9],
    [0, 0, 1, 9, 0, 0, 2, 8, 0],
    [0, 0, 6, 3, 0, 7, 4, 0, 0],
    [0, 9, 4, 0, 0, 8, 6, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 1, 0, 9, 5, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 2, 7]
]);


}
