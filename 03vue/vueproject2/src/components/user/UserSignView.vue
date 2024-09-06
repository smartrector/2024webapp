<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="userid"
        v-model="userdata.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="password"
        v-model="userdata.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="username"
        v-model="userdata.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="addr"
        v-model="userdata.addr"
      />
    </div>
    <div class="input-group mb-3">
      <input type="file" class="form-control" id="fileform" />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
    <div class="btn btn-primary" @click="addUser">회원가입</div>
  </div>
  {{ userdata }}
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const userdata = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  image: null,
});

const addUser = () => {
  alert("test");
  store.commit("addUser", userdata.value);
};
</script>

<style lang="scss" scoped></style>
