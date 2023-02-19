    // adding the window load will allow the date to wait for the page to load then display the date
    window.addEventListener("load", function(){

        var date = new Date() // creates a date object 
        // this will get current day/month/year
        var day = date.getDate()
        var month = date.getMonth() + 1 // you add 1 to this since it's pulling from an array where janary will be stored at 0
        var year = date.getFullYear()
        // this will store the data as day-month-year
        var todaysDate = day + "/" + month + "/" + year
        console.log(todaysDate)// check to see if it's displaying the date
        //dipslays the date in the paragraph tag
        document.getElementById("currentDate").innerHTML = todaysDate

    })