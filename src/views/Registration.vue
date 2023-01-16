<script setup>
import { ref, computed } from 'vue';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import EmployeeService from '../services/EmpDataServices';
import Linechart from '../components/Linechart.vue';
import Doughnutchart from '../components/Doughnutchart.vue';
import Barchart from '../components/Barchart.vue';

let searchTerm = ref('');
let selectedRandom = ref('');
let selectedRandomDetails = ref('');
const apiResponse = ref([]);

function dataChange() {
  console.log('dataChange in search teaxt: ', searchTerm.value.length);
  if (searchTerm.value.length > 3) {
    EmployeeService.getUserBoard()
      .then((response) => {
        if (response.data) {
          apiResponse.value = response.data;
          // redirect to previous url or default to home page
          // router.push('/');
        }

        // return response.data;
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err);
      });
  }
}

const searchResult = computed(() => {
  if (searchTerm.value.length <= 3) {
    return [];
  }

  // console.log('apiResponse: ', apiResponse);
  return apiResponse.value;
});

function selectRandom(r1, r2, r3, r4) {
  selectedRandom.value = r1;
  selectedRandomDetails.value =
    r1 + ' || ' + r4 + ' || ' + r2 + ' || ' + new Date(r3).toLocaleDateString();
  searchTerm.value = '';
}

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
  <main class="registration-page">
    <h1>Registration</h1>
    <!--<p>Search Result: {{ searchResult }}</p>-->
    <form class="row gx-3 gy-2 align-items-center">
      <div class="col-sm-3">
        <label class="visually-hidden" for="searchText">Search</label>
        <div class="input-group">
          <div class="input-group-text">Search</div>
          <input
            type="text"
            class="form-control"
            id="searchText"
            placeholder="Type here..."
            v-model="searchTerm"
            @change="dataChange"
          />

          <ul
            v-if="searchResult.length"
            class="
              w-full
              rounded
              bg-white
              border border-gray-300
              px-4
              py-2
              space-y-1
              absolute
              z-10
            "
          >
            <li
              v-for="random in searchResult"
              :key="random.name"
              @click="
                selectRandom(
                  random.name,
                  random.pid,
                  random.dob,
                  random.address
                )
              "
              class="cursor-pointer hover:bg-gray-100 p-1"
            >
              {{ random.name }} || {{ random.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3">
        <label class="visually-hidden" for="name">Username</label>
        <div class="input-group">
          <div class="input-group-text">Name</div>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Username"
            disabled
            v-model="selectedRandom"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <label class="visually-hidden" for="details">Details</label>
        <div class="input-group">
          <div class="input-group-text">Details</div>
          <textarea
            rows="1"
            class="form-control"
            id="details"
            placeholder=""
            disabled
            v-model="selectedRandomDetails"
          />
        </div>
      </div>
      <div class="col-sm-3"></div>
      <div class="col-sm-3">
        <Linechart />
      </div>
      <div class="col-sm-3">
        <Barchart />
      </div>
      <div class="col-sm-3">
        <Doughnutchart />
      </div>
      <div class="col-sm-3"></div>
      <div class="col-sm-3">
        <div class="table-responsive">
          <table class="table table-sm table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Team</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Argentina</td>
                <td>Spain</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton Dcosta</td>
                <td>@fat</td>
                <td>Brasil</td>
                <td>Netharland</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>Argentina</td>
                <td>Spain</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  </main>
</template>
