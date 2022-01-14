<template>
  <header class="g-header">
    <h2 class="g-logo">后台管理</h2>
    <div class="menu">
      <span @click="handleClick">换肤</span>
    </div>
  </header>
</template>
<script>
import setTheme from '@/theme'
export default {
  name: 'Header',
  setup() {
    const handleClick = function () {
      setTheme('#f00')
    }
    return {
      handleClick,
    }
  },
}
</script>
