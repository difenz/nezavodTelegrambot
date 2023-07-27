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

        console.log(productInfo)
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}"">
        <div class="filterDiv cold" data-id="xylinetcoconut">
            <h2 class="block__title pre-title">${productInfo.pretitle}</h2>
            <h1 class="block__title item_title">${productInfo.title}</h1>
            <p id="counter50" data-counter><span class="counter50">${productInfo.counter}</span> шт.</p>
            <h1 class="price">${productInfo.price}</h1>
            <div class="btns">
            <button class="btnn minus" data-id="xylinetcoldananac" data-action="minusBtn">-</button>
        <   p id="counter50" data-counter>0</>
        <button class="btnn plus" data-id="xylinetcoldananac" data-action="plusBtn">+</button>
        </div>
        </div>
    </div>`;
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    }
})