const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.static('public'))

app.get('/countdown', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  })
  countdown(res, 10)
})

function countdown(res, count) {
  res.write("data: " + count + "\n\n")
  if (count)
    setTimeout(() => countdown(res, count-1), 1000)
  else
    res.end()
}

app.listen(3000, () => console.log('SSE app listening on port 3000!'))
