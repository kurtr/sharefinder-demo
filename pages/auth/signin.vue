<template>
  <div>
    <div class="text-center mb-2" @click="$router.push('/')">
      <span class="text-h6 text--secondary">
        <img
          src="/v.png"
          alt="Vuetify Logo"
          width="40"
          style="vertical-align: middle"
          class="mr-1"
        >
        <span class="font-family-body">ShareFinder</span>
      </span>
    </div>
    <div
      class="transition-wrapper pt-2"
      :style="$vuetify.breakpoint.mobile ? '' : ''"
    >
      <transition :name="transitionName">
        <nuxt-child key="identifier" @next="$emit('next', $event)" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  middleware ({ route, redirect }) {
    if (
      route.name !== 'auth-signin-password' &&
      route.name !== 'auth-signin-identifier'
    ) {
      return redirect('/auth/signin/identifier')
    }
  },
  data: () => ({
    transitionName: 'slide-left'
  }),
  watch: {
    $route (to) {
      this.transitionName =
        to.name === 'auth-signin-password' ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="scss">
.transition-wrapper {
  position: relative;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(500px);
}

.slide-left-leave-to,
.slide-right-enter {
  transform: translateX(-500px);
}
</style>
