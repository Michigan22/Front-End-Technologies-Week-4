function newSignUp() {
    let firstNameEntry = document.getElementById('name1').value;
    let lastNameEntry= document.getElementById('name2').value;
    let positionEntry = document.getElementById('pst').value;
    let numberEntry = document.getElementById('num1').value;
    var table = document.getElementById("Table1");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = firstNameEntry;
    cell2.innerHTML = lastNameEntry;
    cell3.innerHTML = positionEntry;
    cell4.innerHTML = numberEntry;
};
