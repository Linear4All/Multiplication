// Multiply two matrices together
// Return value is the resulting matrix, if matrices are incompatible, return false
function multiply(matrix1, matrix2) {
    let row1 = matrix1.length
    let col1 = matrix1[0].length
    let row2 = matrix2.length
    let col2 = matrix2[0].length

    // Check that matrices are compatible
    if (col1 != row2) {
        return false
    }

    // Create index variables and an empty result matrix
    let i, j, k;
    let result = new Array(row1);
    for (i = 0; i < row1; i++)
        result[i] = new Array(col2);

    // Insert values into result matrix
    for (i = 0; i < row1; i++) {
        for (j = 0; j < col2; j++) {
            result[i][j] = 0;
            for (k = 0; k < col1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    // Return result matrix
    return result;
}