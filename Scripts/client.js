$( document ).ready(onReady)

function onReady(){
   $( "#submitButton").on ('click', getEmployeeData );
   // target the delete button for row created to run deleteRow function
   $("#employeeTable").on ( 'click', ".deleteRecord", deleteRow );
}

// create counter
    let counter = 1;
// create array to hold employees
    let employeeRecords = [];
// format salary number to currency
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });
// variable to store total salary spend
    let salarySpend = 0;
// create variable to calculate monthly spend
    let monthlySalarySpend = salarySpend/12;

// function to set employeeData object property values
    function getEmployeeData(){
         // create employee object to store enteries
            let employeeData = {
                record: 0,
                fname:'',
                lname:'',
                ID:0,
                title:'',
                salary:0
            };
        // Assign text imput fields from user to employeeData object properties
            employeeData.record = counter
            employeeData.fname = $('#fName').val()
            employeeData.lname = $('#lName').val()
            employeeData.ID = $('#employeeID').val()
            employeeData.title = $('#employeeTitle').val()
            employeeData.salary = Number($('#annualSalary').val())
        // push employee data into employeeRecords array
            employeeRecords.push( employeeData )
        // launch addEmployeeData function
            addEmployeeData();
    } // end getEmployeeData function

// fucntion to push employeeData object infromation into table on DOM
    function addEmployeeData(){
        $("#employeeTable").empty();
        $("#employeeTable").append(
        `<tr id="headerRow">
        <th>First Name</th>
        <th>Last Name</th> 
        <th>ID</th>
        <th>Title</th>
        <th>Annual Salary</th>
        <th></th>
        </tr>`
        );
        // add employees from array onto DOM
        for(i=0; i<employeeRecords.length; i++){
            $("#employeeTable").append(
                `<tr id=${employeeRecords[i].record}>
                        <td>${employeeRecords[i].fname}</td>
                        <td>${employeeRecords[i].lname}</td>
                        <td>${employeeRecords[i].ID}</td>
                        <td>${employeeRecords[i].title}</td>
                        <td>${formatter.format(employeeRecords[i].salary)}</td>
                        <td><input class="deleteRecord" type="Button" value="Delete"></td>
                </tr>`
            ); 
        // Empty user input fields
        $('#fName').val('');
        $('#lName').val('');
        $('#employeeID').val('');
        $('#employeeTitle').val('');
        $('#annualSalary').val('');
        }
          // update salary spend totals
          salarySpendUpdate();
          counter ++;
    };

// function to update salary spend
    function salarySpendUpdate(){
        for(i=0; i<employeeRecords.length; i++){
            let el= employeeRecords[i].salary
            salarySpend += el
        } // end for
        monthlySalarySpend = salarySpend/12;
        $('#monthlySpend').empty()
        $('#monthlySpend').append('Monthly Spend = ' + formatter.format(monthlySalarySpend));
        if(monthlySalarySpend > 5000){
            $('#monthlySpend').css('background-color', 'red')
        }
        else{
            $('#monthlySpend').css('background-color','#ffffff00')
        }
        salarySpend = 0
    } // end salaryUpdate
// function to delete a row of data
    function deleteRow(){
        let el = $( this ).parent().parent();
        let el2 = Number(el[0].id);
        for(i=0; i<employeeRecords.length; i++){
            if(employeeRecords[i].record === el2){
                employeeRecords.splice(i,1)
            }
        } // end for   
        salarySpendUpdate();
          el.empty()
    };