<template>
  <div>
    <!-- 사이드 네비게이션 메뉴 컴포넌트 -->
    <navigation :drawer="drawer"/>
    <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Lucifer</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          />
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  import navigation from '@/components/navigation.vue'
  export default {
    name: 'headerBar',
    components:{
      navigation
    },
    props: {
    },
    data(){
      return {
        drawer: false
      }
    }
  }
</script>
