var date = new Date();



var ddd = document.getElementsByName('da');
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;     
function changetoday() {
	document.getElementsByName("da").value = today;
	document.getElementsByName('date').defaultvalue = "2018-09-22";
}
