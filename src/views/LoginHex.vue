<template>
  <div class="min-h-full grid pt-6 pb-12">
    <div class="flex">
      <div class="basis-1/2 bg-center bg-cover bg-no-repeat min-w-screen
      min-h-screen hidden md:block" style="background-image: url('./images/loginCover.png');">
      </div>
      <div class="basis-full md:basis-1/2 px-3">
        <div class="flex justify-center items-center h-full">
          <form class="min-w-96 mx-auto" @submit.prevent="loginHexo">
            <div class="mb-4">
              <h2 class="text-2xl md:text-4xl font-bold mb-2 text-gray-1">登入(六角API)</h2>
              <span class="text-gray-1">尚未成為會員？</span>
              <router-link class="text-gray-2 hover:text-primary" to="/signup">前往註冊</router-link>
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-base font-medium text-gray-1">Email</label>
              <input type="email" id="email" class="bg-white border border-gray-3 text-sm rounded-3xl
                focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請輸入信箱" required
                v-model="user.username" />
            </div>
            <div class="mb-1">
              <label for="password" class="block mb-2 text-base font-medium text-gray-1">密碼</label>
              <input type="password" id="password" class="bg-white border border-gray-3 text-sm rounded-3xl
                focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請輸入密碼" required
                v-model="user.password" />
            </div>
            <router-link class="text-gray-2 mb-6 text-sm hover:text-primary block text-right" to="">
              忘記密碼 ?
            </router-link>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 text-primary rounded
                  bg-gray-50 focus:ring-3 focus:ring-primary-light" required />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900">
                同意
                <router-link class="text-gray-2" target="_blank" to="/terms">使用規範</router-link>、
                <router-link class="text-gray-2" target="_blank" to="/privacy">隱私權政策</router-link>
              </label>
            </div>
            <button type="submit" class="text-white bg-gray-1 hover:bg-primary focus:ring-4
              focus:outline-none focus:ring-primary-light font-medium rounded-3xl
              text-base w-full sm:w-auto px-5 py-2.5 text-center mb-6">
              登入
            </button>
            <p class="mb-4">使用以下方式登入</p>
            <div class="flex justify-between">
              <button type="button" class="text-white bg-gray-1 rounded-3xl
              text-base w-1/4 sm:w-auto py-3.5 hover:bg-primary">
                <i class="bi bi-google"></i>
              </button>
              <button type="button" class="text-white bg-gray-1 rounded-3xl
              text-base w-1/4 sm:w-auto py-3.5 hover:bg-primary">
                <i class="bi bi-discord"></i>
              </button>
              <button type="button" class="text-white bg-gray-1 rounded-3xl
              text-base w-1/4 sm:w-auto py-3.5 hover:bg-primary">
                <i class="bi bi-line"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      user: {
        username: '',
        // email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${import.meta.env.VITE_APP_API_URL}/api/auth/login`;
      this.$http.post(api, this.user)
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            const { authToken } = res.data;
            document.cookie = `selectWaveToken=${authToken};`;
            this.$router.push('/admin');
            this.$swal({
              title: `${res.data.message}`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.user.email = '';
          this.user.password = '';
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
    loginHexo() {
      const api = 'https://vue3-course-api.hexschool.io';
      this.$http.post(`${api}/v2/admin/signin`, this.user)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `carrieHexToken=${token}; expires=${new Date(expired)};`;
            this.$router.push('/admin');
            this.$swal({
              title: `${res.data.message}`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.user.email = '';
          this.user.password = '';
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
  },
};
</script>

<style scoped></style>
