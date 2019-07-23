var col =[];
  var list="";
  var text="";
     var request=$.ajax({
  type:"GET",
  url:"https://5d36889b86300e0014b643bb.mockapi.io/api/v1/AjaxBilling", 
    datatype:"json",

    success:function(result)
    {
      list=result;      
      for (var i=0;i<list.length;i++)
      {    

        
        text+= "<option>"+list[i].item+"</option>"
           
        

      }
        
        $("select").html(text)

}

});
        $("#button").click(function(){
        var text="";
      var amt="";
      var total="";
      var option =$("#option").val();
      var price=$("#price").val();
      var quan=$("#quantity").val();
        

        for(var j=0;j<list.length;j++){

        if(option== list[j].item){
          price=list[j].price;
          amt=quan*price;
          col.push(amt);
          console.log(amt)
        }
      }
         

        for (var k=0;k<col.length;k++){
          var p=col[k];
          total=eval(total+p)
        
        }

        var data={
          option:option,
          amt:amt,
          price:price,
        }

      
    $("#body1").append("<tr><td>"+data.option+"</td>"+"<td>"+data.price+"</td>"+"<td>"+data.amt+"</td></tr>");

      

});
   
$('#button2').click(function(){
  location.replace('home.html');
});

$('#button1').click(function(){
  location.replace('index.html');
}); 