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

/**
 * @param {String} filePath 
 */
const resolveComponentName = filePath => filePath.slice(0, -4).replace(/\//g, '-')


module.exports = (opts) => {
  const type = 'doc'

  return {
    name: 'my-xxx-plugin',
    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceAppFile.js')
    ],
    plugins: [
      [
        'container',
        {
          type,
          render (tokens, index) {
            const token = tokens[index]

            const componentPath = token.info.trim().slice(type.length).trim()
            // 文件内容
            const code = componentPath ? resolveFile(componentPath) : ''
            // 组件名称
            const componentName = resolveComponentName(componentPath)
            if (token.nesting === 1) {
              return `<div>
                      <Example component="${componentName}">${code}</Example>`
            } else {
              return '</div>'
            }

          }
        }
      ]
    ]
  }
}