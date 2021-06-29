<?php
    
    header("Content-Type:application/json");
    include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");

    $connect = include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");
    $con = mysqli_connect($connect['server'],$connect['db_username'],$connect['db_password'],$connect['db_database']);
    $Result = array();

    session_start();

    if(!$con)
    {
        die("can't connect".mysqli_error());
    }

    if(!isset($_POST['submit']))
    {
        exit("wrong");
    }

    switch ($_POST['submit'])
    {
        case "login":

            $name = base64_encode($_POST['username']);
            $password = base64_encode($_POST['password']);


            if($name && $password)
            {
                $sql = "select * from user where username = '$name' and `password` = '$password'";
                $result0 = mysqli_query($con,$sql);
                $rows = mysqli_fetch_array($result0);

                if($rows)
                {
                    $result = mysqli_query($con , $sql);

                    header($_SERVER['SERVER_PROTOCOL'].'200');
                    $Result['result'] = "Login success with ".$_POST['username'];
                    $Result['userid'] = $rows['userid'];
                    $_SESSION["userid"] = $rows['userid'];
                }
                else
                {
                    header($_SERVER['SERVER_PROTOCOL'].'200');
                    $Result['result'] = " Account or Password error ";
                }
            }
            else
            {
                header($_SERVER['SERVER_PROTOCOL'].'200');
                $Result['result'] = " Please fill the entire data ";
            }

            mysqli_close($con);
            echo json_encode($Result);

            break;

        // case "logout":
        //     if(isset($_SESSION)){

        //         session_unset();
    
        //         echo "<script type='text/javascript'>";
        //         echo "alert('登出成功');";
        //         echo "location.href='check.php';";
        //         echo "</script>";
        //     }

        //     mysqli_close($con);
        //     echo json_encode($Result);

        //     break;
    }

?>
