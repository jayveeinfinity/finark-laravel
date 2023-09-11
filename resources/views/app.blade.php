<!DOCTYPE html>
<html>
    <head>
        <!-- Meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <!-- <title>FinArk &sdot; Transforming the way financial advisory is done</title>
        <link rel="canonical" href="http://fin-ark.com/"> -->
        <!-- Main meta tags -->
        <!-- <meta name="description" content="We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs." />
        <meta name="author" content="John Vincent Bonza - Full Stack Developer - Infinity Solutions former Infinity Brackets">
        <meta name="keywords" content="financial, advisory, insurance, partners, life, finark, clients, solutions, financial advisory, insurance partners, we provide, advisory practice, financial consultants, support them, advisory firm"> -->

        <!-- Social media meta tags -->
        <!-- <meta property="og:title" content="FinArk &sdot; Transforming the way financial advisory is done">
        <meta property="og:description" content="We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs.">
        <meta property="og:image" itemprop="image" content="http://fin-ark.com/storage/images/brands/logo-banner.png">
        <meta property="og:url" content="http://fin-ark.com/">
        <meta property="og:type" content="website"> -->
        <!-- Twitter meta tags -->
        <!-- <meta property="twitter:title" content="FinArk &sdot; Transforming the way financial advisory is done">
        <meta property="twitter:description" content="We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs.">
        <meta property="twitter:image" content="http://fin-ark.com/storage/images/brands/logo-banner.png">
        <meta content="summary_large_image" name="twitter:card"> -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Custom CSS and Boostrap -->
        <link rel="icon" type="image/png" href="{{ asset('storage/images/brands/logo.png') }}">
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <link href="{{ mix('/css/custom.css') }}" rel="stylesheet" />

        <!-- Argon CSS -->
        <link type="text/css" href="{{ asset('css/argon.css?v=1.0.0') }}" rel="stylesheet">
        <!-- Finark CSS -->
        <link type="text/css" href="{{ asset('css/finark.css') }}" rel="stylesheet">

        <!-- Javascripts -->
        <script src="{{ mix('/js/app.js') }}" defer></script>
        <script src="{{ mix('/js/manifest.js') }}" defer></script>
        <script src="{{ mix('/js/vendor.js') }}" defer></script>

        <!-- Title and Meta tags -->
        @inertiaHead
    </head>
    @inertia
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</html>