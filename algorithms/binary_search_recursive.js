function search(array, target) {
    let first = 0;
    let last = array.length - 1;
    let middle;

    middle = Math.floor((first + last) / 2);

    if (target === array[middle]) {
        return 1;
    } else if (last === 0) {
        return -1;
    } else if (array[middle] < target) {
        return search(array.slice(middle + 1), target)
    } else {
        return search(array.slice(first, middle + 1), target)
    }
}

export default search;
