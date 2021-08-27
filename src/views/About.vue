<template>
  <div>
    <!-- <v-carousel
      cycle
      interval="3000"
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        eager
        gradient="to bottom, rgba(20,20,20,0.8),rgba(200,200,200,.0), rgba(20,20,20,0.8)"
      >
        <v-layout align-center column justify-center fill-height>
          <h1 class="display-3 font-weight-thin mb-3 white--text">
            Computer Vision × CG
          </h1>
          <h4 class="font-weight-light white--text">
            Break the boundary between virtual and real
          </h4>
        </v-layout>
      </v-carousel-item>
    </v-carousel> -->

    <v-container class="mt-5">
      <h2 class="display-1 font-weight-medium">Profile</h2>
      <v-container>
        <p class="font-weight-light">
          東京大学大学院 総合文化研究科の学生。コンピュータグラフィックスを研究しており、演劇サークルでプロジェクションマッピングの制作や、メディアアート制作も行っている。
          <code>octan8888(at)gmail.com</code>
        </p>
      </v-container>
    </v-container>

    <v-container>
      <h2 class="display-1 font-weight-medium">Skills</h2>
      <v-container>
        <v-layout column>
          <v-layout row class="title font-weight-light" align-baseline>
            <div class="title mx-3 font-weight-light">C++</div>
            <div class="subtitle-2 ml-5 font-weight-light">
              Vulkan, OpenGL, CUDA, GLSL, OpenCV
            </div>
          </v-layout>
          <v-layout row class="title font-weight-light" align-baseline>
            <div class="title mx-3 font-weight-light">Unity C#</div>
            <div class="subtitle-2 ml-5 font-weight-light">
              ARFoundation, VR
            </div>
          </v-layout>
          <v-layout row class="title font-weight-light" align-baseline>
            <div class="title mx-3 font-weight-light">Python</div>
            <div class="subtitle-2 ml-5 font-weight-light">Keras</div>
          </v-layout>
          <v-layout row class="title font-weight-light" align-baseline>
            <div class="title mx-3 font-weight-light">Maya, Blender</div>
          </v-layout>
          <v-layout row class="title font-weight-light" align-baseline>
            <div class="title mx-3 font-weight-light">Vue.js</div>
          </v-layout>
        </v-layout>
      </v-container>
    </v-container>

    <v-container>
      <h2 class="display-1 font-weight-medium">Education</h2>
      <v-container>
        <v-layout align-left>Apr. 2021 - Current</v-layout>
        <p class="font-weight-light">
          東京大学
          <br />大学院 総合文化研究科 広域科学専攻 修士課程 (
          <a
            href="https://graphics.c.u-tokyo.ac.jp/hp/"
            target="_blank"
            rel="noopener noreferrer"
            >金井崇 研究室</a
          >)
        </p>
        <v-layout align-left>Apr. 2018 - Mar. 2020</v-layout>
        <p class="font-weight-light">
          東京大学
          <br />教養学部 学際科学科 総合情報学コース
        </p>
        <v-layout align-left>Apr. 2016 - Mar. 2018</v-layout>
        <p class="font-weight-light">
          東京大学
          <br />文科3類
        </p>
      </v-container>
    </v-container>

    <v-container>
      <h2 class="display-1 font-weight-medium">Internship</h2>
      <v-container>
        <v-layout align-left>Jul. 2021 - Oct. 2021</v-layout>
        <p class="font-weight-light">
          <a
            href="https://www.team-lab.com/"
            target="_blank"
            rel="noopener noreferrer"
            >teamLab</a
          >
          <br />Unity Interactive Engineer
        </p>
      
      </v-container>
    </v-container>

    <!-- <v-container>
      <h2 class="display-1 font-weight-medium">Publication</h2>
     
      <v-container>
        <v-layout align-left class="headline font-weight-medium"
          >Domestic conf.</v-layout
        >
        <v-container class="title font-weight-medium">
          Poster
          <p class="subtitle-1 font-weight-light mt-2 mb-auto">
            <b class="font-weight-bold">深水健太郎</b>, 宮下令央, 石川正俊:
            ダイナミックプロジェクションマッピングを用いた動物体への視点依存映像の投影,
            インタラクション2020 (東京, 2020.3.9)／予稿集, 1P-70
            <b class="yellow--text">★</b>
            <b class="font-weight-bold">インタラクティブ発表賞(PC推薦)</b>
          </p>
          <p class="subtitle-1 font-weight-light">
            <b class="font-weight-bold">Kentaro Fukamizu</b>, Ryuichi Sakamoto,
            Masaaki Kondo: Generation of High resolution 3D model from natural
            language by Generative Adversarial Network, MIRU2019 (Osaka, 2019.7)
          </p>
        </v-container>
      </v-container>
    </v-container> -->
  </div>
</template>


<script>
export default {
  components: {},

  data() {
    return {
      items: [
        {
          text: "Computer Vision × CG",
          style: "display-3 font-weight-thin mb-3 white--text",
          src: require("@/assets/slides/path.jpg"),
        },
        {
          text: "Computer Vision × CG",
          style: "display-3 font-weight-thin mb-3   white--text",
          src: require("@/assets/slides/vtuber.jpg"),
        },
        {
          text: "Computer Vision × CG",
          style: "display-3 font-weight-thin mb-3  white--text",
          src: require("@/assets/slides/ARcity.png"),
        },
        {
          text: "Computer Vision × CG",
          style: "display-3 font-weight-thin mb-3 white--text",
          src: require("@/assets/slides/modeling.png"),
          prg: "dd",
        },
      ],
    };
  },
};
</script>