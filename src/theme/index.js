const obj = {}
const theme = {}
let current = null
const files = require.context('@/styles/theme', false, /useable\.scss$/)
files.keys().map((file) => {
  const name = file.replace(/\.\//, '').split('.')[0]
  theme[name] = () => {
    if (!obj[name]) {
      obj[name] = require(`../styles/theme/${name}.useable.scss`)
    }
    return obj[name]
  }
})

async function setTheme(name) {
  if (theme[name]) {
    const style = await theme[name]()
    if (current) {
      current.unuse()
    }
    style.use()
    current = style
  }
}

export default setTheme
