<script>
export default {
  name: 'chapterThumb',
  props: {
    page: {
      type: Number,
      default: 0
    },
    pages: {
      type: Array,
      required: true
    },
    pchapter: {
      type: Object,
      default: null
    },
    nchapter: {
      type: Object,
      default: null
    }
  },
  methods: {
    clickHandler(index) {
      // 資料來自父層，不能直接改，需使用$emit('update:props property',...)
      // 父層的v-model需加上sync
      this.$emit('update:page', index)
    }
  },
  // 偵聽
  // 觸發時機: 資料更新後，畫面更新前
  watch: {
    // 當page資料被改變時，scrollbar跟著改變
    page() {
      // this.$el => div.chapterThumb
      if (!this.$el) return false
      let el = this.$el.querySelector('ul')
      // let index = this.pchapter ? this.page + 1 : this.page
      // let target = el.querySelectorAll('li')[index]
      // $nextTick => 等畫面更新後，再做
      this.$nextTick(() => {
        let target = el.querySelector('li.active')
        if (!target) return false
        el.scrollLeft =
          target.offsetLeft -
          el.offsetLeft -
          el.offsetWidth / 2 +
          target.offsetWidth / 2
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
