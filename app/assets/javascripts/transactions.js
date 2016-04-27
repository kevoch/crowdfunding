// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).on('ready page:load', function () {

    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    // //Wizard
    // $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    //     var $target = $(e.target);
    
    //     if ($target.parent().hasClass('disabled')) {
    //         return false;
    //     }
    // });

    $(".next-step").click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});



function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


/*Payment Form */
$("#paymentForm").submit(function()
{
var datastring = $(this).serialize();
$.ajax({
type: "POST",
url: "cardProcess.php",
data: datastring,
dataType: "json",
beforeSend: function(){  $("#paymentButton").val('Processing..') },
success: function(data)
{
$.each(data.OrderStatus, function(i,data)
{
var HTML;
if(data)
{
$("#paymentGrid").slideUp("slow"); 
$("#orderInfo").fadeIn("slow");

if(data.status == '1')
{
HTML="Order <span>"+data.orderID+"</span> has been created successfully.";
}
else if(data.status == '2')
{
HTML="Transaction has been failed, please use other card.";
}
else
{
HTML="Card number is not    valid, please use other card.";
}

$("#orderInfo").html(HTML);
}
});
},
error: function(){ alert('Network Error'); }
});
return false;
});