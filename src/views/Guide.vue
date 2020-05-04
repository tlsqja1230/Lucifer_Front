<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg3 sm6 xs12>
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
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <h1>api test</h1>
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
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <h1>modal</h1>
          <v-text-field
            flat
            label="modal title"
            class="hidden-sm-and-down"
            v-model="modalTitle"
          />
          <v-text-field
            flat
            label="modal contents"
            class="hidden-sm-and-down"
            v-model="modalContents"
          />
          <v-btn small color="primary" @click="openModal()">open modal</v-btn>
          <Modal @openModal="openModal" :isOpen="isOpen" :title="modalTitle" :contents="modalContents"></Modal>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <h1>socket</h1>
          <v-text-field
            flat
            label="serverURL"
            class="hidden-sm-and-down"
            v-model="serverURL"
          />
          <v-btn small color="primary" @click="socketConnect()">connect socket</v-btn>
          <v-textarea :value="recvList.length > 0? JSON.stringify(recvList) : ''" readonly></v-textarea>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue'
export default {
  name: 'Guide',
  components: {
    Modal
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
      //todo
      todoList:[],
      todoVal: '',

      //api
      title: '',
      author: '',
      content: '',
      apiResult: {},
      isOpen: false,

      //modal
      modalTitle: '',
      modalContents: '',

      //socket
      serverURL: '',
      recvList: []
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
      let param = {
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
    },
    openModal(){
      this.isOpen = !this.isOpen
    },
    socketConnect() {
      let socket = new this.$sockjs(this.serverURL);
      this.stompClient = this.$webstomp.over(socket);
      this.stompClient.connect(
        {},
        frame => {
          // 소켓 연결 성공
          this.connected = true;
          console.log('소켓 연결 성공', frame);
          // 서버의 메시지 전송 endpoint를 구독합니다.
          // 이런형태를 pub sub 구조라고 합니다.
          this.stompClient.subscribe("/chart", res => {
            console.log('구독으로 받은 메시지 입니다.', res.body);

            // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
            this.recvList.push(JSON.parse(res.body))
          });
        },
        error => {
          // 소켓 연결 실패
          console.log('소켓 연결 실패', error);
          this.connected = false;
        }
      );        
    } 
  },
}
</script>
