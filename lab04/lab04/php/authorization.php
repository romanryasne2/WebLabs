<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link href="../libs/bootstrap.css" rel="stylesheet" />
    <link href="../css/styles.css" rel="stylesheet" />
    <script src="../libs/jquery.js"></script>
    <script src="../libs/bootstrap.js"></script>
</head>
<body class="with-background">
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