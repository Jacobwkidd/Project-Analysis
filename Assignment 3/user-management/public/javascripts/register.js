const registerForm = document.getElementById("register-form");

// function to send POST request
async function sendPostRequest(url, data){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

async function logout(){
    const logoutResponse = await fetch('/user/logout', {method: 'POST'});
    if(logoutResponse.ok){
        //if the logout was successful, redirect the user to the login page
        window.location.href = 'login.html';
    }
    else{
        //show an error message if the logout was not successful
        console.error('Fogout Failed');
    }
}

async function register(event){
    event.preventDefault();

    const username = register.username.value;
    const password = register.password.value;

    const response = await sendPostRequest('/user/register', {username, password});

    document.getElementById('message').textContent = response.message;
}