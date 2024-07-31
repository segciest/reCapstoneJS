// index.js
import { getData } from "../services/fetchAPI.js";
let arrProduct = [];
const fetchData = async () => {
  try {
    arrProduct = await getData();
    console.log(arrProduct);
    renderProduct(arrProduct);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
fetchData();

// render product
const renderProduct = async (arrProduct) => {
  let content = "";
  arrProduct.map((item, index) => {
    if (item.name != "string") {
      content += `
    <div class="productItem ">
          <!-- img -->
          <div class="productImg">
            <img src="${item.image}" alt="" />
          </div>
          <h3 class="productName">${item.name}</h3>
          <div class="productMore">
            <div class="buy">
              <button class="buyNowBtn btn py-2 bg-green-300 hover:bg-green-400">
                <a target="_blank" href="./detail.html?idSanPham=${item.id}">Detail</a>
              </button>
            </div>
            <div class="price">
              <p>$${item.price}</p>
            </div>
          </div>
    </div>
    `;
    }
  });
  console.log(content);
  document.querySelector(".product-container").innerHTML = content;
};

// back to top
// script.js
// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.topFunction = topFunction;
