async function dev() {
  const numeral = require('numeral')

  const { getKorbitPrice } = require('./func/getKorbitPrice')
  const { data } = await getKorbitPrice({ ticker: 'usdt' })
  const [{ close }] = data
  const portfolioValue = process.env.MY_PORTFOLIO_BALANCE_IN_USD * close
  const txs = require('./json/tx.json')
  const myInvestmentToCrypto = txs.reduce((sum, item) => sum + item.amount, 0)
  const pnl = ((portfolioValue - myInvestmentToCrypto) / myInvestmentToCrypto) * 100
  console.log(`${numeral(portfolioValue).format('0,0')}원 / ${pnl.toFixed(2)}%`)

  const { getBus } = require('./func/getBus')
  const { busTotalValue, busCurrentYield } = await getBus()
  console.log(`${numeral(busTotalValue).format('0,0')}원 / ${busCurrentYield.toFixed(2)}%`)

  process.exit(0)
}

dev()
