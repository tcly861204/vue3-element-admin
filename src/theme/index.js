const setTheme = function (color) {
  const body = document.getElementsByTagName('body')[0]
  body.style.setProperty('--main-bgcolor', color)
}
export default setTheme
