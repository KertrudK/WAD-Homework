<template>
    <article v-for="post in $store.state.posts">
      <div class="header">
        <img class="avatar" :src="post.avatar" alt="User avatar"/>
        <p>{{post.date}}</p>
      </div>
      <div class="body">
        <img class="image" v-if="post.post_image" :src="post.post_image" alt="Post picture"/>
        <p>{{post.post_text}}</p>
      </div>
      <div class="footer">
        <input type="image" :src="require('@/assets/like.png')" alt="Like button" @click="$store.commit('increaseLike', post.id)"/>
        <p>{{post.likes}} likes</p>
      </div>
    </article>
  </template>
  
  <script>
  export default {
    name: "Post"
  }
  </script>
  
  <style scoped>
  article {
    display: flex;
    flex-direction: column;
    background-color: #E8CEBF;
    border-radius: 15px;
    gap: 1vh;
    padding: 2%;
  }
  
  .header, .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  
  .avatar {
    object-fit:cover;
    width: 50px;
    height: 50px;
    border-radius: 1rem;
    background-position:center;
  }
  
  .image {
    width: 100%;
  }
  
  .body p {
    text-align: left;
  }
  
  p {
    font-size: large;
  }
  
  input {
    width: 2rem;
    height: auto;
  }
  </style>