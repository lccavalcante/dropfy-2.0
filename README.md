dropfy-2.0
==========

Componente para customização de campos do tipo Select

/*
  Estrutura gerada pelo Plugin Dropfy 2.0
  
  -- mySelectTheme é a classe utilizada pelo Sass para toda customização
*/
<div class="mySelectTheme box-drop fechado">
	<a class="open-drop" href="#" id="currentItem">Norte</a>
	<div class="box-drop-extended" style="display: none;">
		<div class="drop-bg-topo"></div>
		<ul class="drop-extended">
			<li class="even">
				<a href="#" data-value="norte">Norte</a>
			</li>
			<li class="odd">
				<a href="#" data-value="nordeste">Nordeste</a>
			</li>
			<li class="even">
				<a href="#" data-value="centro-oeste">Centro-Oeste</a>
			</li>
			<li class="odd">
				<a href="#" data-value="sudeste">Sudeste</a>
			</li>
			<li class="even">
				<a href="#" data-value="sul">Sul</a>
			</li>
		</ul>
		<div class="drop-bg-bottom"></div>
	</div>
</div>

/*
  Utilização no HTML
*/
<select class='mySelectTheme'>
			<option value='norte'>Norte</option>
			<option value='nordeste'>Nordeste</option>
			<option value='centro-oeste'>Centro-Oeste</option>
			<option value='sudeste'>Sudeste</option>
			<option value='sul'>Sul</option>
</select>

/*
  Chamada JS para o plugin
  o onChange traz o dado do VALUE do option selecionado
*/
<script type="text/javascript">
	$(".mySelectTheme").dropcustom({
		onChange : function(value){
			console.log(value) // value do option
		}
	}); 					
</script>
