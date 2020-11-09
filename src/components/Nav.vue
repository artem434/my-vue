<template>
  <nav class="light-blue darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Logo</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       <router-link
            tag="li"
            to="/"
            exact
            active-class="active">

        <a href="#">Create</a>
       </router-link>
         <router-link
            tag="li"
            to="/list"
            active-class="active">
        <a href="#">list</a>
       </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>