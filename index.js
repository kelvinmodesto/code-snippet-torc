const sumUnique = (nums) => {
    const filteredNums = nums.sort().filter((it, index, arr) => {
        return !index || it != arr[index - 1];
    });
    return filteredNums.reduce((num, index, acc) => {
        return acc + num;
    });
}
