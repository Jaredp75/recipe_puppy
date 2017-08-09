//console.log("talking");


	fetch("http://www.recipepuppy.com/api/")

	  .then(
	    function(response) {
	      if (response.status!==200) {
	        console.log('Looks like there was a problem. Status Code: ' + response.status);
	        return;
	      }


      response.json().then(function(data) {
	        // console.log(data.results[0].name.first);


    function myFunction() {
      var x = document.getElementById("mySearch").placeholder;
      document.getElementByID("demo").innerHTML = x;
    }
  }
}



//var a = document.getElementById('tfnewsearch');
//    a.addEventListener('submit',function(e) {
//        e.preventDefault();
//        var b = document.getElementById('tftextinput').value;
//        window.location.href = 'http://mywebsite.com/'+b;

//    });

//const ul = document.getElementByID('authors');
//const url = 'http://www.recipepuppy.com/api/';

//function createNode(element) {
//      return document.createElement(element);
//  }

//  function append(parent, el) {
//    return parent.appendChild(el);
//  }

//  const ul = document.getElementById('recipes');
//  const url = 'http://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3';
//  fetch(url)
//  .then((resp) => resp.json())
//  .then(function(data) {
//    let recipes = data.results;
//    return recipes.map(function(recipe_title) {
//      let li = createNode('li'),
//          img = createNode('img'),
//          span = createNode('span');
      //img.src = author.picture.medium;
//      span.innerHTML = `${data.title}`;
      //append(li, img);
      //append(li, span);
      //append(ul, li);
//    })
//  })
//  .catch(function(error) {
//    console.log(error);
//  });
