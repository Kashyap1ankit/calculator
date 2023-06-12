const input = document.querySelector("input");

let string = "";

//If Enter key is pressed then eual to function will be performed

document.querySelector(".calculator").addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Enter") string = eval(string);
  input.value = string;
});

//Adding event listener to calculator section just becaus if clicked elsewhere then no functio will be performed
document.querySelector(".calculator").addEventListener("click", function (e) {
  e.preventDefault();

  const target = e.target;

  if (e.target.classList.contains("btn")) {
    if (e.target.value === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.value === "C") {
      string = "";
      input.value = string;
    } else if (e.target.value === "%") {
      const string1 = string / 100;
      input.value = string1;
      string = string1;
    } else if (e.target.value === "CE") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else {
      string += target.value;
      input.value = string;
    }
  }
});

//When a user clicks a section with type class then it will check which element is clicked and then remove active--type class from all type class elements and then finds the closet parent element with type class of target and then add active--type class

document.querySelectorAll(".type").forEach(function (element) {
  element.addEventListener("click", function (e) {
    const target = e.target;
    document.querySelectorAll(".type").forEach(function (el) {
      el.classList.remove("active--type");
    });

    target.closest(".type").classList.add("active--type");

    if (target.closest(".type").classList.contains("currency")) {
      document.querySelector(".calculator").classList.add("hidden");
      document.querySelector(".calculator2").classList.remove("hidden");
      document.querySelector(".standard2").classList.remove("active--type2");
      document.querySelector(".currency2").classList.add("active--type2");
      document.querySelector(".standard").classList.remove("active--type");
    }
  });
});

///////////////////////////////////////////////////////////////////

const frominput = document.querySelector(".frominput");
const toinput = document.querySelector(".toinput");

let string2 = "";

//If Enter key is pressed then conversion is performed

document
  .querySelector(".calculator2")
  .addEventListener("keydown", function (e) {
    e.preventDefault();
    if (
      document.querySelector("#from").value === "USD" &&
      document.querySelector("#to").value === "INR"
    ) {
      string2 = eval(string2);
      toinput.value = string2 * 81;
    } else if (
      document.querySelector("#from").value === "USD" &&
      document.querySelector("#to").value === "USD"
    ) {
      string2 = eval(string2);
      toinput.value = string2;
    } else if (
      document.querySelector("#from").value === "USD" &&
      document.querySelector("#to").value === "EUR"
    ) {
      string2 = eval(string2);
      toinput.value = string2 * 0.929;
    } else if (
      document.querySelector("#from").value === "INR" &&
      document.querySelector("#to").value === "USD"
    ) {
      string2 = eval(string2);
      toinput.value = string2 / 81;
    } else if (
      document.querySelector("#from").value === "INR" &&
      document.querySelector("#to").value === "INR"
    ) {
      string2 = eval(string2);
      toinput.value = string2;
    } else if (
      document.querySelector("#from").value === "INR" &&
      document.querySelector("#to").value === "EUR"
    ) {
      string2 = eval(string2);
      toinput.value = string2 * 0.011;
    } else if (
      document.querySelector("#from").value === "EUR" &&
      document.querySelector("#to").value === "EUR"
    ) {
      string2 = eval(string2);
      toinput.value = string2;
    } else if (
      document.querySelector("#from").value === "EUR" &&
      document.querySelector("#to").value === "USD"
    ) {
      string2 = eval(string2);
      toinput.value = string2 * 1.076;
    } else if (
      document.querySelector("#from").value === "EUR" &&
      document.querySelector("#to").value === "INR"
    ) {
      string2 = eval(string2);
      toinput.value = string2 * 88.701;
    }
  });

//If Convert button is pressed then conversion is performed

document.querySelector(".convert").addEventListener("click", function (e) {
  e.preventDefault();
  if (
    document.querySelector("#from").value === "USD" &&
    document.querySelector("#to").value === "INR"
  ) {
    string2 = eval(string2);
    toinput.value = string2 * 81;
  } else if (
    document.querySelector("#from").value === "USD" &&
    document.querySelector("#to").value === "USD"
  ) {
    string2 = eval(string2);
    toinput.value = string2;
  } else if (
    document.querySelector("#from").value === "USD" &&
    document.querySelector("#to").value === "EUR"
  ) {
    string2 = eval(string2);
    toinput.value = string2 * 0.929;
  } else if (
    document.querySelector("#from").value === "INR" &&
    document.querySelector("#to").value === "USD"
  ) {
    string2 = eval(string2);
    toinput.value = string2 / 81;
  } else if (
    document.querySelector("#from").value === "INR" &&
    document.querySelector("#to").value === "INR"
  ) {
    string2 = eval(string2);
    toinput.value = string2;
  } else if (
    document.querySelector("#from").value === "INR" &&
    document.querySelector("#to").value === "EUR"
  ) {
    string2 = eval(string2);
    toinput.value = string2 * 0.011;
  } else if (
    document.querySelector("#from").value === "EUR" &&
    document.querySelector("#to").value === "EUR"
  ) {
    string2 = eval(string2);
    toinput.value = string2;
  } else if (
    document.querySelector("#from").value === "EUR" &&
    document.querySelector("#to").value === "USD"
  ) {
    string2 = eval(string2);
    toinput.value = string2 * 1.076;
  } else if (
    document.querySelector("#from").value === "EUR" &&
    document.querySelector("#to").value === "INR"
  ) {
    string2 = eval(string2);
    toinput.value = string2 * 88.701;
  }
});

//Adding event listener to calculator section just becaus if clicked elsewhere then no functio will be performed
document.querySelector(".calculator2").addEventListener("click", function (e) {
  e.preventDefault();

  const target = e.target;

  if (e.target.classList.contains("btn2")) {
    if (e.target.value === "C") {
      string2 = "";
      frominput.value = string2;
      toinput.value = "";
    } else if (e.target.value === "CE") {
      string2 = string2.slice(0, string2.length - 1);
      frominput.value = string2;
    } else {
      string2 += target.value;
      frominput.value = string2;
    }
  }
});

//When a user clicks a section with type class then it will check which element is clicked and then remove active--type class from all type class elements and then finds the closet parent element with type class of target and then add active--type class

document.querySelectorAll(".type2").forEach(function (element) {
  element.addEventListener("click", function (e) {
    const target = e.target;

    document.querySelectorAll(".type2").forEach(function (el) {
      el.classList.remove("active--type2");
    });

    target.closest(".type2").classList.add("active--type2");

    if (target.closest(".type2").classList.contains("standard2")) {
      document.querySelector(".calculator2").classList.add("hidden");
      document.querySelector(".calculator").classList.remove("hidden");
      document.querySelector(".standard").classList.add("active--type");
      document.querySelector(".currency").classList.remove("active--type");
      document.querySelector(".currency2").classList.remove("active--type2");
    }
  });
});
