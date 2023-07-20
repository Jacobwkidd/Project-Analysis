const updateForm = document.getElementById("update-form");

async function sendPutRequest(url, data){
    const requestObj = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' //what type of formate -- JSON
        },
        credential: 'include',
        body: JSON.stringify(data)
    };
    const response = await fetch(url, requestObj);
    return response.json();
}

async function update(event){
    event.preventDefault();
    const username = document.getElementById("update-email").value;
    const password = document.getElementById("update-password").value;

    const response = await sendPutRequest('user/update', {username: username, password: password});
    document.getElementById('message').textContext = response.message;
}