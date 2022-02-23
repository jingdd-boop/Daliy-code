/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-30 16:57:02
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-30 16:57:03
 */
<template>
  <div class="navbar-box">
    <Navbar class="fadeout-navbar" :style="{ opacity: isFulScreen }" :title="fadeoutNavbarTitle">
      <template #left><slot name="fadeout-navbar-left"></slot></template>
      <template #title><slot name="fadeout-navbar-title"></slot></template>
      <template #right><slot name="fadeout-navbar-right"></slot></template>
    </Navbar>
    <Navbar class="fadein-navbar" :style="{ opacity: isHalScreen }" :title="fadeinNavbarTitle">
      <template #left><slot name="fadein-navbar-left"></slot></template>
      <template #title><slot name="fadein-navbar-title"></slot></template>
      <template #right><slot name="fadein-navbar-right"></slot></template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
  components: { Navbar },
  props: {
    fadeoutNavbarTitle: {
      type: String,
      default: '',
    },
    fadeinNavbarTitle: {
      type: String,
      default: '',
    },
    // 是否在滚动吸顶时设置状态栏字体颜色为黑色，默认白色
    setStatusbarStyle: {
      type: Boolean,
      default: true,
    },
    // 透明度变化高度
    hiddenThreshold: {
      type: Number,
      default: 150,
    },
    scrollDom: {
      type: [String, HTMLElement],
      default: '',
    },
  },
  data() {
    return {
      isFixed: false,
      opacity: 0,
      timer: null,
      isFulScreen: 1,
      isHalScreen: 0,
    };
  },
  watch: {
    isFixed() {
      if (this.setStatusbarStyle) {
        this.$bridge.setStatusBarStyle({
          style: this.isFixed ? 0 : 1,
        });
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const $scroll =
        typeof this.scrollDom === 'string'
          ? document.querySelector(this.scrollDom)
          : this.scrollDom;
      if (!$scroll) {
        return;
      }
      $scroll.addEventListener('scroll', () => {
        const scrollTop = $scroll.scrollTop;
        this.isFixed = !!scrollTop;
        if (!this.isFixed) {
          this.opacity = 0;
        }

        const value = scrollTop / this.hiddenThreshold;
        this.$emit('scroll', value);
        if (value >= 1) {
          this.opacity = 1;
        } else {
          this.opacity = value;

          const layoutType = this.$route.query.layoutType !== '3';
          this.isFulScreen = layoutType ? 1 - this.opacity : 1;
          this.isHalScreen = layoutType ? this.opacity : 0;
        }
      });
    });
  },
};
</script>

<style lang="less" scoped>
.navbar-box {
  position: relative;
  z-index: 100;
  width: 100%;

  .fadeout-navbar {
    background: none;
  }

  .fadein-navbar {
    position: absolute;
    top: 0;
  }

  .fadein-navbar::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 1px;
    background: #e0e0e0;
    transform: scale(0.5);
    transform-origin: left bottom;
    content: '';
  }
}
</style>
