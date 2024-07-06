window.cartFunctions = {
    componentReference: null,

    showQtyControl: function (productId) {
        // Remove existing control if any
        let existingControl = document.getElementById(`qty-control-${productId}`);
        if (existingControl) {
            existingControl.remove();
        }

        let qtyControl = document.createElement('div');
        qtyControl.id = `qty-control-${productId}`;
        qtyControl.className = 'qty-control';

        //<button class="qty-btn" onclick="window.cartFunctions.decreaseQty('${productId}')">-</button>
        //<input type="number" id="qty-${productId}" class="qty-number" value="1" min="1" oninput="window.cartFunctions.validateQty('${productId}')"/>
        //<button class="qty-btn" onclick="window.cartFunctions.increaseQty('${productId}')">+</button>
        qtyControl.innerHTML = `
            <div class="qty-control-content">
                <div class="qty-control-header">
                    <h3>Укажите количество</h3>
                </div>
                <div class="qty-control-body">
                    <input type="number" id="qty-${productId}" class="qty-number" value="1" min="1" oninput="window.cartFunctions.validateQty('${productId}')"/>                    
                </div>
                <div class="qty-control-footer">
                    <button class="btn-add-to-cart" onclick="window.cartFunctions.addToCart('${productId}')">В корзину</button>
                    <button class="btn-close-cart" onclick="window.cartFunctions.closeQtyControl('${productId}')">Закрыть</button>
                </div>
            </div>
        `;

        document.body.appendChild(qtyControl);
    },

    increaseQty: function (productId) {
        let qtyElement = document.getElementById(`qty-${productId}`);
        let currentQty = parseInt(qtyElement.value) || 1;
        qtyElement.value = currentQty + 1;
    },

    decreaseQty: function (productId) {
        let qtyElement = document.getElementById(`qty-${productId}`);
        let currentQty = parseInt(qtyElement.value) || 1;
        if (currentQty > 1) {
            qtyElement.value = currentQty - 1;
        }
    },

    validateQty: function (productId) {
        let qtyElement = document.getElementById(`qty-${productId}`);
        let currentQty = parseInt(qtyElement.value) || 1;
        if (currentQty < 1) {
            qtyElement.value = 1;
        }
    },

    addToCart: function (productId) {
        let qtyElement = document.getElementById(`qty-${productId}`);
        let currentQty = parseInt(qtyElement.value) || 1;
        if (window.cartFunctions.componentReference) {
            window.cartFunctions.componentReference.invokeMethodAsync('AddToCart', productId, currentQty);
        }
        window.cartFunctions.closeQtyControl(productId);
    },

    closeQtyControl: function (productId) {
        let qtyControl = document.getElementById(`qty-control-${productId}`);
        if (qtyControl) {
            qtyControl.remove();
        }
    },

    setComponentReference: function (componentReference) {
        window.cartFunctions.componentReference = componentReference;
    }
};