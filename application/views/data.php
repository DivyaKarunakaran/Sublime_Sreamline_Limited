<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel = "stylesheet" type = "text/css"   href = "<?php base_url(); ?>public/css/style.css">
     
	

</head>
<body>

<div id="container">
	<h1>Server Data by Divya Karunakaran</h1>

	<div id="body">

        <!-- server name list -->
        <?php if ($serverlist != null) {?>
        <select id="server-list">
            <?php foreach ($serverlist as $servername) {?>
            <option value="<?php	echo ($servername); ?>"><?php	echo ($servername); ?></option>
            <?php } ?>
        </select>
        <?php } ?>

        <!-- chart area -->
        <div id="chartdiv">
        </div>
	</div>

	<p class="footer">Page rendered in <strong>{elapsed_time}</strong> seconds</p>
</div>

<!-- import javascript libraries -->
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="https://www.amcharts.com/lib/3/serial.js"></script>
<script type = 'text/javascript' src = "<?php base_url(); ?>public/js/script.js"></script>



</body>
</html>