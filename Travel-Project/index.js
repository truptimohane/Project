function ValidData() {
  var where = document.getElementById("where-to").value;
  if (where == "") {
    alert("Please Enter Details");
    document.getElementById("where-to").focus();
    return false;
  }
  var howMany = document.getElementById("how-many").value;
  if (howMany == "") {
    alert("please Enter Details Properly");
    document.getElementById("how-many").focus();
    return false;
  }
  var arrivals = document.getElementById("arrivals").value;
  if (arrivals == "") {
    alert(" Entre Your Arriving Date!");
    document.getElementById("arrivals").focus();
    return false;
  }
  var leaving = document.getElementById("leaving").value;
  if (leaving == "") {
    alert(" Entre Your Leaving Date!");
    document.getElementById("leaving").focus();
    return false;
  }
  var Details = document.getElementById("details").value;
  if (Details == "") {
    alert("please Enter Name & Details Properly");
    document.getElementById("details").focus();
    return false;
  }
}
