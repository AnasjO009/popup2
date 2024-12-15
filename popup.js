<div id="popup-container" style="display: none;">
  <div id="popup-overlay"></div>
  <div id="popup-content">
    <button id="close-popup">×</button>
    <h2>اكتشف العروض الجديدة الآن! 😍</h2>
    <div id="product-details">
      <img src="https://via.placeholder.com/150" alt="Product Image" id="product-image" />
      <p id="product-name">منتج رائع</p>
      <p id="product-price">السعر: 103.5 ر.س</p>
      <label for="size-select">اختر المقاس:</label>
      <select id="size-select">
        <option value="">اختر المقاس</option>
        <option value="27" data-price="103.5">مقاس 27 بوصة - 103.5 ر.س</option>
        <option value="32" data-price="109.25">مقاس 32 بوصة - 109.25 ر.س</option>
        <option value="40" data-price="264.5">مقاس 40 بوصة - 264.5 ر.س</option>
        <option value="42" data-price="264.5">مقاس 42 بوصة - 264.5 ر.س</option>
        <option value="43" data-price="276">مقاس 43 بوصة - 276 ر.س</option>
        <option value="46" data-price="276">مقاس 46 بوصة - 276 ر.س</option>
        <option value="48" data-price="276">مقاس 48 بوصة - 276 ر.س</option>
        <option value="49" data-price="276">مقاس 49 بوصة - 276 ر.س</option>
        <option value="50" data-price="293.25">مقاس 50 بوصة - 293.25 ر.س</option>
        <option value="55" data-price="299">مقاس 55 بوصة - 299 ر.س</option>
        <option value="58" data-price="316.25">مقاس 58 بوصة - 316.25 ر.س</option>
        <option value="60" data-price="322">مقاس 60 بوصة - 322 ر.س</option>
        <option value="65" data-price="327.75">مقاس 65 بوصة - 327.75 ر.س</option>
        <option value="70" data-price="385.25">مقاس 70 بوصة - 385.25 ر.س</option>
        <option value="75" data-price="402.5">مقاس 75 بوصة - 402.5 ر.س</option>
        <option value="77" data-price="414">مقاس 77 بوصة - 414 ر.س</option>
        <option value="80" data-price="573.85">مقاس 80 بوصة - 573.85 ر.س</option>
        <option value="82" data-price="573.85">مقاس 82 بوصة - 573.85 ر.س</option>
        <option value="85" data-price="573.85">مقاس 85 بوصة - 573.85 ر.س</option>
        <option value="86" data-price="573.85">مقاس 86 بوصة - 573.85 ر.س</option>
        <option value="88" data-price="573.85">مقاس 88 بوصة - 573.85 ر.س</option>
      </select>
      <salla-add-product-button
        product-id="607520970"
        quantity="1"
        amount="103.5"
        show-cart="true"
      >
        إضافة إلى السلة
      </salla-add-product-button>
    </div>
  </div>
</div>

<style>
  #popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  #popup-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(to bottom, #ff5f6d, #ffc371);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    z-index: 1000;
    color: white;
    width: 300px;
    box-sizing: border-box;
  }

  #popup-content img {
    max-width: 100%;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
  }

  #popup-content select {
    margin: 10px 0;
    padding: 5px;
    background-color: #fff;
    color: #333;
  }

  #popup-content button {
    padding: 10px;
    background: #444;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #popup-content #close-popup {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  #popup-content p,
  #popup-content h2 {
    margin: 10px 0;
  }
</style>

<script>
  (function () {
    var popupContainer = document.getElementById("popup-container");
    var closePopup = document.getElementById("close-popup");
    var sizeSelect = document.getElementById("size-select");
    var priceDisplay = document.getElementById("product-price");
    var addButton = document.querySelector("salla-add-product-button");

    sizeSelect.addEventListener("change", function () {
      var selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
      if (selectedOption.value) {
        priceDisplay.textContent =
          "السعر: " + selectedOption.getAttribute("data-price") + " ر.س";
        addButton.setAttribute("amount", selectedOption.getAttribute("data-price"));
      }
    });

    closePopup.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });

    setTimeout(function () {
      popupContainer.style.display = "block";
    }, 5000);
  })();
</script>
