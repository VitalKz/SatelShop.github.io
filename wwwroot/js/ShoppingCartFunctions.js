function MakeUpdateQtyButtonVisible(id, visible)
{
    const updateQtyButton = document.querySelector("button[data-itemId='" + id + "']");

    if (visible == true) {
        updateQtyButton.style.display = "inline-block";
    }
    else {
        updateQtyButton.style.display = "none";
    }


}

function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function promptReturnQuantity(maxQty) {
    var qty = prompt("Enter the quantity to return (Max: " + maxQty + "):", "1");
    return parseInt(qty, 10);
}