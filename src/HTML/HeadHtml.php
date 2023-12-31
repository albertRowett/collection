<?php

namespace Collection\HTML;

class HeadHtml
{
    public function display(): void
    {
        echo
        '<head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <title>Grand Tour GC Riders</title>

            <meta name="description" content="Template HTML file">
            <meta name="author" content="iO Academy">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
            <link rel="stylesheet" href="css/styles.css">

            <link rel="icon" href="images/favicon.png" sizes="192x192">
            <link rel="shortcut icon" href="images/favicon.png">
            <link rel="apple-touch-icon" href="images/favicon.png">

            <script defer src="js/index.js"></script>
        </head>';
    }
}
