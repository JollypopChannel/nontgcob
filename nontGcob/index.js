<!DOCTYPE html>

<html>
    <head>
        <title>First nontGcob.netlify.app</title>
        <link href="style.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0">
        <!-- FUNCTION -->
        <script>
            // CLOSE POP-UP
            function myFunction() {
                const element = document.getElementById("pop-up");
                element.remove();
            }
        </script>
    </head>

    <body class="blackground">
        <!-- HEADER -->
        <div class="header">
            <h1 class="font">- Welcome to nontGcob! -</h1>
            <h4 class="font2">This is my very first website. I'm so happy to have you as a part of my programming journey.</h4>
        </div>

        <!-- BORDER -->
        <div class="adjust-border left2 border border-size">
            <!-- USERNAME -->
            <div class="center top3 form-floating mb-3">
                <input type="username" class="adjust-size form-control" id="floatingUsername" placeholder="Username">
                <label for="floatingUsername">Username</label>
            </div>

            <!-- PASSWORD -->
            <div class="center top4 bottom3 form-floating">
                <input type="password" class="adjust-size form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
        </div>

        <!-- POP-UP WITH 'x' TO CLOSE THE POP-UP -->
        <div id="pop-up" class="bottom4 left size alert alert-primary" role="alert">
            <button id="pop-up" onclick="myFunction()" type="button" class="top2 right2 btn-close" aria-label="one"></button>
            <p id="pop-up" class="top">Currently, this website is in the developing stage.</p>
        </div>
    </body>
</html>