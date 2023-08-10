/*
	TODO: Implement the checkLogin() function which will call to the
	/users/info endpoint to see if the user is logged in. If the user
	is already logged in, then remove the login form and present a message
	to the user saying that they are already logged in.

	Implement other login functions as well. Use what we have done in class
	as a guide.
*/

const messageElement = document.getElementById("message");
const loginForm = document.getElementById("login-form");

// Function to send POST request
async function sendPostRequest(url, data) {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include', // Add this line to send cookies with the request
        body: JSON.stringify(data)
    });
    return response.json();
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await sendPostRequest('/users/login', { username, password });

    document.getElementById('message').textContent = response.message;
});

async function checkLogin(){
    // Send a GET request to the /users/info route
    const response = await fetch('/users/info');

    if (response.ok) {
        loginForm.innerHTML = "";

        messageElement.classList.add('bg-yellow-500'); // Adds the yellow background class (Tailwind CSS)
        messageElement.textContent = "Already logged in."
    } else {
        // If the response is not ok, then the user is not logged in
        messageElement.textContent = 'Welcome!';
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

(async function() {
    await checkLogin();
})();