

function getForm(value) {
	var xhttp = new XMLHttpRequest();
	var merit = document.getElementById("merit");
	var table = document.getElementById("pollute");

	xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	var result = JSON.parse(this.responseText);

			//If there are no forms for given meritno
            if(result == "") {
				var row = table.insertRow(0);
				var cell = row.insertCell(0);
				cell.innerHTML = "No Forms";
        	}
        	else
			{
				var row = table.insertRow(0);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				cell1.innerHTML = "Type";
				cell2.innerHTML = "From Date";
				cell3.innerHTML = "To Date";
				cell4.innerHTML = "Submited On";

        		for(var i = 0;i<result.length;i++) {
            		var row = table.insertRow(i+1);
					var type = row.insertCell(0);
					var fromd = row.insertCell(1);
					var tod = row.insertCell(2);
					var subtime = row.insertCell(3);

            		switch(result[i].type) {
            			case 1:
							type.innerHTML = "Outpass";
							fromd.innerHTML = result[i].date;
							break;
            			case 2:
							type.innerHTML = "Nightout";
							fromd.innerHTML = result[i].fromdate;
							tod.innerHTML = result[i].todate;
							break;
            			case 3:
							type.innerHTML = "Leave";
							fromd.innerHTML = result[i].fromdate;
							tod.innerHTML = result[i].todate;
							break;
            		}

            		var date = new Date(result[i].submitdate);
            		subtime.innerHTML = " " + date.getDate() +"/"+ (date.getMonth()+1) +"/"+ date.getFullYear();
            	}
            }
       }
    };

	var url = "http://localhost:3000/access/" + value + "/" + merit.value;
    xhttp.open("GET", url, true);
    xhttp.send();
	//get request sent and waiting for result
}
