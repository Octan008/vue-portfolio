<template>
    <v-container>
        <v-layout align-center column justify-center>

            <h1 class="Display-3 font-weight-medium my-3 text-center">肖像A</h1>
            <h4 class="font-weight-light mb-3">東京大学制作展2021 Extra 『0 PUNK』にて出展 / 第27回学生CGコンテスト アート部門ノミネート</h4>
            <img width="width" :height="height" src="@/assets/works/cgc27.jpeg">
            <span class = "links">
           <!--  <a target="_blank" href = "https://portrait-a.octan.site/#/"> 肖像A 鑑賞サイトへ </a>-->
            <a target="_blank" href = "https://portrait-six.vercel.app/#/"> 肖像A 鑑賞サイトへ </a>
            </span>
           
            <!-- <iframe :width="width" :height="height" src="https://portrait-a-mov.s3.ap-northeast-1.amazonaws.com/index.html" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe> -->

            <!-- <a href = "https://qiita.com/juniorht48/items/14b66f533dd6fdad81e8">https://qiita.com/juniorht48/items/14b66f533dd6fdad81e8</a> -->
            <!-- <h1 class="Display-3 font-weight-medium mt-3">Description</h1>
            <h4 class="font-weight-light md-mx-12">I create a VTuber engine that reflects the three-axis rotation of the
                face in real time to a 3DCG scene by combining my path tracing engine and some image processing methods.
                As a future work, I intend to implement skinning so as to reflect information on facial expressions.<br>
                In the future, I will expect to realize comfortable telework in virtual offices, schools, etc., by mapping
                humans in a hyper-realistic CG space and making them feel as if they are in a real space.
            </h4>

            <h1 class="Display-3 font-weight-medium mt-3">What I Did</h1> -->
            <!-- <h4 class="font-weight-light">CG Programming (C++, Vulkan, GLSL)<br>
                Face Detection (OpenCV, Dlib)<br>
                This engine is based on <router-link to="/PathEngine">my previous work</router-link>.
            </h4> -->
        </v-layout>
    </v-container>
</template>

<script>
    export default {

        components: {

        },
        computed:{
            width: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 350
                }else{
                    return 560
                }
            },
            height: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 197
                }else{
                    return 315
                }
            }
        }
    }
</script>
<style scoped>
HTML CSSResult Skip Results Iframe
EDIT ON
* {
  box-sizing: border-box;
}
/* body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* 装飾 */
.links :hover{
  background-color: transparent;
  color: #00331b;
  border: solid 2px #00331b;
}
.links a {
  color: #fff;
  background-color: #00331b;
  padding: 10px 30px;
  margin: 5px;
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  border: solid 2px white;
}

</style>
