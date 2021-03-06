const fs = require('fs')

function requestHandler(req, res) {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<form action="/messages" method="POST">')
    res.write('<input type="text" name="message">')
    res.write('<button type="submit">SUBMIT</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/messages' && method === 'POST') {
    const body = []
    req.on('data', chunk => body.push(chunk))
    return req.on('end', () => {
      const parsedData = Buffer.concat(body).toString().split('=')[1]
      fs.writeFile('message.txt', parsedData, err => {
        res.writeHead(302, { Location: '/' }) // redirection
        return res.end()
      })
    })
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<body>')
  res.write('hello from NodeJS!')
  res.write('</body>')
  res.write('</html>')
  return res.end()
}

module.exports = { requestHandler }
