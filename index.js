let str =
  ' "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BCz" ';

// câu 1: Lấy các chữ cái, bỏ chữ số và khoảng trống
let letterStr = str.match(/[a-z]/gi).join("");
console.log("Câu 1:", letterStr);
document.write("Câu 1:", letterStr);

// câu 2: Chia mảng cha thành 4 mảng nhỏ
let charArr = letterStr.split("");
let arr = charArr.length / 4;

function sumArray(myArray, sum) {
  var index = 0;
  var tempArray = [];

  for (index = 0; index < myArray.length; index += sum) {
    myChunk = myArray.slice(index, index + sum);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }
  return tempArray;
}
let result = sumArray(charArr, arr);
console.log("Câu 2:", result);

// Câu 3: sắp xếp các mảng từ bé đến lớn
result.map((item) => {
  //   console.log("item :", item.sort());
  const sortArr = item.sort(function (a, b) {
    let left = a.toUpperCase();
    let right = b.toUpperCase();

    return left === right ? 0 : left > right ? 1 : -1;
  });
  console.log("Câu 3:", sortArr);
});

// câu 4: Thêm dấu * vào từng phần tử con
const itemsArr = result.map((items) => {
  const itemArr = items.map((element) => {
    let arrElement = element + "*";
    return arrElement;
  });
  return itemArr;
});
console.log("Câu 4:", itemsArr);

// Câu 5: Tìm các item có chứa chữ 'e|E' lưu ra mảng
const arrItems = itemsArr.map((items) => {
  items.filter((item) => console.log(item));
  // const array = items.map((element) => {
  //   let arrElement = element.filter(e => console.log(e))
  //   console.log(arrElement);
  // });
});

// Câu 6: Đổi '*' thành ','
const arrItems6 = itemsArr.map((items) => {
  const arr = items.map((item) => {
    const replaceItem = item.replace("*", ",");
    return replaceItem;
  });
  return arr.join("");
});
console.log(arrItems6.join(""));
