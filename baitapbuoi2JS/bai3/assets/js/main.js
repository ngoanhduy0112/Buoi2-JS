function giaiPhuongTrinhBacHai(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                return "Phương trình có vô số nghiệm";
            } else {
                return "Phương trình vô nghiệm";
            }
        } else {
            let x = -c / b;
            return "Phương trình có một nghiệm duy nhất x = " + x;
        }
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            return "Phương trình vô nghiệm";
        } else if (delta === 0) {
            var x = -b / (2 * a);
            return "Phương trình có nghiệm kép x = " + x;
        } else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
        }
    }
}
let a = parseFloat(prompt("Nhập giá trị của a: "));
let b = parseFloat(prompt("Nhập giá trị của b: "));
let c = parseFloat(prompt("Nhập giá trị của c: "));
let ketQua = giaiPhuongTrinhBacHai(a, b, c);
console.log(ketQua);

