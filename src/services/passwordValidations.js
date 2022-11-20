/* https://jerickson.net/what-are-services-vue/ */

export default class passwordValidations {
    constructor(password) {
        this.password = password
    }
}



    /* https://www.w3resource.com/javascript/form/password-validation.php */
    function checkPasswordLength(password) {
        if (password.length >= 8 && password.length < 15)
        {
          return (true)
        }
        else {
          var errorBad = "The password as to be at least 8 and less than 15 characters"
          return (errorBad)
        }
    }

    function checkPasswordLetters(password) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/.test(password))
        {
            return true;
        }
        else {
           var errorBad = "The password has to contain at least 1 uppercase and at least 2 lowercase letter."
            return (errorBad);
        }

    }

    function checkEverything(password) {
        let errors = [];
        if (!checkPasswordLength(password)) {
            errors["length"] = errorBad;
        }
        if (!checkPasswordLetters(password)) {
            errors["lowerUpper"] = errorBad;
        }
    
        return errors;
    }


/*
 Length (at least 8 chars and less than 15 chars). DONE
 Includes at least one uppercase alphabet character. DONE
 Includes at least two lowercase alphabet characters. IN PROGRESS
 Includes at least one numeric value.
 It should start with an uppercase alphabet.
 It should include the character “_” */
