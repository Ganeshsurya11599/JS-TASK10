var table=JSON.parse(localStorage.getItem('user1'));
	console.log(table);

	for(let i=0;i<table.length;i++){

		console.log(table[i]);
		document.getElementById('body').innerHTML += '<tr><td>'+table[i].item+'</td>'+'<td>'+table[i].price+'</td></tr>';
	}
	function home(){
		location.replace('billing.html');
	}


function smile() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf118;";
  setTimeout(function () {
      a.innerHTML = "&#xf11a;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf119;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf11a;";
    }, 3000);
}
smile();
setInterval(smile, 4000);