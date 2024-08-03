<template>
  <div id="app">
    <nav>
      <router-link to="/">Iniciar sesión</router-link> |
      <router-link to="/signup">Registrarse</router-link> |
      <router-link to="/home">Home</router-link>
    </nav>

    <div id="content">
      <router-view/>
    </div>

    <footer>
      <div class="footer">
        <div class="text-dark">
          <div class="row">
            <router-link class="nav-link col-3" to="#">Instagram</router-link>
            <router-link class="nav-link col-3" to="#">LinkedIn</router-link>
            <router-link class="nav-link col-3" to="#">Email</router-link>
            <router-link class="nav-link col-3" to="/home"> Ir home</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

nav {
  padding: 30px;
  text-align: center;
  background-color: rgb(239, 239, 239);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #4CAF50;
}

#content {
  flex: 1;
}

footer {
  height: 80px;
  padding: 30px;
  text-align: center;
  background-color: #4CAF50;
}
</style>
