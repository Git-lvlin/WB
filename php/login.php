<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登录数据</title>
</head>
<body>
<?php
    /*
    url: 'http://localhost/box-php/WB/php/login.php'
    url: 'http://localhost/box-php/WB/dist/php/login.php'

    type: 'post'
    params:
    type: login 登录
    user: 账号
    pass: 密码
    return: '{"err":1,"msg":"登录成功"}'
    */

    // 设置响应头
    header('Content-Type:text/plain;charset=utf-8');

    // 接收参数
    $type = $_POST['type'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 连接数据库
    $link = mysqli_connect('localhost','root','root','wb');
    if (!$link) {
    echo '{"err":0,"msg":"数据库连接失败"}';
    die();
    }

    // 登录
    if ($type == 'login') {
    // 查询sql语句
    $login_sql = "select * from account where username='$username' and password='$password'";
    // 执行sql语句
    $res = mysqli_query($link,$login_sql);
    $res_arr = mysqli_fetch_all($res);
    if (count($res_arr) > 0) {
    echo '{"err":1,"msg":"登录成功"}';
    } else {
    echo '{"err":-1,"msg":"账号或密码错误"}';
    }
    } 
    else {
        echo '{"err":-9,"msg":"参数错误"}';
    }
    // 关闭数据库连接
    mysqli_close($link);

    ?>
</body>
</html>