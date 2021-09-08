$( document ).ready(onReady)

function onReady(){
   $( "#submitButton").on ('click', getEmployeeData );
}

let counter = 1000;
let subCounter = 1;
let idCounter = counter + subCounter;
let employeeData = {
    fname:'',
    lname:'',
    ID:0,
    title:'',
    salary:0
};
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});
let salarySpend = 0;
let monthlySalarySpend = salarySpend/12;

function getEmployeeData(){
    employeeData.fname = $('#fName').val()
    employeeData.lname = $('#lName').val()
    employeeData.ID = $('#employeeID').val()
    employeeData.title = $('#employeeTitle').val()
    employeeData.salary = ($('#annualSalary').val())*1
    console.log(employeeData);
    addEmployeeData();
}

function addEmployeeData(){
    $("#employeeTable").append(
        `<tr id=${counter}>
            <td id=${idCounter}>${employeeData.fname}</td>
            ${subCounter++}
            ${idCounter = counter + subCounter}
            <td id=${idCounter}>${employeeData.lname}</td>
            ${subCounter++}
            ${idCounter = counter + subCounter}
            <td id=${idCounter}>${employeeData.ID}</td>
            ${subCounter++}
            ${idCounter = counter + subCounter}
            <td id=${idCounter}>${employeeData.title}</td>
            ${subCounter++}
            ${idCounter = counter + subCounter}
            <td id=${idCounter}>${formatter.format(employeeData.salary)}</td>
            ${subCounter++}
            ${idCounter = counter + subCounter}
            <td id=${idCounter}><input id=${"deleteRecord" + counter} type="Button" value="Delete"></td>
        </tr>`
    ); 
    salarySpend += employeeData.salary;
    monthlySalarySpend = salarySpend/12;
    $('#monthlySpend').empty()
    $('#monthlySpend').append('Monthly Spend = ' + formatter.format(monthlySalarySpend));
    console.log('monthly salary spend:', monthlySalarySpend);
    $("#deleteRecord" + counter).click ( deleteRow );
    $('#fName').val('')
    $('#lName').val('')
    $('#employeeID').val('')
    $('#employeeTitle').val('')
    $('#annualSalary').val('')
    counter+=1000;
    subCounter = 1
}

function deleteRow(rowID){
    let el = rowID.target.id;
    console.log(el);
    let el2 = $('#'+ el).parents()
    console.log(el2);
    $(el2[1]).empty()
}