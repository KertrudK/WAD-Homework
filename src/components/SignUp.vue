<template>
  <!--https://vuejs.org/guide/essentials/forms.html
  https://ahmedshaltout.com/vuejs/vue-3-login-with-vuex-tutorial/
  https://www.w3resource.com/javascript/form/password-validation.php
  -->
  
<div>
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
        <span>Enter your email</span> 
        <input v-model.trim="email" type = "email" placeholder="email" required/>
        <span>Enter your password</span>
        <input v-model="password" type="password" placeholder="password" required/>
        <button type="Submit">Submit</button>
      </form> 
    </div>

  <div class="forErrors" v-if="formSubmitted">
        <span>Lovely!</span>
    </div>

</template>
  
  <script>

    function checkPassword(password) {
      if (password.length >= 8 && password.length <15)
      {
        console.log("correct length")
        return true
      }
      else {
        return false
      }

    }

  export default {
    name: "SignUp",
    data() {
      return {
          email: "",
          password: "",

      };
    },

    methods: {
      submitForm() {
        console.log("submitForm vajutatud")
          if (checkPassword(this.password)) {
            console.log("checkPasswordTRUE")
            this.formSubmitted = true
          }
          else {
            console.log("checkPasswordFALSE")
            alert("Invalid password.  Length (at least 8 chars and less than 15 chars).  Includes at least one uppercase alphabet character; at least two lowercase alphabet characters;  at least one numeric value; It should start with an uppercase alphabet; It should include the character “_” ")
            this.formSubmitted = false
          } 
        }
      }
    }



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

  .forErrors {
    display: flex;
    height: 100px;
    width: 100px;
    background-color: yellow;
  }

  /* TODO later at some point probablymaybe 
  width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1vh; 

  .center-box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 0; 
      justify-content: space-evenly;
  }

  .content {
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
  }

  div strong {
      color: rgb(0, 0, 0);
      font-size: 25px;
  }

  .login-button {
      font-size: 20px;
      margin: 10px 10% 0 25%;
      background-color: red;
      border: none;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
  }

  .login-button:hover {
      background-color: var(--colorHeaderFooter);
  }

  .login-button~a {
      color: crimson;
  }

  .content p {
      margin: 25px 0 0 0;
      
  }

  p::first-line {
      font-size:x-large;
  } */
</style>