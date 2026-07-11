function selectionSort(arr) {
    let n = arr.length;

    // Переміщуємо межу невідсортованої частини масиву
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Припускаємо, що перший елемент є мінімальним

        // Шукаємо фактичний мінімум у решті масиву
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Запам'ятовуємо індекс нового мінімуму
            }
        }

        // Якщо знайшли елемент, менший за початковий, міняємо їх місцями
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Перевірка
const array2 = [29, 10, 14, 37, 13];
console.log("Selection Sort:", selectionSort(array2)); 
// Вивід: [10, 13, 14, 29, 37]