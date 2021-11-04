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

            const info = token.info.trim().slice(type.length).trim()

            console.log(info)

            if (token.nesting === 1) {
              return `
              <div class="abc">
                <${info} />
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