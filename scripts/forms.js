// Initialize Firebase
var config = {
  apiKey: "AIzaSyCel5TxnOKkqpIeSlUq2mO_OpYHqrKoLZk",
  authDomain: "led-cabinet-lighting.firebaseapp.com",
  databaseURL: "https://led-cabinet-lighting.firebaseio.com",
  projectId: "led-cabinet-lighting",
  storageBucket: "led-cabinet-lighting.appspot.com",
  messagingSenderId: "436784857173"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get orderform values
  var quantity01 = getInputVal("quantity01");
  var quantity02 = getInputVal("quantity02");
  var quantity03 = getInputVal("quantity03");
  var quantity04 = getInputVal("quantity04");
  var quantity05 = getInputVal("quantity05");
  var quantity06 = getInputVal("quantity06");
  var quantity07 = getInputVal("quantity07");
  var quantity08 = getInputVal("quantity08");
  var quantity09 = getInputVal("quantity09");
  var quantity10 = getInputVal("quantity10");
  var quantity11 = getInputVal("quantity11");
  var quantity12 = getInputVal("quantity12");
  var quantity13 = getInputVal("quantity13");
  var quantity14 = getInputVal("quantity14");
  var quantity15 = getInputVal("quantity15");
  var quantity16 = getInputVal("quantity16");
  var quantity17 = getInputVal("quantity17");
  // Get message values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  saveMessage(
    quantity01,
    quantity02,
    quantity03,
    quantity04,
    quantity05,
    quantity06,
    quantity07,
    quantity08,
    quantity09,
    quantity10,
    quantity11,
    quantity12,
    quantity13,
    quantity14,
    quantity15,
    quantity16,
    quantity17,
    name,
    company,
    email,
    phone,
    message
  );

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(
  quantity01,
  quantity02,
  quantity03,
  quantity04,
  quantity05,
  quantity06,
  quantity07,
  quantity08,
  quantity09,
  quantity10,
  quantity11,
  quantity12,
  quantity13,
  quantity14,
  quantity15,
  quantity16,
  quantity17,
  name,
  company,
  email,
  phone,
  message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    quantity01_RD12_1W_WW: quantity01,
    quantity02_RD12_1W_CW: quantity02,
    quantity03_RD12_RD_BK: quantity03,
    quantity04_RD12_SQ_BK: quantity04,
    quantity05_RD12_RD_WT: quantity05,
    quantity06_RD12_SQ_WT: quantity06,
    quantity07_RD12_RD_BN: quantity07,
    quantity08_RD12_SQ_BN: quantity08,
    quantity09_LS_15W_Driver: quantity09,
    quantity10_LS_30W_Driver: quantity10,
    quantity11_LS_60W_Driver: quantity11,
    quantity12_LS_24D_CV: quantity12,
    quantity13_LS45D_CV: quantity13,
    quantity14_LS60D_CV: quantity14,
    quantity15_WIRE18_2x10: quantity15,
    quantity16_WIRE18_2x25: quantity16,
    quantity17_WIRE18_2x50: quantity17,
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
