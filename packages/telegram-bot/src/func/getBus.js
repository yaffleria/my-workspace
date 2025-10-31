async function getBus() {
  try {
    const { getCoinstatsPrice } = require('./getCoinstatsPrice')
    const [solData, jlpData] = await Promise.all([
      getCoinstatsPrice({ coinId: 'solana' }),
      getCoinstatsPrice({ coinId: 'jupiter-perpetuals-liquidity-provider-token' })
    ])
    const { price: solPrice } = solData
    const { price: jlpPrice } = jlpData

    const solValue = process.env.BUS_SOL * solPrice
    const jlpValue = process.env.BUS_JLP * jlpPrice

    const { getKorbitPrice } = require('./getKorbitPrice')
    const { data } = await getKorbitPrice({ ticker: 'usdt' })
    const [{ close }] = data

    const busTotalValue = (solValue + jlpValue) * close
    const myBusShareValue = busTotalValue * process.env.BUS_MY_SHARE

    const busCurrentYield = ((myBusShareValue - process.env.BUS_MY_INVESTMENT) / process.env.BUS_MY_INVESTMENT) * 100

    return {
      busTotalValue,
      busCurrentYield
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  getBus
}
