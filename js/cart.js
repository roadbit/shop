document.addEventListener('DOMContentLoaded', () => {
	
	const productsBtn = document.querySelectorAll('.order__btn');
	const cartProductsList = document.querySelector('.cart-content__list');
	const cart = document.querySelector('.cart__item');
	const cartQuantity = cart.querySelector('.cart__quantity');
	const fullPrice = document.querySelector('.fullprice');
	let price = 0;
	let randomId = 0;

	function showOrderAddedMessage() {
		const messageContainer = document.createElement('div');
		messageContainer.textContent = 'Замовлення додане!';
		messageContainer.classList.add('order-added-message');
		document.body.appendChild(messageContainer);
	
		setTimeout(() => {
			messageContainer.style.display = 'none';
		}, 2500);
	}

	function updateCartVisibility() {
		const cartGrid = document.querySelector('.cart__grid');
		const cartImageItem = document.querySelector('.cart__image-item');
	
		if (cartProductsList.querySelectorAll('.cart-content__item').length > 0) {
			cartGrid.style.display = 'grid';
			cartImageItem.style.display = 'none';
		} else {
			cartGrid.style.display = 'none';
			cartImageItem.style.display = 'flex';
		}
	}

	const priceWithoutSpaces = (str) => {
		return str.replace(/\s/g, '');
	};

	const normalPrice = (str) => {
		return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	};

	const plusFullPrice = (currentPrice) => {
		return price += currentPrice;
	};

	const minusFullPrice = (currentPrice) => {
		return price -= currentPrice;
	};

	const updateProductPrice = (productElement, newPrice) => {
        const priceElement = productElement.querySelector('.cart-product__price');
        priceElement.textContent = `${normalPrice(newPrice)}`;
    };

    const updateProductCount = (productElement, newCount) => {
        const countElement = productElement.querySelector('.count');
        countElement.textContent = newCount;
    };

    cartProductsList.addEventListener('click', (e) => {
        if (e.target.closest('.plus')) {
            const productElement = e.target.closest('.cart-content__product');
            handlePlusClick(productElement);
        }

        if (e.target.closest('.minus')) {
            const productElement = e.target.closest('.cart-content__product');
            handleMinusClick(productElement);
        }
    });

	function handlePlusClick(productElement) {
		const currentPrice = parseInt(productElement.dataset.price);
		let currentCount = parseInt(productElement.dataset.count);
	
		const newCount = currentCount + 1;
		const newPrice = currentPrice * newCount;
	
		productElement.dataset.count = newCount;
		updateProductCount(productElement, newCount);
		updateProductPrice(productElement, newPrice);
		printFullPrice();
		updateStorage();
		updateCartVisibility();
	}

	function handleMinusClick(productElement) {
		const currentPrice = parseInt(productElement.dataset.price);
		let currentCount = parseInt(productElement.dataset.count);
	
		if (currentCount > 1) {
			const newCount = currentCount - 1;
			const newPrice = currentPrice * newCount;
	
			productElement.dataset.count = newCount;
			updateProductCount(productElement, newCount);
			updateProductPrice(productElement, newPrice);
			printFullPrice();
			updateStorage();
		}
	}

	const printQuantity = () => {
		let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
		cartQuantity.textContent = productsListLength;
	
		const cartCountOrderSpan = document.querySelector('.cart__count-order');
		if (cartCountOrderSpan) {
			cartCountOrderSpan.textContent = productsListLength;
		}
	};

	const printFullPrice = () => {
		let totalPrice = 0;
		document.querySelectorAll('.cart-content__product').forEach(productElement => {
			const price = parseInt(priceWithoutSpaces(productElement.dataset.price));
			const count = parseInt(productElement.dataset.count);
			totalPrice += price * count;
		});
		fullPrice.textContent = `${normalPrice(totalPrice)} грн`;
	};

	const generateCartProduct = (img, title, price, id) => {
		return `
			<li class="cart-content__item">
				<article class="cart-content__product cart-product" data-id="${id}" data-price="${price}" data-count="1">
					<img src="${img}" alt="" class="cart-product__img">
					<div class="cart-product__text">
						<h3 class="cart-product__title">${title}</h3>
						<div class="quantity__btn">
							<button class="minus"><img src="../../../../icon/minus.png" class="minus__icon"></button>
							<span class="count">1</span>
							<button class="plus"><img src="../../../../icon/plus.png" class="plus__icon"></button>
						</div>
						<div class="product__price-item">
							<span class="cart-product__price">${price}</span>
							<span>грн</span>
						</div>
					</div>
					<button class="cart-product__delete" aria-label="Видалити замовлення"></button>
				</article>
			</li>
		`;
	};
	

	const deleteProducts = (productParent) => {
		let id = productParent.querySelector('.cart-content__product').dataset.id;
	
		let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
		minusFullPrice(currentPrice);
		printFullPrice();
		productParent.remove();
	
		printQuantity();
	
		updateStorage();

		updateCartVisibility();
	};

	productsBtn.forEach(el => {
		
		el.closest('.page__container').setAttribute('data-id', randomId++);

		el.addEventListener('click', (e) => {
			let self = e.currentTarget;
			let parent = self.closest('.page__container');
			let id = parent.dataset.id;
			let img = parent.querySelector('.slide__img').getAttribute('src');
			let title = parent.querySelector('.page__title').textContent;
			let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.page__price').textContent));

			plusFullPrice(priceNumber);

			printFullPrice();

			cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));

			printQuantity();

			updateStorage();

			updateCartVisibility();

			showOrderAddedMessage();
			
		});
	});

	cartProductsList.addEventListener('click', (e) => {
		if (e.target.classList.contains('cart-product__delete')) {
			deleteProducts(e.target.closest('.cart-content__item'));
			updateCartVisibility();
		}
	});


	const countSumm = () => {
		document.querySelectorAll('.cart-content__item').forEach(el => {
			price += parseInt(priceWithoutSpaces(el.querySelector('.cart-product__price').textContent));
		});
	};

	const updateStorage = () => {
		let parent = cartProductsList.querySelector('.simplebar-content');
		let html = parent.innerHTML;
		html = html.trim();
		if (html.length) {
			localStorage.setItem('products', html);
		} else {
			localStorage.removeItem('products');
		}
	
		printFullPrice();
	};

	const initialState = () => {
		if (localStorage.getItem('products') !== null) {
			cartProductsList.querySelector('.simplebar-content').innerHTML = localStorage.getItem('products');
			price = parseInt(localStorage.getItem('totalPrice')) || 0;
			printQuantity();
			printFullPrice();
		}
	};
	
	
	initialState();

	const submitOrderBtn = document.getElementById('submitOrderBtn');
	if (submitOrderBtn) {
		submitOrderBtn.addEventListener('click', function() {
			const formData = new FormData(document.getElementById('orderForm'));
			const formObject = {};
			formData.forEach((value, key) => {
				formObject[key] = value;
			});

			const orders = document.querySelectorAll('.cart-content__item');
			const orderData = [];
			orders.forEach(order => {
				const title = order.querySelector('.cart-product__title').textContent;
				const count = order.querySelector('.count').textContent;
				const price = order.querySelector('.cart-product__price').textContent;
				orderData.push({ title, count, price });
			});

			const TOKEN = "6383541177:AAGEsa4B5Bsu_eeWuptQGy1cRGvjm28kwYY";
			const CHAT_ID = "-1002049716001";
			const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

			let message = `<b>Нове замовлення!</b>\n\n<b>Дані з форми:</b>\n`;
			for (const key in formObject) {
				message += `<b>${key}:</b> ${formObject[key]}\n`;
			}

			message += `\n<b>Замовлення:</b>\n`;
			orderData.forEach((order, index) => {
				message += `<b>${index + 1}.</b> ${order.title} - ${order.count} шт. - ${order.price}\n`;
			});

			axios.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			})
			.then(response => {
				console.log('Повідомлення успішно відправлено до Telegram!', response);
				window.location.href = "../../../thank-you-page.html";
			})
			.catch(error => {
				console.error('Помилка відправки повідомлення до Telegram:', error);
			});
			clearCart();
			updateCartVisibility();
		});
	}

	const clearCart = () => {
		cartProductsList.querySelector('.simplebar-content').innerHTML = '';
		price = 0;
		printFullPrice();
		printQuantity();
		updateStorage();

		updateCartVisibility();
	
		localStorage.removeItem('totalPrice');
	};

	initialState();
    updateCartVisibility();

});