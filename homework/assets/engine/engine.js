
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB7SnTntSTgUMfgHtrZXMnXWgTofrmtb9U",
  authDomain: "first-ucf-project.firebaseapp.com",
  databaseURL: "https://first-ucf-project.firebaseio.com",
  projectId: "first-ucf-project",
  storageBucket: "first-ucf-project.appspot.com",
  messagingSenderId: "487510783508"
};
firebase.initializeApp(config);
var database = firebase.database();
console.log(firebase);

var logic=0;
  //getting the user name
$("#submit1").on("click", function(event) {   

    var user1 = $("#name1").val().trim();

  //printing the name to the DOM
  $("#username1").text(user1);    
    

  //Remove the Enter you name Button
  $("#beremoved").remove();

  // send the data to firebase
// create a reference
var ref = database.ref('user/name');
var userName1 = user1;
 //push the data
 ref.push(userName1);

});


  //get the user choice if ROCK
$("#b1").on("click", function () { 
    
    //remove choices
    $("#removechoice").remove();
    //dysplay user choice
    $("#displaychoice").text("Rock");
    logic = logic +1;
    var ref = database.ref('user/scores');
    
    //push the data
    ref.push(logic);
    
    console.log(logic);
});

  //get the user choice if Paper
$("#b2").on("click", function () { 
    
    //remove choices
    $("#removechoice").remove();
    //dysplay user choice
    $("#displaychoice").text("Paper");
    logic = logic +2; 
    
    console.log(logic);
});

  //get the user choice if Scissor
  $("#b3").on("click", function () { 
    
    //remove choices
    $("#removechoice").remove();
    //dysplay user choice
    $("#displaychoice").text("Paper");
    logic = logic +3; 
    
    console.log(logic);
});
    





  
    

    //creating a container called scores
    

    //creating the variables

    

    