const updateForm = document.getElementById('updateForm');
const messageElement = document.getElementById('message');

updateForm.submitButton.disabled = true;

async function getEmployees(){    

    // Send a GET request to the /employees route
    const response = await fetch('/employees/');

    if (response.ok) {
        // If the response is ok (status in the range 200-299), then the user 
        // is logged in & has permission to view this page
        const employeeList = await response.json();
        const select = document.getElementById('employee-select');
        select.innerHTML = ""; // Clear out the select dropdown.

        // TODO: populate dropdown
        
        employeeList.forEach(employee => {
            // console.log(employee); getting the data
            const option = document.createElement('option'); 
            option.value = employee.id; // set the value attribute of the option to employee id
            option.textContent = employee.username; // set the text inside the option to employee's name
            select.append(option);  //append the option to the 'select' dropdown
        }); 

    } else {
        // If the response is not ok, then there was an issue of some kind

        if(response.status === 401){
            messageElement.classList.add('bg-yellow-500'); // Adds the yellow background class (Tailwind CSS)
            messageElement.textContent = "User not permitted to view data."
        }else{
						// Redirect user to login.
            window.location.href = 'login.html';
        }

    }
}

function setFormData(employee){
    /* 
			TODO: Implement.
			This method takes in an employee object (one that was retrieved from the server),
			and then will populate the updateForm (a global variable at the top of this file which
			has a handle on the form element), and will set the form fields to the value of this employee
			so that the form has the employee values in it for the user to update.
		
		*/
	if(!updateForm){
        console.error("update form is undefined");
        return
    }
    console.log("Hello");
    updateForm.employeeId.value = employee.id;
    updateForm.employeeUsername.value = employee.username;
    console.log(employee.username);
    // updateForm.employeePassword.value = employee.password;
    updateForm.isEmployed.checked = employee.isEmployed; 
    // then do this when we figure out where it is.. with the password

}

async function getEmployeeData(){
	/*    
		 TODO: Implement. 
			This function is called when the button to get a specific employee is pressed.
			The id of the selected employee is gathered from the dropdown and a fetch() request			
			is made to the /employees/:id route to get the specific employee's data that was requested

			Here if the response from getting the specific
			employee data was "ok", then we can:
				1) Call setFormData() (making sure to pass in the employee returned from the server).
				2) Allow the user to click the form's "update" button with: updateForm.submitButton.disabled = false;
	*/
    const select = document.getElementById('employee-select');
    const getForm = select.value;
    console.log(getForm);
    const response = await fetch(`/employees/${getForm}`); // go the assignment 2 for the fetch 
    console.log(getForm);
    console.log(response);
    if(response.ok){ 
        const data = await response.json();
        console.log(data);
        setFormData(data);
        //disable the update button
        updateForm.submitButton.disabled = false;
    }
}

async function logout() {
		// Create request object to make a POST request.	
	const requestObj = {
        method: 'POST',
        credentials: 'include', // This is necessary to include the session cookie with the request
    };
		
		// Make request.
    const response = await fetch('/users/logout', requestObj);
	
		// Check on response from server.
    if (response.ok) {
        console.log('User successfully logged out');
        window.location.href = '/login.html'; // Redirect to login page after successful logout
    } else {
        console.log('Logout failed');
    }
    
}

function getFormData(){
    /* 
			TODO: Implement.
			This function gathers the information on the updateForm once the "update" button
			has been pressed. This function then returns an object with the form data
			in it.
			Ex:
			return {
				id: <id_from_form>,
				username: <username_from_form>,
				password: <password_from_form>,
				isEmployed: <isEmployed_from_form>,
			}

		*/
    
    //looking through the data to get the information 
    const formData = {
        id: updateForm.employeeId.value, // or get the object from the updateForm then get the idInput.value
        username: updateForm.employeeUsername.value,
        password: updateForm.employeePassword.value,
        isEmployed: updateForm.isEmployed.value
    }
    console.log(formData);
    return formData;
}

async function sendPutData(url, data){
    // Function to send PUT request. No need to change anything in this method.
    console.log("url:", url);
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include', // Add this line to send cookies with the request
        body: JSON.stringify(data)
    });

    return response;
}

async function updateEmployee(event){     
	event.preventDefault();
		
		/* 
			TODO: Implement.
			This is the function that is called when the updateForm is submitted.
			1) Create an employee variable and set it equal to what is returned from
					the gathering the form data.
			
			2) Call the sendPutData() function, making sure to pass in the proper parameters,
					in order to send this data to the server.
						const response = await sendPutData(<send in proper params>);

			If the response variable is ok (response.ok), then messageElement
			should be updated to say this.
			Otherwise update the messageElement to say that the update failed and write
			out the message in the response (response.message).
		*/
    
    const getForm = getFormData();
    console.log('hello', getForm)
    const response = await sendPutData(`/employees/${getForm.id}`, getForm);
    console.log("Hello")
    if(response.ok){
        const data = await response.json();
        console.log("DATA:", data)
        messageElement.textContent = data.message;
    }
    else{
        messageElement.textContent = "update has failed";
    }
}

(async function() {
    await getEmployees();
})();