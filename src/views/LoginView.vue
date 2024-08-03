<!-- src/views/LoginView.vue -->
<template>
  <div>
    <LoginComponent @submit="login" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "LoginView",
  components: {
    LoginComponent,
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
