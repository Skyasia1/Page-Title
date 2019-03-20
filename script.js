$("button").click(function() {
   var mcdonalds = $(".mcdonalds").val();
   var shopping= $(".shopping").val();
   var food = $(".junk food").val();
   $(".mcdonaldsline").text("you will go to mcdonalds 3 times a week " +mcdonalds);
   $(".shoppingline").text("you will go shopping 8 times in 2 months " +shopping);
   $(".foodline").text("you will eat junk food 12 times in a month " +food );
});