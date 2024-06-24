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
        carousel();
        

        

    })
    // this will apply Css depending if it's on a Moble Phone or Desktop Computer
    function displayCss(){
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

    // this will allow the carosel to dynamicaly be created
    function carousel(){
        // this will dynamicaly create the navigation div and populate
    document.querySelectorAll(".carousel").forEach(carousel =>{
        const items = carousel.querySelectorAll(".carousel__item");
        // this is where the button spans will be generated
        const buttonsHtml = Array.from(items, () =>{
            return `<Span class="carousel__button"></span>`;
        });
        // we will insert buttons into the html by calling the buttonsHtml arrow function
        carousel.insertAdjacentHTML("beforeend", `
            <div class="carousel__nav">
                ${buttonsHtml.join("")}
            </div>
            `);
        
        //this will display the button array
        console.log(buttonsHtml);

        //create a list of all buttons
        const buttons = carousel.querySelectorAll(".carousel__button");

        buttons.forEach((button, i) =>{
            button.addEventListener("click", () =>{
                items.forEach(item => item.classList.remove("carousel__item--selected"));
                buttons.forEach(button => button.classList.remove("carousel__button--selected"))

                items[i].classList.add("carousel__item--selected");
                button.classList.add("carousel__button--selected");
            });
        });
        items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected");
    });
}








