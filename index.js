let titleCount = 1;

let totalPrice = 0;

const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );

    const titleContainer = document.getElementById("title-container");

    const p = document.createElement("p");
    p.innerText = titleCount + ". " + title;
    titleContainer.appendChild(p);
    titleCount++;

    // calculte price
    totalPrice += price;
    document.getElementById("totalPrice").innerText = totalPrice;
  });

  const btn = document.getElementById("apply-btn");
  btn.addEventListener("click", function () {
    // get the value from input
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCode);
    if (totalPrice >= 200) {
      if (couponCode === "SELL200") {
        const discountPrice = document.getElementById("discountPrice");
        const discountAmount = totalPrice * 0.2;
        discountPrice.innerText = discountAmount.toFixed(2);

        const restTotal = document.getElementById("total");
        restTotal.innerText = totalPrice - discountAmount.toFixed(2);

        document.getElementById("input-field").value = "";
      } else {
        alert("invalid coupon");
      }
    } else {
      alert(200);
    }
  });
}
