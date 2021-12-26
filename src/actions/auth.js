export const register = async ({ username, password, confirmPassword }) => {
    const serverResponse = await fetch('http://194.135.92.216:4000/register', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            confirmPassword: confirmPassword
        }) // body data type must match "Content-Type" header
    });
    console.log(serverResponse.json())
}

export const validateData = ({ username, password, confirmPassword }) => {
    let errorString = '';
    if (username.length < 4) {
        errorString += 'Username must be at least 4 characters long \n';
    }
    if (password.length < 5) {
        errorString += 'Password must be at least 5 characters long \n';
    }
    if (password !== confirmPassword) {
        errorString += "Passwords don't match \n";
    }
    if (!errorString) {
        return true;
    } else {
        return errorString
    }
}