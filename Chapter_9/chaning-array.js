const productsB = [
    {name: 'gold star', prices: 30},
    {name: 'green shell', prices: 10},
    {name: 'red shell', prices: 40},
    {name: 'banana skin', prices: 5},
    {name: 'mushroom', prices: 50}
];

//const filtered = products.filter(product => product.price > 20);

//const promos = filtered.map(product => {
    //return `the ${product.name} is ${product.price / 2} pounds`;
//});

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} prounds`);

console.log(promos);