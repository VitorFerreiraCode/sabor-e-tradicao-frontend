let sales = [];

function updatePanel() {
    let totalSales = 0;
    let totalProducts = 0;
    let salesAmount = 0;

    sales.forEach(sale => {
        totalSales += sale.total;
        totalProducts += sale.quantity;
    });

    salesAmount = sales.length > 0 ? (totalSales / sales.length).toFixed(2) : 0;

    document.getElementById('totalSales').textContent = `R$ ${totalSales.toFixed(2)}`;
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('averageSales').textContent = `R$ ${salesAmount}`;
}

function addSale(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const unitPrice = parseFloat(document.getElementById('unitPrice').value);

    const total = quantity * unitPrice;

    sales.push({ product, quantity, unitPrice, total });

    const tableBody = document.querySelector('#salesTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${new Date().toLocaleDateString()}</td>
        <td>${product}</td>
        <td>${quantity}</td>
        <td>R$ ${unitPrice.toFixed(2)}</td>
        <td>R$ ${total.toFixed(2)}</td>
    `;

    document.getElementById('salesForm').reset();

    updatePanel();
}


document.getElementById('salesForm').addEventListener('submit', addSale);
