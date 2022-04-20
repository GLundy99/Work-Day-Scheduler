var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var currentDay = $("#currentDay");
currentDay.text(moment().format("LLLL"));

$(".saveBtn").click(function() {
    var saveNote = {index: 0, text: ""}
    var textArea = $(this).parent().siblings(".form-group").children("textarea");
    console.log($(this).data("btnnum"));
    saveNote.index = $(this).data("btnnum");
    saveNote.text = textArea.val();
    console.log(saveNote);
    localStorage.setItem(saveNote.index, saveNote.text);

})

for(var i = 0; i < hours.length; i++) {
    console.log(localStorage.getItem(i));
    var textContent = localStorage.getItem(i);
    if(textContent !==null) {
        $("#${i}").children("textarea").val(textContent);
    }
}

//compare current to row time
$(document).ready(function(){
    //loops through div elements with form-group
    $(".form-group").each(function(i){
        var currentHour = moment().hours();
        if(currentHour < hours[i]){
            $(this).addClass("future");
        }else if(currentHour > hours[i]){
            $(this).addClass("past");
        }else{
            $(this).addClass("present");
        }
    });
});

$config['system.core']['block_interest_cohort'] = False;