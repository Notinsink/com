async function fetchNGNRate() {
    const response = await fetch('https://v6.exchangerate-api.com/v6/b1e2c86382d298417a2fe07a/latest/USD');
    const data = await response.json();
    const ngnRate = data.conversion_rates.NGN; // Get the rate for Nigerian Naira
    document.getElementById('ngn-rate').innerHTML = `Exchange Rate (USD to NGN): ₦${ngnRate}`;
}

async function fetchEuroDollarRate() {
    const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=07a5181c95051388136f515adea1ff2c'); // Your Open Exchange Rates API key
    const data = await response.json();
    const euroDollarRate = data.rates.EUR; // Get the Euro to USD exchange rate
    document.getElementById('eurodollar-rate').innerHTML = `Eurodollar Rate: $${euroDollarRate}`;
}

async function fetchPetroleumPrice() {
    const response = await fetch('https://api.eia.gov/series/?api_key=983ddd66f7c429b06fa01f1f7bc7bc96&series_id=PET.EER_EPM0_PTE_NUS_DMC');
    const data = await response.json();
    const petroleumPrice = data.series[0].data[0][1]; // Get the latest petroleum price
    document.getElementById('petroleum-price').innerHTML = `Crude Oil Price: $${petroleumPrice}`;
}

async function fetchCryptoPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    const bitcoinPrice = data.bitcoin.usd; // Get Bitcoin price in USD
    const ethereumPrice = data.ethereum.usd; // Get Ethereum price in USD
    document.getElementById('bitcoin-price').innerHTML = `Bitcoin Price: $${bitcoinPrice}`;
    document.getElementById('ethereum-price').innerHTML = `Ethereum Price: $${ethereumPrice}`;
}

// Call the functions to fetch and display rates
fetchNGNRate();
fetchEuroDollarRate();
fetchPetroleumPrice();
fetchCryptoPrices();
