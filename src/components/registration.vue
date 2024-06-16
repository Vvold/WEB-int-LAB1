<template>
  <div class="content container d-flex">
    <div class="w-50 bg-dark h-100 float-left d-flex flex-column align-items-center justify-content-center logo-app"
         style="color: #81B286">
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-person-circle logo"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-.148 4.5a2.5 2.5 0 1 0-2.704 0h2.704z"/>
      </svg>
      <h1>Registration</h1>
    </div>
    <div class="container w-50 d-flex flex-column align-items-center justify-content-start pt-4 form-block">
      <h3 style="margin-bottom: 20px">Sign Up</h3>
      <div class="container w-75">
        <form @submit.prevent="signUp">
          <div class="form-group">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" v-model="user.firstName" id="firstName" placeholder="Enter email">
              <label for="firstName">First Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" v-model="user.lastName" id="lastName" placeholder="Enter email">
              <label for="lastName">Last Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" v-model="user.email" id="email" placeholder="Enter email">
              <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" v-model="user.password" id="password" placeholder="Enter email">
              <label for="password">Password</label>
            </div>
            <div class="form-floating mb-3">
              <select class="form-select ps-3" v-model="user.sex" id="sex">
                <option v-for="[value, key] in sexValueMap" :key="key" :value="value">{{ key }}</option>
              </select>
              <label for="sex">Sex</label>
            </div>
            <div class="form-floating mb-3">
              <input type="date" class="form-control" v-model="user.birth" id="birth_date">
              <label for="birth_date">Birth Date</label>
            </div>
            <div class="w-100  d-flex justify-content-center">
              <button type="submit" id="sign_up_button" class="btn btn-outline-secondary p-1 me-2">
                Sign Up
              </button>
              <RouterLink to="login" type="submit" id="sign_up_button" class="btn btn-outline-secondary p-1">
                Login
              </RouterLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SexValue } from "@/interfaces/user.interface";

export default {
  name: "registrationComponent",
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        sex: SexValue.MALE,
        birth: ''
      },
      sexValueMap: new Map<SexValue, string>([
        [SexValue.FEMALE, 'Female'],
        [SexValue.MALE, "Male"],
      ]),
    };
  },
  methods: {
    signUp(): void {
      localStorage.setItem('user', JSON.stringify({ ...this.user, id: Math.floor(Math.random() * 1000), posts: [] }));
      localStorage.setItem('loginInfo', JSON.stringify({ email: this.user.email, password: this.user.password}))
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica", monospace !important;
}

body{
  background: #81B286;
  width: 100%;
}

.content {
  height: 100vh;
}

.form-block{
  margin-top: 50px;
}

@media (max-width: 820px) {
  body{
    max-width: 800px;
  }
  .logo-app{
    display: none !important;
  }
  .form-block{
    margin: auto;
  }
  .form-block .container{
    width: 100% !important;
  }
}

</style>
