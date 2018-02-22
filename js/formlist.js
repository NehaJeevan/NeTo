

function getForm(value) {
	var xhttp = new XMLHttpRequest();
	var merit = document.getElementById("merit");

	xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	var result = JSON.parse(this.responseText);
            if(result == "") {
        		document.getElementById("pollute").innerHTML = "No Forms";
        	}
        	else {
        		var data = "";
        		for(var i = 0;i<result.length;i++) {
            		data += "<br>";
            		switch(result[i].type) {
            			case 1:data += "Outpass";break;
            			case 2:data += "Nightout";break;
            			case 3:data += "Leave"; break;
            		}
            		var date = new Date(result[i].submitdate);
            		data += " " + date.getDate() +"/"+ (date.getMonth()+1) +"/"+ date.getFullYear();
            	}
            	document.getElementById("pollute").innerHTML = data;
            }
       }
    };
    var url = "http://localhost:3000/access/" + value + "/" + merit.value;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}
