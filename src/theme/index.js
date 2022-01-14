const setTheme = function (color) {
  const head = document.querySelector('head')
  let styleNode = head.querySelector('#theme-variable')
  if (!styleNode) {
    styleNode = document.createElement('style')
    styleNode.type = 'text/css'
    styleNode.id = 'theme-variable'
    head.appendChild(styleNode)
  }
  styleNode.innerHTML = `
    :root {
      --theme-main-color: ${color};
      --theme-main-bgcolor: ${color};
    }
  `
}
export default setTheme
