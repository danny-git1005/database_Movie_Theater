<?php
    
    header("Content-type:application/json");
    $connect = include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");
    $Result = array();

    $con = mysqli_connect($connect['server'],$connect['db_username'],$connect['db_password'],$connect['db_database']);

    if (!isset($_POST['submit']))
    {
        exit("error");
    }

    
    if( $_POST['submit'] == "movie" )
    {
        $sql = "select * from movie.movie_info ";
        $query = mysqli_query($con , $sql );

        if ($query)
        {
            header($_SERVER['SERVER_PROTOCOL'] . " 200");
            $i = 0;
            while( $row = mysqli_fetch_array($query) )
            {
                $Result[$i] = $row;
                $i++;
            }
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


