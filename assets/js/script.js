// Function which contains variable for checking currentHour using dayjs and format below
$(function () {
  var currentHour = dayjs().format("H");

// Function to update the color coding of time blocks
function updateTimeBlockColors() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Remove any existing classes before applying the new one
    $(this).removeClass("past present future");
    // Checks blockhour against current hour and then adds class for past, present or future
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

});