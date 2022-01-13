<template>
  <header class="g-header">
    <h2 class="g-logo">后台管理</h2>
    <div class="menu">
      <span class="avatar">
        <el-avatar :size="30" :src="avatar"></el-avatar>
      </span>
    </div>
  </header>
</template>
<script>
import avatar from '@/assets/avatar.jpg'
export default {
  name: 'Header',
  setup() {
    return {
      avatar,
    }
  },
}
</script>
