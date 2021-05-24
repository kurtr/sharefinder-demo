/* eslint-disable vue/component-tags-order */

<template>
  <div
    id="iinfo-bg"
    class="fill-height ma-0 pa-0 d-flex flex-column flex-lg-row"
    :style="
      'max-height:' +
      $nuxt.$vuetify.breakpoint.height +
      'px;height:' +
      $nuxt.$vuetify.breakpoint.height +
      'px;'
    "
  >
    <v-toolbar
      flat
      :floating="true"
      absolute
      dense
      class="pt-2 hidden-md-and-down"
      width="100%"
      style="
        padding: 0px;
        left: 0px;
        width: 100%;
        background: transparent;
        position: absolute;
        top: 0px;
        z-index: 20;
        height: 35px;
      "
    >
      <v-toolbar-title
        :style="
          $vuetify.breakpoint.lgAndUp
            ? 'position:fixed;left:10px;padding-top:10px;'
            : 'padding-top:5px;width:150px;display:block;margin:auto;'
        "
      >
        <v-img
          src="/v.png"
          lazy-src="/sf-logo.png"
          max-height="80px"
          style="margin-left: -30px !important"
          contain
          height="80px"
          max-width="150px"
          class="ml-0"
        />
      </v-toolbar-title>
    </v-toolbar>
    <v-carousel
      class=""
      :height="$vuetify.breakpoint.lgAndUp ? '100vh' : '100vh'"
      align="center"
      justify="center"
      :continuous="true"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      :hide-delimiters="$vuetify.breakpoint.mobile"
      delimiter-icon="mdi-circle-medium"
      :interval="15000"
    >
      <v-carousel-item src="/stock_futuristic.png" />
      <v-carousel-item src="/increase_stock.png" />
    </v-carousel>
    <v-card id="info" style="" flat>
      <v-img
        src="/v.png"
        :width="$vuetify.breakpoint.smAndUp ? '130px' : '80px'"
        contain
        :style="
          $vuetify.breakpoint.smAndUp
            ? 'margin: auto; padding-bottom: 10vh; margin-top: 10vh; opacity: 1'
            : 'margin: auto; padding-bottom: 0vh; margin-top: 4vh; opacity: 1'
        "
      />
      <v-card-text style="height: 30vh" class="pt-0 text-center">
        <v-card id="summary" flat class="px-2">
          <v-card-title class="pb-10 pt-2"
            ><h4 class="text-center" style="width: 100%">
              ShareFinder
            </h4></v-card-title
          >
          <v-card-text
            class="text-center"
            :style="
              $nuxt.$vuetify.breakpoint.lgAndDown
                ? 'font-size:1.1em;'
                : 'font-size:1.1em;'
            "
          >
            ShareFinder programs have been in use by discerning investors since
            1987. The Professional is a significantly enhanced version of all
            previous ShareFinder modules incorporating a full historical
            database as standard, optimised indicators and many new or improved
            analytical features.
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions class="p-5">
        <v-btn id="dismissLogin" color="primary" :disabled="busy" @click="wip"
          >Contact</v-btn
        >
        <v-btn
          link
          to="/auth/signin"
          color="primary"
          class="ml-0"
          :disabled="busy"
          >Login</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { wip } from '@@/assets/helpers'
export default {
  data() {
    return {
      busy: false,
    }
  },
  methods: { wip },
}
</script>

<style scoped>
/* .v-carousel__controls[data-v-2a183b29] {
  background: #fff !important;
  height: 30px;
  margin-top: 10px;
}

.v-carousel .v-btn.v-btn--icon {
  color: #040404 !important;
}

button.v-carousel__controls__item {
  height: 5px !important;
  width: 5px !important;
  padding: 0 5px 0 5px;
  margin-top: -20px !important;
} */
#info-bg {
  /* height: calc(100vh - 36px); */
  /* background-image: url("/branding/background_login.jpg");
  background-size: cover; */
  padding: 0px;
}

#info {
  /* width: 30vw;
  max-width: 500px; */
  height: calc(34vh - 0px);
  /* height: 100%; */
}

.v-carousel {
  max-height: 100vh !important;
  height: 100vh !important;
}
#info {
  padding-top: 0px !important;
}
/*
.theme--light.v-card {
      background-color: #ffffffbf !important;
} */

.v-card .v-card__actions {
  margin: 0 0px 0;
  padding: 0px;
  line-height: 22px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 10vh;
  width: 100%;
}

.v-card .v-card__actions > a,
.v-card .v-card__actions > button {
  color: rgb(255, 255, 255) !important;
  width: 50% !important;
  height: 60px !important;
  line-height: 60px !important;
  padding: 0px !important;
  text-align: center;
  font-weight: 400;
  box-shadow: none !important;
  border: none;
  border-right: 1px solid cyan !important;
  border-radius: unset !important;
}

@media (min-width: 1264px) {
  #info {
    width: 26vw;
    max-width: 500px;
    height: 100%;
    padding-top: 10vh;
  }
  .v-carousel {
    height: calc(100vh - 0px) !important;
    max-height: calc(100vh - 0px) !important;
  }

  .v-carousel__controls {
    background: transparent !important;
    height: 30px;
  }

  .v-carousel .v-btn.v-btn--icon {
    color: #fff !important;
  }

  .v-card .v-card__actions {
    margin: 0 0px 0;
    padding: 10px 0 10px;
    line-height: 22px;
    /* position: absolute; */
    bottom: 40px;
    left: 0px;
    height: 60px;
    width: 100%;
  }
}
@media (max-width: 1264px) {
  .v-card .v-card__actions > a,
  .v-card .v-card__actions > button {
    height: 10vh !important;
    line-height: 10vh !important;
  }
}

#iinfo-bg .v-toolbar__content {
  margin-left: 0px !important;
}
/** video */

.homepage-hero-module {
  border-right: none;
  border-left: none;
  position: relative;
}

.no-video .video-container .poster,
.touch .video-container .poster {
  display: block !important;
}

.video-container {
  position: relative;
  bottom: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000;
}

.video-container .poster img {
  width: 100%;
  bottom: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 100;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
}

.video-container video {
  position: absolute;
  z-index: 0;
  bottom: 0;
  width: 100%;
}

.video-container video.fillWidth {
  width: 100%;
}

/** /video */
.v-carousel__controls {
  bottom: -10px !important;
  height: inherit !important;
}
@media (max-width: 1264px) {
  video {
    max-height: 100vh;
    height: 100vh;
  }
  #info {
    height: calc(100% - 30px) !important;
    /* bottom: 10px !important; */
  }
  .v-card .v-card__actions {
    margin: 10px;
    position: absolute;
    bottom: 10px;
    left: 0px;
    height: 10vh;
    width: calc(100% - 20px);
  }
}
@media (min-width: 1264px) {
  video {
    max-height: 100vh;
    height: 100vh;
  }
}

#info {
  position: absolute;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  margin: 15px;
  border-radius: 15px;
  height: calc(100% - 45px);
}

#summary {
  background-color: transparent;
}
#summary .v-card,
.v-card__title,
.v-card__text {
  color: rgb(255 255 255);
  text-shadow: 0px 1px 1px black;
}
#summary .v-card__text {
  color: rgb(255, 255, 255);
  text-shadow: 0px 1px 1px #000;
  font-size: 1.1em;
}
</style>
