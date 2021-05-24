<template>
  <v-container
    class="fill-height justify-center mt-2"
    :class="{
      'align-start': $vuetify.breakpoint.xsOnly,
      'align-center': $vuetify.breakpoint.smAndUp,
    }"
    fluid
  >
    <login-card
      :class="$vuetify.breakpoint.xsOnly ? 'fluid fill-height px-4' : ''"
      :loading="loading"
      :disabled="disabled"
    >
      <nuxt-child @next="onNext" />
    </login-card>
  </v-container>
</template>

<script>
export default {
  middleware () {},
  data: () => ({
    loading: false,
    disabled: false
  }),
  methods: {
    onNext (data) {
      this.loading = true
      this.disabled = true
      setTimeout(() => {
        this.loading = false
        this.disabled = false
        this.$router.push({ name: 'auth-signin-password' })
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.letter-spacing-0 {
    letter-spacing: 0 !important;
}

.text-decoration-none {
    text-decoration: none !important;
}
</style>
