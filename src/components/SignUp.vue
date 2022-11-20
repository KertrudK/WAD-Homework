<template>
    <!--https://vuejs.org/guide/essentials/forms.html
  https://ahmedshaltout.com/vuejs/vue-3-login-with-vuex-tutorial/
  https://www.w3resource.com/javascript/form/password-validation.php
  -->

    <div class="home">
        <div class="center-box">
            <form @submit.prevent="submitForm">
                <span>Enter your email</span>
                <br />
                <input
                    v-model.trim="email"
                    type="email"
                    placeholder="email"
                    required
                />
                <br />
                <span>Enter your password</span>
                <br />
                <input
                    v-model="password"
                    type="password"
                    placeholder="password"
                    required
                />
                <br />
                <button class="login-button" type="Submit">Submit</button>
            </form>
        </div>
    </div>

    <div class="forErrors" v-if="formSubmitted && !isValid">
        <div class="center-box">
            Invalid password.
            <br />
            Length (at least 8 chars and less than 15 chars).
            <br />
            Includes at least one uppercase alphabet character; at least two
            lowercase alphabet characters;
            <br />
            at least one numeric value;
            <br />
            It should start with an uppercase alphabet;
            <br />
            It should include the character “_”
        </div>
    </div>
</template>

<script>
function checkPassword(password) {
    return (
        /^[A-Z]{1}.{7,13}$/.test(password) &&
        /_/.test(password) &&
        /[0-9]/.test(password) &&
        /[a-z]/.test(password)
    );
}

export default {
    name: "SignUp",
    data() {
        return {
            email: "",
            password: "",
            formSubmitted: false,
            isValid: false,
        };
    },

    methods: {
        submitForm() {
            this.formSubmitted = true;
            this.isValid = checkPassword(this.password);
            if (this.isValid) {
                window.location.href = "/";
            }
        },
    },
};

/*
 Length (at least 8 chars and less than 15 chars). DONE
 Includes at least one uppercase alphabet character. 
 Includes at least two lowercase alphabet characters. 
 Includes at least one numeric value.
 It should start with an uppercase alphabet.
 It should include the character “_” 
https://www.w3resource.com/javascript/form/password-validation.php */
</script>

<style scoped>
/* TODO later at some point probablymaybe 
  width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1vh;  */

.center-box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
    width: 60%;
    background-color: #f7ebe4;
    border-radius: 5px;
}

span {
    font-size: 20px;
}

input {
    font-size: 18px;
    padding: 5px;
    margin: 10px;
    margin-bottom: 25px;
}

.login-button {
    font-size: 20px;
    margin: 10px 10% 0 25%;
    background-color: green;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 30px;
    cursor: pointer;
}

.login-button:hover {
    background-color: darkgreen;
}

.forErrors {
    display: flex;
    flex-direction: column;
}
</style>
