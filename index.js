console.log("This is a CLI-Stock Management Application developer by Yashdeep Singh Sidhu");
console.log(`Github : @majhailsid | LinkedIn : @majhail | Twitter : Yxshdeep_singh | Email : yashdeep280905@gmail.com\n`)

// let operateVal = prompt("Select what operation you want to operate : \n 1. Add new Item \n 2. Delete Existing Item \n 3. Update Existing Item \n 4. Exit \n");

let productDataBase = {
  productId: [1, 2, 3, 4, 5],
  productName: ["Product1", "Product2", "Product3", "Product4", "Product5"],
  productPrice: [55, 53, 66, 22, 67],
  productPresentQuantity: [5, 2, 7, 3, 9],
  productDetails: ["Product1", "Product2", "Product3", "Product4", "Product5"],
  //------------------------------------------------------
  showProductDetailsById: function(idNumber) {
    if (this.productId.length == 0) {
      console.log('There is no product to show! Please Add one!')
    } else {
      let id = Number.parseInt(idNumber);
      this.productId.forEach((item) => {
        if (this.productId[item] === id) {
          console.log(`\n\tDetails of ${this.productName[item]}\n\n\tProduct Id : ${id}\n\tProduct Name : ${this.productName[item]}\n\tPrice : ${this.productPrice[item]}\n\tQuantity Present(Current) : ${this.productPresentQuantity[item]}\n\tDetails : ${this.productDetails[item]}\n`);
        };
      });
    }
  },
  showProductDetailsByName: function(pName) {
    if (this.productId.length == 0) {
      console.log('There is no product to show! Please Add one!')
    } else {
      let pName_string = pName.toString();
      this.productId.forEach((name) => {
        if (this.productName[name] === pName_string) {
          console.log(`\n\tDetails of ${this.productName[name]}\n\n\tProduct Id : ${name}\n\tProduct Name : ${this.productName[name]}\n\tPrice : ${this.productPrice[name]}\n\tQuantity Present(Current) : ${this.productPresentQuantity[name]}\n\tDetails : ${this.productDetails[name]}\n`)
        }
      })
    }
  },
  addNewProduct: function() {
    let storeNewProductName = prompt("\nName :");

    function checkName() {
      let statusN = productDataBase.productName.indexOf(storeNewProductName);
      if (statusN >= 0) {
        console.log('\n\tThe item you are trying to add, already exists!!')
        return true;
      } else {
        if (statusN < 0) {
          let baseId = productDataBase.productId.length;
          let storeProductPrice = Number.parseInt(prompt("\nPrice : "))
          let storeProductQuantity = Number.parseInt(prompt("\nPresent Quantity (Current) : "))
          let storeProductDetails = prompt("\nDescription :")
          let storeProductId = baseId + 1;
          productDataBase.productName.push(storeNewProductName);
          productDataBase.productPrice.push(storeProductPrice);
          productDataBase.productPresentQuantity.push(storeProductQuantity);
          productDataBase.productDetails.push(storeProductDetails);
          productDataBase.productId.push(storeProductId);

          console.log("\n\n")
          console.log(`Added new product to the DataBase :\n\n\tID : ${storeProductId}\n\tName : ${storeNewProductName}\n\tPrice : ${storeProductPrice}\n\tPresent Quantity (Current) : ${storeProductQuantity}\n\tDescription : ${storeProductDetails}\n\n`)

          console.log(productDataBase.productId);
          console.log(productDataBase.productName);
          console.log(productDataBase.productPrice);
          console.log(productDataBase.productPresentQuantity);
          console.log(productDataBase.productDetails);
          return false;
        }
      }
    };
    checkName();
  },
  deleteProductById: function() {
    if (this.productId.length == 0) {
      console.log('There is no product to show! Please Add one!')
    } else {
      let index = Number.parseInt(prompt("\n\tEnter Id of Product to deleted : "))
      let storeIndex = productDataBase.productId.indexOf(index);
      let confirmConsent = () => {
        let consent = prompt(`\nAre you sure you want to delete product from id ${index} (Y/N) (Default YES) : `)
        if (consent === "Y" || consent === "y") {
          let storeDelName = productDataBase.productName[storeIndex];
          let storeDelPrice = productDataBase.productPrice[storeIndex];
          let storeDelQuantity = productDataBase.productPresentQuantity[storeIndex];
          let storeDelDetails = productDataBase.productDetails[storeIndex];

          productDataBase.productId.splice(storeIndex, 1);
          productDataBase.productName.splice(storeIndex, 1);
          productDataBase.productPrice.splice(storeIndex, 1);
          productDataBase.productPresentQuantity.splice(storeIndex, 1);
          productDataBase.productDetails.splice(storeIndex, 1);

          console.log("\n\n")
          console.log(`Deleted a product from DataBase :\n\n\tID : ${index}\n\tName : ${storeDelName}\n\tPrice : ${storeDelPrice}\n\tPresent Quantity (Current) : ${storeDelQuantity}\n\tDescription : ${storeDelDetails}\n\n`)

          console.log("\n\n\tDeletion Successfull !!")
        } else {
          if (consent == "N" || consent == "n") {
            console.log(`Deletion of product with Id ${index} cancelled !\nExiting...`)
          } else {
            console.log("Please select a valid option, either Y(YES) or N(NO)!")
            confirmConsent();
          }
        }
      }
      confirmConsent();
    }
  },
  deleteProductByName: function() {
    if (this.productId.length == 0) {
      console.log('There is no product to show! Please Add one!')
    } else {
      let storeNameInput = prompt("\n\tEnter Name of the Product to deleted : ");

      function checkProductExistence() {
        let statusN = productDataBase.productName.indexOf(storeNameInput);
        if (statusN < 0) {
          console.log('\n\tThe item you are trying to delete, doesn\'t exists!!')
          return true;
        } else {
          let confirmConsent = () => {
            let consent = prompt(`\nAre you sure you want to delete ${storeNameInput} (Y/N) (Default YES) : `)
            if (consent === "Y" || consent === "y") {
              let storeDelName = productDataBase.productName[statusN];
              let storeDelPrice = productDataBase.productPrice[statusN];
              let storeDelQuantity = productDataBase.productPresentQuantity[statusN];
              let storeDelDetails = productDataBase.productDetails[statusN];

              productDataBase.productId.splice(statusN, 1);
              productDataBase.productName.splice(statusN, 1);
              productDataBase.productPrice.splice(statusN, 1);
              productDataBase.productPresentQuantity.splice(statusN, 1);
              productDataBase.productDetails.splice(statusN, 1);

              console.log("\n\n")
              console.log(`Deleted a product from DataBase :\n\n\tID : ${statusN}\n\tName : ${storeDelName}\n\tPrice : ${storeDelPrice}\n\tPresent Quantity (Current) : ${storeDelQuantity}\n\tDescription : ${storeDelDetails}\n\n`)

              console.log("\n\n\tDeletion Successfull !!")
            } else {
              if (consent == "N" || consent == "n") {
                console.log(`Deletion of ${storeNameInput} cancelled !\nExiting...`)
              } else {
                console.log("Please select a valid option, either Y(YES) or N(NO)!")
                confirmConsent();
              }
            }
          }
          confirmConsent();
        }
      }
      checkProductExistence();
    }
  },
  updateProductById: function() {
    if (this.productId.length == 0) {
      console.log('There is no product to show! Please Add one!')
    } else {
      let index = Number.parseInt(prompt("\n\tEnter Id of Product to Update : "))
      let storeIndex = productDataBase.productId.indexOf(index);

      let storeUpdateName = productDataBase.productName[storeIndex];
      let storeUpdatePrice = productDataBase.productPrice[storeIndex];
      let storeUpdateQuantity = productDataBase.productPresentQuantity[storeIndex];
      let storeUpdateDetails = productDataBase.productDetails[storeIndex];

      console.log("\n\n\tDetails of product before update :\n");
      console.log(`\tName : ${storeUpdateName}`);
      console.log(`\tPrice : ${storeUpdatePrice}`);
      console.log(`\tQuantity : ${storeUpdateQuantity}`);
      console.log(`\tDetails : ${storeUpdateDetails}\n`);

      function updateDetails() {
        let promptUpdateName = prompt("Name : ")
        let promptUpdatePrice = Number.parseInt(prompt("Price : "))
        let promptUpdateQuantity = prompt("Quantity : ")
        let promptUpdateDetails = prompt("Description : ")

        function setUpdateVal() {
          productDataBase.productName[index] = promptUpdateName;
          productDataBase.productPrice[index] = promptUpdatePrice;
          productDataBase.productPresentQuantity[index] = promptUpdateQuantity;
          productDataBase.productDetails[index] = promptUpdateDetails;

          console.log("\n\n\tDetails of product after update :\n");
          console.log(`\tName : ${promptUpdateName}`);
          console.log(`\tPrice : ${promptUpdatePrice}`);
          console.log(`\tQuantity : ${promptUpdateQuantity}`);
          console.log(`\tDetails : ${promptUpdateDetails}\n`);
        }
        setUpdateVal();
      }
      updateDetails();
    };
  },
  updateProductByName: function() {
    if (this.productId.length == 0) {
      console.log('There is no product to show! Please Add one!')
    } else {
      let storeNameInput = prompt("\n\tEnter Name of the Product to update : ");

      function checkProductExistence() {
        let storeIndex = productDataBase.productName.indexOf(storeNameInput);
        if (storeIndex < 0) {
          console.log('\n\tThe item you are trying to delete, doesn\'t exists!!')
          return true;
        } else {
          let storeUpdateName = productDataBase.productName[storeIndex];
          let storeUpdatePrice = productDataBase.productPrice[storeIndex];
          let storeUpdateQuantity = productDataBase.productPresentQuantity[storeIndex];
          let storeUpdateDetails = productDataBase.productDetails[storeIndex];

          console.log("\n\n\tDetails of product before update :\n");
          console.log(`\tName : ${storeUpdateName}`);
          console.log(`\tPrice : ${storeUpdatePrice}`);
          console.log(`\tQuantity : ${storeUpdateQuantity}`);
          console.log(`\tDetails : ${storeUpdateDetails}\n`);

          function updateDetails() {
            let promptUpdateName = prompt("Name : ")
            let promptUpdatePrice = Number.parseInt(prompt("Price : "))
            let promptUpdateQuantity = prompt("Quantity : ")
            let promptUpdateDetails = prompt("Description : ")

            function setUpdateVal() {
              productDataBase.productName[storeIndex] = promptUpdateName;
              productDataBase.productPrice[storeIndex] = promptUpdatePrice;
              productDataBase.productPresentQuantity[storeIndex] = promptUpdateQuantity;
              productDataBase.productDetails[storeIndex] = promptUpdateDetails;

              console.log("\n\n\tDetails of product after update :\n");
              console.log(`\tIndex : ${storeIndex + 1} `)
              console.log(`\tName : ${promptUpdateName}`);
              console.log(`\tPrice : ${promptUpdatePrice}`);
              console.log(`\tQuantity : ${promptUpdateQuantity}`);
              console.log(`\tDetails : ${promptUpdateDetails}\n`);
            }
            setUpdateVal();
          }
          updateDetails();
        }
      }
      checkProductExistence();
    }
  }
}
productDataBase.updateProductByName();
// if(operateVal <= 0 || operateVal > 4){
//   console.log("Please select a valid option :\n")
// }else{
//   if(operateVal == 1){
//     console.log("ADD NEW ITEM :\n");
//   }else{
//     if(operateVal == 2){
//       console.log("DELETE EXISTING ITEM :\n");
//     }else{
//       if(operateVal == 3){
//         console.log("UPDATE EXISTING ITEM :\n");
//       }
//     } 
//   }
//   console.log("Exiting...")
// }