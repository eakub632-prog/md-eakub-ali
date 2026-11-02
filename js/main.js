(function(){
  var $=function(i){return document.getElementById(i)},r=document.documentElement;
  var tr=[].slice.call(document.querySelectorAll('[data-bn]'));
  tr.forEach(function(e){e.setAttribute('data-en',e.textContent)});
  var links=[].slice.call(document.querySelectorAll('[data-id]')),lang=$('lang'),th=$('theme'),nav=$('nav'),menu=$('menu');
  var EN='Md. Eakub Ali – Persian Language & Literature Graduate, University of Rajshahi',BN='মোঃ ইয়াকুব আলী – ফারসি ভাষা ও সাহিত্য, রাজশাহী বিশ্ববিদ্যালয়';
  function apply(l){
    r.dataset.lang=l;r.lang=l;
    tr.forEach(function(e){e.textContent=e.getAttribute(l==='bn'?'data-bn':'data-en')});
    links.forEach(function(a){a.setAttribute('href','#'+a.dataset.id+(l==='bn'?'-bn':''))});
    lang.textContent=l==='bn'?'English':'বাংলা';
    document.title=l==='bn'?BN:EN;
  }
  var l='en';try{l=localStorage.getItem('portfolio-lang')||'en'}catch(e){}
  apply(l);
  lang.addEventListener('click',function(){
    l=r.dataset.lang==='bn'?'en':'bn';apply(l);
    try{localStorage.setItem('portfolio-lang',l)}catch(e){}
  });
  th.addEventListener('click',function(){
    var dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    r.dataset.theme=dark?'light':'dark';
  });
  menu.addEventListener('click',function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
  var bar=$('progress'),tb=$('top-btn'),tick=false;
  function onScroll(){
    var h=r.scrollHeight-r.clientHeight,y=window.scrollY;
    bar.style.width=(h>0?y/h*100:0)+'%';
    tb.classList.toggle('show',y>700);
    var cur='';
    links.forEach(function(a){
      if(a.closest('nav')===null)return;
      var el=document.getElementById(a.getAttribute('href').slice(1));
      if(el&&el.offsetParent!==null&&el.getBoundingClientRect().top<=140)cur=a.dataset.id;
    });
    links.forEach(function(a){a.classList.toggle('active',a.closest('nav')!==null&&a.dataset.id===cur)});
    tick=false;
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
  tb.addEventListener('click',function(){window.scrollTo({top:0})});
  onScroll();
})();
