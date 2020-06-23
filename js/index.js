'use strict'

const products = [
	{
		id:1,
		name: 'Orange Juice',
		price: 45,
		facts: 'Blah blah',
		images: [
			'orange-juice.jpg',
			'orange-juice-2.jpg',
		],
		color: '#FFE55D',
		categories: [
			'juice', 'drinks'
		]
	}, 	{
		id:2,
		name: 'Kiwi Juice',
		price: 25,
		facts: 'Blah blah',
		images: [
			'orange-juice.jpg',
			'orange-juice-2.jpg',
		],
		color: '#C8F39B',
		categories: [
			'juice', 'drinks'
		]
	}

]


// const getProductAsHtmlString = (prod) => {
const getProductAsHtmlString = ({color, name, price, images}) => {
	return `
	<article class="tile" style="--col:${color}">
		<header class="info">
			<h2>${name}</h2>
			<div>$${price}</div>
		</header>
		<img src="img/${images[0]}" alt="description">
	</article>`
}



document.getElementById('products').innerHTML = products
	.filter(({price}) => price < 50)
	.sort((a, b) => b.price - a.price)
	.map(getProductAsHtmlString)
	.join('\n')



/* products.forEach(prod => {

	document.getElementById('products').innerHTML += `
		<article class="tile">
			<header class="info">
				<h2>Name of Product</h2>
				<div>$10000</div>
			</header>
			<img src="img/whatever.png" alt="description">
		</article>`
})
 */








// Original (immutable) Array
// const countries = ['Canada', 'Japan', 'Argentina', 'Kenya']

/* const longerNames = countries.filter((c) => {
	if (c.length > 5) {
		return true
	} else {
		return false
	}
})
 */

/*  // Onlu show longer names
const longerNames = countries.filter((c) => c.length > 5)

const cNamesOnly = longerNames.filter((c) => c[0] == 'C')


// New array (copy) formatted as HTML
const loveCountries = cNamesOnly.map((c) => `<li>I love ${c}</li>`)

// Join the array as a String, then put to HTML
document.getElementById('products').innerHTML = loveCountries.join('\n')
 */

/* document.getElementById('products').innerHTML = countries  // 4
	.filter((c) => c.length > 5)  // 2
	.filter((c) => c[0] == 'C')  // 1
	.map((c) => `<li>I love ${c}</li>`)  // 1
	.join('\n')
 */
