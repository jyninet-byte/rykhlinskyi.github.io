function insertionSort(arr) {
    let n = arr.length;

    // Починаємо з другого елемента (індекс 1), бо перший вважається відсортованим
    for (let i = 1; i < n; i++) {
        let current = arr[i]; // Запам'ятовуємо поточний елемент
        let j = i - 1;

        // Зсуваємо елементи лівішої (відсортованої) частини, які більші за current,
        // на одну позицію праворуч
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Вставляємо поточний елемент на його правильне місце
        arr[j + 1] = current;
    }
    return arr;
}

// Перевірка
const array3 = [12, 11, 13, 5, 6];
console.log("Insertion Sort:", insertionSort(array3)); 
// Вивід: [5, 6, 11, 12, 13]