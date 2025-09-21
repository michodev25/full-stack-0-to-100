const login =  async (username, password) => {
    
  return fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json());
 
}
const register = async (username, password) => {
    return fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json());
}
export { login, register };