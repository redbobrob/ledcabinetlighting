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
document.getElementById("m_RD10_orderForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get orderform values
  var m_qty01 = getInputVal("m_qty01");
  var m_qty02 = getInputVal("m_qty02");
  var m_qty03 = getInputVal("m_qty03");
  var m_qty04 = getInputVal("m_qty04");
  var m_qty05 = getInputVal("m_qty05");
  var m_qty06 = getInputVal("m_qty06");
  var m_qty07 = getInputVal("m_qty07");
  var m_qty08 = getInputVal("m_qty08");
  var m_qty09 = getInputVal("m_qty09");
  var m_qty10 = getInputVal("m_qty10");
  var m_qty11 = getInputVal("m_qty11");
  var m_qty12 = getInputVal("m_qty12");
  var m_qty13 = getInputVal("m_qty13");
  var m_qty14 = getInputVal("m_qty14");
  var m_qty15 = getInputVal("m_qty15");
  var m_qty16 = getInputVal("m_qty16");
  var m_qty17 = getInputVal("m_qty17");
  // Get message values
  var m_name = getInputVal("name");
  var m_company = getInputVal("company");
  var m_email = getInputVal("email");
  var m_phone = getInputVal("phone");
  var m_message = getInputVal("message");

  // Save message
  saveMessage(
    m_qty01,
    m_qty02,
    m_qty03,
    m_qty04,
    m_qty05,
    m_qty06,
    m_qty07,
    m_qty08,
    m_qty09,
    m_qty10,
    m_qty11,
    m_qty12,
    m_qty13,
    m_qty14,
    m_qty15,
    m_qty16,
    m_qty17,
    m_name,
    m_company,
    m_email,
    m_phone,
    m_message
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
  m_qty01,
  m_qty02,
  m_qty03,
  m_qty04,
  m_qty05,
  m_qty06,
  m_qty07,
  m_qty08,
  m_qty09,
  m_qty10,
  m_qty11,
  m_qty12,
  m_qty13,
  m_qty14,
  m_qty15,
  m_qty16,
  m_qty17,
  m_name,
  m_company,
  m_email,
  m_phone,
  m_message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    m_qty01_RD10_4W_WW: m_qty01,
    m_qty02_RD10_4W_CW: m_qty02,
    m_qty03_RD10_TR_BK: m_qty03,
    m_qty04_RD10_SM_BK: m_qty04,
    m_qty05_RD10_TR_WT: m_qty05,
    m_qty06_RD10_SM_WT: m_qty06,
    m_qty07_RD10_TR_BN: m_qty07,
    m_qty08_RD10_SM_BN: m_qty08,
    m_qty09_LS_15W_Driver: m_qty09,
    m_qty10_LS_30W_Driver: m_qty10,
    m_qty11_LS_60W_Driver: m_qty11,
    m_qty12_LS_24D_CV: m_qty12,
    m_qty13_LS45D_CV: m_qty13,
    m_qty14_LS60D_CV: m_qty14,
    m_qty15_WIRE18_2x10: m_qty15,
    m_qty16_WIRE18_2x25: m_qty16,
    m_qty17_WIRE18_2x50: m_qty17,
    name: m_name,
    company: m_company,
    email: m_email,
    phone: m_phone,
    message: m_message
  });
}
