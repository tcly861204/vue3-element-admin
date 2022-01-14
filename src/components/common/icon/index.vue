<template>
  <span class="v-icon">
    <i :style="style" :class="['icon', name]"></i>
  </span>
</template>
<script>
import { computed, toRefs } from 'vue'
export default {
  name: 'v-icon',
  props: {
    name: {
      type: String,
    },
    size: {
      type: Number,
      default: 20,
    },
    top: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
  setup(props) {
    const { size, color, top } = toRefs(props)
    const style = computed(() => {
      return Object.assign(
        {
          fontSize: `${size.value}px`,
          color: color.value,
          position: 'relative',
        },
        top.value !== 0 && {
          top: `${top.value}px`,
        }
      )
    })
    return {
      style,
    }
  },
}
</script>
