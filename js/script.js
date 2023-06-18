// All the functionalities of this app will be executed once it finishes loading
document.addEventListener("DOMContentLoaded", function() {

  // When the site loads display only the searchForTrains section
  document.querySelector("#availableTrains").style.display = "none";
  document.querySelector("#selectClass").style.display = "none";
  document.querySelector("#yourTicket").style.display = "none";


  // Displays the availableTrains section
  document.getElementById("searchBtn").addEventListener("click", () => {

    from = document.querySelector(".from").value;
    to = document.querySelector(".to").value;
    date = document.querySelector("#datepicker").value;

    // Makes sure the user have entered all the data
    if (!(from && to && date)) {
          alert("Please Select All Fields!");
          return False;
        }
        else if(from == to)
          {
            alert("From and To can't be the same");
            return False;
          }

    document.querySelector("#searchForTrains").style.display = "none";
    document.querySelector("#availableTrains").style.display = "inline-block";
  
  })

  // Changes the background color of the avilableTrains on hover
  $("tbody > tr").mouseover(function() {

    $(this).css("backgroundColor", "rgba(112, 105, 136, 0.89)");

  }).mouseout(function() {

    $(this).css("backgroundColor", "");
  });

  // Gets the data of the selected row from the availableTrains
  $("tbody > tr").on('click', function() {

    $(this).parent().children().removeClass("selected");
    $(this).addClass("selected");

    // Updates the Total price as the user changes the number of seats
    costPerSeat = $(".selected").find(".costPerSeat").text();
    noOfSeats = $(".selected").find(".noOfSeats").val();
    totalCost = costPerSeat * noOfSeats;
    $(".totalPrice").html(totalCost);
            
  });
      
  // Displays the selectClass section
  $(".bookTrain").click(function() {

    // Gets the all data of the selected row
    costPerSeat = $(".selected").find(".costPerSeat").text();
    trainNumber = $(".selected").find(".trainNumber").text();
    trainName = $(".selected").find(".trainName").text();
    trainTime = $(".selected").find(".trainTime").text();
    noOfSeats = $(".selected").find(".noOfSeats").val();
    classCost = $(".selected")

    // Makes sure the user has selected a Train
    if (!trainNumber) {
      alert("Please Select Your Train!")
      return False;
    }

    document.querySelector("#availableTrains").style.display = "none";
    document.querySelector("#selectClass").style.display = "inline-block";
    
    // Displays the ticket
    $(".bookClass").click(function() {

      // Calculates the total cost
      className = document.querySelector('input[name="toggle"]:checked+span').innerHTML;
      $(".typeOfClass").html(className);
      classType = document.querySelector('input[name="toggle"]:checked+span');
      classCost = classType.getAttribute("value");
      totalCost = (costPerSeat * noOfSeats) + (Number(classCost) * noOfSeats);
      $(".trainCost").html(totalCost);
     
      document.querySelector("#yourTicket").style.display = "inline-block";
      document.querySelector("#selectClass").style.display = "none";

    });

    // Refreshes the page when the user clicks on the cancel button
    $(".cancelBook").click(function() {
      window.location.reload()
    })
    
    // Updates the HTML with the new data entered by the user
    $("#From").html(from);
    $("#To").html(to);
    $(".trainName").html(trainName);
    $(".trainTime").html(trainTime);
    $(".costPerSeat").html(totalCost);
    $(".noOfSeats").html(noOfSeats);
    $(".trainNumber").html(trainNumber);
  
    // Displays the date of the ticket booked
    var d = new Date();
    var n = d.toLocaleDateString();
    document.querySelector(".ticketDate").innerHTML = n;
    
    // Barcode
    var code = '11010011001001010110010110110010101010101101010101101';

    table = $('#barcodes tr');
    for (var i = 0; i < code.length; i++) {

      if (code[i] == 1) {
        table.append('<td bgcolor="black">')
      } 
      else {
        table.append('<td bgcolor="white">')
      }

    }

  });

});

