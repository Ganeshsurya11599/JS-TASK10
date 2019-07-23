var list="";
  var request=$.ajax({
  type:"GET",
  url:"https://5d36889b86300e0014b643bb.mockapi.io/api/v1/AjaxBilling", 
    datatype:"json",

    success:function(result)
    {
      list=result; 
      var text="";    
      for (var i=0;i<list.length;i++)

         {

     $("#body").append("<tr><td>"+list[i].item+"</td>"+"<td>"+list[i].price+"</td></tr>");
}
}
   
});

	function home(){
		location.replace('billing.html');
	}
  function admin(){
    location.replace('index.html');
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