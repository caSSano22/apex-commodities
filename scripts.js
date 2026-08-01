/*
 * Apex Commodities — Live Order Book Telemetry & Market Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Real-time Order Book Telemetry Simulator
    const orderBookBidsContainer = document.getElementById('orderBookBids');
    const orderBookAsksContainer = document.getElementById('orderBookAsks');

    if (orderBookBidsContainer && orderBookAsksContainer) {
        setInterval(() => {
            const baseGold = 2420.50;
            const bidDiff = (Math.random() * 0.45).toFixed(2);
            const askDiff = (Math.random() * 0.45).toFixed(2);
            const bidQty = (Math.random() * 12 + 1).toFixed(2);
            const askQty = (Math.random() * 12 + 1).toFixed(2);

            orderBookBidsContainer.innerHTML = `
                <div class="d-flex justify-content-between text-success font-monospace fs-6">
                    <span>${(baseGold - parseFloat(bidDiff)).toFixed(2)} USD</span>
                    <span>${bidQty} Ounces</span>
                </div>
            `;
            orderBookAsksContainer.innerHTML = `
                <div class="d-flex justify-content-between text-danger font-monospace fs-6">
                    <span>${(baseGold + parseFloat(askDiff)).toFixed(2)} USD</span>
                    <span>${askQty} Ounces</span>
                </div>
            `;
        }, 800);
    }

    // 2. Category Filtering for Apex Markets
    const filterBtns = document.querySelectorAll('.screener-filter-btn');
    const marketItems = document.querySelectorAll('.market-row-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active', 'btn-apex-emerald'));
            filterBtns.forEach(b => b.classList.add('btn-apex-outline'));

            btn.classList.remove('btn-apex-outline');
            btn.classList.add('active', 'btn-apex-emerald');

            const category = btn.getAttribute('data-category');
            marketItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
