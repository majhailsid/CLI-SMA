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
    }else{ let id = Number.parseInt(idNumber);
    for (let item=0; item < this.productId.length; item++) {
      if (this.productId[item] === id) {
        console.log(`\n\tDetails of ${this.productName[item]}\n\n\tProduct Id : ${id}\n\tProduct Name : ${this.productName[item]}\n\tPrice : ${this.productPrice[item]}\n\tQuantity Present(Current) : ${this.productPresentQuantity[item]}\n\tDetails : ${this.productDetails[item]}\n`)
      }
    }}
  },
  showProductDetailsByName : function(pName){
    if(this.productId.length == 0){
      console.log('There is no product to show! Please Add one!')
    }else{let pName_string = pName.toString();
    for (let name=0; name < this.productId.length; name++){
      if(this.productName[name] === pName_string){
        console.log(`\n\tDetails of ${this.productName[name]}\n\n\tProduct Id : ${name}\n\tProduct Name : ${this.productName[name]}\n\tPrice : ${this.productPrice[name]}\n\tQuantity Present(Current) : ${this.productPresentQuantity[name]}\n\tDetails : ${this.productDetails[name]}\n`)
      }
    }}
  },
  addNewProduct : function(){
    let storeNewProductName = prompt("\t\nProduct Name :");
    let storeNewProductPrice = Number.parseInt(prompt("\tPrice : "));
    let storeNewProductPresentQuantity = Number.parseInt(prompt("\tPresent Quantity(Current) : "));
    let storeProductDetails = prompt("\tDetails : ");
  }
}

productDataBase.addNewProduct();
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