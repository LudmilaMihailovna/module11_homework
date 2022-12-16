export function countDown(n) {
    let down = '';
    // let result;
    if (typeof (n) != 'number') {
        down = 'Введено не число';
    } 
    if (n < 0) {
        down = 'Введено отрицательное число';
    }
    for (let i = n; i >= 1; i = i - 1) {
        down += i;
    }


    return down;
}