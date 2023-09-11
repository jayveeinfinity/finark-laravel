<!DOCTYPE html>
<html class="bg-landing-image">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Dashboard - FinArk</title>
        <link rel="icon" type="image/png" href="{{ asset('storage/images/brands/logo.png') }}">
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <link href="{{ mix('/css/admin.css') }}" rel="stylesheet" />
        <link href="{{ mix('/css/custom.css') }}" rel="stylesheet" />
        <script src="{{ mix('/js/app.js') }}" defer></script>
        <script src="{{ mix('/js/manifest.js') }}" defer></script>
        <script src="{{ mix('/js/vendor.js') }}" defer></script>
        <!-- Argon CSS -->
        <!-- <link type="text/css" href="{{ asset('css/argon.css?v=1.0.0') }}" rel="stylesheet"> -->
        <!-- Finark CSS -->
        <link type="text/css" href="{{ asset('css/finark.css') }}" rel="stylesheet">
        
        @inertiaHead
    </head>
    @inertia
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</html>