
        document.getElementById("outerDiv").addEventListener("click", function () {
            console.log("Outer Div clicked");
        });

        document.getElementById("middleDiv").addEventListener("click", function () {
            console.log("Middle Div clicked");
        });

        document.getElementById("innerDiv").addEventListener("click", function () {
            console.log("Inner Div clicked");});


        
        
        document.getElementById("outerDiv2").addEventListener("click", function () {
            console.log("Outer Div clicked");
        }, true);

        document.getElementById("middleDiv2").addEventListener("click", function () {
            console.log("Middle Div clicked");
        }, true);

        document.getElementById("innerDiv2").addEventListener("click", function () {
            console.log("Inner Div clicked");
        }, true);
