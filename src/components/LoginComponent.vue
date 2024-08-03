<!-- src/components/LoginForm.vue -->
<template>
 <div class="loginClass">
  <h2>Iniciar sesión</h2>
    <div class="form mb-3">
      <label class="form-label">Email</label>
      <input  v-model="internalEmail" placeholder="Ingrese su correo..." type="email" class="form-control" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label class="form-label">Contraseña</label>
      <input v-model="internalPassword"
      type="password"
      placeholder="Ingrese su contraseña..."  class="form-control">
    </div>
    <button  @click="onSubmit" class="btn btn-primary">Iniciar sesión</button>
    <br/>
    <p>¿No tienes contraseña?<router-link to="/signup">Registrate aquí</router-link></p>

</div>
  
</template>

<script>
export default {
  name: "LoginComponent",
  props: {
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      internalEmail: this.email, // internalEmail para evitar la mutación de props
      internalPassword: this.password,
    };
  },
  methods: {
    onSubmit() {
      if (this.internalEmail && this.internalPassword) {
        this.$emit("submit", { email: this.internalEmail, password: this.internalPassword });
      } else {
        console.log("Email y contraseña son obligatorios");
      }
    },
  },
};
</script>

<style scoped>
.loginClass {
  margin: auto;
  width: 30%;
  position: center;
  padding: 10px;
}
.form-label{
  text-align: start;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
}

button:hover {
  background-color: #45a049;
}
</style>