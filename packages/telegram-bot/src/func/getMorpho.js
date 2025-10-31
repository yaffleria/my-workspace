async function getMorpho({ address }) {
  try {
    const query = `
        query {
          userByAddress(
            chainId: 8453
            address: "${address}"
          ) {
            marketPositions {
              collateral
              collateralUsd
              borrowAssets
              borrowAssetsUsd
              healthFactor
              priceVariationToLiquidationPrice
              market {
                collateralAsset {
                  name
                  symbol
                }
              }
            }
          }
        }
      `
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    }
    const response = await fetch('https://blue-api.morpho.org/graphql', options)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  getMorpho
}
