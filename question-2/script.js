document.addEventListener("DOMContentLoaded", function () {
  let dateDropdown = document.getElementById("graduation-year");

  if (dateDropdown) {
    let latestYear = 2030;
    let earliestYear = 2020;
    while (latestYear >= earliestYear) {
      let dateOption = document.createElement("option");
      dateOption.text = latestYear;
      dateOption.value = latestYear;
      dateDropdown.add(dateOption);
      latestYear -= 1;
    }
  } else {
    console.error("Element with id 'graduation-year' not found.");
  }
});
