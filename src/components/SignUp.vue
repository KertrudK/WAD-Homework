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
        <input v-model="text" type="password" placeholder="password" required/>
        <button type="Submit">Submit</button>
      </form> 
    </div>

  <div v-if="formSubmitted">
        <span>Lovely!</span>
    </div>
  <div v-if!="formSubmitted">
      <span>I have to show errors here somehow</span> <!-- TODO -->
  </div>

</template>
  
  <script>

    function checkPassword(password) {
      if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8, 15}$/))
      {
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
          formSubmitted: false
      };
    },

    methods: {
      submitForm() {
          if (checkPassword(this.password)) {
            this.formSubmitted = true
          }
          else {
            this.formSubmitted = false
          } 
        }
      }
    }



/*
 Length (at least 8 chars and less than 15 chars). DONE
 Includes at least one uppercase alphabet character. DONE
 Includes at least two lowercase alphabet characters. IN PROGRESS
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