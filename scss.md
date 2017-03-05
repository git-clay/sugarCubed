variables: store attribute to a word (only need to change in one spot instead of dozens)
	$font-stack:    Helvetica, sans-serif;
	$primary-color: #333;

	body {
		font: 100% $font-stack;
		color: $primary-color
	}



nesting: exclusive rules only inside a given tag
	nav {
		ul{
			margin:0;
		}
		li {
			color: red; //exclusive to nav
		}
	}
	li {
		color: blue; //wont affect what is in nav
	}


mixins: functions to dry code.
	@mixin border-radius($radius){
		-webkit-border-radius: $radius;
		-moz-border-radius: $radius;
		-ms-border-radius: $radius;
		border-radius: $radius;
	}

	.panel{
		@include border-radius(5px);
	}


utilities:



extend/inheritance: like a constructor
	$buttonPadding: 5px;
	$buttonBackground: red;
	.button {
		background: $buttonBackground;
		color: black;
		padding: $buttonPadding;
	}
	.jumbo-button{
		@extend .button;
		padding: $buttonPadding + 30;
	}
	.light-button{
		@extend .button;
		background: $buttonBackground * 1.5;
	}


operators: Math in css
		background: $buttonBackground * 1.5; //>1=brighter, <1=darker
		//good for :hover


		.container { width: 100%; }
		article[role="main"] {
		  float: left;
		  width: 600px / 960px * 100%;
		}
		aside[role="complementary"] {
		  float: right;
		  width: 300px / 960px * 100%;
		}


partials: file snippet to clean up code (_partial.scss) then imported into another file (@import partial)


