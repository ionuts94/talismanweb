const mountsMainImage = require('./assets/shop/mounts/mainImage.jpeg');
const setsMainImage = require('./assets/shop/sets/mainImage.jpeg');
const weaponsMainImage = require('./assets/shop/weapons/mainImage.png');

export const items = {
    mounts: {
        mainImage: mountsMainImage,
        items: [
            {
                id: 1,
                name: "Bloody Wolf",
                img: "",
                details: "",
                price: 15
            },
            {
                id: 2,
                name: "Black Horse",
                img: "",
                details: "",
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