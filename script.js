const billInput = document.querySelector(".bill-input");
const submitBtn = document.querySelector(".submit-btn");
const tipAmountBtns = document.querySelectorAll(".tip-btn");
const guestNumber = document.querySelector(".select-guests");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");
const dividedResult = document.querySelector(".divide-result");
const customTipInput = document.querySelector(".custom-tip");

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
  dividedResult.innerHTML = "";
  let amount = Number(billInput.value);
  let tipMultiplier = document.querySelector(".tip-btn.active")?.value;

  let tip = amount * tipMultiplier;
  let total = amount + tip;

  let dividedAmount = total / Number(guestNumber.value);
  if (isNaN(amount) || amount <= 0 || !tipMultiplier) {
    return alert("Please enter a valid number and select a tip percentage.");
  } else if (Number(guestNumber.value) === 1) {
    tipResult.insertAdjacentHTML("beforeend", `<p>${tip.toFixed(2)}</p>`);
    totalResult.insertAdjacentHTML("beforeend", `<p>${total.toFixed(2)}</p>`);
    return;
  } else if (Number(guestNumber.value) > 1) {
    dividedResult.classList.remove("hide");
    dividedResult.insertAdjacentHTML(
      "beforeend",
      `Amount per person: <p>${dividedAmount.toFixed(2)}</p>`
    );
    tipResult.insertAdjacentHTML("beforeend", `<p>${tip.toFixed(2)}</p>`);
    totalResult.insertAdjacentHTML("beforeend", `<p>${total.toFixed(2)}</p>`);
    return;
  }
};

submitBtn.addEventListener("click", calculateTip);

/* LEFT TO DO: 
    FINISH CALCULATE TIP FUNCTION WITH DIFFERENT GUEST NUMBERS;
    ADD HIDDEN DIV WHICH DISPLAYS WHEN YOU SELECT MORE THAN ONE GUEST;
    IN THIS DIV DISPLAYS THE AMOUNT EACH PERSON PAYS;
    ADD CUSTOM TIP FUNCTIONALITY;
    REMOVE ACTIVE CLASS FROM BUTTONS WHEN CLICKING OFF THEM;
*/
