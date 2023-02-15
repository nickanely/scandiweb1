
  const typeSwitcher = document.getElementById("productType");
  const attributeInputContainer = document.getElementById("attribute-input-container");
  
  typeSwitcher.addEventListener("change", () => {
    const selectedOption = typeSwitcher.options[typeSwitcher.selectedIndex].value;
    
    if (selectedOption === "DVD") {
      attributeInputContainer.innerHTML = `
      <br>
        <label for="attribute-input">Size (in MB):</label>
        <input placeholder="eg. 700 MB" type="number" min="0" id="attribute-input" required><br>
        <p> Please provide the disc size in MB </p>
      `;
    } else if (selectedOption === "Book") {
      attributeInputContainer.innerHTML = `
      <br>
        <label for="attribute-input">Weight (in Kg):</label>
        <input placeholder="eg. 2 KG" type="number" min="0" id="attribute-input" required><br>
        <p> Please provide weight in KG </p>
      `;
    } else if (selectedOption === "Furniture") {
      attributeInputContainer.innerHTML = `
        
        <br>
        <label for="attribute-input">Height (CM): </label>
        <input placeholder="eg. 24 CM" type="number" min="0" id="attribute-input" required><br><br>

        <label for="attribute-input">Width (CM):</label>
        <input placeholder="eg. 45 CM" type="number" min="0" id="attribute-input" required><br><br>

        <label for="attribute-input">Length (CM):</label>
        <input placeholder="eg. 15 CM" type="number" min="0" id="attribute-input" required><br><br>

        <p> Provide furniture's dimensions HxWxL format </p>
      `;
    }else if (selectedOption === "typeSwitcher"){
      attributeInputContainer.innerHTML = `
      <br>
      <p>Provide a Product Type </p>
    `;
    }
  });

  
  document.getElementById("cancelButton").onclick = function () {
    location.href = "/ScanDiWeb/product_list.html";
};

