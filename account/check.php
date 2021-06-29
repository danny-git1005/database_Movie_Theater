<?php

    session_start();

    if(isset($_SESSION['username']))
    {
        header("refresh:0; url = ../index.html");
    }
    else
    {
        header("refresh:0;url = ../login.html");
    }

?>