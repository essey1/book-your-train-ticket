### A train ticket booking web application

This is a one page web application that receives data from the user about booking a train and returns a ticket consisting of all the data entered by the user.

To create this Web application the first thing I did was create the structure of the Web page. I divided the body into two parts, the header and main. The header consists of an h1 tag which is displayed on the top of the page and the main part is further divided into 4 parts which are:
    1.	Search for train part which is the first card that gets displayed to get the departure, destination and date from the user.
    2.	Available train which consists a table displayed the available trains, cost and number of seats available to the user
    3.	The third part is a card that lets the user pick from different classes like economy, business and luxury.
    4.	And finally the last part displays a ticket which displays all the data entered from the user.
    
After creating the basic structure of the page. I styled the web page using CSS and Bootstrap to make it responsive and look more appealing.

But this web page would be useless without JavaScript. After I was done styling, I used JavaScript and jQuery to make the site interactive. In my JavaScript file, I first hid all the parts of the main part of the HTML except for the first one.

Then after the user enters all the data and clicks on the search for trains button, a table of available trains is displayed and the search for trains part becomes hidden. In the available trains part there is a Total price calculator which automatically increases or decreases the price as the user changes the number of seats.

After the user selects a train and clicks on the blue Book Now button. The third part of page displays which allows the user to pick a class. Some of the classes will have additional prices. So there is another calculator coded in the JavaScript file which increases the cost based on the type of class the user selects.

Finally if the user clicks the Cancel button the page reloads and goes back to the first part of the HTML. But if the user clicks on the Book Now button the JavaScript code collects all the data entered by the user and displays it on the Ticket part of the HTML. There is also a button below the ticket that allows you to print the ticket.

And this is how I was able to make this Software application work.

You can check out the code on the GitHub repository for more detailed information.

Link to the Web application: https://username.github.io/book-your-train-ticket

