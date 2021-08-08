<template>
  <div id="app">
    <div name="content_container">
      <LVL_1 />
      <LVL_2 />
      <LVL_3 />
      <LVL_4 />
      <LVL_5 />
      <ErrorMessage :showMessage="messageData"/>
    </div>
  </div>
</template>

<script>

  import LVL_1 from './components/lvl_1.vue'
  import LVL_2 from './components/lvl_2.vue'
  import LVL_3 from './components/lvl_3.vue'
  import LVL_4 from './components/lvl_4.vue'
  import LVL_5 from './components/lvl_5.vue'
  import ErrorMessage from './components/ErrorMessage.vue'
  import {mapActions} from "vuex";

  export default {
    name: 'App',

    data() {
      return {
        messageData: {},
      }
    },

    components: {
      LVL_1,
      LVL_2,
      LVL_3,
      LVL_4,
      LVL_5,
      ErrorMessage,
    },

    methods: {
      ...mapActions(['loadUserData', 'loadComponentsData']),

      showMessage: function (message, title, icon) {
        this.messageData = {
          message: message,
          title: title,
          icon: icon
        }
      }
    },
    mounted() {
      this.loadUserData();
      this.loadComponentsData();
      this.$on('showMessage', this.showMessage);
    }
  }

</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    background: rgb(38,57,77);
    background: radial-gradient(circle, rgba(38,57,77,1) 0%, rgba(33,37,41,1) 100%);
    font-family: $font;
  } 

  body button {
    cursor: pointer;
  } 


  #app {
    position: relative;
  }

  #app [name=content_container] {
    max-width: 1016px;
    margin: auto;
  }
  
  #app .part_container {
    padding: 0;
    margin-top: 100px;
  }

  #app .part_container [name=title] {
    display: flex;
    height: 40px;
  }

  #app .part_container [name=index] {
    width: 24px;
    line-height: 40px;
    font-size: 12px;
    font-family: $font;
    color: #667380;
    font-weight: 500;
    display: inline-block;
  }

  #app .part_container [name=title] h1 {
    margin: 0;
    line-height: 40px;
    font-weight: 600;
    font-size: 32px;
    margin-left: 106px;
    color: #fff;
    display: inline-block;
    font-family: $font;
  }
</style>
