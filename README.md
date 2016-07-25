

# Welcome to Allergy Helper!
****

### It seems that everyone these days has allergies to some food or another, which makes it increasingly harder to easily find recipes when having people over. The goal of allergy helper is to easily help hosts find quality recipes and not have to filter through slews of recipes that aren't suitable for the guests!

## Primary MVP List:
| Characteristic| Level of Completion           |
| ------------- |:-------------:|
| User can search for GF/non-dairy recipes      | Yes |
| Show local health food stores     | 1/2 - map integrated but Mapbox <br>doesn't integrate search so <br> can see local cafés at the moment      |
| Mail grocery list to self | Yes     |

### Secondary MVP List:
| Characteristic| Level of Completion            |
| ------------- |:-------------:|
| Additional allergens  | Yes |
| Multiple allergens  | Yes |
| Mongo database for storing favorite recipes | Yes     |
| Mongo retrieval of all stored recipes | Yes     |


### Technologies used:
#### HTML, CSS, JS, JQuery, Ajax, Mongo, Node.js, Heroku

***
###  ** How to use**


#### Search functionality:

This is a very simple program at the outset where all it requires from the user is to input what allergen/allergens they hope to avoid and receive the top rated recipe that the database holds that holds none of the allergens.

#### Favoriting Info:

The user will be provided with an image, the recipe title and ingredients list for the recipe. If the user likes, the recipe can be saved to their favorite lists (or the user can see all favorites). If they click the favorite button, there are multiple follow up options. The user can email a grocery list of items and click the map to find local health food stores where one can purchase the ingredients themselves.

#### Citation Info:

I utilized outside code twice. The first was when I was trying to figure out a good way to format an if statement for ajax parameters, the syntax wasn't functional any time I did it myself so I turned to stack overflow and found a really nice format for the code which I utilized and cited in my JS. Additionally, for using mapbox they give you very thorough tutorials for how to embed the maps -- so my code ended up being a carbon copy of what the instructions tell you to do since it only works with their exact functions. I changed the style of the map and the JSON data and I'm excited to work on how to get the markers to work again
