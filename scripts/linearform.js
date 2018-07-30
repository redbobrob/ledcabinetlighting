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
document.getElementById("linear_orderForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get orderform values
  var qty01 = getInputVal("qty01");
  var qty02 = getInputVal("qty02");
  var qty03 = getInputVal("qty03");
  var qty04 = getInputVal("qty04");
  var qty05 = getInputVal("qty05");
  var qty09 = getInputVal("qty09");
  var qty10 = getInputVal("qty10");
  var qty11 = getInputVal("qty11");
  var qty12 = getInputVal("qty12");
  var qty13 = getInputVal("qty13");
  var qty14 = getInputVal("qty14");
  var qty15 = getInputVal("qty15");
  var qty16 = getInputVal("qty16");
  var qty17 = getInputVal("qty17");
  // Get message values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  saveMessage(
    qty01,
    qty02,
    qty03,
    qty04,
    qty05,
    qty09,
    qty10,
    qty11,
    qty12,
    qty13,
    qty14,
    qty15,
    qty16,
    qty17,
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
  document.getElementById("linear_orderForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(
  qty01,
  qty02,
  qty03,
  qty04,
  qty05,
  qty09,
  qty10,
  qty11,
  qty12,
  qty13,
  qty14,
  qty15,
  qty16,
  qty17,
  name,
  company,
  email,
  phone,
  message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    LL3_WW: qty01,
    LL3_CW: qty02,
    LL3_SWC: qty03,
    LL3_PF: qty04,
    LL3_JC: qty05,
    LS_15W_Driver: qty09,
    LS_30W_Driver: qty10,
    LS_60W_Driver: qty11,
    LS_24D_CV: qty12,
    LS45D_CV: qty13,
    LS60D_CV: qty14,
    WIRE18_2x10: qty15,
    WIRE18_2x25: qty16,
    WIRE18_2x50: qty17,
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
