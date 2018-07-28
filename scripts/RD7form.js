// RD10 ORDER FORM
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

// Listen for desktop form submit
document.getElementById("RD7_orderForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get orderform values
  var qty01 = getInputVal("qty01");
  var qty02 = getInputVal("qty02");
  var qty03 = getInputVal("qty03");
  var qty04 = getInputVal("qty04");
  var qty05 = getInputVal("qty05");
  var qty06 = getInputVal("qty06");
  var qty07 = getInputVal("qty07");
  var qty08 = getInputVal("qty08");
  var qty09 = getInputVal("qty09");
  var qty10 = getInputVal("qty10");
  var qty11 = getInputVal("qty11");
  var qty12 = getInputVal("qty12");
  var qty13 = getInputVal("qty13");
  var qty14 = getInputVal("qty14");
  var qty15 = getInputVal("qty15");
  var qty16 = getInputVal("qty16");
  var qty17 = getInputVal("qty17");
  var qty18 = getInputVal("qty18");
  var qty19 = getInputVal("qty19");
  var qty20 = getInputVal("qty20");
  var qty21 = getInputVal("qty21");
  var qty22 = getInputVal("qty22");
  var qty23 = getInputVal("qty23");
  var qty24 = getInputVal("qty24");
  var qty25 = getInputVal("qty25");

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
    qty06,
    qty07,
    qty08,
    qty09,
    qty10,
    qty11,
    qty12,
    qty13,
    qty14,
    qty15,
    qty16,
    qty17,
    qty18,
    qty19,
    qty20,
    qty21,
    qty22,
    qty23,
    qty24,
    qty25,
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
  document.getElementById("RD10_orderForm").reset();

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
  qty06,
  qty07,
  qty08,
  qty09,
  qty10,
  qty11,
  qty12,
  qty13,
  qty14,
  qty15,
  qty16,
  qty17,
  qty18,
  qty19,
  qty20,
  qty21,
  qty22,
  qty23,
  qty24,
  qty25,
  name,
  company,
  email,
  phone,
  message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    qty01_RD7_SM_BN_27K: qty01,
    qty02_RD7_SM_BN_3K: qty02,
    qty03_RD7_SM_BN_45K: qty03,
    qty04_RD7_SM_BN_6K: qty04,
    qty05_RD7_BK_27K: qty05,
    qty06_RD7_BK_3K: qty06,
    qty07_RD7_BK_45K: qty07,
    qty08_RD7_BK_6K: qty08,
    qty09_RD7_WH_27K: qty09,
    qty10_RD7_WH_3K: qty10,
    qty11_RD7_WH_45K: qty11,
    qty12_RD7_WH_6K: qty12,
    qty13_RD7_BN_27K: qty13,
    qty14_RD7_BN_3K: qty14,
    qty15_RD7_BN_45K: qty15,
    qty16_RD7_BN_6K: qty16,
    qty17_LS_15W_Driver: qty17,
    qty18_LS_30W_Driver: qty18,
    qty19_LS_60W_Driver: qty19,
    qty20_LS_24D_CV: qty20,
    qty21_LS45D_CV: qty21,
    qty22_LS60D_CV: qty22,
    qty23_WIRE18_2x10: qty23,
    qty24_WIRE18_2x25: qty24,
    qty25_WIRE18_2x50: qty25,
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
