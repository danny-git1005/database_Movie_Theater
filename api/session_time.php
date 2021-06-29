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

    if( $_POST['submit'] == "session_time" )
    {
        // 19 行是測試用 真正的answer 是在20 行,但由於抓不到movie_name 所以先註解掉
        //$sql = "select * from movie_info natural join session_time where movie_info.movieid = session_time.movieid and movieid = 11255;";
        $sql = "select * from movie_info natural join session_time where movie_info.movieid = session_time.movieid and movie_name = '$name';";
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
            echo ("test");
            header($_SERVER['SERVER_PROTOCOL'] . " 200");
            $Result['result'] = 'error';
        }
    }
    mysqli_close($con);
    echo json_encode($Result);
?>


