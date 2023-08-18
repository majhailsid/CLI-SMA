console.log("This is a CLI-Stock Management Application developer by Yashdeep Singh Sidhu");
console.log(`Github : @majhailsid | LinkedIn : @majhail | Twitter : Yxshdeep_singh | Email : yashdeep280905@gmail.com \n`)

let operateVal = prompt("Select what operation you want to operate : \n 1. Add new Item \n 2. Delete Existing Item \n 3. Update Existing Item \n 4. Exit \n");

switch (operateVal) {
  case "1":
    console.log("ADD NEW ITEM :\n");
    break;
  case "2":
    console.log("DELETE EXISTING ITEM :\n");
    break;
  case "3":
    console.log("UPDATE EXISTING ITEM :\n");
    break;
  case "4":
    console.log("EXIT");
    break;
}
