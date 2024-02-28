import { defineStore } from 'pinia';

export default defineStore('voteStore', {
  state: () => ({
    addPollData: {
      title: '',
      description: '',
      imageUrl: 'https://i.imgur.com/D3hp8H6.png',
      tags: [],
      startDate: '',
      endDate: '',
      isPrivate: false,
      // optionsData: [
      //   {
      //     title: '',
      //     imageUrl: 'https://imgur.com/TECsq2J.png',
      //   },
      // ],
      // status: 'active',
    },
    optionsData: [
      {
        title: '',
        imageUrl: 'https://imgur.com/TECsq2J.png',
      },
    ],
  }),
  actions: {
    addPoll() {
      // console.log('add modla test');
      // const apiUrl = `${import.meta.env.VITE_APP_API_URL}/api/poll/`;
      // this.$http.post(apiUrl, this.addPollData)
      //   .then((res) => {
      //     if (res.status === 200) {
      //       console.log(res);
      //       // this.addPollData = res.data.polls;
      //       this.$swal({
      //         title: `${res.data.message}`,
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.$swal({
      //       title: `${err.response.data.message}`,
      //     });
      //   });
    },
  },
});
