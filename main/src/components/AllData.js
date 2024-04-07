import Gonesh1 from "/workspaces/sage-stop/main/src/img/home/incense/gonesh1.jpg";
import Gonesh2 from "/workspaces/sage-stop/main/src/img/home/incense/gonesh1.jpg";
import Gonesh3 from "/workspaces/sage-stop/main/src/img/home/incense/gonesh3.jpg";
import Sage from "/workspaces/sage-stop/main/src/img/home/herbs/sage.png";
import Smoke from "/workspaces/sage-stop/main/src/img/home/candles/smoke.jpeg";
import Mandela from "/workspaces/sage-stop/main/src/img/decor/madela.jpeg"

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
        description: "Sage",
        price: 12
    },


    {
        id: 3,
        category: "candles",
        img: Smoke,
        description: "Particle goods",
        price: 20
    },

    {
        id: 4,
        category: "decor",
        img: Mandela,
        description: "Mandela",
        price: 30
    },
];