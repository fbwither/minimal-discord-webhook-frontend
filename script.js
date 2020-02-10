$(document).ready(() => {
    $(".input").keyup((event) => {
        if (event.keyCode == 13) {
            var zeleniy = $(".input").val();

            var xhr = new XMLHttpRequest();
            xhr.open('POST', localStorage.getItem("url"), true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onreadystatechange = function() {
                console.info(xhr.status);
                if (xhr.status == 204) {
                    $(".send").removeClass("btn-primary").removeClass("btn-danger").addClass("btn-success");
                    console.info(xhr.status);
                    console.info(xhr.responseText);
                } else {
                    $(".send").removeClass("btn-success").removeClass("btn-primary").addClass("btn-danger");
                }
            }
            xhr.send(JSON.stringify({
                username: localStorage.getItem("username"),
                avatar_url: localStorage.getItem("avatar"),
                content: zeleniy
            }));
        }

        if (event.keyCode == 9) {
            $(".input").val($(".input").val() + "    ");
            return false;
        }
    });

    $('.textarea').on('keydown mouseup', function(e) {
        if (e.which == 9) { e.preventDefault(); }
    });

    $(".json").click(() => {
        if ($(".json").hasClass("off")) {
            $(".json").removeClass("off").addClass("on");
            $(".input").css({ "display": "none" });
            $(".json-input").removeClass("hidden");
            $(".json").html("просто текст");
            return;
        }
        $(".json").removeClass('on').addClass('off');
        $(".input").css({ "display": "flex" });
        $(".json-input").addClass('hidden')
    });

    $('.settings').click(() => {
        if ($('.settings').hasClass("off")) {
            $('.settings').removeClass("off").addClass("on");
            $(".frame").removeClass("hidden").css({ "display": "flex" });
            return
        }
        $('.settings').removeClass("on").addClass("off");
        $('.frame').addClass("hidden");
    });

    $('.set').click(() => {
        $(".set").removeClass("btn-info").addClass("btn-success");
        localStorage.setItem("url", $(".url").val());
        localStorage.setItem("username", $(".username").val());
        localStorage.setItem("avatar", $(".avatar").val());
    });
});