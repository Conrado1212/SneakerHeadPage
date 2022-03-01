const Wrapper = document.querySelector(".Wrapper");
const Menu = document.querySelectorAll(".Menu");

const product= [
    {
        id:1 ,
        name: "Ultraboost 22",
        price: 750,
        description:"Buty biegowe Ultraboost zapewniają wygodę i sprężystość. Mają podeszwę środkową BOOST, która zapewnia niekończącą się energię, system Linear Energy Push oraz podeszwę zewnętrzną z gumy Continental™. Cholewka tych butów została wykonana z wysokiej jakości przędzy pochodzącej z recyklingu, która zawiera co najmniej 50% Parley Ocean Plastic — tworzywa wyprodukowanego z przetworzonych plastikowych odpadów zebranych na odległych wyspach, plażach i w nadmorskich miejscowościach w celu zapobiegania zanieczyszczeniu oceanów.",
        colors:[
            {
                code: "pink",
                img: "img/ultraboost23.png",
            },
            {
                code: "black",
                img: "img/pobierz_ccexpress.png",
            },
        ],
    },
    {
        id:2 ,
        name: "Nmd",
        price: 550,
        description:"Spakuj torbę, zawiąż buty i ruszaj w drogę. Przygody w mieście wymagają modelu NMD_R1. Nowoczesne buty będące nową odsłoną popularnego modelu biegowego z lat 80. z archiwów adidas mają miękką, elastyczną cholewkę o plecionym designie i zwracającą energię amortyzację Boost, która gwarantuje komfort przez cały dzień. Śmiałe kolory i charakterystyczne wstawki w podeszwie środkowej przyciągają wzrok, więc gdziekolwiek zmierzasz, z pewnością pokażesz się w dobrym stylu.",
        colors:[
            {
                code: "green",
                img: "img/nmd.png",
            },
            {
                code: "black",
                img: "img/hu_ccexpress.png",
            },
        ],
    },
    {
        id:3 ,
        name: "Yeezy",
        price: 999,
        description:"Cholewka jest wyposażona w szary Primeknit z przezroczystymi bocznymi paskami i pomarańczowym podkładem w pobliżu kostki. Jasnopomarańczowy odcień rozciąga się na zapiętek całkowicie szarej cholewki. Półprzezroczysta szara podeszwa środkowa z umieszczoną wewnątrz amortyzacją Boost.",
        colors:[
            {
                code: "white",
                img: "img/yeezy350v.png",
            },
            {
                code: "gray",
                img: "img/sneaker_ccexpress.png",
            },
        ],
    },
    {
        id:4 ,
        name: "Terrex",
        price: 650,
        description:"Poruszaj się szybko w górach w tych butach trailowych. Niskoprofilowa, mocna cholewka z membraną GORE-TEX nie przepuszcza wody, zapewniając suchy komfort stopom. System szybkiego sznurowania gwarantuje wsparcie na nierównym terenie. Podeszwa zewnętrzna z gumy Continental™ dba o przyczepność na mokrych i suchych nawierzchniach, dając pewność na śliskich korzeniach i skałach.",
        colors:[
            {
                code: "blue",
                img: "img/terr_ccexpress.png",
            },
            {
                code: "black",
                img: "img/terrrrrr_ccexpress.png",
            },
        ],
    },
    {
        id:5 ,
        name: "Zx2 boost",
        price: 350,
        description:"CIESZ SIĘ PEŁNYM KOMFORTEM PRZEZ CAŁY DZIEŃ W TYCH BUTACH Z NIEZWYKŁĄ AMORTYZACJĄ.Zainspirowane cyfrowymi technologiami i codziennością. Stworzone dla Twojej satysfakcji. Odblaskowe akcenty podkreślają techniczną cholewkę butów ZX 2K BOOST 2.0. Załóż je i poczuj niewiarygodną miękkość. Amortyzacja Boost daje satysfakcję z każdego kroku.",
        colors:[
            {
                code: "black",
                img: "img/zx_ccexpress.png",
            },
            {
                code: "red",
                img: "img/2_ccexpress.png",
            },
        ],
    },
];


let chooseProduct = product[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductName = document.querySelector(".productName");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");
const currentProductDescription = document.querySelector(".productDe")

Menu.forEach((item, index) => {
    item.addEventListener("click", () => {
        //zmiana slajdu
        Wrapper.style.transform = `translateX(${-100 * index}vw)`;


        //wybor produktu
        chooseProduct = product[index]


        //zmniana produktu
        currentProductName.textContent = chooseProduct.name;
        currentProductPrice.textContent = "PLN " + chooseProduct.price;
        currentProductDescription.textContent = chooseProduct.description;
        currentProductImg.src = chooseProduct.colors[0].img;

        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = chooseProduct.colors[index].code;
        });
    });
});

currentProductColor.forEach((color, index) => {
    color.addEventListener("click", () =>{
        currentProductImg.src = chooseProduct.colors[index].img;
    });
});

currentProductSize.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSize.forEach((size) => {
        size.style.backgroundColor = "black";
        size.style.color = "white";
      });
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
  });


const productButton = document.querySelector(".productButton");
const pay = document.querySelector(".formBox");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  pay.style.display = "flex";
});

close.addEventListener("click", () => {
  pay.style.display = "none";
});


