<template>
  <Menu />
  <main class="g-main">
    <Header />
    <nav class="g-tabs">
      <li class="g-tab-item">首页</li>
    </nav>
    <section class="g-container">
      <router-view />
    </section>
    <footer class="g-footer">footer</footer>
  </main>
</template>
<script>
import { ref } from 'vue'
import Header from './header.vue'
import Menu from './menu.vue'
import './style.scss'
export default {
  name: 'Layout',
  components: {
    Header,
    Menu,
  },
  setup() {
    const color = ref('default')
    return {
      color,
    }
  },
}
</script>
