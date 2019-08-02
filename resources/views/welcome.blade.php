<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    <style>
     body{
         font-family: 'Times New Roman', Times, serif;
     }
    </style>
    </head>
    <body>
       <div id="app">
         
            <router-view></router-view>
       </div>


    </body>
</html>
