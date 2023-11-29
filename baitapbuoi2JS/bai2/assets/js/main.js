function giaiPhuongTrinh(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Phương trình có vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    } else {
        var x = -b / a;
        return "Nghiệm của phương trình là x = " + x;
    }
}
let a = parseFloat(prompt("Nhập giá trị của a: "));
let b = parseFloat(prompt("Nhập giá trị của b: "));
let ketQua = giaiPhuongTrinh(a, b);
console.log(ketQua);

