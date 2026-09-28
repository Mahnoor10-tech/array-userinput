const studentName = document.getElementById("studentName");
const english = document.getElementById("english");
const math = document.getElementById("math");
const science = document.getElementById("science");
const computer = document.getElementById("computer");

const calculateButton = document.getElementById("calculateButton");

const resultName = document.getElementById("resultName");
const resultTotal = document.getElementById("resultTotal");
const resultAverage = document.getElementById("resultAverage");
const resultPercentage = document.getElementById("resultPercentage");
const resultGrade = document.getElementById("resultGrade");
const resultStatus = document.getElementById("resultStatus");
const errorMessage = document.getElementById("errorMessage");

calculateButton.addEventListener("click", function () {

    const name = studentName.value.trim();

    const englishMarks = Number(english.value);
    const mathMarks = Number(math.value);
    const scienceMarks = Number(science.value);
    const computerMarks = Number(computer.value);

    if (name === "") {
        errorMessage.textContent = "Please enter the student name.";
        return;
    }

    if (
        english.value === "" ||
        math.value === "" ||
        science.value === "" ||
        computer.value === ""
    ) {
        errorMessage.textContent = "Please enter marks for all subjects.";
        return;
    }

    if (
        englishMarks < 0 || englishMarks > 100 ||
        mathMarks < 0 || mathMarks > 100 ||
        scienceMarks < 0 || scienceMarks > 100 ||
        computerMarks < 0 || computerMarks > 100
    ) {
        errorMessage.textContent = "Marks must be between 0 and 100.";
        return;
    }

    errorMessage.textContent = "";

    const marks = [
        englishMarks,
        mathMarks,
        scienceMarks,
        computerMarks
    ];

    let total = 0;

    marks.forEach(function (mark) {
        total = total + mark;
    });

    const average = total / marks.length;

    const totalPossibleMarks = marks.length * 100;

    const percentage =
        (total / totalPossibleMarks) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status;

    if (percentage >= 50) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    resultName.textContent =
        "Student Name: " + name;

    resultTotal.textContent =
        "Total Marks: " + total + " / " + totalPossibleMarks;

    resultAverage.textContent =
        "Average Marks: " + average.toFixed(2);

    resultPercentage.textContent =
        "Percentage: " + percentage.toFixed(2) + "%";

    resultGrade.textContent =
        "Grade: " + grade;

    resultStatus.textContent =
        "Status: " + status;

});