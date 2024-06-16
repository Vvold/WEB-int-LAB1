<template>
  <div class="content container d-flex">
    <div
        class="w-50 bg-dark h-100 float-left d-flex flex-column align-items-center justify-content-center logo-app"
        style="color: #81B286"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          fill="currentColor"
          class="bi bi-person-circle logo"
          viewBox="0 0 16 16"
      >
      <path
          fill-rule="evenodd"
          d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-.148 4.5a2.5 2.5 0 1 0-2.704 0h2.704z"
      />
      </svg>
      <h1>LOGIN</h1>
    </div>
    <div
        class="container w-50 d-flex flex-column align-items-center form-block"
    >
      <h3 style="margin-bottom: 20px">Login</h3>
      <div class="container w-50">
        <form @submit.prevent="login">
          <div class="form-group">
            <div class="form-floating mb-3">
              <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  v-model="email"
              />
              <label for="email">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter password"
                  v-model="password"
              />
              <label for="password">Password</label>
            </div>
            <div class="w-100 d-flex justify-content-center">
              <RouterLink
                  type="submit"
                  id="login_button"
                  class="btn btn-outline-secondary p-1 me-2"
                  to="registration"
              >
                Sign Up
              </RouterLink>
              <button
                  type="submit"
                  id="login_button"
                  class="btn btn-outline-secondary p-1"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface ILoginInfo {
  email: string;
  password: string;
}
export default {
  name: "LoginComponent",
  data(): ILoginInfo {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
  },
  methods: {
    async login() {
      try {
        await this.saveLoginInfo({ email: this.email, password: this.password });
        this.$router.push('/main');
      } catch (e) {
        console.error('Error during login:', e);
      }
    },
    saveLoginInfo(loginInfo: ILoginInfo): Promise<void> {
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica", monospace !important;
}

body {
  background: #81B286;
  width: 100%;
}

.content {
  height: 100vh;
}

.form-block {
  margin-top: 50px;
}

@media (max-width: 820px) {
  body {
    max-width: 800px;
  }
  .logo-app {
    display: none !important;
  }
  .form-block {
    margin: auto;
  }
  .form-block .container {
    width: 100% !important;
  }
}
</style>
