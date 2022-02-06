<template>
  <v-app>
    <Header :views="views" :snss="snss"/>

    <v-content>
      <v-fade-transition mode="out-in">
        
        <router-view>
          <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in views"
            :key="item"
          >
        </v-tab-item>
          </v-tabs-items>
        </router-view>
      </v-fade-transition>
    </v-content>
    <v-footer app dark color="#00331b">
      <v-flex text-center>
        <h4 class="font-weight-light">&copy; 2021 - Octa Hatsuki / Hatsuki Takahashi</h4>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
  export default {
    name: 'App',
    components: {
      Header
    },
    
    data() {
      return {
        views: [
          {
            title: 'About',
            icon: 'dashboard',
            path: '/',
            external: false
          },
          {
            title: 'DevelopMentWorks',
            icon: 'account_circle',
            path: '/works',
            external: false
          },
          // {
          //   title: 'ProjectionMapping',
          //   icon: 'account_circle',
          //   path: '/projectionmapping',
          //   external: false
          // }
          
          
        ],

        snss:[
          {
          title:'github',
          icon: 'github',
          path: 'https://github.com/octan008'
          }
        ]
      }
    }
  }
</script>