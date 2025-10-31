async function getKorbitPrice({ ticker }) {
  try {
    const url = `https://api.korbit.co.kr/v2/tickers?symbol=${ticker}_krw`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    }
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  getKorbitPrice
}
