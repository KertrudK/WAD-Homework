<template>

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
                <label>
                    <input
                        v-model="password"
                        type="password"
                        placeholder="password"
                        :class="{ error: !isValid && formSubmitted }"
                        required
                    />
                   <div
                        class="forErrors"
                        :class="{ visible: !isValid && formSubmitted }"
                    >
                        <span
                            class="cross"
                            @click="formSubmitted = isValid = false"
                            >&#10060;</span
                        >
                        Invalid password.
                        <br /> 
                        Password length must be between 8 and 15 characters.
                        <br />
                        Password must include at least one uppercase and two lowercase letters.
                        <br />
                        Password must include at least one numeric value.
                        <br />
                        Password must start with an uppercase letter.
                        <br />
                        Password must include the character “_”
                    </div>
                </label>

                <br />
                <button class="login-button" type="Submit">Submit</button>
            </form>
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

</script>

  <!--https://vuejs.org/guide/essentials/forms.html
  https://ahmedshaltout.com/vuejs/vue-3-login-with-vuex-tutorial/
  https://www.w3resource.com/javascript/form/password-validation.php
  -->

<style scoped>

.center-box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;
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
    background-color: darkorange;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 30px;
    cursor: pointer;
}

.login-button:hover {
    background-color: orange;
}

.forErrors {
    position: absolute;
    justify-content: center;
    padding: 20px;
    margin: 20px;
    text-align: left;
    background-color: white;
    display: none;
}

.visible {
    display: block;
}

.error {
    transition: border-color 1s;
    border-color:orangered;
}

.cross {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
</style>
