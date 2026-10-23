(() => {
  const buttons=[...document.querySelectorAll('[data-edition]')];
  const panels=[...document.querySelectorAll('.version-panel')];
  function activate(name,{changeHash=false,scroll=false}={}) {
    panels.forEach(p=>p.hidden=p.id!==`edition-${name}`);
    buttons.forEach(b=>{const on=b.dataset.edition===name;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;});
    const prefix=name==='v1'?'':`${name}-`;
    document.querySelector('.skip').href=`#${prefix}main`;
    document.querySelector('footer a').href=`#${prefix}verdict`;
    const player=document.querySelector('#podcast');
    if(name!=='v1'&&player&&!player.paused)player.pause();
    if(changeHash)history.replaceState(null,'',`#edition-${name}`);
    if(scroll)window.scrollTo({top:0,behavior:'auto'});
  }
  buttons.forEach((b,i)=>{
    b.addEventListener('click',()=>activate(b.dataset.edition,{changeHash:true,scroll:true}));
    b.addEventListener('keydown',e=>{
      let idx;
      if(e.key==='ArrowRight')idx=(i+1)%buttons.length;
      else if(e.key==='ArrowLeft')idx=(i+buttons.length-1)%buttons.length;
      else if(e.key==='Home')idx=0;
      else if(e.key==='End')idx=buttons.length-1;
      else return;
      e.preventDefault();buttons[idx].focus();activate(buttons[idx].dataset.edition,{changeHash:true,scroll:true});
    });
  });
  function route(){
    let hash;try{hash=decodeURIComponent(location.hash.slice(1));}catch{hash='';}
    const target=document.getElementById(hash);
    const panel=target?.closest('.version-panel');
    activate(panel?panel.id.replace('edition-',''):'v3');
    if(target&&!hash.startsWith('edition-'))requestAnimationFrame(()=>target.scrollIntoView());
  }
  addEventListener('hashchange',route);route();
})();
