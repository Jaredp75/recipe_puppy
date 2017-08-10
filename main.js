//console.log("talking");


//	fetch("http://www.recipepuppy.com/api/?i=")

//	  .then(
//	    function(response) {
//	      if (response.status!==200) {
//	        console.log('Looks like there was a problem. Status Code: ' + response.status);
//	        return;
//	      }


//      response.json().then(function(data) {
	        // console.log(data.results[0].name.first);


let url = "http://recipepuppyproxy.herokuapp.com/api/?i=";

	let button = document.querySelector("button");
	button.addEventListener("click",submitSearch);

	function submitSearch() {
		let input = document.querySelector("#searchbox").value;
		console.log(input);
		fetch(url + input)

		.then(
			function(response) {
				if (response.status !==200) {
					console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}

				response.json().then(function(data) {
					let results = document.getElementById("results");
					results.innerHTML ='';
					if (data.results.length===0) {
						results.innerHTML += `<p>Sorry, your search did not return any results. Try again!</p>`
					}
					else {
						data.results.map((recipe)=>{
							results.innerHTML += `
							<div class="recipeBox"><img class="foodThumb" src="${recipe.thumbnail}">
							<h2>${recipe.title}</h2>
							<a href="${results.href}">View Recipe</a></div>
							`
					 });
					}
					})
				}
			)
		}
