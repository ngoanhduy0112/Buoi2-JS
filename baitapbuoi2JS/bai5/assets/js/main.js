function chuyen(doC) {
    let doF = (doC *9/5)+32;
    return doF;
}
let doC = parseFloat(prompt("Nhập giá trị độ C: "));
let doF = chuyen(doC);
console.log("Giá trị độ F tương ứng là: " + doF);