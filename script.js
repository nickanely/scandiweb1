
// Function to display all products in the product list
function displayProducts() {
  productList.innerHTML = '';
  products.forEach(product => {
    const productItem = createProductItem(product);
    productList.appendChild(productItem);
  });
}

// Function to handle click event on the "Add" button
function handleAddProductButtonClick() {
  // Navigate to the "Product Add" page
  window.location.href = "add_product.html";
}

// Function to handle click event on the "Mass Delete" button
function handleDeleteButtonClick() {
  const selectedProducts = document.querySelectorAll(".delete-checkbox:checked");
  selectedProducts.forEach(product => product.parentElement.remove());
}

// Attach event listeners to the buttons
const addProductButton = document.getElementById('add-product-btn');
addProductButton.addEventListener('click', handleAddProductButtonClick);

const deleteProductButton = document.getElementById('delete-product-btn');
deleteProductButton.addEventListener('click', handleDeleteButtonClick);

// Display the initial list of products
displayProducts();




// function handleCheckboxClick(event) {
//   event.target.parentElement.classList.toggle("selected");
// }

// function handleDeleteButtonClick() {
//   const selectedProducts = document.querySelectorAll(".selected");
//   selectedProducts.forEach(product => product.remove());
// }
// function handleAddProductButtonClick() {
//   window.location.href = "add_product.html";
// }


  // // Code for product type switcher
  // $(document).ready(function() {
  //   $("#productType").change(function() {
  //     var selectedType = $(this).val();
  //     switch (selectedType) {
  //       case "DVD":
  //         $("#size").show();
  //         $("#weight").hide();
  //         $("#height").hide();
  //         $("#width").hide();
  //         $("#length").hide();
  //         break;
  //       case "Book":
  //         $("#size").hide();
  //         $("#weight").show();
  //         $("#height").hide();
  //         $("#width").hide();
  //         $("#length").hide();
  //         break;
  //       case "Furniture":
  //         $("#size").hide();
  //         $("#weight").hide();
  //         $("#height").show();
  //         $("#width").show();
  //         $("#length").show();
  //         break;
  //       default:
  //         break;
  //     }
  //   });

  //   // Code for product add form validation and submission
  //   $("#product_form").submit(function(event) {
  //     event.preventDefault();
  //     var sku = $("#sku").val();
  //     var name = $("#name").val();
  //     var price = $("#price").val();
  //     var type = $("#productType").val();
  //     var size = $("#size").val();
  //     var weight = $("#weight").val();
  //     var height = $("#height").val();
  //     var width = $("#width").val();
  //     var length = $("#length").val();
  //     var isValid = true;

  //     if (!sku || !name || !price) {
  //       $("#notification").text("Please, submit required data.");
  //       isValid = false;
  //     }
  //     if (type === "DVD" && !size) {
  //       $("#notification").text("Please, provide size.");
  //       isValid = false;
  //     }
  //     if (type === "Book" && !weight) {
  //       $("#notification").text("Please, provide weight.");
  //       isValid = false;
  //     }
  //     if (type === "Furniture" && (!height || !width || !length)) {
  //       $("#notification").text("Please, provide dimensions.");
  //       isValid = false;
  //     }
  //     if (isValid) {
  //       // Code to submit the form
  //       // ...
  //       // Redirect to product list page
  //       window.location.href = "/product-list";
  //     }
  //   });
  // });