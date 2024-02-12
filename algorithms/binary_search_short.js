function search(array, target) {
    let first = 0;
    let last = array.length - 1;
    let middle;
    while (first <= last) {
        middle = Math.floor((first + last) / 2);
        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            first = middle + 1;
        } else {
            last = middle - 1;
        }
    }

    return -1;
}

export default search;
