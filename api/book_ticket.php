<?php
    
    header("Content-type:application/json");
    $connect = include($_SERVER['DOCUMENT_ROOT']."/Movie-Theater/account/connect.php");
    $Result = array();

    $con = mysqli_connect($connect['server'],$connect['db_username'],$connect['db_password'],$connect['db_database']);

    if (!isset($_POST['submit']))
    {
        header($_SERVER['SERVER_PROTOCOL'] . " 200");
        exit("error");
    }

    $name = $_POST['name'];
    $date = $_POST['date'];
    $session = $_POST['session'];
    $type = $_POST['type'];
    $num = $_POST['number'];
    $user = $_POST['user_id'];
    $movieid = $_POST['movie_id'];
    $seat = $_POST['seat'];

    $fee = 200;
    if($type = '全票')$fee = 300;
    else if ($type = '半票')$fee = 240;



    if( $_POST['submit'] == "book_ticket" )
    {
        $i = 0;
        for($i = 1 ;$i<=$num ; $i++)
        {
            $ticket_id = date('Y-m-d-h-i').'-'.$date.'-'.$session.'-'.$i;
            $x_value = $seat[$i-1];
            $y_value = $seat[$i];
            $sql1 = "insert into ticket (ticket_id ,date, movie_name ,session_time ,fee ,user_id ,movie_id ) values ('$ticket_id' ,'$date' ,'$name' ,'$session' , $fee , $user , $movieid);";
            $sql2 = "insert into seat (ticket_id ,date, session_time , row_num , col_num , movie_id ) values ('$ticket_id' ,'$date' ,'$session' ,$x_value , $y_value , $movieid );";
            $test = mysqli_query($con , $sql1 );
            $test = mysqli_query($con , $sql2 );
        }
        if ($test!= NULL)
        {
            //header($_SERVER['SERVER_PROTOCOL'] . " 200");
            $sql = "select * from ticket where user_id = $user;";
            $query = mysqli_query($con , $sql );
            $j = 0;
            while( $row = mysqli_fetch_array($query) )
            {
                $Result[$j] = $row;
                $j++;
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
