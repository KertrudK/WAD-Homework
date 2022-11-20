<template>
  <!--https://vuejs.org/guide/essentials/forms.html-->
  
<div>
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
        <span>Enter your name</span> 
        <input v-model="name" type = "text" placeholder="name" required/>
        <span>Enter your e-mail</span>
        <input v-model="email" type="email" placeholder="e-mail" required/>
        <button type="Submit">Submit</button>
      </form> 
    </div>

  <div v-if="formSubmitted">
        <p>Lovely!</p>
    </div>

</template>
  
  <script>
  export default {
    name: "SignUp",
    data() {
      return {
          name: "",
          email: "",
          formSubmitted: false
      };
    },
    methods: {
      submitForm: function() {
        this.formSubmitted = true
      }
      },
  };
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