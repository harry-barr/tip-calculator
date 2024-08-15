const billInput = document.querySelector(".bill-input");
const submitBtn = document.querySelector(".submit-btn");
const tipAmountBtns = document.querySelectorAll(".tip-btn");
const guestNumber = document.querySelector(".select-guests");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");

let tipMultiplier = 0;

tipAmountBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    document.querySelector(".tip-btn.active")?.classList.remove("active");
    event.currentTarget.classList.add("active");
  });
});

const calculateTip = (event) => {
  event.preventDefault();
  tipResult.innerHTML = "Your Tip:";
  totalResult.innerHTML = "Your Total:";
  let amount = Number(billInput.value);
  tipMultiplier = document.querySelector(".tip-btn.active").value;
  if (isNaN(amount) || amount <= 0 || !tipMultiplier) {
    return alert("Please enter a valid number and select a tip percentage.");
  } else {
    let tip = amount * tipMultiplier;
    let total = amount + tip;
    tipResult.insertAdjacentHTML("beforeend", `<p>${tip.toFixed(2)}</p>`);
    totalResult.insertAdjacentHTML("beforeend", `<p>${total.toFixed(2)}</p>`);
    return;
  }
};

submitBtn.addEventListener("click", calculateTip);
