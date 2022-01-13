<template>
  <Header />
  <main class="g-main">
    <Menu />
    <section class="g-container">
      <nav class="g-tabs">
        <li class="g-tab-item">首页</li>
      </nav>
      <router-view style="flex: 1" />
      <footer class="g-footer">footer</footer>
    </section>
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
