 var head = document.getElementsByTagName('head')[0];
 var body = document.body;
 var header = document.getElementsByTagName('header')[0];
 var nav = document.getElementsByTagName('nav')[0];
 var main = document.getElementsByTagName('main')[0];
 var h1 = document.getElementsByTagName('h1')[0];
 var par = document.getElementsByTagName('p')[0];
 var h2 = document.getElementsByTagName('h2')[0];
 var blockquote = document.getElementsByTagName('blockquote')[0];
 var h3 = document.getElementsByTagName('h3')[0];
 var Li = document.querySelectorAll('main > ul > li');
 var footerSpan = document.querySelectorAll('footer > nav > span');
 var script = document.createElement('script');
 var scriptContent = document.createElement('script');
 
 
 scriptContent.src = 'data/content.json';
 script.src = "data/nav.json";
 body.appendChild(script);
 body.appendChild(scriptContent);

 function content(info) {
 par.innerHTML = info.p;
 h1.innerHTML = info.h1;
 h2.innerHTML = info.h2;
 h3.innerHTML = info.h3;
 blockquote.innerHTML = info.blockquote;
    
 var firstLink = document.getElementsByTagName('li')[18];
   firstLink.innerHTML = info.list[0].content;
 var secondLink = document.getElementsByTagName('li')[19];
   secondLink.innerHTML = info.list[1].content;
 var thirdLink = document.getElementsByTagName('li')[20];
   thirdLink.innerHTML = info.list[2].content;
  
 var ul = main.getElementsByTagName('ul')[0];
 var listHTML = '';
   for (var a = 0; a < info.list.length; a++) {
      listHTML += '<li>' + info.list[a].content + '</li>';
     
 
   }}
    

 


function headerNav(_nav) {
   
 var navigation = '<ul>';
 
   
   for (var i = 0; i <_nav.items.length; i++) {

       
      if (_nav.items[i].items.length > 0) {

         navigation += '<li> <a href=" '+ _nav.items[i].url+' ">';
         navigation += _nav.items[i].label + '</a>';
         navigation += '<ul>';
 
         for (var a = 0 ; a < _nav.items[i].items.length; a++)  {
           navigation += '<li> <a href=" ' + _nav.items[i].items[a].url + ' ">' ;
           navigation += _nav.items[i].items[a].label + '</a></li>' ;
 
       }
       // create another ul
         navigation += '</ul>';
 
       } else {
 
 // make another for loop
         navigation += '<li> <a href=" '+ _nav.items[i].url+' ">';
        navigation += _nav.items[i].label + '</a></li>' ;
       }
 
     } 
      

         
         
        // after for loop close ul
         
 
      navigation += '</ul>';
      nav.innerHTML = navigation;
   }

var socialMedia = {
     icons: ['facebook', 'twitter', 'instagram', 'youtube']
 };
 
 for (var i = 0; i < footerSpan.length; i++) {
      var span = '';
      span += '<a href="#"><i class="fa fa-';
      span += socialMedia.icons[i];
      span += '" aria-hidden="true"></i></a>';
      footerSpan[i].innerHTML = span;
 }