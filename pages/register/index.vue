<template>
  <section>
    <div class="card">
      <div class="card_body">
        <h3>Register account</h3>
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
            <label for="re-password">Re-Password: </label>
            <input
              v-model="re_password"
              type="password"
              class="form_control"
              id="re-password"
              placeholder="Re-password ... "
            />
          </div>
          <div class="form_group">
            <button class="btn btn_success btn-submit" type="submit">
              Register account
            </button>
          </div>
        </form>
        <div class="other text_center">
            <span>
                Have your account?
                <nuxt-link to="/login" tag="a">Login Now</nuxt-link>
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
      re_password: "",
    };
  },
  methods: {
    checkvalidatePassword() {
      return this.password === this.re_password;
    },
    onSubmit() {
      if (this.checkvalidatePassword()) {
          this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`, {
              email: this.email, 
              password: this.password,
              returnSecureToken: true,
          }).then((result) => {console.log(result) })
          .catch((err) => { console.log(err) })
      } else {
        console.log("Wrong re_password");
      }
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