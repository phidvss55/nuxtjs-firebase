<template>
  <section>
    <div class="card">
      <div class="card_body">
        <h3>Login account</h3>
        <hr />
        <form action="" @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">Email: </label>
            <input
              type="email"
              class="form_control"
              id="email"
              placeholder="Email ... "
              v-model="email"
            />
          </div>
          <div class="form_group">
            <label for="password">Password: </label>
            <input
              type="password"
              class="form_control"
              id="password"
              placeholder="Password ... "
              v-model="password"
            />
          </div>
          <div class="form_group">
            <button class="btn btn_success btn-submit" type="submit">
              Login account
            </button>
          </div>
        </form>
        <div class="other text_center">
          <span>
            Sign up your account?
            <nuxt-link to="/register" tag="a">Register account</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  max-width: 800px;
  margin: 100px auto;
}
.btn-submit {
  width: 100%;
}
</style>