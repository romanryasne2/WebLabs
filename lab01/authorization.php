﻿<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link href="bootstrap.css" rel="stylesheet" />
    <script src="jquery.js"></script>
    <script src="bootstrap.js"></script>
</head>
<body style="background-image: url('backimage.jpg'); background-repeat: no-repeat; background-size: cover">
    <?php function authorize(){
              if (($_POST["username"] == "admin") && $_POST["password"] == "admin"){
                  return "Адміністратор";
              }
              if (($_POST["username"] == "student") && $_POST["password"] == "student"){
                  return "Студент";
              }
              return "Не автентифікований";
          }
    ?>
    <div class="container">
        <h3 class="text-center">Клас користувача</h3>
        <div>
            <label class="text-center"> <?php echo authorize(); ?> </label>
        </div>
    </div>
</body>
</html>