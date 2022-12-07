<template>
	<div class="home">
	<SignUp></SignUp>
	</div>
  </template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SignUp from '@/components/SignUp.vue';

export default {
  name: 'SignUpView',
  components: {
	Header, Footer, SignUp
  }
}
</script>