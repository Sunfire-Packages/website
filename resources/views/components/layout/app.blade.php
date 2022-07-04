<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <x-favicon/>

    @if (isset($canonical))
        <link rel="canonical" href="{{ url($canonical) }}">
    @endif

    <title>{{ isset($title) ? $title . ' - ' : null }}Sunfire - The Toolbox For Web Artisans</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>

<body class="antialiased bg-black">
<div class="min-h-screen flex">

    <!-- Page Content -->
    <main class="flex-1">
        {{ $slot }}
    </main>
</div>

@include('sun-cookie::index')
</body>
</html>
