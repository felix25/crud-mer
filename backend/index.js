const app = require('./app')

const port = process.env.PORT || 5000

const server = app.listen(port, () => {
  //  console.log(`Server on port ${port}`)
})
module.exports = {
    app, server
}