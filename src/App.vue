<template>
  <div id="app">
    <PageHeader/>
    <transition name="fade" mode="out-in" appear>
      <!--只要網址不一樣，就當作不一樣的router-view-->
      <router-view style="padding:60px 0 40px 0;" :key="$route.fullPath"/>
    </transition>
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
