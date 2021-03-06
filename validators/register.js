const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegister(data) {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";


    if (validator.isEmpty(data.name)) {
        errors.name = "Name filed is required";

    }

    if (validator.isEmpty(data.email)) {
        errors.email = "email filed is required";

    } else if (!validator.isEmail(data.email)) {
        errors.email = "email is invalid";
    }

    if (validator.isEmpty(data.password)) {
        errors.email = "password filed is required";
    }
    if (validator.isEmpty(data.password2)) {
        errors.email = "password2 filed is required";
    }

    if(!validator.isLength(data.password,{min:6,max:20})){
        errors.password = "password length must be 6 to 20 ";
    }

    if(!validator.equals(data.password,data.password2)){
        errors.email = "password not matched ";
    }


    return{
        errors,
        isValid:isEmpty(errors)
    };

};