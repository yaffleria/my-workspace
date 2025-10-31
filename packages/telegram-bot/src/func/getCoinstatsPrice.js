async function getCoinstatsPrice({ coinId }) {
  try {
    const url = `https://openapiv1.coinstats.app/coins/${coinId}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': process.env.API_KEY_COINSTATS
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
  getCoinstatsPrice
}
