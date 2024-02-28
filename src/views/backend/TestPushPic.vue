<template>
  <div class="container py-4">
    <h2>測試圖片上傳</h2>
    <!-- 上傳圖片格式1 -->
    <label class="block mb-2 text-sm font-medium text-gray-900" for="avatar-layout">Upload file</label>
    <input ref="fileInput"
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-4"
      id="avatar-layout" type="file" @change="uploadFile">
    <!-- 上傳圖片格式1 -->
    <!-- 上傳圖片格式2 -->
    <!-- <div class="flex">
      <label for="dropzone-file"
        class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 hover:bg-gray-100" style="width: 100px; height: 100px;">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <p class="mb-2 text-sm text-gray-500">
            <span class="font-semibold">更換頭像</span></p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" @change="uploadFile" />
      </label>
    </div> -->
    <!-- 上傳圖片格式2 -->
    <hr>
    <img :src="imgUrl" class="rounded-full object-cover object-center" alt="封面照" style="width: 100px; height: 100px;">
    <hr>
    <!-- 測試, 刪 -->
    <label for="datePicker">選取日期：</label>
    <input type="date" id="datePicker" v-model="selectedDate" @input="updateDateText">
    <!-- <p>選取的日期：{{ dateText }}</p> -->
    {{ selectedDate }}
    <!-- 測試, 刪 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: {
        result: {},
      },
      imgUrl: '',
      // 測試, 刪
      selectedDate: null,
      dateText: '',
    };
  },
  methods: {
    // updateDateText測試, 刪
    updateDateText() {
      // 格式化日期文字，這裡可以使用你喜歡的日期格式庫，比如 date-fns 或者 dayjs
      // if (this.selectedDate) {
      //   const formattedDate = new Date(this.selectedDate).toLocaleDateString();
      //   this.dateText = formattedDate;
      // } else {
      //   this.dateText = '';
      // }

      console.log(this.selectedDate);
    },
    uploadFile() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)selectWaveToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.$http.defaults.headers.common.Authorization = token;
      const authoToken = {
        headers: {
          Authorization: token,
        },
      };

      const uploadFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);
      console.log(uploadFile);

      const api = `${import.meta.env.VITE_APP_API_URL}/api/imgur/upload`;
      this.$http.post(api, formData, authoToken)
        .then((res) => {
          console.log(res);
          this.imgUrl = res.data.result;
          this.$swal({
            title: `${res.data.message}`,
          });
        })
        .catch((err) => {
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
    getMembers() {
      const api = `${import.meta.env.VITE_APP_API_URL}/api/member/`;
      this.$http.get(api)
        .then((res) => {
          console.log(res);
          this.members.result = res.data.result;
          // this.$swal({
          //   title: `${res.data.message}`,
          // });
        })
        .catch((err) => {
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
  },
  mounted() {
    this.getMembers();
  },
};
</script>
