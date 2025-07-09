<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return view('auth.login');
});

Route::get('/support', function () {
    return view('auth.support');
});

Route::get('/forgot', function () {
    return view('auth.forgot');
});

Route::get('/verify', function () {
    return view('auth.verify');
});

Route::get('/reset', function () {
    return view('auth.reset');
});

Route::get('/student', function () {
    return view('layouts.student');
});

Route::get('/home', function () {
    return view('dashboard.student.home');
});

Route::get('/scan', function () {
    return view('dashboard.student.scan');
});

Route::get('/attendance', function () {
    return view('dashboard.student.attendance');
});