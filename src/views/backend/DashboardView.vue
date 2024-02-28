<template>
  <router-view v-if="status" />
</template>
<script>

export default {
  data() {
    return {
      status: false,
    };
  },
  created() {
    // 從 cookie 取出 token，所有 axios 請求都會加上 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)selectWaveToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = token;
    // 檢查用戶是否仍持續登入API
    const api = `${import.meta.env.VITE_APP_API_URL}/api/auth/check`;
    this.$http.get(api, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.data.status) {
          this.status = true;
        } else {
          this.status = false;
          this.$swal({
            title: '登入失敗，請重新登入',
          });
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        this.$router.push('/login');
        this.$swal({
          title: `${err.response.data.message}`,
        });
      });
  },
  // created() {
  //   // 從 cookie 取出 token，所有 axios 請求都會加上 token
  //   const token = document.cookie.replace(
  //     /(?:(?:^|.*;\s*)carrieHexToken\s*=\s*([^;]*).*$)|^.*$/,
  //     '$1',
  //   );
  //   this.$http.defaults.headers.common.Authorization = token;
  //   // 檢查用戶是否仍持續登入API
  //   const api = 'https://vue3-course-api.hexschool.io';
  //   this.$http.post(`${api}/v2/api/user/check`)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data.success) {
  //         this.status = true;
  //       } else {
  //         this.status = false;
  //         this.$swal({
  //           title: '登入失敗，請重新登入',
  //         });
  //         this.$router.push('/loginhex');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.$router.push('/loginhex');
  //       this.$swal({
  //         title: `${err.response.data.message}`,
  //       });
  //     });
  // },
};
</script>
