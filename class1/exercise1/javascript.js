function calculate() {
  var age = 26;
  var oldAge = 96;
  var perDay = 2;

  var days = (oldAge - age) * 365;
  var total = perDay * days;
  alert("You will need " + total + " to last you until the ripe old age of " + oldAge);
}

function favoriteThings() {
  var myFavoriteThings = ["comedy", "cereal", "pancakes"];
  var alertString = "My Favorite Things are: ";
  for(var i=0; i < myFavoriteThings.length; i++){
    alertString += myFavoriteThings[i];
    if(i !== myFavoriteThings.length - 1) {
      alertString += ", ";
    }
    if(i === myFavoriteThings.length - 2) {
      alertString += "and ";
    }
  }
  alert(alertString);
}

function myFriends() {
  var friends = [
    {name: "TJ",
      hairColor: "idk gray or whatever"},
    {name: "Bill",
      hairColor: "bald"}
    ]
    var list = "<ul>"; //create a string variable for HTML content that we can build on iteratively
    for(var i=0;i<friends.length;i++) { //loop over each of the friends objects in the array
      var friend = friends[i];
      list += "<li>" + friend.name + "</li>"; //build the current list item
    }
    list += "</ul>"; //close the html list
    newDiv = $("<div></div>"); //use jquery to create a new div
    newDiv.html(list); //add our list content as the inner html of the div
    $('body').append(newDiv); //add our div (with content) to the page
}

function readyFunction(){
   $(".js-click").on("click",showAlert);
}
function showAlert(){
  alert("hi");
}

$(document).ready(readyFunction);
