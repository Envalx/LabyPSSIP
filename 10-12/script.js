function calculateF(a, b, c, x) {
    var F;
    if (a < 0 && c !== 0) {
        F = a * Math.pow(x, 2) + b * x + c;
    } else if (a > 0 && c === 0) {
        if (x === c) {
            throw new Error("Деление на ноль");
        }
        F = -a / (x - c);
    } else {
        F = a * (x + c);
    }
    return F;
}

try {
    var a = -2, b = 3, c = 1, x = 5;  
    var result = calculateF(a, b, c, x);
    document.write("Результат расчёта: " + result);
} catch (e) {
    alert("Ошибка: " + e.message);
}
document.addEventListener("DOMContentLoaded", runCalculation);


