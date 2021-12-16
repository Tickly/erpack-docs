/**
 * 希望的用法
 * 传入组件的相对路径
 * 相对于 docs/.vuepress/components
 * 
 * 能够自动生成
 */

const path = require('path')
const fs = require('fs')
const Prism = require('prismjs')

const resolveFile = filePath => {
  const componentsPath = path.resolve(__dirname, '../components')
  const componentFilePath = path.resolve(componentsPath, filePath)

  const content = fs.readFileSync(componentFilePath, 'utf-8')
  const lang = 'markup'
  const html = Prism.highlight(content, Prism.languages[lang], lang)

  return `<pre v-pre class="language-vue"><code>${html}</code></pre>`
}


module.exports = (opts) => {
  const type = 'doc'

  return {
    name: 'my-xxx-plugin',
    plugins: [
      [
        'container',
        {
          type,
          render (tokens, index) {
            const token = tokens[index]

            const componentPath = token.info.trim().slice(type.length).trim()
            console.log([componentPath])
            const code = componentPath ? resolveFile(componentPath) : ''

            if (token.nesting === 1) {
              return `<div class="abc">
              <div class=""></div>
${code}

              `
            } else {
              return '</div>'
            }

          }
        }
      ]
    ]
  }
}