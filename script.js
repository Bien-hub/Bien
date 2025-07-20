function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (height > 0 && weight > 0) {
    const bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    result.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
  } else {
    result.textContent = "Please enter valid numbers.";
  }
}

// Auto-run on page load
window.onload = function () {
  calculateBMI();
};
