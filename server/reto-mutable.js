const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
let productRest = []

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔')
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    productRest = products.filter(item => item !== products[productIndex])
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log('productRest', productRest);

console.log("-".repeat(10));


// Update

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' }
]

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productV2 = productsV2.map(item => {
    if(item.id === update.id){
        return {
            ...item,
            ...update.changes
        }
    }
    return {...item}
})

console.log(productV2);

console.log(productsV2);