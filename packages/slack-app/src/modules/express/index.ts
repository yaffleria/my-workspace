import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/ping', (req, res) => {
  console.log('[/ping] 엔드포인트 호출됨 - 인스턴스 활성 유지')
  res.status(200).send('Pong!')
})

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`)
})
