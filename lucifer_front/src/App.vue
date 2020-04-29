<template>
  <v-app id="inspire">
    <!-- 헤더 bar 컴포넌트 -->
    <headerBar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import headerBar from '@/components/headerBar.vue'
  export default {
    components:{
      headerBar
    },
    props: {
      source: String,
    },
    data(){
      return {
        dialog: false,
      }
    }
  }
</script>