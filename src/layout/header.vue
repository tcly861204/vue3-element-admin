<template>
  <header class="g-header">
    <h2 class="g-logo">后台管理系统</h2>
    <div class="menu">
      <li class="menu-item">
        <v-icon name="fullscreen" :size="20" color="#fff" />
      </li>
      <li class="menu-item">
        <v-icon name="news" :size="20" color="#fff" />
      </li>
      <li class="menu-item">
        <v-icon name="theme" :size="20" color="#fff" />
      </li>
      <li class="menu-item">
        <v-icon name="language-zh-CN" :size="20" color="#fff" />
        <span
          style="
            color: #fff;
            font-size: 12px;
            float: right;
            padding: 3px 0 0 3px;
"
          >中文</span
        >
      </li>
      <li class="menu-item avatar">
        <img :src="avatar" />
      </li>
    </div>
  </header>
</template>
<script>
import setTheme from '@/theme'
import avatar from '@/assets/avatar.jpg'
export default {
  name: 'Header',
  setup() {
    const handleClick = function () {
      setTheme('#f00')
    }
    return {
      avatar,
      handleClick,
    }
  },
}
</script>
