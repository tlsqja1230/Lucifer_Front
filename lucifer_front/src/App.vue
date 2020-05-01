<template>
  <v-app>
    <SetLayout>
      <router-view></router-view>
    </SetLayout>
  </v-app>
</template>

<script>
  import SetLayout from '@/components/layouts/SetLayout.vue'
  export default {
    components:{
      SetLayout
    }
  }
</script>