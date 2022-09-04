<template>

  <div>

    <v-toolbar
      elevation="4"
      :absolute="true"
      :shaped="true"
      class="saimo-table-toolbar-float"
    >


      <v-btn
        class="mx-2"
        dark
        small
        fab
        color="primary"
        style="margin-top: -28px;"
        @click="addHandle"
      >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>


    </v-toolbar>

    <div style="height:68px"></div>


    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      :items-per-page="tableItems.length"
      hide-default-footer
      show-select
      checkbox-color="primary"
      class="elevation-4"
    >
      <template v-slot:item.calories="{ item }">
        <v-chip
          :color="getColor(item.calories)"
          dark
        >
          {{ item.calories }}
        </v-chip>
      </template>
    </v-data-table>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      width="500"
      class="saimo-form-drawer"
    >
      <v-row justify="center">
        <div class="toolbar-title">
          <v-toolbar-title>添加</v-toolbar-title>
        </div>




        <v-expansion-panels popout>
          <v-expansion-panel>
            <v-expansion-panel-header>基础信息</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-form v-model="valid" @submit.prevent="submit">
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="12"
                      class="saimo-form-col"
                    >
                      <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
            
                        label="姓名"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      md="12"
                      class="saimo-form-col"
                    >
                      <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
          
                        label="年龄"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      md="12"
                      class="saimo-form-col"
                    >
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <div class="saimo-form-btn-container">
                    <v-btn
                      class="mr-4"
                      @click="submit"
                      color="primary"
                    >
                      提交
                    </v-btn>
                    <v-btn @click="clear">
                      重置
                    </v-btn>
                  </div>

                </v-container>
              </v-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>附加信息</v-expansion-panel-header>
            <v-expansion-panel-content>
              <form>

                  <v-select
                    v-model="select"
                    :items="items"
                    label="城市"
                    required

                  ></v-select>
                  <v-checkbox
                    v-model="checkbox"
                    label="同意?"
                    required

                  ></v-checkbox>
                  <div class="saimo-form-btn-container">
                    <v-btn
                    class="mr-4"
                    color="primary"
                    @click="submit2"
                  >
                  提交
                  </v-btn>
                  <v-btn @click="clear2">
                    重置
                  </v-btn>
                  </div>

                </form>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>备注信息</v-expansion-panel-header>
            <v-expansion-panel-content>
              
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-row>
    </v-navigation-drawer>


    <v-snackbar
      v-model="snackbar"
      color="success"
      timeout="1000"

    >
      操作成功
      <template v-slot:action="{ attrs }">
        <v-btn
         
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>


  </div>



</template>

// SN打码
<script>


  export default {


    components: {
      
    },
    data () {
      return {
        drawer:false,
        snackbar:false,

        tableHeaders: [
          { text: 'SN: 片标C',value: 'name'},
          { text: 'SN: 片标A', value: 'calories' },
          { text: 'SN: 片标H', value: 'fat' },
          { text: 'SN: 片标K', value: 'carbs' },
          { text: 'SN: 片标W', value: 'protein' },
          { text: 'SN: 片标M', value: 'iron' },
        ],
        tableItems: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          }
        ],

        valid: false,
        firstname: '',
        lastname: '',
        email: '',
        nameRules: [
          v => !!v || '姓名必填'
        ],
        emailRules: [
          v => !!v || 'E-mail 必填',
          v => /.+@.+/.test(v) || 'E-mail 格式错误',
        ],

        select: null,
        items: [
          '新加坡',
          '纽约',
          '南非',
          '巴西', 
        ],
        checkbox: false,
      }
    },
    methods:{
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
      addHandle(){
        this.drawer=true; 
      },
      submit () {
        // this.$v.$touch()
        this.snackbar=true

      },
      clear () {
        // this.$v.$reset();

        this.firstname = ''
        this.lastname = ''
        this.email = ''

      },
      submit2 () {
        this.snackbar=true
        // this.$v.$touch()
      },
      clear2 () {
        // this.$v.$reset();
        this.select = null
        this.checkbox = false


      },
    }    
  }
</script>
  