<template>
  <div>
    <h1>todo list</h1>
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
    <br/>
    <h1>api 테스트</h1>
    <v-text-field
        flat
        label="게시글 제목"
        class="hidden-sm-and-down"
        v-model="title"
    />
    <v-text-field
        flat
        label="게시글 작성자"
        class="hidden-sm-and-down"
        v-model="author"
    />
    <v-text-field
        flat
        label="게시글 내용"
        class="hidden-sm-and-down"
        v-model="content"
    />
    <v-btn small color="primary" @click="excuteApi()">call api</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Test',
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
      todoVal: '',
      title: '',
      author: '',
      content: '',
      apiResult: {}
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
    },
    async excuteApi(){
      var param = {
        title : this.title,
        author : this.author,
        content : this.content
      }

      await this.$http.post('/test/posts',param).then(response=>{
        console.log(response)
        this.title = ''
        this.author = ''
        this.content = ''
      })
    }
  },
}
</script>
