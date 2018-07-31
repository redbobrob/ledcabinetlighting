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
document.getElementById("LL50_orderForm").addEventListener("submit", submitForm);

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
  var qty17 = getInputVal("qty18");
  var qty17 = getInputVal("qty19");
  var qty17 = getInputVal("qty20");
  var qty17 = getInputVal("qty21");

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
  name,
  company,
  email,
  phone,
  message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    LS-LL50-6-3K: qty01,
    LS-LL50-6-4K: qty02,
    LS-LL50-12-3K: qty03,
    LS-LL50-12-4K: qty04,
    LS-LL50-40-3K: qty05,
    LS-LL50-40-4K: qty06,
    LS-LL50-IP: qty07,
    LS-LL50-TS: qty08,
    LS-LL50-MC: qty09,
    LS-LL50-CC: qty10,
    LS-LL50-JC: qty11,
    LS-LL50-AC: qty12,
    LS-24V-60W-CV: qty13,
    LS-24V-120W-CV: qty14,
    LS-24V-150W-O-Driver: qty15,
    LS-240W-24V-O-Driver: qty16,
    LS-60D-CV: qty17,
    LS-24V-96W-Dim-CVE: qty18,
    WIRE18_2x10: qty19,
    WIRE18_2x25: qty20,
    WIRE18_2x50: qty21,
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
