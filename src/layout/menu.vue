<template>
  <menu class="g-menu">
    <span class="avatar">
      <img :src="avatar" />
    </span>
  </menu>
</template>
<script>
import avatar from '@/assets/avatar.jpg'
export default {
  name: 'Menu',
  setup() {
    return {
      avatar,
    }
  },
}
</script>
