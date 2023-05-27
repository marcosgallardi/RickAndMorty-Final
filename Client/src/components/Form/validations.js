


const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
let maxNum = /^[\s\S]{0,35}$/ ;
let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}[^'\s]/
export const validations = (userData) => {
    let errors = {};
    if(userData.username === "") errors.username = "Ingresa el email del usuario";
    if(!regexEmail.test(userData.username)) errors.username = "Email invalido";
    if(!maxNum.test(userData.username)) errors.username = "El email debe tener menos de 35 caracteres"

    if(!userData.password) errors.password = "Ingresa tu contraseña";
    if(!pass.test(userData.password)) errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres y al menos un numero."
    return errors;
};
