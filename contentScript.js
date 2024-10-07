// Function to remove problem tags
function removeTags() {
  const allDivs = document.querySelectorAll(".tag-box"); // Select all div elements
  console.log(allDivs);
  allDivs.forEach((div) => {
    div.remove(); // Remove the div
  });
}

removeTags();
