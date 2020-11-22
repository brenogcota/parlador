<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
*/


$router->get('/', ['middleware' => 'auth', function () {
    return "hello world";
}]);


$router->group(['middleware' => 'auth'], function () use ($router) {

    $router->get('user/index', 'UserController@index');
    $router->get('user/show', 'UserController@show');
    $router->put('user/update', 'UserController@update');
    $router->delete('user/delete', 'UserController@destroy');

    $router->get('posts/index', 'PostController@index');
    $router->post('posts/store', 'PostController@store');
    $router->get('posts/show/{id}', 'PostController@show');
    $router->put('posts/update/{id}', 'PostController@update');
    $router->delete('posts/delete/{id}', 'PostController@delete');
    
});


// Reset password
$router->post('sendforgotpasswordmail', 'ResetPasswordController@sendForgotPasswordMail');
$router->get('forgotpassword', 'ResetPasswordController@create');
$router->post('resetpassword', [
    'as' => 'resetpassword', 'uses' => 'ResetPasswordController@resetPassword'
]);

// Auth
$router->post('user/signin', ['middleware' =>  'verify_email', 'uses' => 'RegisterController@signIn']);
$router->post('user/signup', 'RegisterController@signUp');
$router->get('user/verifyemail', 'VerifyEmailController@verifyEmail');
$router->get('user/resendmail', 'VerifyEmailController@resendMail');

