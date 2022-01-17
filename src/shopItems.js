// Mains
const mountsMainImage = require('./assets/shop/mounts/mainImage.jpeg');
const setsMainImage = require('./assets/shop/sets/mainImage.jpeg');
const weaponsMainImage = require('./assets/shop/weapons/mainImage.png');

// Mounts
const blackHorse1 = require('./assets/shop/mounts/blackHorse1.png');
const blackHorse2 = require('./assets/shop/mounts/blackHorse2.png');
const bloodyWolf1 = require('./assets/shop/mounts/bloodyWolf1.png');
const bloodyWolf2 = require('./assets/shop/mounts/bloodyWolf2.png');
const jaguar1 = require('./assets/shop/mounts/jaguar1.png');
const jaguar2 = require('./assets/shop/mounts/jaguar2.png');
const pinkPhoenix1 = require('./assets/shop/mounts/pinkPhoenix1.png');
const pinkPhoenix2 = require('./assets/shop/mounts/pinkPhoenix2.png');
const firePhoenix1 = require('./assets/shop/mounts/firePhoenix1.png');
const firePhoenix2 = require('./assets/shop/mounts/firePhoenix2.png');
const goldenPhoenix1 = require('./assets/shop/mounts/goldenPhoenix1.png');
const goldenPhoenix2 = require('./assets/shop/mounts/goldenPhoenix2.png');
const cyanDragon1 = require('./assets/shop/mounts/cyanDragon1.png');
const cyanDragon2 = require('./assets/shop/mounts/cyanDragon2.png');

export const items = {
    mounts: {
        mainImage: mountsMainImage,
        items: [
            {
                id: 0,
                name: "Black Horse",
                img: [blackHorse1, blackHorse2],
                details: "140% base speed",
                price: 15
            },
            {
                id: 1,
                name: "Bloody Wolf",
                img: [bloodyWolf1, bloodyWolf2],
                details: "140% base speed",
                price: 15
            },
            {
                id: 2,
                name: "Jaguar",
                img: [jaguar1, jaguar2],
                details: "140% base speed",
                price: 15
            },
            {
                id: 3,
                name: "Pink Phoenix",
                img: [pinkPhoenix1, pinkPhoenix2],
                details: "140% base speed",
                price: 15
            },
            {
                id: 4,
                name: "Fire Phoenix",
                img: [firePhoenix1, firePhoenix2],
                details: "140% base speed",
                price: 15
            },
            {
                id: 5,
                name: "Golden Phoenix",
                img: [goldenPhoenix1, goldenPhoenix2],
                details: "140% base speed",
                price: 15
            },
            {
                id: 6,
                name: "Cyan Dragon",
                img: [cyanDragon1, cyanDragon2],
                details: "140% base speed",
                price: 15
            }
        ]
    },
    weapons: {
        mainImage: weaponsMainImage,
        items: [
            {
                id: 1,
                name: "Black Fire Dagger",
                img: "",
                details: "",
                price: 25
            },
            {
                id: 2,
                name: "Golden Lizzard Sword",
                img: "",
                details: 25
            }
        ]
    },
    sets: {
        mainImage: setsMainImage,
        items: [
            {
                id: 1,
                name: "Black Fire Dagger",
                img: "",
                details: "",
                price: 25
            },
            {
                id: 2,
                name: "Golden Lizzard Sword",
                img: "",
                details: 25
            }
        ]
    }
}