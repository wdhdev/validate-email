/**
 * @function `validateEmail` - Check if an email address is valid or not.
 * @param { String } [email] - *Required* The email address to be checked.
 * @returns { Boolean } - Returns true if the email address is valid or false if it is not.
 */

module.exports = function validateEmail(email) {
    if(!email) throw new Error("No email specified");

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.match(regex)) return true;

    return false;
}
