module.exports = {
  getHello: (req, res) => {
    res.send({
      message: 'hello world'
    })
  }
}
