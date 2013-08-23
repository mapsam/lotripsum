<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>LOTR Ipsum</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
<div id="top">
	<div class="wrap">
		<nav>
			<h1>LOTR Ipsum</h1>
			<h2>Filler text straight from Middle-Earth</h2>
			<form id="form" name="form">
			<p>Add:
			<button id="add" type="submit" value="Add Lotripsum">LOTRipsum</button>
			<button id="add-ul" type="submit" value="Add Unordered List">Unordered List</button>
			<button id="add-ol" type="submit" value="Add Ordered List">Ordered List</button></p>
			<p>Remove:
			<button id="removeSingle" type="submit" value="Remove One">Remove One</button>
			<button id="removeAll" type="submit" value="Remove All">Remove All</button></p>
			<!-- <button id="raw" type="submit" value="Remove All">< ></button></p> -->
			</form>
		</nav>
	</div>
</div>

<div id="bottom">
	<div class="wrap">
		<section id="text"></section>
	<div>
</div>

<script src="lists.js"></script>
<script src="main.js"></script>


</body>
</html>