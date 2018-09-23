<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="ThemeStarz" />

        <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css' />
        <link href="assets/fonts/font-awesome.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/bootstrap-select.min.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/jquery.slider.min.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/owl.transitions.css" type="text/css" />
        <link rel="stylesheet" href="assets/css/style.css" type="text/css" />

        <title>Nekretnine</title>
       
    </head>
    <body class="page-homepage map-google horizontal-search-float" id="page-top" data-spy="scroll" data-target=".navigation" data-offset="90">
      <div className="wrapper">
        <div id="root"></div>
        <script src="{{ mix('js/app.js') }}"></script>
        <script type="text/javascript" src="assets/js/jquery-2.1.0.min.js"></script>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="assets/js/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="assets/js/smoothscroll.js"></script>
        <script type="text/javascript" src="assets/js/markerwithlabel_packed.js"></script>
        <script type="text/javascript" src="assets/js/infobox.js"></script>
        <script type="text/javascript" src="assets/js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap-select.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.validate.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.placeholder.js"></script>
        <script type="text/javascript" src="assets/js/icheck.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.vanillabox-0.1.5.min.js"></script>
        <script type="text/javascript" src="assets/js/retina-1.1.0.min.js"></script>
        <script type="text/javascript" src="assets/js/jshashtable-2.1_src.js"></script>
        <script type="text/javascript" src="assets/js/jquery.numberformatter-1.2.3.js"></script>
        <script type="text/javascript" src="assets/js/tmpl.js"></script>
        <script type="text/javascript" src="assets/js/jquery.dependClass-0.1.js"></script>
        <script type="text/javascript" src="assets/js/draggable-0.1.js"></script>
        <script type="text/javascript" src="assets/js/jquery.slider.js"></script>
        <script type="text/javascript" src="assets/js/markerclusterer_packed.js"></script>
        <script type="text/javascript" src="assets/js/custom-map.js"></script>
        <script type="text/javascript" src="assets/js/custom.js"></script>
<!--[if gt IE 8]>
<script type="text/javascript" src="assets/js/ie.js"></script>
<![endif]-->
<script>
    _latitude = 44.807197;
    _longitude = 20.457273;
    createHomepageGoogleMap(_latitude,_longitude);
    $(window).load(function(){
        initializeOwl(false);
    });
</script>
</div>
    </body>
</html>