const form = document.getElementById('stock-form');
const tableBody = document.getElementById('stock-table').getElementsByTagName('tbody')[0];
const warningTableBody = document.getElementById('stock-table-warning').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const { itemName, itemQuantity, itemPrice } = recolherDados();
    inserirItensNaTabela(itemName, itemQuantity, itemPrice);

    if (itemQuantity < 50) {
        mensagemDeAlerta(itemName, itemQuantity);
        adicionarNaTabelaDeAvisos(itemName, itemQuantity, itemPrice);
    }

    form.reset();
});

function deleteItem(itemId) {
    const row = document.getElementById(`item-${itemId}`);
    if (row) {
        row.parentNode.removeChild(row);
    }
}

function mensagemDeAlerta(itemName, itemQuantity) {
    alert(`A quantidade de ${itemName} é baixa: ${itemQuantity} unidades restantes.`);
}

function adicionarNaTabelaDeAvisos(itemName, itemQuantity, itemPrice) {
    const warningRow = warningTableBody.insertRow();
    warningRow.innerHTML = `<td>${itemName}</td><td>${itemQuantity}</td><td>${itemPrice}</td>`;
}

function recolherDados() {
    return {
        itemName: document.getElementById('item-name').value,
        itemQuantity: parseInt(document.getElementById('item-quantity').value, 10),
        itemPrice: parseFloat(document.getElementById('item-price').value).toFixed(2)
    };
}

function inserirItensNaTabela(itemName, itemQuantity, itemPrice) {
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${itemName}</td><td>${itemQuantity}</td><td>${itemPrice}</td>`;
}
