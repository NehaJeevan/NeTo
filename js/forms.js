$(document).ready(function(){
	$('form').submit(function(){
	    var postData = $(this).serialize();
		var type = this.className;
		var url = 'http://localhost:3000/submit/'+type
	    $.ajax({
	        type: 'POST',
	        data: postData,
	        url: url,
	        success: function(data){
	            console.log(data);
	            alert('Form Submitted successfully');
	        },
	        error: function(){
	            console.log(data);
	            alert('There was an error submitting the form');
	        }
	    });
	    return false;
	});
});
