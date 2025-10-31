// bot.on('message', async (msg) => {
// const numeral = require('numeral')
// const { getMorpho } = require('./func/getMorpho')
// const {
//   data: {
//     userByAddress: { marketPositions }
//   }
// } = await getMorpho({ address: process.env.MY_WALLET_EVM })
// const aggregate = marketPositions.map((position) => ({
//   담보: position.market.collateralAsset.symbol,
//   생명력: position.healthFactor.toFixed(2),
//   청산: `${(position.priceVariationToLiquidationPrice * 100).toFixed(2)}%`
// }))

// const cbBTCIndex = aggregate.findIndex((item) => item['담보'] === 'cbBTC')
// if (cbBTCIndex !== -1) {
//   const cbBTCObject = aggregate.splice(cbBTCIndex, 1)[0]
//   aggregate.unshift(cbBTCObject)
// }

// console.log(aggregate)

// bot.sendMessage(chatId, JSON.stringify(aggregate, null, 2))

// if (msg.text === '/profit') {
// const { getKorbitPrice } = require('./func/getKorbitPrice')
// const { data } = await getKorbitPrice({ ticker: 'usdt' })
// const [{ close }] = data
// const portfolioValue = process.env.MY_PORTFOLIO_BALANCE_IN_USD * close

// const txs = require('./json/tx.json')
// const myInvestmentToCrypto = txs.reduce((sum, item) => sum + item.amount, 0)

// const pnl = ((portfolioValue - myInvestmentToCrypto) / myInvestmentToCrypto) * 100

// console.log(`${numeral(portfolioValue).format('0,0')}원 / ${pnl.toFixed(2)}%`)

// bot.sendMessage(chatId, `${numeral(portfolioValue).format('0,0')}원 / ${pnl.toFixed(2)}%`)
// }

// if (msg.text === '/usdt') {
// const { getKorbitPrice } = require('./func/getKorbitPrice')
// const { data } = await getKorbitPrice({ ticker: 'usdt' })
// const [{ close }] = data

// console.log(close)

// bot.sendMessage(chatId, `${numeral(close).format('0,0')}원`)
// }
// if (msg.text === '/bus') {
// const { getBus } = require('./func/getBus')

// const { busTotalValue, busCurrentYield } = await getBus()
// const aggregate = {
//   'Wallet Balance': `${numeral(busTotalValue).format('0,0')}원`,
//   'P/L(%)': `${busCurrentYield.toFixed(2)}%`
// }

// console.log(aggregate)

// bot.sendMessage(chatId, JSON.stringify(aggregate, null, 2))
// }
// })
