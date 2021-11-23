<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li class="new"><router-link to="/create">Create chart</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import url("../styles/normalization.scss");

#nav {
  margin: 16px auto;
  width: 90%;
  border: 1px solid rgba(225, 225, 225, 0.7);

  ul {
    display: flex;
    justify-content: flex-end;
    align-content: center;

    li {
      list-style-type: none;
      margin-left: 80px;

      a {
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;

        &:hover {
          border-bottom: 2px solid rgba(236, 211, 28, 1);
        }
      }

      a.router-link-exact-active {
        border-bottom: 2px solid rgba(236, 211, 28, 1);
      }
    }

    li.new {
      a {
        color: #2c3e50;
        background-color: #42b983;
      }

      a.router-link-exact-active {
        color: #2c3e50;
        background-color: #42b983;
      }
    }
  }
}
</style>
