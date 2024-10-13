var firebaseConfig = {
  apiKey: "AIzaSyCVd3JlpPcn1ixkTZIomyOQSouHTJW16pU",
  authDomain: "ecoeats-app.firebaseapp.com",
  databaseURL: "https://ecoeats-app.firebaseio.com",
  projectId: "ecoeats-app",
  storageBucket: "ecoeats-app.appspot.com",
  messagingSenderId: "849720177846",
  appId: "1:849720177846:web:9ab51c05a8822a53f3e217",
  measurementId: "G-NEXR5PSHJ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
const docRef = firestore.doc("restaurantData/restaurantData");

const restaurantName = document.querySelector("#restaurantName");
const restaurantEmail = document.querySelector("#restaurantEmail");
const foodItems = document.querySelector("#foodItems");
const address = document.querySelector("#address");
const contactNumber = document.querySelector("#contactNumber");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function() {
    console.log("Submitting restaurant details to Firestore");

    // Saving restaurant name
    docRef.set({
      name: restaurantName.value
    }).then(function(){
      console.log("Restaurant name saved!");
    }).catch(function(error) {
      console.log("Error saving restaurant name: ", error);
    });

    // Saving restaurant email
    docRef.set({
      email: restaurantEmail.value
    }).then(function(){
      console.log("Restaurant email saved!");
    }).catch(function(error) {
      console.log("Error saving restaurant email: ", error);
    });

    // Saving available food items
    docRef.set({
      foodItems: foodItems.value
    }).then(function(){
      console.log("Food items saved!");
    }).catch(function(error) {
      console.log("Error saving food items: ", error);
    });

    // Saving address
    docRef.set({
      address: address.value
    }).then(function(){
      console.log("Address saved!");
    }).catch(function(error) {
      console.log("Error saving address: ", error);
    });

    // Saving contact number
    docRef.set({
      contactNumber: contactNumber.value
    }).then(function(){
      console.log("Contact number saved!");
    }).catch(function(error) {
      console.log("Error saving contact number: ", error);
    });
});
