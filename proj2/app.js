'use strict';

$(document).ready(function(){	
	//Serve Up random Wiki-page to serach-results div on click of "random" button
  $('#random').on('click', function(e){
	e.preventDefault();//eslint-ignore-line
	$('#search-results').html('<iframe  src="https://en.wikipedia.org/wiki/Special:Random" width="100%" height="500" frameborder="0" allowfullscreen></iframe>');
	/* Option to open in another window:
	var url = 'https://en.wikipedia.org/wiki/Special:Random';
	window.open(url);
	*/
	});

	//On Click, store search term in var and url
  $('#submitButton').on('click', function(e){
  		 e.preventDefault();
     var $searchFor = $('#search-term').val();

     var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ $searchFor + '&format=json&callback=?'
     //var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + $searchFor + '&prop=revisions&rvprop=content&format=json&callback=?'
		$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
        	success: function(data, status, jqXHR) {
        		console.log(data);
        		$('#search-results').html('');
        		//Iterate through results and render in search results area
        		for(var i=0;i<data[1].length;i++){

        			$('#search-results').append('<div><a href=' + data[3][i] + '><h2>' + data[1][i] + '</h2>' + '<p>' + data[2][i] + '</p> </a> </div>');
        		}
        		$('#search-term').val('');
        	}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

    });
 /*
HT On click of entry title, post entry in an iframe window. But how to get ahold of the href of the dynamically rendered content?

var $searchresultstest = $('#search-results a').val();

$('#search-results a href').on('click', function(){
});
*/

});//doc ready close

//https://crossorigin.me/
