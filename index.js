console.log("This is a CLI-Stock Management Application developer by Yashdeep Singh Sidhu");
console.log(`Github : @majhailsid | LinkedIn : @majhail | Twitter : Yxshdeep_singh | Email : yashdeep280905@gmail.com\n`)

// let operateVal = prompt("Select what operation you want to operate : \n 1. Add new Item \n 2. Delete Existing Item \n 3. Update Existing Item \n 4. Exit \n");

let productDataBase = {
  productId: [1,2,3,4,5],
  productName: ["Product1","Product2","Product3","Product4","Product5"],
  productPrice: [55,53,66,22,67],
  productPresentQuantity: [5,2,7,3,9],
  productDetails: ["Product1","Product2","Product3","Product4","Product5"],
  //------------------------------------------------------
  showProductDetailsById: function(idNumber) {
    if(this.productId.length == 0){
      console.log('There is no product to show! Please Add one!')
    }
    else{ let id = Number.parseInt(idNumber);
    this.productId.forEach((item) => {
      if (this.productId[item] === id) {
        console.log(`\n\tDetails of ${this.productName[item]}\n\n\tProduct Id : ${id}\n\tProduct Name : ${this.productName[item]}\n\tPrice : ${this.productPrice[item]}\n\tQuantity Present(Current) : ${this.productPresentQuantity[item]}\n\tDetails : ${this.productDetails[item]}\n`)
      }
    })}
  },
  showProductDetailsByName : function(pName){
    if(this.productId.length == 0){
      console.log('There is no product to show! Please Add one!')
    }else{let pName_string = pName.toString();
    this.productId.forEach((name)=>{
      if(this.productName[name] === pName_string){
        console.log(`\n\tDetails of ${this.productName[name]}\n\n\tProduct Id : ${name}\n\tProduct Name : ${this.productName[name]}\n\tPrice : ${this.productPrice[name]}\n\tQuantity Present(Current) : ${this.productPresentQuantity[name]}\n\tDetails : ${this.productDetails[name]}\n`)
      }
    })}
  },
  addNewProduct : function(){
   let storeNewProductName = prompt("\nName :");
    function checkName(){
      let statusN = productDataBase.productName.indexOf(storeNewProductName);
      if(statusN >= 0){
        console.log('\n\tThe item you are trying to add, already exists!!')
        return true;
      }else{
        if(statusN < 0){
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
  }
};

productDataBase.addNewProduct()
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