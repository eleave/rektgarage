/* Counter totalization */
function counterTotalization(submit) {
  const input = document.getElementById("inputNumber");
  const total = document.getElementById("total");
  const price = Number(total.textContent);
  const plus = document.getElementById("setPlus");
  const minus = document.getElementById("setMinus");
  const minCount = Number(input.min) || 1;
  const maxCount = Number(input.max) || 3;

  if (submit.disabled || minus.disabled || plus.disabled) {
    input.disabled = true;
    minus.disabled = true;
    plus.disabled = true;
    return;
  }

  function setNumber(num) {
    if (!num || num < minCount) {
      num = 1;
    }
    if (num > maxCount) {
      num = maxCount;
    }
    input.value = num;
    total.textContent = parseFloat(num * price).toFixed(2);
  }

  input.onkeyup = (e) => setNumber(parseInt(e.target.value));
  plus.onclick = (e) => setNumber(parseInt(input.value) + 1);
  minus.onclick = (e) => setNumber(parseInt(input.value) - 1);
}

/* Toastify initialization */
function ToastifyInitialization() {
  Toastify({
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true,
    style: {
      background: "#fff2c5",
      borderRadius: ".5rem",
      color: "black",
      padding: "1rem 2rem",
    },
    offset: {
      x: "2em",
      y: "2em",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

/* Initialization */
window.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submitRegistration");
  if (submit) counterTotalization(submit);
  ToastifyInitialization();
});
