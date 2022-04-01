var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var currentDay = $("#currentDay");
currentDay.text(moment().format("LLLL"));

$(".saveBtn").click(function() {
    var saveText = {index: 0, text: ""}
    var textArea = $(this).parent().siblings(".form-group").children("textarea");
    console.log($(this).data("btnnum"));
    saveText.index = $(this).data("btnnum");
    saveText.text = textArea.val();
    console.log(saveNote);
    localStorage.setItem(saveText.index, saveText.text);

})

for(var i = 0; i < hours.length; i++) {
    console.log(localStorage.getItem(i));
    var textContent = localStorage.getItem(i);
    if(textContent !==null) {
        $("#${i}").children("textarea").val(textContent);
    }
}

$(document).ready(function(){
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