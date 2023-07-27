const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function(event) {
    if(event.target.hasAttribute('data-cart')) {
      
        const card = event.target.closest('.filterDiv');


        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-image').getAttribute('src'),
            title: card.querySelector('.item_title').innerText,
            pretitle: card.querySelector('.pre-title').innerText,
            price: card.querySelector('.price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

        if(itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
        } else {
            

        console.log(productInfo)
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}"">
        <div class="filterDiv cold" data-id="xylinetcoconut">
            <h2 class="block__title pre-title">${productInfo.pretitle}</h2>
            <h1 class="block__title item_title">${productInfo.title}</h1>
            <div class="btns">
            <p id="counter50" data-counter>${productInfo.counter}</p> <span class="counter50">шт.</span>
            </div>
            <h1 class="price">${productInfo.price}</h1>
        </div>
    </div>`;
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    }
    toggleCartStatus();
    calcCartPrice();
}

})