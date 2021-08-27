<template>
    <v-container>
        <v-layout align-center column justify-center>

            <h1 class="Display-3 font-weight-medium my-3 text-center">PerspectiveFish</h1>
            <h4 class="font-weight-light mb-3">teamLab サマーインターンにて開発</h4>
             <a href="https://github.com/Octan008/PerspectiveFish" target="_blank">https://github.com/Octan008/PerspectiveFish</a>
            <div class="g-slide">
            <iframe src="https://docs.google.com/presentation/d/1ifd7ZAgUcXSrwuHdxg-NlUq753FjLLA4/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="284" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>

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