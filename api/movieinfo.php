<?php
    
    header("Content-type:application/json");
    $connect = include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");
    $Result = array();

    $con = mysqli_connect($connect['server'],$connect['db_username'],$connect['db_password'],$connect['db_database']);

    if (!isset($_POST['submit']))
    {
        exit("error");
    }

    $name = $_POST['name'];
   

    if( $_POST['submit'] == "movieinfo" )
    {
        $sql = "select * from movie_info where movie_name='$name';";
        $query = mysqli_query($con , $sql );

        if ($query)
        {
            header($_SERVER['SERVER_PROTOCOL'] . " 200");
            $Result = mysqli_fetch_array($query);
        }
        else
        {
            header($_SERVER['SERVER_PROTOCOL'] . " 200");
            $Result['result'] = 'error';
        }
    }

    mysqli_close($con);
    echo json_encode($Result);
?>


