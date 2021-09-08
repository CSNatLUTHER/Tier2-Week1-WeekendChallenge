$( document ).ready(onReady)

function onReady(){
   $( "#submitButton").on ('click', getEmployeeData );
}

let counter = 1000
let employeeData = {
    fname:'',
    lname:'',
    ID:'',
    title:'',
    salary:''
};

function getEmployeeData(){
    employeeData.fname = $('#fName').val()
    employeeData.lname = $('#lName').val()
    employeeData.ID = $('#employeeID').val()
    employeeData.title = $('#employeeTitle').val()
    employeeData.salary = $('#annualSalary').val()
    console.log(employeeData);
    addEmployeeData();
}

function addEmployeeData(){
 $("#employeeTable").append(
     `<tr id="employeeRow">
        <td id="1"></td>
        <td id="2"></td>
        <td id="3"></td>
        <td id="4"></td>
        <td id="5">$</td>
        <td id="6"><input id="deleteRecord" type="Button" value="Delete"></td>
    </tr>`
     ); 
$(document).find("#1").append(employeeData.fname)
$(document).find("#2").append(employeeData.lname)
$(document).find("#3").append(employeeData.ID)
$(document).find("#4").append(employeeData.title)
$(document).find("#5").append(employeeData.salary)
}