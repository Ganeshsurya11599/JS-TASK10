var list ="";
    $("#button").click(function(){
    	var item=$("#item").val();

	   var price=$("#price").val();
       
    	var billing1={
    		item:item,
    		price:price
    	}
    	console.log(billing1)
      list += 1;
      $.post("https://5d36889b86300e0014b643bb.mockapi.io/api/v1/AjaxBilling",billing1);
      alert('Added')


    });


function home(){
	location.replace('home.html')
}

function bill(){
	location.replace('billing.html')
}