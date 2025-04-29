"use strict";
let cardcontainer = document.querySelector("#cards");
let products = [
  {
    proName: "Gaming Keyboard",
    price: 25,
    imgLink:
      "https://s9.kh1.co/__image/w=600,h=600,fit=cover/82/82a04bf9b484e74f065cf217dbc2227991d6c06f.png",
  },
  {
    proName: "Gaming Headphone",
    price: 35,
    imgLink: "https://progearcambodia.com/wp-content/uploads/2025/02/1-27.jpg",
  },
  {
    proName: "Gaming Laptop",
    price: 2599,
    imgLink: "https://img.freepik.com/free-photo/high-angle-gamer-playing-laptop_23-2149829167.jpg?semt=ais_hybrid&w=740",
  },
  {
    proName: "Gaming Chair",
    price: 249,
    imgLink: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746566.jpg?semt=ais_hybrid&w=740",
  },
  {
    proName: "Gaming Desk",
    price: 599,
    imgLink: "https://m.media-amazon.com/images/I/814rz0ffyBL.jpg",
  },
  {
    proName: "Gaming Speaker",
    price: 499,
    imgLink: "https://redragonshop.com/cdn/shop/files/RedragonGS510RGBDesktopSpeakers_7.jpg?v=1713755204&width=533",
  },
  {
    proName: "Gaming Mouse",
    price: 199,
    imgLink: "https://ae01.alicdn.com/kf/S20d37fece0bc489b98ad3926b24cdcf7N.jpg",
  },
  {
    proName: "Gaming Monitor",
    price: 399,
    imgLink : "https://m.media-amazon.com/images/I/41T75YxRrzL.jpg"
  }
];

cardcontainer.innerHTML = products.map(
  (product) =>
    `<div
          class="w-full bg-gray-900 border-[5px] border-cyan-600 rounded-[20px] overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-103 hover:shadow-[0px_0px_30px_1px_rgba(59,_130,_246,_0.5)]"
        >
          <a
            href="${product.imgLink}"
          >
            <img
              class="object-cover aspect-[4/4] w-full h-[400px]"
              src="${product.imgLink}"
              alt="keyboard"
            />
          </a>
          <div class="p-[10px] flex flex-col">
            <h2
              class="text-cyan-400 sm:text-[24px] md:text-[24px] lg:text-2xl text-center font-extrabold text-[20px]"
            >
              ${product.proName}
            </h2>
            <div
              class="px-[10px] pt-[20px] text-[20px] sm:text-[20px] md:text-[24px] lg:text-2xl flex flex-col gap-[10px]"
            >
              <div>
                <i class="fa-solid fa-star" style="color: #f1bb27"></i>
                <i class="fa-solid fa-star" style="color: #f1bb27"></i>
                <i class="fa-solid fa-star" style="color: #f1bb27"></i>
                <i class="fa-solid fa-star" style="color: #f1bb27"></i>
                <i class="fa-solid fa-star" style="color: #f1bb27"></i>
              </div>
              <h1 class="text-[#f1bb27] font-bold">Original Product</h1>
              <div class="flex justify-between p-[20px] item-center">
                <h1
                  class="text-gray-200 text-[20px] sm:text-[25px] md:text-[30px] lg:text-3xl pl-[0] font-bold"
                >
                  ${product.price} USD 
                </h1>
                <div>
                  <button
                    class="bg-green-500 px-[8px] py-[10px] rounded-[10px] text-[20px] cursor-pointer border-[5px] border-cyan-400 transform transition-transform duration-500 hover:scale-102 hover:shadow-[0px_0px_30px_1px_rgba(34,_197,_94,_0.5)] "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>`
).join(" ");
