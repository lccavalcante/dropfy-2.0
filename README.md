dropfy-2.0
==========

Componente para customização de campos do tipo Select.
Utiliza a classe fornecida como Tema.


### HTML
```html
<!Doctype HTML>
<html>
	<head>
		<meta charset='utf-8'/>
		<title>Sample</title>
		<!-- CSS import -->
		<link href='css/dropfy.css' rel='stylesheet'>
		<!-- JS import -->
		<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
		<script src="js/dropfy-2.0.js"></script>		
	</head>
	<body>		
		<!-- custom select using Dropfy-V2 -->
		<select class='mySelectTheme'>
			<option value='norte'>Norte</option>
			<option value='nordeste'>Nordeste</option>
			<option value='centro-oeste'>Centro-Oeste</option>
			<option value='sudeste'>Sudeste</option>
			<option value='sul'>Sul</option>
		</select>
		<script type="text/javascript">
			$(".mySelectTheme").dropfy({
				onChange : function(value){
					console.log(value)
				}
			}); 					
		</script>
	</body>
</html>
```

### CSS

```css
/* line 14, ../sass/custom.sass */
* {
  outline: none;
}

/* line 17, ../sass/custom.sass */
.box-drop.mySelectTheme {
  float: left;
  background: url(../images/bg-combobox.png) repeat-x left bottom;
  width: 160px;
  height: auto;
  font-family: "MuseoSans300";
  font-size: 16px;
  margin: 0;
  line-height: 35px;
  padding-left: 10px;
  border: 1px solid #ebebec;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  outline: none;
}
/* line 34, ../sass/custom.sass */
.box-drop.mySelectTheme a.open-drop {
  display: block;
  color: #324e69;
  background: url(../images/arrow-down.png) no-repeat 92% center;
  text-decoration: none;
  width: 100%;
  padding: 0;
  text-transform: none;
}
/* line 43, ../sass/custom.sass */
.box-drop.mySelectTheme .box-drop-extended {
  position: absolute;
  width: 100%;
  max-height: 180px;
  overflow-x: hidden;
  overflow-y: auto;
  top: 32px;
  left: -1px;
  background: white;
  border-left: 1px solid #ebebec;
  border-right: 1px solid #ebebec;
  -webkit-border-bottom-right-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  -moz-border-radius-bottomright: 4px;
  -moz-border-radius-bottomleft: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
/* line 62, ../sass/custom.sass */
.box-drop.mySelectTheme .box-drop-extended ul {
  height: 177px;
}
/* line 65, ../sass/custom.sass */
.box-drop.mySelectTheme .drop-extended {
  margin: 0;
  padding: 0;
}
/* line 69, ../sass/custom.sass */
.box-drop.mySelectTheme .drop-extended li {
  float: left;
  width: 100%;
  background: white;
  border: 1px solid #dddddd;
  border-bottom: none;
  border-left: none;
}
/* line 77, ../sass/custom.sass */
.box-drop.mySelectTheme .drop-extended li a {
  float: left;
  color: #324e69;
  font-size: 14px;
  padding: 0 0 0 10px;
  text-transform: none;
  border-bottom: 1px solid #ebebec;
  text-decoration: none;
  width: 100%;
}
/* line 87, ../sass/custom.sass */
.box-drop.mySelectTheme .box-drop-extended li a:hover {
  background: #fafafa;
}
/* line 90, ../sass/custom.sass */
.box-drop.mySelectTheme .drop-bg-bottom {
  display: none;
}
/* line 94, ../sass/custom.sass */
.box-drop.mySelectTheme .drop-extended {
  list-style: none;
  left: 0;
}
```
