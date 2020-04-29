<template>
  <div>
    <v-text-field
        flat
        label="할일 추가"
        class="hidden-sm-and-down"
        v-model="todoVal"
        @keyup.enter="insertTodo()"
    />
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="(item, index) in todoList" :key="index">
            <td>{{ item }}</td>
            <div class="my-2">
              <v-btn small color="error" @click="deleteTodo(index)">삭제</v-btn>
            </div>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <p>할일 총 {{todoCnt}} 건</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  props: {
  },
  watch: {
  },
  computed: {
    todoCnt(){
      return this.todoList.length
    }
  },
  data(){
    return {
      todoList:[],
      todoVal: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  created() {
  },
  mounted() {
  },
  updated() {
  },
  methods: {
    insertTodo(){
      if(this.todoVal.trim() !== ''){
        this.todoList.push(this.todoVal);
        this.todoVal = '';
      }
    },
    deleteTodo(index){
      this.todoList.splice(index,1);
    }
  },
}
</script>
