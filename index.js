let str = ' "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BCz" '


// câu 1: Lấy các chữ cái, bỏ chữ số và khoảng trống
let letterStr = str.match(/[a-z]/gi).join('');
console.log("Câu 1:", letterStr);
document.write("Câu 1:", letterStr)

// 101 / 4 = 25
// 101 % 4 = 1



// câu 2: Chia mảng cha thành 4 mảng nhỏ
let charArr = letterStr.split("");
// const surplus = charArr % 4
let arr = charArr.length / 4

function sumArray(myArray, sum) {
    var results = [];

    while (myArray.length) {
        results.push(myArray.splice(0, sum));
    }

    return results;
}
let result = sumArray(charArr, arr);
console.log("Câu 2:", result);

// Câu 3: sắp xếp các mảng từ bé đến lớn

result.sort(function(a, b) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();

    return x == y ? 0 : (x > y) ? 1 : -1;
});
console.log(result);

// câu 4: Thêm dấu * vào từng phần tử con
const itemsArr = result.map((items) => {

    const itemArr = items.map((element) => {
        let arrElement = element + "*"
        return arrElement
    });
    return itemArr
})
console.log("Câu 4:", itemsArr);




// Câu 5: Tìm các item có chứa chữ 'e|E' lưu ra mảng



// Câu 6: Đổi '*' thành ','