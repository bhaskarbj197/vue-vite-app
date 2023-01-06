<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import AuthService from '../services/AuthServices';

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

function onSubmit(values, { setErrors }) {
  //const authStore = useAuthStore();
  const { username, password } = values;
  const user = {
    username: username,
    password: password,
  };

  return AuthService.login(user).catch((error) =>
    setErrors({ apiError: error })
  );
}
</script>

<template>
  <main>
    <div>
      <h1>Login page</h1>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <div class="form-group">
          <label>Username</label>
          <Field
            name="username"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.username }"
          />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>
        <div class="form-group">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div>&nbsp;</div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span
              v-show="isSubmitting"
              class="spinner-border spinner-border-sm mr-1"
            ></span>
            Login
          </button>
        </div>
        <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">
          {{ errors.apiError }}
        </div>
      </Form>
    </div>
  </main>
</template>
