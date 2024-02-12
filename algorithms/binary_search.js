function search(array, target) {
    let first = 0;
    let last = array.length;
    if (target < array[first] || target > array[last - 1]) {
        return -1;
    }

    let middle;
    while (1) {
        middle = first + Math.ceil((last - first) / 2);
        if (target === array[middle - 1]) {
            return middle - 1;
        } else if (target < array[middle - 1]) {
            last = middle;
        } else {
            first = middle;
        }
    }

    return -1;
}

export default search;
