<template>
  <v-row fluid no-gutters>
    <v-flex v-for="item in items_int" :key="item.title" xs12 sm6 md3>
      <v-hover>
        <v-card tile slot-scope="{ hover }" :to="item.link">
          <v-img
            :src="require('@/assets/works/' + item.image)"
            aspect-ratio="1.0"
            eager
          >
            <div
              class="fill-height"
              :class="
                hover || $vuetify.breakpoint.xs ? 'bottom-gradient' : 'none'
              "
            >
              <v-card-title
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text headline font-weight-light"
                >{{ item.title }}</v-card-title
              >
              <v-card-text
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text caption font-weight-light"
                >{{ item.desc }}</v-card-text
              >
            </div>
          </v-img>
        </v-card>
      </v-hover>
    </v-flex>
    <v-flex v-for="item in items_ext" :key="item.title" xs12 sm6 md3>
      <v-hover>
        <v-card
          tile
          slot-scope="{ hover }"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-img
            :src="require('@/assets/works/' + item.image)"
            aspect-ratio="1.0"
            eager
          >
            <div
              class="fill-height"
              :class="
                hover || $vuetify.breakpoint.xs ? 'bottom-gradient' : 'none'
              "
            >
              <v-card-title
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text headline font-weight-light"
                >{{ item.title }}</v-card-title
              >
              <v-card-text
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text caption font-weight-light"
                >{{ item.desc }}</v-card-text
              >
            </div>
          </v-img>
        </v-card>
      </v-hover>
    </v-flex>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items_int: [
        {
          title: "肖像A",
          image: "portrait_thumbnail_2.png",
          desc: "東京大学制作展2021 Extra 『0 PUNK』にて出展したメディアアート作品。Unityで制作したWebアプリケーションとなっている。(リンク先で鑑賞可)",
          link: "Portrait_A",
        },
        {
          title: "PerspectiveFish",
          image: "persfish1.png",
          desc: "teamLab サマーインターンにて開発した Unityアプリケーション。インタラクティブなプロジェクションマッピングのための作品。",
          link: "PerspectiveFish",
        },
        {
          title: "Sign",
          image: "sign.jpg",
          desc: "teamLab サマーインターンにて開発した Unityアプリケーション。インタラクティブなプロジェクションマッピングのための作品。",
          link: "PerspectiveFish",
        },
        {
          title: "BoidsMeshAnimator",
          image: "boids.png",
          desc: "個人開発。Boidsでコントロールする粒子でアニメートされたメッシュを模倣するシステム。",
          link: "BoidsMeshAnimator",
        },
        {
          title: "ARFish",
          image: "arfish2.png",
          desc: "魚の自律遊泳プログラミングをARアプリケーションとして作成した。",
          link: "ARFish",
        },
        {
          title: "AR年賀状",
          image: "shogi.png",
          desc: "年賀状の模様をマーカーとしてARで「どうぶつしょうぎ」が遊べるUnityアプリケーション。",
          link: "ARNengajo",
        },
        {
          title: "WifiMonitor",
          image: "wifi.png",
          desc: "大学のアルバイトで制作した Webページ。学内の Wifi アクセスポイントの接続状況を地図上に表示し、Cookieを用いてよく使う地図をストックできる。",
          link: "WifiMonitor",
        },
        {
          title: "Slack勤怠システム",
          image: "attend.png",
          desc: "受託開発の従事先で開発した, Slackコマンドで打刻する勤怠システムとその管理webサイト。Slack認証でアカウントに紐づいたセッション管理ができる。",
          link: "SlackAttend",
        },
        {
          title: "ChatAgent",
          image: "attend.png",
          desc: "受託開発の従事先で開発した。外部に建てられたサイトにアカウントを登録すると Slackチームに入らなくとも SlackBot を介して許可された Slack チームで発言できる。",
          link: "ChatAgent",
        },
      //   {
      //     title: "Realtime Realistic VTuber engine",
      //     image: "vtuber.jpg",
      //     desc: "Vulkan",
      //     link: "Vtuber",
      //   },
      //   {
      //     title: "Realtime Path Tracing engine",
      //     image: "path.jpg",
      //     desc: "Vulkan",
      //     link: "PathEngine",
      //   },
      //   {
      //     title: "AR multiplayer city building game",
      //     image: "ARcity.jpg",
      //     desc: "May festival @UTokyo",
      //     link: "ARcity",
      //   },
      //   {
      //     title: "Cherry Blossom Viewing AR",
      //     image: "sakura.jpg",
      //     link: "ARsakura",
      //   },
      ],
      items_ext: [
        {
          title: "ProjectionMappings",
          image: "pj.jpg",
          desc: "演劇サークルで制作してきた20作品のプロジェクションマッピング演出。",
          link: "https://www.instagram.com/octan008_008/",
        },
      //   {
      //     title: "ReSTIR on Vulkan",
      //     image: "sponza.jpg",
      //     desc: "Vulkan",
      //     link: "https://github.com/dipmizu914/ReSTIR_on_Vulkan",
      //   },
      //   {
      //     title: "Deformation of 3D Shape by Projection Mapping",
      //     image: "elamorph.png",
      //     link: "http://ishikawa-vision.org/vision/ElaMorph/",
      //   },
      //   {
      //     title: "Viewpoint-dependent Image Projection",
      //     image: "lenticular.jpg",
      //     link: "http://ishikawa-vision.org/vision/LentiDPM/index-e.html",
      //   },
      //   {
      //     title: "Polarimetric Renderer on Vulkan",
      //     image: "pBRDF.png",
      //     desc: "Vulkan",
      //     link: "https://zenn.dev/dipukamin/articles/3ae9980782a186",
      //   },
      //   {
      //     title: "Website of the club",
      //     image: "prism.png",
      //     link: "http://gprism.webcrow.jp/",
      //   },
      ],
    };
  },

  methods: {
    isExternal(link) {
      return link.includes("http") || link.includes("https");
    },
    isInternal(link) {
      return !link.includes("http") && !link.includes("https");
    },
  },
};
</script>


<style scoped>
.bottom-gradient {
  background-image: radial-gradient(
    circle at center,
    rgba(1, 1, 1, 0),
    rgba(1, 1, 1, 0.5) 100%
  );
}
</style>
