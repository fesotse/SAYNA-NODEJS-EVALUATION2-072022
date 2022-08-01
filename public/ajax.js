const connection = require("./mysql");
const { query } = require("./mysql");

var form = document.getElementById("myForm");
function handleForm(e){e.preventDefault();}
form.addEventListener("submit", handleForm)
function instert(){
    $.ajax({
        url:"/action.php",
        type:'POST',
        data: {
            firstname: $("input[name=firstname]").val(),
            lastname: $("input[name=lastname]").val(),
            avis: $("input[name=avis]").val(),
            note: $("input[name=note]").val(),
            formation: $("select[name=formation]").val(),
            action:'insert'
        },
        success: function (response){
            if (response == 1) {
                alert("data added")
            }
        }
        
    })
}