<template>
  <v-app>
    <SetLayout>
      <div class="page-wrapper">
        <v-content>
          <router-view></router-view>
        </v-content>
      </div>
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
<style scoped>
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
}
</style>