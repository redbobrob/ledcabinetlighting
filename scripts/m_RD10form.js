// Listen for mobile form submit
document.getElementById("m_RD10_orderForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

// Get orderform values
var m_qty01 = getInputVal("qty01");
var m_qty02 = getInputVal("qty02");
var m_qty03 = getInputVal("qty03");
var m_qty04 = getInputVal("qty04");
var m_qty05 = getInputVal("qty05");
var m_qty06 = getInputVal("qty06");
var m_qty07 = getInputVal("qty07");
var m_qty08 = getInputVal("qty08");
var m_qty09 = getInputVal("qty09");
var m_qty10 = getInputVal("qty10");
var m_qty11 = getInputVal("qty11");
var m_qty12 = getInputVal("qty12");
var m_qty13 = getInputVal("qty13");
var m_qty14 = getInputVal("qty14");
var m_qty15 = getInputVal("qty15");
var m_qty16 = getInputVal("qty16");
var m_qty17 = getInputVal("qty17");
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

// Clear mobile form
document.getElementById("RD10_orderForm_m").reset();

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
  qty01_RD10_4W_WW: m_qty01,
  qty02_RD10_4W_CW: m_qty02,
  qty03_RD10_TR_BK: m_qty03,
  qty04_RD10_SM_BK: m_qty04,
  qty05_RD10_TR_WT: m_qty05,
  qty06_RD10_SM_WT: m_qty06,
  qty07_RD10_TR_BN: m_qty07,
  qty08_RD10_SM_BN: m_qty08,
  qty09_LS_15W_Driver: m_qty09,
  qty10_LS_30W_Driver: m_qty10,
  qty11_LS_60W_Driver: m_qty11,
  qty12_LS_24D_CV: m_qty12,
  qty13_LS45D_CV: m_qty13,
  qty14_LS60D_CV: m_qty14,
  qty15_WIRE18_2x10: m_qty15,
  qty16_WIRE18_2x25: m_qty16,
  qty17_WIRE18_2x50: m_qty17,
  name: m_name,
  company: m_company,
  email: m_email,
  phone: m_phone,
  message: m_message
});
}
