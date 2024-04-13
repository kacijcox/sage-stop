import Gonesh1 from "../img/home/incense/gonesh1.jpg";
import Gonesh2 from "../img/home/incense/gonesh2.jpg";
import Gonesh3 from "../img/home/incense/gonesh3.jpg";
import Sage from "../img/home/herbs/sage.png";
import Sage2 from "../img/home/herbs/sage2.png";
import Sage3 from "../img/home/herbs/sage3.jpeg";
import Sage4 from "../img/home/herbs/sage4.jpeg";
import Sage5 from "../img/home/herbs/sage5.png";
import Smoke from "../img/home/candles/smoke.jpeg";
import Smoke2 from "../img/home/candles/candles3.png";
import Smoke3 from "../img/home/candles/candles4.jpeg";
import Candlestick1 from "../img/home/candles/candles2.jpeg";
import Candlestick2 from "../img/home/candles/candles5.png";
import Candlestick3 from "../img/home/candles/candles6.jpeg";


import Mandela from "../img/decor/madela.jpeg"

export const items = [
    {
        id: 1,
        category: "incense",
        img: Gonesh1,
        description: "Gonesh",
        price: 10,
        otherImgs: [Gonesh2, Gonesh3]
    },

    {
        id: 2,
        category: "herbs",
        img: Sage,
        description: "White Sage",
        price: 12,
    
    },


    {
        id: 3,
        category: "candles",
        img: Smoke,
        description: "Particle Goods",
        price: 20,
        otherImgs: [Smoke2, Smoke3]
    },

    {
        id: 4,
        category: "decor",
        img: Mandela,
        description: "Mandela",
        price: 30
    },

    {
        id: 5,
        category: "herbs",
        img: Sage2,
        description: "Dragon Sage",
        price: 15,
        otherImgs: [Sage4, Sage5]
    },

    {
    id: 6,
    category: "herbs",
    img: Sage3,
    description: "Cedar Sage",
    price: 15,
},

    {
    id: 7,
    category: "candles",
    img: Candlestick1,
    description: "Candle Sticks",
    price: 8,
    otherImgs: [Candlestick2, Candlestick3]
    }
];

