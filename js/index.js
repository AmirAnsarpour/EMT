let coursesList = [];
let index = 1;

function addCourse() {
    let name = document.getElementById("name").value;
    let grade = parseInt(document.getElementById("grade").value);
    let credit = parseInt(document.getElementById("credit").value);

    // Check if inputs are valid
    if (name && grade && credit && grade <= 20 && credit <= 4) {
        // Add course to list
        coursesList.push({
            name: name,
            grade: grade,
            credit: credit
        });

        document.getElementById("name").value = "";
        document.getElementById("grade").value = "";
        document.getElementById("credit").value = "";

        showCourses();
        calculateAverage();
    }
}

function showCourses() {
    let table = document.getElementById("courses");

    // Clear old rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Insert new rows
    for (let i = 0; i < coursesList.length; i++) {
        let row = table.insertRow(i + 1);
        row.insertCell(0).innerHTML = i + 1;
        row.insertCell(1).innerHTML = coursesList[i].name;
        row.insertCell(2).innerHTML = coursesList[i].grade;
        row.insertCell(3).innerHTML = coursesList[i].credit;

        // Add background color to cells with grade less than 10
        if (coursesList[i].grade < 10) {
            row.cells[2].style.backgroundColor = "red";
        }
    }
}

function calculateAverage() {
    let totalCredit = 0;
    let totalGrade = 0;

    for (let i = 0; i < coursesList.length; i++) {
        // Check if grade and credit are valid
        if (coursesList[i].grade >= 10 && coursesList[i].grade <= 20 && coursesList[i].credit <= 4) {
            totalCredit += coursesList[i].credit;
            totalGrade += coursesList[i].grade * coursesList[i].credit;
        }
    }

    if (totalCredit > 0) {
        let average = totalGrade / totalCredit;
        let averageElement = document.getElementById("average");

        if (average >= 12) {
            averageElement.style.color = "green";
        } else {
            averageElement.style.color = "red";
        }

        averageElement.innerHTML = average.toFixed(2);
    } else {
        document.getElementById("average").innerHTML = "";
    }
}