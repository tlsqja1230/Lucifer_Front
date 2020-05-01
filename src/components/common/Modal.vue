<template>
  <v-row justify="center">
    <v-dialog v-model="isOpen" scrollable max-width="300px">
      <v-card>
        <v-card-title>{{title}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          {{contents}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="returnResult()">Close</v-btn>
          <v-btn color="blue darken-1" text @click="returnResult()">confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      },
      contents: {
        type: String
      }
    },
    methods: {
      returnResult(){
        this.$emit('openModal')
      }
    },
  }
</script>