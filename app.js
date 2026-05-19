const addBtn = document.getElementById("addBtn");
const transactionList = document.getElementById("transactionList");

let balance = 0;

addBtn.addEventListener("click", () => {

  const title = document.getElementById("title").value;
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if(!title || !amount){
    alert("Vyplň všechna pole");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    ${title} - ${amount} Kč
  `;

  transactionList.appendChild(li);

  if(type === "expense"){
    balance -= amount;
  } else {
    balance += amount;
  }

  document.getElementById("balance").innerText =
    balance + " Kč";

});