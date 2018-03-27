//mozilla MDN docs Date object

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hour = date.getHours();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day;
if(hour < 9) hour = "09";
else if(hour > 16) hour = "09";
var Ttime = hour + ":00";

function changetoday() {
	var classDate = document.getElementsByClassName("date");
	for(var i=0;i<classDate.length;i++)
	{
		classDate[i].value = today;
		//create function to incrememnt date by one
	}

	var classTime = document.getElementsByClassName("time");
	if(classTime.length > 0)
	{
		classTime[0].value = Ttime;
		classTime[1].value = "16:15";
	}
}
