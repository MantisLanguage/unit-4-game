$(document).ready(function(){


    var ranNum = Math.floor(Math.random()*111)+23;
    console.log("ranNum" + ranNum)
    $(".number").html(ranNum);

    var eggOne = Math.floor(Math.random()*11);
        console.log("eggOne" + eggOne)
        $("#img1").html("<img src=" + "assets/images/6Z2c6UT.png" + " value=" + eggOne + ">"); 

    var eggTwo = Math.floor(Math.random()*12);
    console.log("eggTwo" + eggTwo)
     $("#img2").html("<img src=" + "assets/images/dyNMAUS.png" + " value=" + eggTwo + ">"); 

     var eggThree = Math.floor(Math.random()*12);
     console.log("eggThree" + eggThree)
     $("#img3").html("<img src=" + "assets/images/nwtTjMT.png" + " value=" + eggThree + ">"); 
   
     var eggFour = Math.floor(Math.random()*11)+9;
     console.log("eggOne" + eggFour)
     $("#img4").html("<img src=" + "assets/images/RLcS5WK.png" + " value=" + eggFour + ">"); 





})