@extends('layouts.auth')

@section('title', 'SETEC Institute - Atd Login')

@section('content')
    <div class="auth">
        <div class="logo">
            <img src="{{ asset('assets/global/images/logo.png')}}">
        </div>
        <div class="form-box">
            <h2 class="form-title">Login</h2>
            <form action="">
                <div class="form-row">
                    <span class="action-label">Email</span>
                    <input type="email" id="email" name="email" class="form-control">
                </div>
                <div class="form-row">
                    <span class="action-label">Password</span>
                    <input type="password" id="password" name="password" class="form-control">
                </div>
                <button type="submit">Login</button>
            </form>
            <div class="link-support">
                <div>Trouble with login?</div>
                <a href="{{ url('/support')}}">Click here</a>
            </div>
        </div>
    </div>
@endsection
