var arr=[],arr1=[],rel=[],sum=0,counter=0;
$("#submit").click(function(){
    $("#remove").remove();
    for(var a=0;a<arr.length;a++)
    {
        console.log(arr1[a],typeof(arr1[a]));
       var naya = (sum/counter)-arr1[a];
       if(naya>0)
       {
        $("#result").append("<h1 style='text-align: center;margin-top:40px;'>"+arr[a]+" will receive "+naya+"</h1>");
       }
       else{
        $("#result").append("<h1 style='text-align:center;'>"+arr[a]+" owes "+-1*naya+"</h1>");
       }
       
    }
});

$("#add").click(function(){
    
    sum=sum+parseInt($("#amt").val());
    console.log(sum);
    var nam = $("#nam").val();
    arr[counter]=nam;
    
    var amt = parseInt($("#amt").val());
    arr1[counter]=amt;
    $('#naya-ilaka').append("<h1>"+nam+" paid "+amt+"</h1>");
   
    counter=counter+1;
});

