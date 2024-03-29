import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Shalini',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Jerry',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name:'DW CLASSIC ST MAWES',
            category: 'Women',
            image:'/images/product1.jpg',
            price:150,
            countInStock: 10,
            brand:'Daniel Wellington',
            rating:5,
            numReviews:10,
            description:'High quality product.',
        },
        {
            name:'DW PETITE MELROSE',
            category: 'Women',
            image:'/images/product2.jpeg',
            price:120,
            countInStock: 20,
            brand:'Daniel Wellington',
            rating:3,
            numReviews:20,
            description:'High quality product.',
        },
        {
            name:'DW PETITE UNITONE',
            category: 'Women',
            image:'/images/product3.jpg',
            price:110,
            countInStock: 10,
            brand:'Daniel Wellington',
            rating:4.5,
            numReviews:11,
            description:'High quality product.',
        },
        {            
            name:'DW ICONIC LINK ARCTIC',
            category: 'Men',
            image:'/images/product4.jpg',
            price:190,
            countInStock: 30,
            brand:'Daniel Wellington',
            rating:1,
            numReviews:16,
            description:'High quality product.',
        },
        {
            name:'DW ICONIC LINK UNITONE',
            category: 'Men',
            image:'/images/product5.jpg',
            price:155,
            countInStock: 20,
            brand:'Daniel Wellington',
            rating:4,
            numReviews:14,
            description:'High quality product.'
        },
        {
            name:'DW ICONIC LINK AMBER',
            category: 'Men',
            image:'/images/product6.jpg',
            price:100,
            countInStock: 10,
            brand:'Daniel Wellington',
            rating:3,
            numReviews:13,
            description:'High quality product.',
        },
        {
            name:'DW PRESSED MELROSE',
            category: 'Women',
            image:'/images/product7.jpg',
            price:130,
            countInStock: 10,
            brand:'Daniel Wellington',
            rating:5,
            numReviews:16,
            description:'High quality product.',
        },
    ],
};

export default data;