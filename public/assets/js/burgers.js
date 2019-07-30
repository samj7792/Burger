$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        console.log("name " + $("#burg").val().trim());

        if ($("#burg").val() === "") {
            alert("Enter a burger name");
            // $("#modal").modal("toggle");
        }

        else {
            var newBurger = {
                name: $("#burg").val().trim(),
                devoured: 0
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    console.log("created new burger");
                    location.reload();
                }
            );
        }
    });
});