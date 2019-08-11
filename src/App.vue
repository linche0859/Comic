<template>
  <div id="app">
    <router-view/>
    <PageFooter/>
  </div>
</template>

<script>
// webpack.base.conf.js的resolve中， @: resolve('src')
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss" src="./assets/style/main.scss"></style>
