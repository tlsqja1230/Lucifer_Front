<template>
  <v-row>
    <v-btn color="primary" @click="modal=!modal">Chart</v-btn>
    <v-dialog v-model="modal" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Chart</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
               <v-col cols="12" sm="8">
                <v-select
                  :items="itemList"
                  label="Chart*"
                  v-model="chartName"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="[30,40,50,60,70,80,90,100]"
                  label="Width(%)*"
                  v-model="width"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onClickBtn('close')">Close</v-btn>
          <v-btn color="blue darken-1" text @click="onClickBtn('save')">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    computed:{
      itemList(){
        let list = []
        this.chartList.forEach(item=>{
          list.push(item.name)
        })
        return list
      }
    },
    data(){
      return {
        modal: false,
        chartList: [
          {id:'CPU', name: 'CPU'},
          {id:'XLOG', name: 'XLOG'},
          {id:'TPS', name: 'TPS'},
          {id:'ERROR RATE', name: 'ERROR RATE'},
          {id:'ACTIVE SERVICE', name: 'ACTIVE SERVICE'},
        ],
        chartName: '',
        width: 0,
      }
    },
    methods: {
      onClickBtn(type){
        if(type === 'save'){
          let param = {
            chartName: this.chartName,
            width: this.width,
          }
          this.$emit('modalResult',param)
        }
        // 초기화
        this.chartName = ''
        this.width = 0
        // modal닫기
        this.modal = false
      }
    },
  }
</script>