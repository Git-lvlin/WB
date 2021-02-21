<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>注册数据</title>
</head>
<body>
    <?php
    /*
    url: 'http://localhost/box-php/WB/php/register.php'
    url: 'http://localhost/box-php/WB/dist/php/register.php'

    type: 'post'
    params:
    type: add 注册
    user: 账号
    pass: 密码
    return: '{"err":2,"msg":"注册成功"}'
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

    if ($type == 'add'){//注册
    // 先查询数据库是否已有此账号
    $search_sql = "select * from account where username='$username'";
    // 执行sql语句
    $res1 = mysqli_query($link,$search_sql);
    $res_arr1 = mysqli_fetch_all($res1);
    if (count($res_arr1) > 0) {
    echo '{"err":-2,"msg":"该账号已被占用"}';
    } else {
    // 可以注册 添加数据
    $add_sql = "insert into account(username,password) value('$username','$password')";
    $add_res = mysqli_query($link,$add_sql);
    if ($add_res) {
    echo '{"err":2,"msg":"注册成功"}';
    } else {
    echo '{"err":-3,"msg":"注册失败"}';
    }
    }
    } else {
    echo '{"err":-9,"msg":"参数错误"}';
    }
    // 关闭数据库连接
    mysqli_close($link);

    ?>
</body>
</html>