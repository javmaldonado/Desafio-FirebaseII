<!-- src/views/RegisterView.vue -->
<template>
  <div>
    <SignupComponent @submit="register" />
  </div>
</template>

<script>
import SignupComponent from "@/components/SignupComponent.vue";
import { mapActions } from "vuex";


export default {
  name: "RegisterView",
  components: {
    SignupComponent,
  },
  methods: {
  ...mapActions(["register"])
  },
};
</script>
