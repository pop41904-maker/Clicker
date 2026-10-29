    // Часть для кликов и т д
    const BlockClick = document.getElementById('FrameClick');
    const CountCoinText = document.getElementById('CountCoin');
    const AutoAddCoin = document.getElementById('CountAutoCoin');
    const CountAutoAdd = document.getElementById('CountAutoAdd');
    // Часть магазина
    const UpgradeButton = document.querySelectorAll('.BuyButtonUpgrade');
    const UpgradeButtonClick = [UpgradeButton[0], UpgradeButton[2], UpgradeButton[4], UpgradeButton[6]];
    const UpgradeButtonAuto = [UpgradeButton[1], UpgradeButton[3], UpgradeButton[5], UpgradeButton[7]];

    let ClickCoin = 1;
    let AutoCounterAdd = 0;


    BlockClick.addEventListener("click", () => {
        const CounterCoin = Number(CountCoinText.textContent); 
        CountCoinText.textContent = CounterCoin + ClickCoin;
    });


    UpgradeButtonClick.forEach((button) => {
        if (!button) return;
        button.addEventListener("click", () => {
            const frame = button.closest('.UpgradeFrame');
            const priceElement = frame.querySelector('.PriceUpgrade');
            const counterElement = frame.querySelector('.CounterUpgrade');
            const descriptionElement = frame.querySelector('.DiscriptionUpgrade');
            let currentPrice = parseInt(priceElement.textContent);
            let addClickValue = parseInt(descriptionElement.textContent.replace('+', ''));
            let numberCoinUser = Number(CountCoinText.textContent);
            
            if (numberCoinUser < currentPrice) {
                alert('Недостаточно средств');
            }
            else {
                CountCoinText.textContent = numberCoinUser - currentPrice;
                ClickCoin += addClickValue;
                let currentCount = parseInt(counterElement.textContent);
                counterElement.textContent = (currentCount + 1) + " шт";
            }
        });
    });

    UpgradeButtonAuto.forEach((button) => {
        if (!button) return;
        button.addEventListener("click", () => {
            const frame = button.closest('.UpgradeFrame');
            const priceElement = frame.querySelector('.PriceUpgrade');
            const counterElement = frame.querySelector('.CounterUpgrade');
            const descriptionElement = frame.querySelector('.DiscriptionUpgrade');
            let currentPrice = parseInt(priceElement.textContent);
            let addAutoValue = parseInt(descriptionElement.textContent.replace('+', ''));
            let numberCoinUser = Number(CountCoinText.textContent);

            if (numberCoinUser < currentPrice) {
                alert('Недостаточно средств');
            }
            else {
                CountCoinText.textContent = numberCoinUser - currentPrice;
                AutoCounterAdd += addAutoValue;
                CountAutoAdd.textContent = AutoCounterAdd;
                let currentCount = parseInt(counterElement.textContent);
                counterElement.textContent = (currentCount + 1) + " шт";
            }
        });
    });

    setInterval(() => {
        if (AutoCounterAdd > 0) {
            let currentCoins = Number(CountCoinText.textContent);
            CountCoinText.textContent = currentCoins + AutoCounterAdd;
        }
    }, 1000);