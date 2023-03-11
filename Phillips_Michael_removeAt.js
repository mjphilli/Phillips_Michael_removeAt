function removeAt(arr, index){
    var removed = arr[index];
    for (var i = index; i < arr.length - 1; i++)
    {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return [arr, removed];
}

console.log(removeAt([5, 93, 22, 4], 2));