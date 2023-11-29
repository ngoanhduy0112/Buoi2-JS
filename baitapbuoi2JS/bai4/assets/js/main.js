function tinhBMI(nang,cao) {
    let caoM = cao /100;
    let bmi = nang/ (caoM * caoM);
    return bmi;
}
let nang = parseFloat(prompt("Nhập cân nặng (kg): "));
var cao = parseFloat(prompt("Nhập chiều cao (cm): "));

let bmi = tinhBMI(nang, cao);
console.log("Chỉ số BMI của bạn là: " + bmi);