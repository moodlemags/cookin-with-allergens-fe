console.log('i am allliiiiiiiiiiiiiive');
// var url = 'http://localhost:3000';
var url = 'https://aqueous-river-80760.herokuapp.com'
//set up the page

var hidden = document.getElementById('email-yourself')
hidden.style.display = 'none';
// var hiddenMap = document.getElementById('mapHide')
// hiddenMap.style.displey = 'none';

var emailtext = "";
var emailListener = document.getElementById('emailtype');
emailListener.addEventListener('keydown', function(event){
      emailtext+= event.key;
      console.log(emailtext);

      var submitEmail = document.getElementById('emailsubmit')
      submitEmail.addEventListener('click', function(event){
              // event.preventDefault();
              console.log('clicked');
              var recipeSending = document.getElementById('recipe-ingredients').innerText
              submitEmail.setAttribute("href", "mailto:" + emailtext + "?body=The ingredients you need to buy are:  " + recipeSending )
              console.log(submitEmail);

      }) // end submit emails
    }) //end emailing self info

//submitButton for user recipe selections
document.getElementById('submitTest').addEventListener('click', function(event){
  console.log('clicked');

        //endpoint selectors based on user input
        var proAllergen = document.getElementById('search-endpoint').value;
        var recipeOrSearch = document.getElementById('querySelector').value
          console.log(proAllergen, recipeOrSearch);


      ///CITATION: IF ELSE IN AJAX http://stackoverflow.com/questions/14762775/ajax-if-condition
      ///A statament that modifies the allergen info for API call depending on the user input
          var params = {
            url: url + '/getrecipe',
            method: 'POST',
            dataType: 'json'
          };

          if (proAllergen == 'gluten-free') {
            params.data = {querySelector: recipeOrSearch, allergens: '&allowedAllergy[]=393^Gluten-Free'}
          } else if (proAllergen == 'dairy-free') {
            params.data= {querySelector: recipeOrSearch, allergens: '&allowedAllergy[]=396^Dairy-Free'}
          } else if (proAllergen == 'peanut-free'){
            params.data= {querySelector: recipeOrSearch, allergens: '&allowedAllergy[]=394^Peanut-Free'}
          } else if (proAllergen == 'all-free') {
            params.data= {querySelector: recipeOrSearch, allergens: '&allowedAllergy[]=394^Peanut-Free&allowedAllergy[]=396^Dairy-Free&allowedAllergy[]=393^Gluten-Free'}
          }  else {
            params.data = {querySelector: recipeOrSearch, allergens: ''}
          }

          $.ajax(params).done(function(response) {
            console.log("response", response);
                  // printing name
          var body = document.getElementById('recipe-result');
          var recipeTitle = response.matches[0].recipeName
          var appendTitle = document.getElementById('recipe-title').innerHTML = recipeTitle;
                  // printing image of recipe requested and ingredients list of receipe
          var imageTitle = document.getElementById('recipe-image');
          var printImage = response.matches[0].smallImageUrls[0];
          imageTitle.innerHTML = '<img class="image" src="' + printImage + '" width=150px height=150px/>';
          var ingredientsTitle = document.getElementById('recipe-ingredients');
          var printIngredients = response.matches[0].ingredients;
          ingredientsTitle.innerHTML = printIngredients

<<<<<<< HEAD



          // WITHIN CLICK LISTENER FOR RECIPE SEARCH: ADDING FAVORITE BUTTONS
              var favoriteRecipe = document.getElementById('favorite-recipe');
              favoriteRecipe.addEventListener('click', function(event){
                    console.log('clicked favorites');
                    console.log(recipeTitle);

                    var data = {
                      name: recipeTitle
                    }

                    $.ajax({
                      url: url + '/favorites',
                      method: 'POST',
                      data: data,
                      dataType: 'json'
                    }).done(function(response){
                      console.log('response', response);
                      //displaying email yourself again & emailing info
                        var hidden = document.getElementById('email-yourself')
                        hidden.style.display = 'block';
                    }); // end AJAX call

            // WITHIN CLICK LISTENER FOR RECIPE SEARCH: SEE ALL FAVORITES
                var seeAll = document.getElementById('see-favorite-recipes');
                seeAll.addEventListener('click', function(event){
                      console.log('clicked see all');
                      console.log(recipeTitle);

                      $.ajax({
                        url: url + '/favorites',
                        // method: 'POST',
                        // data: data,
                        dataType: 'json'
                      }).done(function(response){
                        console.log('response', response);

                          var faveRecipes = document.getElementById('see-recipes');
                          faveRecipes.innerHTML = '';
                          for (var i = 0; i < response.length; i++) {
                          var liText = response[i].name;
                          var theLi = document.createElement('li');
                          theLi.appendChild(document.createTextNode(liText));
                          faveRecipes.appendChild(theLi);
                                                      }


                            });
                          }); //end event listener


    //end fxns
              }); // end add click listener
          }); // end done function
        })//end event listener for click
=======
          }); // end done function
})//end event listener for click

//click fxn for add to favorites
var favoriteButton = document.getElementById('favorite-recipe');
console.log(favoriteButton);
favoriteButton.addEventListener('click', function(event) {
    event.preventDefault();
    var addingTitle = document.getElementById('recipe-title').value.toLowerCase();
    console.log(addingTitle);
    // var data = {
    //   name: newName
    // };
    // // post:
    // $.ajax({
    //   url: url + '/favorites/new',
    //   method: 'POST',
    //   data: data,
    //   dataType: 'json'
    // }).done(function(response) {
    //   console.log( "response: ", response );
    // }); // end AJAX
  }); // end Add Button listener
>>>>>>> gh-pages
