/*!
* jQuery dropfy
* Author: iG Team
*/

(function($){

	$.fn.dropfy = function (options){
		return this.each(function(){

		var 

				_combobox  	   		= $(this).hide(),
				_comboTheme 	 		= $(this).attr('class'),
				_itemClass 	   		= '',
				_selected  	   		= $(this).find("option:selected").text(),
				_estrutura 	   		= $('<ul class="drop-extended"></ul>'),
				_itensBox  		 		= $('<div class="box-drop-extended"></div>')
															.append('<div class="drop-bg-topo"></div>')
															.append(_estrutura)
															.append('<div class="drop-bg-bottom"></div>')
															.hide(),
				_itemSelecionado 	= $('<div class="'+ _comboTheme +' box-drop fechado"></div>')
															.append('<a class="open-drop" href="#" id="currentItem">'+_selected+'</a>')
															.append(_itensBox),

				/* Event Handlers */
				eventHandlers = {
					changeValue :  function(e){
						e.preventDefault();
						var 
							_this  			= $(this),
							_value 			= _this.attr("data-value"),
							_origem			= _this.closest('ul').attr('data-value'),
							_selected 	= _this.closest('.box-drop').find('a.open-drop'),
							_selectItem = $("select[name="+_origem+"]");
						
							/* 
								Habilitando evento de click para o box-drop 
							*/
							_selected.html(_this.html()).trigger("click");
							_selectItem.val(_value);
							/* 
								O bind para essa função passa o parametro options (recebibo como e.data.opt) e cria o evento customizado
							*/
							e.data.opt.onChange.call(undefined,_value);
							
						return false
					},
					showOptions :  function(e){
						e.preventDefault();
						var 
							_this 	= $(this),
							_parent = _this.parent(),
							_classe = _parent.find('.box-drop-extended').parent().hasClass('box-drop fechado');
						/* 
							Se existir a classe 'box-drop fechado' exibimos o conteúdo e trocamos a classe para 'box-drop aberto' e vice-versa
						*/
						if(_classe){
							_parent.css('z-index','999').find(".box-drop-extended")
								.show()
								.parent()
								.removeClass("fechado")
								.addClass("aberto");
							_parent.find("li a:first").focus();
						}
						else{
							_parent.css('z-index','1').find(".box-drop-extended")
								.hide()
								.parent()
								.removeClass("aberto")
								.addClass("fechado");
						}
						return false
					}
				}

			/* 
				Nessa função você resgata a quantidade de options e insere na estrutura nova
				Para cada linha atribuida é colocada uma classe de forma alternada caso precise utilizar linhas com cores diferentes
			*/
			_combobox.find('option').each(function(indice, value){
				var __value = $(value).attr('value');
		
				indice%2 == 0 ? _itemClass = 'even' : _itemClass = 'odd';
				indice 	 == 1 ? _selected  = __value : '';
				
				_estrutura.append('<li class="'+_itemClass+'">'+
											  	'<a href="#" data-value="'+__value+'">'+
											  		$(value).html()+
											  	'</a>'+ 
											  '</li>');

			});					

			/* 
				funcão que abre e fecha a lista de opções - combobox 
			*/
			_itemSelecionado.find("a.open-drop").bind('click', eventHandlers.showOptions);

			/* 
				Adicionando evento para cada "option" - neste caso o template cria uma Lista e nosso item de click é o "A" 
			*/
			_itensBox.find("li a").bind('click', {opt: options}, eventHandlers.changeValue);

			/* 
				Insere a estrutura do select customizado antes do Select criado no HTML 
			*/
			_combobox.before(_itemSelecionado);
		});
	}
})(jQuery)