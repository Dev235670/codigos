const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200, { 'content-type': 'Text/html' });
    res.write(`
<!DOCTYPE html>
<html lang="en">
<!--Web App settings Zone-->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title> Password Creator </title>
    <style>
        /*Password Creator Css*/
        body {
            background-image: linear-gradient(90deg, rgb(1, 1, 1), rgb(1, 23, 1));
        }

        .content {
            margin-top: -192px;
            margin-left: 660px;
            text-align: center;
            background-color: rgb(65, 62, 62);
            width: 600px;
            padding: 20px;
            height: 10cm;
            border: none;
            font-size: 20px;
            border: solid rgb(56, 55, 55);
            background: transparent;
            border: none;
        }

        .content2 {
            margin-top: -422px;
            margin-left: -80px;
            text-align: center;
            background-color: rgb(65, 62, 62);
            width: 300px;
            padding: 22px;
            border: none;
            height: 4.9cm;
            font-size: 20px;
            border: solid rgb(56, 55, 55);
            border: none;
            background: transparent;
        }

        .main {
            border: none;
            margin-top: -80px;
            margin-left: -110px;
        }

        .ui {
            margin-top: 300px;
            border: none;
        }

        .ui2 {
            border: none;
            font-size: 20px;
            text-align: center;
            margin-left: 590px;
            margin-top: 20px;
            height: 200px;
            width: 200px;
        }

        .box {
            width: 350px;
            height: 134px;
            box-shadow: 9px 9px 9px black;
        }

        .numbers {
            background-color: darkgrey;
            font-size: 20px;
            margin-top: 3px;
            margin-left: 3px;
        }

        .uppercase {
            background-color: darkgrey;
            font-size: 20px;
            margin-top: 3px;
            margin-left: 3px;
            width: 26px;
        }

        .lowercase {
            background-color: darkgrey;
            font-size: 20px;
            margin-top: 3px;
            margin-left: 3px;
            width: 26px;
        }

        .clear {
            background-color: red;
            font-size: 20px;
            margin-top: 3px;
            margin-left: 3px;
            width: 54px;
        }

        .clear:hover {
            background-color: red;
        }

        .dev {
            margin-left: 80%;
        }

        .gpd {
            width: 20%;
        }

        #mudanca {
            color: white;
        }

        button {
            background-color: green;
            outline: none;
            cursor: pointer;
            box-shadow: 5px 5px 5px black;
            border: none;
            margin-left: 8px;
            padding: 4px;
            margin: 4px;
            border-radius: 5px;
        }

        button:hover {
            background-color: rgb(35, 142, 9);
            box-shadow: 5px 5px 5px grey;
        }

        textarea {
            resize: none;
            border: 5px solid rgb(35, 34, 34);
            height: 20px;
            margin-left: 23px;
            outline: none;
            box-shadow: 3px 3px 3px black;
            color: rgb(21, 116, 5);
            background-color: black;
            font-family: 'Monocraft';
            font-size: 17px;
            border: solid rgb(0, 0, 0);
            color: white;
        }

        input {
            border: 5px solid rgb(35, 34, 34);
            height: 20px;
            outline: none;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
            border: transparent;
            border-radius: 5px;
            margin: 4px;
            box-shadow: 6px 6px 6px black;
        }

        label {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            color: white;
        }

        legend {
            font-size: 50px;
            color: rgb(255, 255, 255);
            font-family: Arial, Helvetica, sans-serif;
        }

        a {
            font-size: 50px;
            color: rgb(0, 0, 0);
            font-family: 'Pixelify Sans', sans-serif;
        }

        h1 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 24px;
        }

        ::placeholder {
            font-family: 'Monocraft';
        }
    </style>
</head>

<body>
    <!--Password Security Levels Zone-->
    <fieldset class="main">
        <fieldset class="ui">
            <fieldset class="content">
                <h1 id="mudanca"><strong>To Complete your password, choose one of these :</strong></h1> <button
                    onclick="gerar_senha()"><strong>Normal Password</strong></button> <button
                    onclick="client_mode()"><strong>Client Password</strong></button> <button
                    onclick="modo_ultimato()"><strong>Ultimate Password</strong></button> <button
                    onclick="binary_mode()"><strong>Binary Password</strong></button> <button onclick="billgates_mode()"
                    style="background-color: rgb(61, 252, 43);"><strong>Bill Gates Password</strong></button> <button
                    onclick="military_mode()" style="background-color: rgb(0, 255, 0);"><strong>Military documents
                        Password</strong></button> <button onclick="area51_mode()"
                    style="background-color: rgb(0, 255, 0);"><strong>Area 51 Password</strong></button> <button
                    onclick="insane_mode()" style="background-color: orange;"><strong>Insane Password</strong></button>
                <button onclick="thanos_mode()" style="background-color: rgb(124, 2, 118);"><strong>Thanos
                        Password</strong></button> <button onclick="god_mode()"
                    style="background-color: rgb(124, 2, 118);"><strong>Gods Password</strong></button> <button
                    onclick="davidbaszucki_mode()" style="background-color: rgb(255, 0, 0);"><strong>ROBLOX CEO
                        Password</strong></button> <button onclick="fbi_mode()"
                    style="background-color: rgb(255, 0, 0);"><strong>FBI Password</strong></button> <button
                    onclick="google_datacenter()" style="background-color: rgb(0, 0, 0); color: white;"><strong>Google
                        Datacenter Password</strong> <button onclick="google_database()"
                        style="background-color: rgb(0, 0, 0); color: white;"><strong>Google Database Password</strong>
            </fieldset>
            <!--Password Definition Zone-->
            <fieldset class="content2"> <label id="mudanca"><strong>Value:</strong></label> <input
                    id="uppercase"><b></b><br> <label id="mudanca"><strong>Value:</strong></label> <input
                    id="lowercase"><b></b><br> <label id="mudanca"><strong>Value:</strong></label> <input
                    id="numbers"><b></b><br> <label id="mudanca"><strong>Value:</strong></label> <input
                    id="simbols"><b></b> <br><br> <button onclick="limpar_senha()"
                    style="background-color: rgb(212, 255, 0);"><strong>Clear Password</strong></button> <button
                    onclick="limpar_dados()" style="background-color: rgb(229, 255, 0);"><strong>Clear
                        Data</strong></button><br> <button onclick="message1()"
                    style="background-color: rgb(0, 174, 255);"><strong>Password Level By Colors</strong></button><br>
                <button onclick="message3()"
                    style="background-color: rgb(51, 0, 255);"><strong>Developer</strong></button> <button
                    onclick="message4()" style="background-color: rgb(51, 0, 255);"><strong>How it
                        Works?</strong></button><br>
                <fieldset class="ui2"><br>
                    <h1 id="mudanca" style="margin-top: 2px; margin-left: 20px;"><strong>Your Password Is:</strong></h1>
                    <textarea class="box" id="password-created" placeholder="[password]"></textarea>
                </fieldset>
            </fieldset>
        </fieldset><br><br>
    </fieldset>
</body>
<script>
    function message4() {
        alert(
            "you put any type of value on the input then you choose which button click to create a massive password using your values plus the data which will combine from the source code."
        )
    }

    function message3() {
        alert("Password Creator made by Anthony2356")
    }

    function message1() {
        alert("DARK GREEN [NORMAL OU GREAT PASSWORD] [LOW LEVEL --> INTERMEDIARY LEVEL]") alert(
            "LIGHT GREEN [NORMAL OU SPECIAL PASSWORD] [INTERMEDIARY LEVEL --> STRONGEST LEVEL]") alert(
            "ORANGE [POWERFUL PASSWORD] [STRONGEST LEVEL --> MILITARY LEVEL]") alert(
            "GREEN [MILITARY PASSWORD] [MILITARY LEVEL --> GOD LEVEL]") alert(
            "PURPLE [GODNESS PASSWORD VERY POWERFUL AND STRONG] [GOD LEVEL --> IMPOSSIBLE LEVEL]") alert(
            "RED [UNBREAKABLE PASSWORD, VERY BIG AND COMPLEX] [(UNBREAKBALE TO IMPOSSIBLE) LEVEL --> IAAS LEVEL [INFRASTRUCTURE PASSWORD] LEVEL]"
        ) alert(
            "BLACK & WHITE [INFRASTRUCTURE LEVEL, UNBREAKABLE, COMPLEX, GIANT PASSWORDS,] [THIS IS THE MOST STRONGEST PASSWORDS O_O]"
        )
    } // Password Area 
    function gerar_senha() {
        let numbers = document.getElementById('numbers').value;
        let uppercase =
            document.getElementById('uppercase').value;
        let lowercase = document.getElementById('lowercase').value;
        let symbols =
            document.getElementById('simbols').value;
        document.getElementById('password-created').value = uppercase + symbols +
            numbers + symbols + lowercase + uppercase + symbols + lowercase;
    }

    function military_mode() {
        let numbers =
            document.getElementById('numbers').value;
        let uppercase = document.getElementById('uppercase').value;
        let lowercase =
            document.getElementById('lowercase').value;
        let symbols = document.getElementById('simbols').value;
        let twodots = ":::";
        let pi = 3.14159265358 * Math.random(0, 1);
        let random_sequence1 = Math.random(0, 1);
        let random_sequence2 =
            Math.random(0, 1);
        let random_sequence3 = Math.random(0, 1);
        let ayo_wtf = random_sequence1 * numbers * random_sequence2 *
            numbers * random_sequence3 * Math.random(0, 1) let wtf = twodots + random_sequence1 * random_sequence2 *
                random_sequence3 + pi + twodots + twodots;
        let wtf3 = twodots + random_sequence1 * random_sequence2 * random_sequence3 +
            pi + twodots + twodots * wtf + ayo_wtf
        let insane = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + uppercase + symbols + wtf +
            ayo_wtf + numbers +
            symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf +
            wtf +
            ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf +
            wtf + ayo_wtf +
            numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) +
            symbols + wtf +
            wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let thanos = uppercase +
            symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf +
            symbols +
            uppercase uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase +
            wtf +
            ayo_wtf + symbols + uppercase + uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase +
            ayo_wtf +
            lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf +
            lowercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf +
            ayo_wtf + wtf +
            uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + insane;
        let thanos2 = thanos + insane + wtf3;
        let anonymous_mode = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf +
            lowercase + wtf + uppercase +
            lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf +
            lowercase + wtf +
            ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf +
            lowercase + wtf +
            ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase +
            ayo_wtf + lowercase +
            wtf + ayo_wtf + wtf;
        let binary_mode =
            ("010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010")
        document.getElementById('password-created').value = thanos2 + anonymous_mode + binary_mode
    }

    function insane_mode() {
        let numbers = document.getElementById('numbers').value * Math.random(0, 1);
        let uppercase =
            document.getElementById('uppercase').value;
        let twodots = ":::";
        let lowercase =
            document.getElementById('lowercase').value;
        let pi = 3.14159265358 * Math.random(0, 1);
        let symbols =
            document.getElementById('simbols').value;
        let random_sequence1 = Math.random(0, 1);
        let random_sequence2 =
            Math.random(0, 1);
        let random_sequence3 = Math.random(0, 1);
        let ayo_wtf = random_sequence1 * numbers * random_sequence2 *
            numbers * random_sequence3 * Math.random(0, 1) let wtf = twodots + random_sequence1 * random_sequence2 *
                random_sequence3 + pi + twodots + twodots;
        let wtf3 = twodots + random_sequence1 * random_sequence2 * random_sequence3 +
            pi + twodots + twodots * wtf + ayo_wtf document.getElementById('password-created').value = uppercase +
            symbols + wtf +
            ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase +
            uppercase +
            symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase +
            lowercase + (pi *
                pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf +
            ayo_wtf + wtf +
            lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf +
            ayo_wtf + lowercase +
            (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf +
            ayo_wtf +
            wtf + uppercase + symbols + wtf + wtf3 + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf +
            lowercase + wtf +
            ayo_wtf + symbols + uppercase + uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase +
            ayo_wtf +
            lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf +
            lowercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf +
            ayo_wtf + wtf +
            uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf * uppercase + symbols + wtf + ayo_wtf + numbers +
            symbols + wtf +
            lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + uppercase + symbols + wtf +
            ayo_wtf + numbers +
            symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf +
            wtf +
            ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf +
            wtf + ayo_wtf +
            numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) +
            symbols + wtf +
            wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
    }

    function god_mode() {
        let
            numbers = document.getElementById('numbers').value;
        let uppercase = document.getElementById('uppercase').value;
        let
            lowercase = document.getElementById('lowercase').value;
        let symbols = document.getElementById('simbols').value;
        let
            twodots = ":::";
        let pi = 3.14159265358 * Math.random(0, 1);
        let random_sequence1 = Math.random(0, 1);
        let
            random_sequence2 = Math.random(0, 1);
        let random_sequence3 = Math.random(0, 1);
        let ayo_wtf = random_sequence1 * numbers *
            random_sequence2 * numbers * random_sequence3 * Math.random(0, 1) let wtf = twodots + random_sequence1 *
                random_sequence2 * random_sequence3 + pi + twodots + twodots;
        let wtf3 = twodots + random_sequence1 * random_sequence2 *
            random_sequence3 + pi + twodots + twodots * wtf + ayo_wtf
        let insane = uppercase + symbols + wtf + ayo_wtf + numbers +
            symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + uppercase +
            symbols + wtf +
            ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi *
                pi) + symbols +
            wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf +
            lowercase + wtf +
            wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (
                pi * pi) +
            symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let thanos = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase +
            wtf + ayo_wtf +
            symbols + uppercase uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf +
            lowercase +
            wtf + ayo_wtf + symbols + uppercase + uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf +
            ayo_wtf + wtf +
            lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers +
            symbols + wtf +
            uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf +
            wtf + ayo_wtf +
            wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + insane;
        let thanos2 = thanos + insane + wtf3;
        let
            anonymous_mode = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf +
            lowercase + wtf +
            uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase +
            ayo_wtf +
            lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf + uppercase +
            ayo_wtf +
            lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        binary_mode =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) military_mode =
            thanos2 + anonymous_mode + binary_mode;
        military_mode2 = military_mode + thanos2 + anonymous_mode + binary_mode
        military_mode3 = military_mode2 + military_mode + thanos2 + anonymous_mode + binary_mode + anonymous_mode +
            binary_mode
        binary_mode1 =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) binary_mode2 =
            ("010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010")
        binary_mode3 =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) binary_mode4 =
            ("010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010")
        binary_mode5 =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) binary_mode6 =
            ("010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010")
        binary_mode10 =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) binary_mode15 =
            ("010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010")
        document.getElementById('password-created').value = binary_mode15 + uppercase + lowercase + symbols +
            binary_mode10 +
            binary_mode4 + binary_mode2 + lowercase + symbols + binary_mode10 + numbers + uppercase + binary_mode3 +
            symbols +
            binary_mode1 + binary_mode3 + binary_mode5 + binary_mode6 + binary_mode1 + binary_mode10 + symbols +
            binary_mode1 +
            binary_mode10 + binary_mode1 + binary_mode10 + military_mode2 + binary_mode10 + binary_mode1 +
            binary_mode10 +
            binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
            binary_mode10 + binary_mode1 + military_mode3 + binary_mode1 + binary_mode10 + binary_mode1 +
            binary_mode10 +
            binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
            binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 +
            binary_mode1 + military_mode + binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
            binary_mode10
    }

    function fbi_mode() {
        let numbers = document.getElementById('numbers').value;
        let uppercase =
            document.getElementById('uppercase').value;
        let lowercase = document.getElementById('lowercase').value;
        let symbols =
            document.getElementById('simbols').value;
        let twodots = ":::";
        let pi = 3.14159265358 * Math.random(0, 1);
        let
            random_sequence1 = Math.random(0, 1);
        let random_sequence2 = Math.random(0, 1);
        let random_sequence3 = Math.random(0,
            1);
        let ayo_wtf = random_sequence1 * numbers * random_sequence2 * numbers * random_sequence3 * Math.random(0, 1) let
            wtf = twodots + random_sequence1 * random_sequence2 * random_sequence3 + pi + twodots + twodots;
        let wtf3 = twodots +
            random_sequence1 * random_sequence2 * random_sequence3 + pi + twodots + twodots * wtf + ayo_wtf
        let insane = uppercase +
            symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf +
            symbols +
            uppercase + uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf +
            lowercase + wtf +
            uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase +
            ayo_wtf +
            lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf + uppercase +
            ayo_wtf +
            lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let thanos = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase uppercase + symbols + wtf + ayo_wtf +
            numbers +
            symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + uppercase +
            symbols + wtf +
            ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi *
                pi) + symbols +
            wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf +
            lowercase + wtf +
            wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (
                pi * pi) +
            symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf +
            wtf + insane;
        let thanos2 = thanos + insane + wtf3;
        let anonymous_mode = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf +
            wtf +
            ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf +
            numbers +
            symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf +
            wtf + ayo_wtf +
            wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let binary_mode =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) let
                military_mode = thanos2 + anonymous_mode + binary_mode;
        let military_mode2 = military_mode + thanos2 + anonymous_mode +
            binary_mode
        let binary_mode2 =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) let
                binary_mode4 =
                (
                    "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                    ) let
                    binary_mode10 =
                    (
                        "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                        ) let
                        binary_mode15 =
                        (
                            "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                            ) let
                            matrix_mode = document.getElementById('password-created').value = binary_mode15 +
                            uppercase + lowercase + symbols +
                            binary_mode10 + binary_mode4 + binary_mode2 + lowercase + symbols + thanos2 + thanos +
                            anonymous_mode + thanos2 + thanos +
                            anonymous_mode + thanos2 + thanos + anonymous_mode + thanos2 + thanos + anonymous_mode +
                            thanos2 + thanos +
                            anonymous_mode + thanos2 + thanos + anonymous_mode + thanos2 + thanos + anonymous_mode +
                            thanos2 + thanos +
                            anonymous_mode + thanos2 + thanos + anonymous_mode + thanos2 + thanos + anonymous_mode +
                            thanos2 + thanos +
                            anonymous_mode + thanos2 + thanos + anonymous_mode + thanos2 + thanos + anonymous_mode +
                            thanos2 + thanos +
                            anonymous_mode + binary_mode15 + uppercase + lowercase + symbols + binary_mode10 +
                            binary_mode4 + binary_mode2 +
                            lowercase + symbols + thanos2 + thanos + anonymous_mode + thanos2 + thanos +
                            anonymous_mode + binary_mode15 +
                            binary_mode15 + binary_mode15 + binary_mode15 + binary_mode15 + binary_mode15 +
                            binary_mode15 + binary_mode15 +
                            binary_mode15 + binary_mode15 + binary_mode15 + binary_mode15 + binary_mode15 +
                            binary_mode15 + binary_mode15 +
                            binary_mode15 + binary_mode15 + anonymous_mode + anonymous_mode + anonymous_mode + thanos2 +
                            anonymous_mode +
                            anonymous_mode + military_mode2 + thanos2 + anonymous_mode + anonymous_mode + thanos2 +
                            anonymous_mode + anonymous_mode +
                            thanos2 + anonymous_mode + anonymous_mode + thanos2 + binary_mode15 + binary_mode15 +
                            binary_mode15 + binary_mode15 +
                            binary_mode15 + binary_mode15 + binary_mode15 console.log(matrix_mode)
    }

    function client_mode() {
        let numbers =
            document.getElementById('numbers').value;
        let uppercase = document.getElementById('uppercase').value;
        let lowercase =
            document.getElementById('lowercase').value;
        let symbols = document.getElementById('simbols').value;
        let
            security_random_number_sequence = Math.random(0, 9) document.getElementById('password-created').value =
            uppercase +
            symbols + numbers + numbers * security_random_number_sequence + symbols + lowercase +
            security_random_number_sequence +
            symbols + uppercase;
    }

    function binary_mode() {
        let numbers = document.getElementById('numbers').value;
        let uppercase =
            document.getElementById('uppercase').value;
        let lowercase = document.getElementById('lowercase').value;
        let symbols =
            document.getElementById('simbols').value;
        let binary_mode =
            ("010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010")
        document.getElementById('password-created').value = uppercase + symbols + binary_mode + numbers + symbols +
            binary_mode +
            lowercase + binary_mode + uppercase + symbols + lowercase;
    }

    function billgates_mode() {
        let numbers =
            document.getElementById('numbers').value;
        let uppercase = document.getElementById('uppercase').value;
        let lowercase =
            document.getElementById('lowercase').value;
        let symbols = document.getElementById('simbols').value;
        let
            security_random_number_sequence = Math.random(0, 9) let senha_complexa1 = uppercase + symbols + numbers +
                symbols +
                lowercase + security_random_number_sequence + symbols + lowercase + uppercase + symbols + uppercase +
                numbers + symbols +
                lowercase + uppercase + security_random_number_sequence + lowercase + uppercase + uppercase +
                numbers numbers +
                numbers + numbers + numbers + symbols + lowercase + uppercase + symbols + lowercase +
                security_random_number_sequence
        document.getElementById('password-created').value = senha_complexa1
    }

    function area51_mode() {
        let numbers =
            document.getElementById('numbers').value;
        let uppercase = document.getElementById('uppercase').value;
        let lowercase =
            document.getElementById('lowercase').value;
        let symbols = document.getElementById('simbols').value;
        let twodots = ":::";
        let pi = 3.14159265358 * Math.random(0, 1);
        let random_sequence1 = Math.random(0, 1);
        let random_sequence2 =
            Math.random(0, 1);
        let random_sequence3 = Math.random(0, 1);
        let ayo_wtf = random_sequence1 * numbers * random_sequence2 *
            numbers * random_sequence3 * Math.random(0, 1) let wtf = twodots + random_sequence1 * random_sequence2 *
                random_sequence3 + pi + twodots + twodots;
        let wtf3 = twodots + random_sequence1 * random_sequence2 * random_sequence3 +
            pi + twodots + twodots * wtf + ayo_wtf
        let insane = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + uppercase + symbols + wtf +
            ayo_wtf + numbers +
            symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf +
            wtf +
            ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf +
            wtf + ayo_wtf +
            numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) +
            symbols + wtf +
            wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let thanos = uppercase +
            symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf +
            symbols +
            uppercase uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase +
            wtf +
            ayo_wtf + symbols + uppercase + uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase +
            ayo_wtf +
            lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf +
            lowercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf +
            ayo_wtf + wtf +
            uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + insane;
        let thanos2 = thanos + insane + wtf3;
        let anonymous_mode = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf +
            lowercase + wtf + uppercase +
            lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf +
            lowercase + wtf +
            ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf +
            lowercase + wtf +
            ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase +
            ayo_wtf + lowercase +
            wtf + ayo_wtf + wtf;
        let binary_mode =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) let
                military_mode = thanos2 + anonymous_mode + binary_mode;
        let military_mode2 = military_mode + thanos2 + anonymous_mode +
            binary_mode
        let military_mode3 = military_mode2 + military_mode + thanos2 + anonymous_mode + binary_mode +
            anonymous_mode + binary_mode document.getElementById('password-created').value = military_mode3 +
            military_mode3
    }

    function davidbaszucki_mode() {
        let numbers = document.getElementById('numbers').value;
        let uppercase =
            document.getElementById('uppercase').value;
        let lowercase = document.getElementById('lowercase').value;
        let symbols =
            document.getElementById('simbols').value;
        let twodots = ":::";
        let pi = 3.14159265358 * Math.random(0, 1);
        let
            random_sequence1 = Math.random(0, 1);
        let random_sequence2 = Math.random(0, 1);
        let random_sequence3 = Math.random(0,
            1);
        let ayo_wtf = random_sequence1 * numbers * random_sequence2 * numbers * random_sequence3 * Math.random(0, 1) let
            wtf = twodots + random_sequence1 * random_sequence2 * random_sequence3 + pi + twodots + twodots;
        let wtf3 = twodots +
            random_sequence1 * random_sequence2 * random_sequence3 + pi + twodots + twodots * wtf + ayo_wtf
        let insane = uppercase +
            symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf +
            symbols +
            uppercase + uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf +
            lowercase + wtf +
            uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase +
            ayo_wtf +
            lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf + uppercase +
            ayo_wtf +
            lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let thanos = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase uppercase + symbols + wtf + ayo_wtf +
            numbers +
            symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + uppercase +
            symbols + wtf +
            ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi *
                pi) + symbols +
            wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf +
            lowercase + wtf +
            wtf + ayo_wtf + numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (
                pi * pi) +
            symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf +
            wtf + insane;
        let thanos2 = thanos + insane + wtf3;
        let anonymous_mode = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf +
            wtf +
            ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf +
            numbers +
            symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf +
            wtf + ayo_wtf +
            wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let binary_mode =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) let
                military_mode = thanos2 + anonymous_mode + binary_mode;
        let military_mode2 = military_mode + thanos2 + anonymous_mode +
            binary_mode
        let military_mode3 = military_mode2 + military_mode + thanos2 + anonymous_mode + binary_mode +
            anonymous_mode + binary_mode
        let binary_mode1 =
            (
                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                ) let
                binary_mode2 =
                (
                    "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                    ) let
                    binary_mode3 =
                    (
                        "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                        ) let
                        binary_mode4 =
                        (
                            "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                            ) let
                            binary_mode5 =
                            (
                                "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                                ) let
                                binary_mode6 =
                                (
                                    "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                                    ) let
                                    binary_mode10 =
                                    (
                                        "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                                        ) let
                                        binary_mode15 =
                                        (
                                            "010100101010010110011001100110101001101010100011001100010011001101000110001101010111010100010110001010"
                                            ) let
                                            matrix_mode = document.getElementById('password-created').value =
                                            binary_mode15 + uppercase + lowercase + symbols +
                                            binary_mode10 + binary_mode4 + binary_mode2 + lowercase + symbols +
                                            binary_mode10 + numbers + uppercase + binary_mode3 +
                                            symbols + binary_mode1 + binary_mode3 + binary_mode5 + binary_mode6 +
                                            binary_mode1 + binary_mode10 + symbols +
                                            binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 +
                                            military_mode2 + binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 +
                                            binary_mode1 + binary_mode10 + binary_mode1 + military_mode3 +
                                            binary_mode1 + binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 +
                                            binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + military_mode + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 +
                                            binary_mode1 + binary_mode10 + matrix_mode + military_mode +
                                            military_mode2 + military_mode3 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 +
                                            binary_mode1 + binary_mode10 + binary_mode1 + military_mode + binary_mode1 +
                                            binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 + matrix_mode + military_mode +
                                            military_mode2 + military_mode3 +
                                            binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 +
                                            binary_mode10 + binary_mode1 + binary_mode10 + binary_mode1 +
                                            military_mode + binary_mode1 + binary_mode10 +
                                            binary_mode1 + binary_mode10 + binary_mode1 + binary_mode10 + matrix_mode +
                                            military_mode + military_mode2 +
                                            military_mode3;
        console.log(matrix_mode)
    }

    function thanos_mode() {
        let numbers =
            document.getElementById('numbers').value * Math.random(0, 1);
        let uppercase =
            document.getElementById('uppercase').value;
        let twodots = ":::";
        let lowercase =
            document.getElementById('lowercase').value;
        let pi = 3.14159265358 * Math.random(0, 1);
        let symbols =
            document.getElementById('simbols').value;
        let random_sequence1 = Math.random(0, 1);
        let random_sequence2 =
            Math.random(0, 1);
        let random_sequence3 = Math.random(0, 1);
        let ayo_wtf = random_sequence1 * numbers * random_sequence2 *
            numbers * random_sequence3 * Math.random(0, 1) let wtf = twodots + random_sequence1 * random_sequence2 *
                random_sequence3 + pi + twodots + twodots;
        let wtf3 = twodots + random_sequence1 * random_sequence2 * random_sequence3 +
            pi + twodots + twodots * wtf + ayo_wtf
        let insane = uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf +
            lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + symbols + uppercase + uppercase + symbols + wtf +
            ayo_wtf + numbers +
            symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf +
            wtf +
            ayo_wtf + wtf + ayo_wtf + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf +
            wtf + ayo_wtf +
            numbers + symbols + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) +
            symbols + wtf +
            wtf + ayo_wtf + wtf + ayo_wtf + wtf + uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf;
        let thanos = uppercase +
            symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase + wtf + ayo_wtf +
            symbols +
            uppercase uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + lowercase + ayo_wtf + lowercase +
            wtf +
            ayo_wtf + symbols + uppercase + uppercase + symbols + wtf + ayo_wtf + numbers + symbols + wtf + uppercase +
            ayo_wtf +
            lowercase + wtf + uppercase + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf + ayo_wtf + wtf +
            lowercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + wtf + lowercase + wtf + wtf + ayo_wtf + numbers + symbols + wtf +
            uppercase +
            ayo_wtf + lowercase + wtf + ayo_wtf + lowercase + (pi * pi) + symbols + wtf + wtf + ayo_wtf + wtf +
            ayo_wtf + wtf +
            uppercase + ayo_wtf + lowercase + wtf + ayo_wtf + wtf + insane;
        let thanos2 = thanos + insane + wtf3;
        document.getElementById('password-created').value = thanos2
    }

    function modo_ultimato() {
        let numbers =
            document.getElementById('numbers').value;
        let uppercase = document.getElementById('uppercase').value;
        let twodots =
            ":::";
        let lowercase = document.getElementById('lowercase').value;
        let pi = 3.14159265358;
        let symbols =
            document.getElementById('simbols').value;
        let random_sequence1 = Math.random(0, 1);
        let random_sequence2 =
            Math.random(0, 1);
        let random_sequence3 = Math.random(0, 1);
        let wtf = twodots + random_sequence1 * random_sequence2 *
            random_sequence3 + pi + twodots + twodots;
        document.getElementById('password-created').value = uppercase + symbols +
            wtf + numbers + symbols + wtf + lowercase + uppercase + wtf + symbols + lowercase;
    }

    function google_datacenter() {
        let
            numbers = document.getElementById('numbers').value;
        let uppercase = document.getElementById('uppercase').value;
        let
            lowercase = document.getElementById('lowercase').value;
        let symbols = document.getElementById('simbols').value;
        let
            random_number_sequence1 = Math.random(0, 9) let random_number_sequence2 = Math.random(0, 9) let binary1 =
                (
                    "00010100011000110001100001100011010001001100100000110010001100010100110001100000110000011000110101100101101101110101"
                    )
        let binary2 =
            (
                "11010101001010100101010010011011011000110010100011001010001101011010100110001100011000110001100011010010100001100011"
                )
        let binary3 =
            (
                "01011010101011000111011011010001100011001100011100101001001011010101001101010101001101010001101010011001101010101101"
                )
        let protocol_ipv6_symbols = "::"
        let google_datacenter_password = document.getElementById('password-created').value =
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 +
            binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + numbers + symbols + uppercase + lowercase + symbols + uppercase + numbers +
            lowercase +
            numbers + lowercase + numbers + uppercase + numbers + symbols + uppercase + lowercase + symbols +
            uppercase + numbers +
            lowercase + numbers + lowercase + numbers + uppercase + numbers + symbols + uppercase + lowercase +
            symbols + uppercase +
            numbers + lowercase + numbers + lowercase + numbers + uppercase console.log(google_datacenter_password);
    }

    function
    google_database() {
        let numbers = document.getElementById('numbers').value;
        let uppercase =
            document.getElementById('uppercase').value;
        let lowercase = document.getElementById('lowercase').value;
        let symbols =
            document.getElementById('simbols').value;
        let random_number_sequence1 = Math.random(0, 9) let random_number_sequence2 =
            Math.random(0, 9) let binary1 =
                (
                    "00010100011000110001100001100011010001001100100000110010001100010100110001100000110000011000110101100101101101110101"
                    )
        let binary2 =
            (
                "11101101100101000011010100101101101001110100011000110110001100101010100001100011010110001111110011010101001010001101"
                )
        let binary3 =
            (
                "00001101101100101000000010101010101000000000000101010100010110100011010000110001000000000101010100101011000110100001"
                )
        let protocol_ipv6_symbols = "::"
        let google_database_password = document.getElementById('password-created').value =
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols + protocol_ipv6_symbols +
            protocol_ipv6_symbols +
            protocol_ipv6_symbols + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 +
            binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 + binary2 + binary3 + binary1 +
            binary2 + binary3 +
            binary1 + binary2 + binary3 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + random_number_sequence1 + random_number_sequence2 + random_number_sequence2 +
            random_number_sequence1 + numbers + symbols + uppercase + lowercase + symbols + uppercase + numbers +
            lowercase +
            numbers + lowercase + numbers + uppercase + numbers + symbols + uppercase + lowercase + symbols +
            uppercase + numbers +
            lowercase + numbers + lowercase + numbers + uppercase + numbers + symbols + uppercase + lowercase +
            symbols + uppercase +
            numbers + lowercase + numbers + lowercase + numbers + uppercase random_number_sequence1 +
            random_number_sequence2 +
            random_number_sequence2 + random_number_sequence1 + random_number_sequence1 + random_number_sequence2 +
            random_number_sequence2 + random_number_sequence1 + random_number_sequence1 + random_number_sequence2 +
            random_number_sequence2 + random_number_sequence1 + random_number_sequence1 + random_number_sequence2 +
            random_number_sequence2 + random_number_sequence1 + random_number_sequence1 + random_number_sequence2 +
            random_number_sequence2 + random_number_sequence1 + console.log(google_database_password);
    } // Cleaning Area 
    function limpar_dados() {
        document.getElementById('uppercase').value = "";
        document.getElementById('lowercase').value =
            "";
        document.getElementById('numbers').value = "";
        document.getElementById('simbols').value = "";
        alert('removing all
            inserted data in all the 4 inputs.
            ') } function limpar_senha() { alert('
            deleting created password...')
            document.getElementById("password-created").value = ""; alert('password deleted !')
        } // Validation Place function
        validacao() {
                let numbers = document.getElementById('numbers').value;
                let uppercase =
                    document.getElementById('uppercase').value;
                let lowercase = document.getElementById('lowercase').value;
                let symbols =
                    document.getElementById('simbols').value;
                let additional_info = ['0100101010100110101001101', math.random(0, 9), '::',
                    '3.14159265358', math.random(0, 1)
                ];
                let pass_created = document.getElementById('password-created').value = uppercase +
                    symbols + numbers + symbols + lowercase + uppercase + symbols + lowercase + pass;
                if (pass_created = additional_info) {
                    window.alert('validating...') window.alert('no errors')
                }
                if (pass_created = !additional_info) {
                    window.alert('validating...') window.alert(
                        'to finish the password creation, you need to use the buttons on the side
                        from the 4 inputs.
                        ') deleteAll() } function deleteAll(){ window.alert("deleting info...")
                        window.document.getElementById('uppercase').value = ""; window.document.getElementById(
                            'lowercase').value = ""; window.document.getElementById('numbers').value = ""; window
                        .document.getElementById('simbols').value = ""; window.document.getElementById(
                            'password-created').value = "";
                    }
                }
</script>

</html>`)
    res.end(console.log("[SERVER STATUS]: Online"));
});

server.listen(port, hostname, () => {
    console.log(`Servidor iniciado em http://${hostname}:${port}/`);
});