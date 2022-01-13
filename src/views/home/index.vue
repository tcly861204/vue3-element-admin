<template>
  <section>
    <div>home</div>
    <button @click="handleJump">跳转</button>
    <el-button type="primary">按钮</el-button>
  </section>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const count = ref(0)
    const router = useRouter()
    const handleJump = function () {
      router.push('/login')
    }
    return {
      count,
      handleJump,
    }
  },
}
</script>
