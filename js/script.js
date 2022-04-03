function checkValidation() {
  var title = document.getElementById("title").value.trim();
  var price = document.getElementById("price").value.trim();
  var dateOfLaunch = document.getElementById("dateOfLaunch").value;
  var inStock = document.getElementsByName("inStock");
  var category= document.getElementById("category").value;

  // validation check for title-name
  if (title == "") {
      alert("Title is required");
      return false;
  }
  if (!(title.length > 1 && title.length < 66)) {
      alert("Title should have 2 to 65 characters.");
      return false;
  }

  // validation check for price
  if (price == "") {
      alert("Price is required.");
      return false;
  }
  if (!price.match(/^\d+$/)) {
      alert("Price has to be a number!");
      return false;
  }

  // validation check for inStock
  isChecked = false;
  for (let i = 0; i < inStock.length; i++) {
      if (inStock[i].checked == true) {
          isChecked = true;
      }
  }
  if (isChecked == false) {
      alert("Active status required");
      return false;
  }

  // validation check for date-of-launch
  if (dateOfLaunch == "") {
      alert("Date of Launch is required");
      return false;
  }

  // validation check for select category
  if (category == "Select") {
    alert("Please select one category");
    return false;
  }


  else { location.href = "edit-menu-item-status.html"; } //successfully saved message
  return false;
}
