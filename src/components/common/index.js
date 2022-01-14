const contexts = require.context('./', true, /index\.(vue|js)$/)
export default {
  install(vm) {
    contexts.keys().forEach(component => {
      const componentEntity = contexts(component).default
      componentEntity.name &&
        vm.component(componentEntity.name, componentEntity)
    })
  },
}
