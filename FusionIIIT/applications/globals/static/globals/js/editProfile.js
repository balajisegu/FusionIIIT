function editFirst(){

    var aboutSpan = $("#aboutSpan").text().trim();
    var educationSpan = $("#educationSpan").text().trim();
    var interestSpan = $("#interestSpan").text().trim();
    var contactSpan = $("#contactSpan").text().trim();


    var buttonValue = $("#editButton").val()

    if(buttonValue == "Edit"){
        $("#editButton").val("Save");

        $("#contactInput").val(contactSpan);
        $("#contactInput").show();
        $("#contactSpan").hide();
        $("#contactIcon").hide();

        $("#aboutTextarea").val(aboutSpan);
        $("#aboutTextarea").show();
        $("#aboutSpan").hide();

        $("#educationTextarea").val(educationSpan);
        $("#educationTextarea").show();
        $("#educationSpan").hide();

        $("#interestTextarea").val(interestSpan);
        $("#interestTextarea").show();
        $("#interestSpan").hide();

    }
    else if($("#editButton").val("Save")){
        $("#editButton").val("Edit");

        var contactValue = $("#contactInput").val().trim();
        $("#contactSpan").text(contactValue);
        $("#contactInput").hide();
        $("#contactSpan").show();
        $("#contactIcon").show();

        var aboutSpan = $("#aboutTextarea").val().trim();
        $("#aboutSpan").text(aboutSpan);
        $("#aboutTextarea").hide();
        $("#aboutSpan").show();

        var educationSpan = $("#educationTextarea").val().trim();
        $("#educationSpan").text(educationSpan);
        $("#educationTextarea").hide();
        $("#educationSpan").show();

        var interestSpan = $("#interestTextarea").val().trim();
        $("#interestSpan").text(interestSpan);
        $("#interestTextarea").hide();
        $("#interestSpan").show();

    }

}

function editStudent() {
    var aboutSpan = $("#aboutSpan").text().trim();
    var contactSpan = $("#contactSpan").text().trim();
    var interestSpan = $("#interestSpan").text().trim();

    var buttonValue = $("#editButton").val()

    if(buttonValue == "Edit") {
        $("#editButton").val("Save");

        $("#contactInput").val(contactSpan);
        $("#contactInput").show();
        $("#contactSpan").hide();
        $("#contactIcon").hide();

        $("#aboutTextarea").val(aboutSpan);
        $("#aboutTextarea").show();
        $("#aboutSpan").hide();

        $("#interestTextarea").val(interestSpan);
        $("#interestTextarea").show();
        $("#interestSpan").hide();
    }

    else if($("#editButton").val("Save")) {
        $("#editButton").val("Edit");

        var contactValue = $("#contactInput").val().trim();
        $("#contactSpan").text(contactValue);
        $("#contactInput").hide();
        $("#contactSpan").show();
        $("#contactIcon").show();

        var aboutSpan = $("#aboutTextarea").val().trim();
        $("#aboutSpan").text(aboutSpan);
        $("#aboutTextarea").hide();
        $("#aboutSpan").show();

        var interestSpan = $("#interestTextarea").val().trim();
        $("#interestSpan").text(interestSpan);
        $("#interestTextarea").hide();
        $("#interestSpan").show();


    }
}



function editCatalog2() {
    var buttonValue = $("#editButton2").val()
    var aboutSpan = $("#aboutSpan2").text().trim();

    if(buttonValue == "Edit") {
        $("#editButton2").val("Save");

        $("#aboutTextarea2").val(aboutSpan2);
        $("#aboutTextarea2").show();
        $("#aboutSpan2").hide();
    }

    else if($("#editButton2").val("Save")) {
        $("#editButton2").val("Edit");

        var aboutSpan = $("#aboutTextarea2").val().trim();
        $("#aboutSpan2").text(aboutSpan2);
        $("#aboutTextarea2").hide();
        $("#aboutSpan2").show();
    }
}

function editCatalog3() {
    var buttonValue = $("#editButton3").val()
    var aboutSpan = $("#aboutSpan3").text().trim();

    if(buttonValue == "Edit") {
        $("#editButton3").val("Save");

        $("#aboutTextarea3").val(aboutSpan3);
        $("#aboutTextarea3").show();
        $("#aboutSpan3").hide();
    }

    else if($("#editButton3").val("Save")) {
        $("#editButton3").val("Edit");

        var aboutSpan = $("#aboutTextarea3").val().trim();
        $("#aboutSpan3").text(aboutSpan3);
        $("#aboutTextarea3").hide();
        $("#aboutSpan3").show();
    }
}

function editCatalog4() {
    var buttonValue = $("#editButton4").val()
    var aboutSpan = $("#aboutSpan4").text().trim();

    if(buttonValue == "Edit") {
        $("#editButton4").val("Save");

        $("#aboutTextarea4").val(aboutSpan4);
        $("#aboutTextarea4").show();
        $("#aboutSpan4").hide();
    }

    else if($("#editButton4").val("Save")) {
        $("#editButton4").val("Edit");

        var aboutSpan = $("#aboutTextarea4").val().trim();
        $("#aboutSpan4").text(aboutSpan4);
        $("#aboutTextarea4").hide();
        $("#aboutSpan4").show();
    }
}


