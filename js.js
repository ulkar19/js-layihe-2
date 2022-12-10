let firstinput = document.querySelector(".firstinput");

let deletebtn = document.querySelector(".delete-btn");

let addbtn = document.querySelector(".addbtn");

let appendeddiv = document.querySelector(".appendeddiv");

let list = document.querySelector("ul");

// ---------------------------------------add button is created bottom:

addbtn.addEventListener("click", (e) => {
  e.preventDefault;

  let listels = document.createElement("li");

  document.querySelector("li");

  appendeddiv.style.border = " 1px solid #c4c4c4";

  listels.style.listStyle = "none";

  let inputvalue = firstinput.value;

  list.append(listels);

  listels.append(inputvalue);

  addbtn.style.display = "none";

  let adbtnscrl = document.querySelector(".add-btn-scrls");

  adbtnscrl.append(addbtn);

  addbtn.style.display = "block";

  deletebtn.addEventListener("click", (elem) => {
    inputvalue.remove();
  });

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>delete button for listels is created bottom:

  let newdelbtn = document.createElement("button");

  newdelbtn.addEventListener("click", (event) => {
    listels.remove();
  });

  let newdelimg = document.createElement("img");

  newdelimg.src = "/Group 56.svg";

  newdelbtn.append(newdelimg);

  //========================img appended to the button====================:

  newdelbtn.classList.add("newdelbtn");

  listels.append(newdelbtn);
});

///===================================================sort btn==============:
let sortbtn = document.querySelector(".oxlar-btn");

let arr = [];

let sortarr = true;

sortbtn.addEventListener("click", () => {
  let listel = document.querySelectorAll("ul li");

  listel.forEach((item) => {
    arr.push(item.firstChild.textContent);

    console.log(arr);
  });
  //  ----------------sort conditions------------------------//
  if (sortarr) {
    arr.sort();
    sortarr = false;
    sortbtn.style.transform = "rotate(180deg)";
    listel.forEach((item, index) => {
      item.firstChild.textContent = arr[index];
    });
  } else if (!sortarr) {
    arr.reverse();
    sortbtn.style.transform = "rotate(180deg)";
    listel.forEach((item, index) => {
      item.firstChild.textContent = arr[index];
    });

    sortarr = true;
    sortbtn.style.transform = "rotate(180deg)";
    sortarr = false;
    sortbtn.style.transform = "rotate(180deg)";
  }
});
