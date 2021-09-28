const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const tellmeBtn = document.querySelector("#tell-me");
const output = document.querySelector("#output");
const calculateProfitLoss = (initial, current, quantity) => {
    if (initial > current) {

        const loss = (initial - current) * quantity;
        const lossPercentage = (loss / initial) * 100;
        output.style.color = "red";
        output.innerText = `Your loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)} %`;

    } else if (current > initial) {

        const profit = (current - initial) * quantity;
        const profitPercentage = (profit / initial) * 100;
        output.style.color = "gree";
        output.innerText = `Your profit is ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)} %`;
    } else {
        output.style.color = "white";
        output.innerText = 'No pain no gain no gain no pain';
    }
}

const clickHandler = () => {
    const ip = Number(initialPrice.value);
    const qty = Number(stockQuantity.value);
    const curr = Number(currentPrice.value);

    calculateProfitLoss(ip,curr,qty);
}
tellmeBtn.addEventListener('click', clickHandler)