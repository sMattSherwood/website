    // adding the window load will allow the date to wait for the page to load then display the date
    
    displayCss();
    window.addEventListener("load", function displayDate(){

        var date = new Date(); // creates a date object 
        // this will get current day/month/year
        var day = date.getDate();
        var month = date.getMonth() + 1; // you add 1 to this since it's pulling from an array where janary will be stored at 0
        var year = date.getFullYear();
        // this will store the data as day-month-year
        var todaysDate = day + "/" + month + "/" + year;
        console.log(todaysDate);// check to see if it's displaying the date
        //dipslays the date in the paragraph tag
        document.getElementById("currentDate").innerHTML = todaysDate;

        

        

    })

    function displayCss(){
        // this will apply Css depending if it's on a Moble Phone or Desktop Computer
        let width = window.innerWidth;
        // this will display the mobile css
        if(width <= 550) {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "Stylesheet";
            link.href = "mobileStyles.css";
            document.head.appendChild(link);
        }
        // this will put the css for the desktop web applicaiton
        else {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "Stylesheet";
            link.href = "styles.css";
            document.head.appendChild(link);
        }
    }