<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Default Title')</title>
    <link rel="stylesheet" href="{{ asset('assets/global/style.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/auth/style.css')}}">
</head>
<body>

    <div class="main">
        @yield('content')
    </div>
    
    <script src="{{ asset('assets/global/app.js')}}"></script>
    <script src="{{ asset('assets/auth/app.js')}}"></script>
</body>
</html>