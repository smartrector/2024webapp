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

const clearform = () => {
  userdata.value.userid = null;
  userdata.value.password = null;
  userdata.value.username = null;
  userdata.value.addr = null;
};

const addUser = () => {
  let uData = {
    userid: userdata.value.userid,
    password: userdata.value.password,
    username: userdata.value.username,
    addr: userdata.value.addr,
  };
  store.commit("addUser", uData);
  clearform();
};
</script>

<style lang="scss" scoped></style>
