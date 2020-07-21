 // Login button event handler
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function () {
     const loginArea = document.getElementById("login-area");
     loginArea.style.display = "none";
     const transectionArea = document.getElementById("transection-area");
     transectionArea.style.display = "block";
 });
 // Diposit button event handler
 const dipositBtn = document.getElementById("addDiposit");
 dipositBtn.addEventListener("click", function () {
     const dipositAmount = document.getElementById("dipositAmount").value;
     const dipositNumber = parseFloat(dipositAmount);
     const currentDiposit = document.getElementById("currentDiposit")
         .innerText;
     const currentDipositNumber = parseFloat(currentDiposit);
     const total = dipositNumber + currentDipositNumber;
     document.getElementById("currentDiposit").innerText = total;
     document.getElementById("dipositAmount").value = "";
 });