dropfy - Custom Select DropDown
==========

Plugin desenvolvido para customizar selects drop-down a partir da tag *<select>*.

Vantagens de usar o Dropfy:
* Desenvolvidor para ser Acessível
* Suporte para navegadores Antigos

Confira o [Demo]

## Dependências
>  jQuery, versão >= 1.10.x 

## Use

Usar o Dropfy é mais simple que se imagina, segue o passo a passo:

Inclua o CSS em seu projeto:

```html
 <link href='css/dropfy.css' rel='stylesheet'>
```

Inclua o JavaScript em seu projeto:

```html
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="js/dropfy-2.0.js"></script>  
```

HTML, declare uma class a sua escolha em seu select(tag):

```html 
<select class='mySelectTheme'>
    <option value='norte'>Norte</option>
    <option value='nordeste'>Nordeste</option>
    <option value='centro-oeste'>Centro-Oeste</option>
    <option value='sudeste'>Sudeste</option>
    <option value='sul'>Sul</option>
</select>
```
JavaScript, chame o metodo dropfy():

```javascript
<script type="text/javascript">
    $(".mySelectTheme").dropfy();                     
</script>
```

## Documentação

### Métodos

**onChange** : Captura o valor selecionado, exemplo:

```javascript
 $(".mySelectTheme").dropfy({
      onChange : function(value){
          console.log(value)
      }
  }); 
```

###### Créditos
iG Developers Team
