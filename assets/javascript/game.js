$(document).ready(function () {

    //  Global Variables including Randomly Generated Numbers

    // Primary focus Number, max ceiling of 120, minimum 19
    var ranNum = Math.floor(Math.random() * 102) + 19;
    console.log("ranNum" + ranNum)
    $(".number").html(ranNum);

    // Eggs number assignment and image assignment
    var eggOne = Math.floor(Math.random() * 12)+1;
    console.log("eggOne" + eggOne)
    $("#img1").html("<img src=" + "assets/images/6Z2c6UT.png" + " value=" + eggOne + ">");

    var eggTwo = Math.floor(Math.random() * 12)+1;
    console.log("eggTwo" + eggTwo)
    $("#img2").html("<img src=" + "assets/images/dyNMAUS.png" + " value=" + eggTwo + ">");

    var eggThree = Math.floor(Math.random() * 12)+1;
    console.log("eggThree" + eggThree)
    $("#img3").html("<img src=" + "assets/images/nwtTjMT.png" + " value=" + eggThree + ">");

    var eggFour = Math.floor(Math.random() * 12) + 1;
    console.log("eggOne" + eggFour)
    $("#img4").html("<img src=" + "assets/images/nwtTjMT.png" + " value=" + eggFour + ">");

    //  Default Zeros
    var wins = 0;
    console.log("wins" + wins);

    var losses = 0;
    console.log("losses" + losses)

    var score = 0;
    console.log("count" + score);

    // End global variables
    // Begin Gaming Functions
    function reset() {
        ranNum = Math.floor(Math.random() * 102) + 19;
        console.log("ranNum: " + ranNum);
        $(".number").html(ranNum);

        score = 0;
        $(".count").html(score);

        eggOne = Math.floor(Math.random() * 12)+1;
        console.log("Egg 1: " + eggOne);
        $("#img1").html("<img src=" + "assets/images/6Z2c6UT.png" + " value=" + eggOne + ">");

        eggTwo = Math.floor(Math.random() * 12)+1;
        console.log("Egg 2: " + eggTwo);
        $("#img2").html("<img src=" + "assets/images/dyNMAUS.png" + " value=" + eggTwo + ">");

        eggThree = Math.floor(Math.random() * 12)+1;
        console.log("Egg 3: " + eggThree);
        $("#img3").html("<img src=" + "assets/images/nwtTjMT.png" + " value=" + eggThree + ">");

        eggFour = Math.floor(Math.random() * 12)+1;
        console.log("Egg 4: " + eggFour);
        $("#img4").html("<img src=" + "assets/images/RLcS5WK.png" + " value=" + eggFour + ">");

        $("img").on("click", function () {
            var newScore = score += parseInt($(this).attr("value"));
            console.log("New Score: " + newScore);
            $(".count").html(newScore);


            // matching count and ranNum = win
            if (newScore === ranNum) {
                wins++;
                $(".wins").html("Wins: " + wins);
                console.log("Wins: " + wins);
                reset();

            }
            //   count surpasses ranNum = loss
            else if (newScore > ranNum) {
                losses++;
                $(".losses").html("Losses: " + losses);
                console.log("Losses: " + losses);
                reset();

            }

        });



    }
// egg click functionality via img tag
    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".count").html(newScore);

        if (newScore === ranNum) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            alert("Yoshi!")
            reset();
        }

        else if (newScore > ranNum) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
        }

    });

})