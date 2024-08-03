import { createStore } from "vuex";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../config/firebaseConfig.js";
import router from "@/router/index.js";
import swal from "sweetalert";

export default createStore({
  state: {
    loggedUser: null,
  },
  mutations: {
    setLoggedUser(state, user) {
      state.loggedUser = user;
    },
  },
  actions: {
    async login(context, data) {
      console.log(data);
      try {
        const loginResponse = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        context.commit("setLoggedUser", loginResponse.user);
        router.push("/home");
      } catch (error) {
        console.log("Error en el inicio de sesión", error);
        swal("Ocurrió un error al intentar ingresar, revise usuario y contraseña", { icon: "error" });
      }
    },
    async register(context, { email, password }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Credenciales", userCredential);
        const user = userCredential.user;
        console.log("Usuario registrado", user);
        swal("Usuario registrado correctamente, ahora puedes iniciar sesión", { icon: "success" });
        context.commit("setLoggedUser", user);
        router.push("/");
      } catch (error) {
        console.log("Error en el registro", error);
        swal("Ocurrió un error en el registro, intenta nuevamente", { icon: "error" });
      }
    },
  },
});
