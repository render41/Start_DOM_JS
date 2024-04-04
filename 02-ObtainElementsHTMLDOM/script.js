function show() {
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

  const contacts = document.querySelectorAll(".contact-input");
  console.log(contacts);

  const contact01 = document.getElementsByName("contact01");
  console.log(contact01);

  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
