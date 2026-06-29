import egg from "../images/egg.png"
import remen from "../images/remen.png"
import chicken from "../images/chicken.png"
import cake from "../images/cake.png"
import burger from "../images/burger.png"
import pancake from "../images/pancake.png"
import oatmeal from "../images/oatmeal.png"
import sushi from "../images/sushi.png"
import steak from "../images/steak.png"

const foodData = [
        {
            name: "Boiled Egg",
            price: 40,
            text: "A classic breakfast staple, packed with protein and flavor.",
            image: egg,
            type: "breakfast",
        },
        {
            name: "Ramen",
            price: 180,
            text: "A delicious bowl of noodles, rich in umami and comfort.",
            image: remen,
            type: "lunch",
        },
        {
            name: "Grilled Chicken",
            price: 320,
            text: "Juicy and tender, perfectly seasoned for a satisfying dinner.",
            image: chicken,
            type: "dinner",
        },
        {
            name: "Cake",
            price: 120,
            text: "Sweet and fluffy, a perfect treat for any time of day.",
            image: cake,
            type: "breakfast",
        },
        {
            name: "Burger",
            price: 140,
            text: "A hearty burger stacked with fresh toppings and flavor.",
            image: burger,
            type: "lunch",
        },
        {
            name: "Pancake",
            price: 160,
            text: "Fluffy and golden, topped with syrup and berries for a sweet delight.",
            image:pancake,
            type: "dinner",
        },
        {
            name: "Oatmeal",
            price: 90,
            text: "Warm and wholesome, a perfect start to your day.",
            image: oatmeal,
            type: "breakfast",
        },
        {
            name: "Sushi",
            price: 450,
            text: "Fresh and flavorful, a delightful combination of rice and fish.",
            image:sushi,
            type: "lunch",
        },
        {
            name: "Steak",
            price: 850,
            text: "Rich and succulent, grilled to perfection for a hearty dinner.",
            image: steak,
            type: "dinner",
        },

    ];

export default foodData;