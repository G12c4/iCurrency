const currencyInputs = document.querySelectorAll('.currency-input');

async function convertCurrency(baseCurrency, baseValue) {
    if (isNaN(baseValue)) {
        return;
    }

    const originalBaseCurrency = baseCurrency; // Keep track of the original base currency

    // Handle Satoshi to BTC conversion before API call
    if (baseCurrency === 'sats') {
        baseValue = baseValue / 100000000;
        baseCurrency = 'btc';
    }

    const API_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const rates = data[baseCurrency];

        currencyInputs.forEach(input => {
            const currency = input.dataset.currency;

            // Don't update the input that is being edited
            if (currency === originalBaseCurrency) {
                return;
            }

            let convertedValue;
            if (currency === 'sats') {
                convertedValue = baseValue * rates.btc * 100000000;
            } else if (currency === 'btc') {
                convertedValue = baseValue * (rates.btc || 1); // if btc is the base, rate is 1
            } else {
                convertedValue = baseValue * rates[currency];
            }

            if (currency === 'usd') {
                input.value = convertedValue.toFixed(2);
            } else if (currency === 'btc') {
                input.value = convertedValue.toFixed(8);
            } else if (currency === 'sats') {
                // Format Satoshis with commas and a small space
                input.value = convertedValue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
            } else {
                input.value = convertedValue.toFixed(2);
            }
        });

    } catch (error) {
        console.error('Error fetching currency data:', error);
        alert('Failed to fetch currency data. Please try again later.');
    }
}

currencyInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        const baseCurrency = e.target.dataset.currency;
        let baseValue = e.target.value;
        if (baseCurrency === 'sats') {
            baseValue = baseValue.replace(/,/g, '');
        }
        baseValue = parseFloat(baseValue);
        convertCurrency(baseCurrency, baseValue);
    });
});

// Initial conversion on page load from EUR
convertCurrency('eur', 1);