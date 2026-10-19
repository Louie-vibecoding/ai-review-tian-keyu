(() => {
  const q=s=>document.querySelector(s);
  const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const refs=ids=>ids.map(id=>`<a href="#v2-src-${id}">[${id}]</a>`).join(' ');
  q('#v2-changes').innerHTML=REPORT_V2.changes.map(c=>`<article><h3>${safe(c.title)}</h3><p>${safe(c.text)}</p></article>`).join('');
  q('#v2-reviewers').innerHTML=REPORT_V2.reviewers.map(r=>`<tr><td><b>${safe(r.name)}</b><span class="group">${safe(r.oldRole)} → <strong>${safe(r.newRole)}</strong></span></td><td>${r.oldT} / ${r.oldA}</td><td>${r.t0} / ${r.a0}</td><td><b>${r.t1} / ${r.a1}</b></td><td>${safe(r.reason)}</td></tr>`).join('');
  q('#v2-debates').innerHTML=REPORT_V2.debates.map(d=>`<article class="debate"><span class="who">${safe(d.who)}</span><h3>${safe(d.title)}</h3><p>${safe(d.argument)}</p><p class="ruling"><b>主审裁定：</b>${safe(d.ruling)}</p><div class="source-refs">${refs(d.sources)}</div></article>`).join('');
  function renderClaims(kind='all'){
    const selected=REPORT_V2.claims.filter(c=>kind==='all'||c.kind===kind);
    q('#v2-claim-count').textContent=`显示 ${selected.length} / ${REPORT_V2.claims.length} 项。标签说明材料性质，不代表内容已被证实。`;
    q('#v2-claims').innerHTML=selected.map(c=>`<article class="claim"><div class="claim-head"><h3>${safe(c.title)}</h3><span class="tag ${c.kind==='record'?'strong':''}">${safe(c.label)}</span></div><p class="assessment">${safe(c.finding)}</p><p><b>对判断的影响：</b>${safe(c.impact)}</p><details><summary>局限与还需要什么</summary><p>${safe(c.limit)}</p><p><b>待核：</b>${safe(c.need)}</p></details><div class="source-refs">${refs(c.sources)}</div></article>`).join('');
  }
  document.querySelectorAll('[data-v2-filter]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('[data-v2-filter]').forEach(other=>{other.classList.toggle('selected',b===other);other.setAttribute('aria-pressed',String(b===other));});
    renderClaims(b.dataset.v2Filter);
  }));renderClaims();
  q('#v2-events').innerHTML=REPORT_V2.events.map(e=>`<article class="event"><time>${safe(e.date)}<span class="event-kind">${safe(e.kind)}</span></time><div><h3>${safe(e.title)}</h3><p>${safe(e.text)}</p><div class="source-refs">${refs(e.sources)}</div></div></article>`).join('');
  q('#v2-corrections').innerHTML=REPORT_V2.corrections.map(c=>`<li>${safe(c)}</li>`).join('');
  q('#v2-sources').innerHTML=REPORT_V2.sources.map(s=>`<article class="source" id="v2-src-${s.id}"><b>${safe(s.id)}</b><div><a href="${safe(s.url)}" target="_blank" rel="noopener noreferrer">${safe(s.title)} ↗</a><p>${safe(s.note)}</p></div></article>`).join('');
  q('#v2-methods').innerHTML=Object.values(REPORT_V2.methods).map(t=>`<p>${safe(t)}</p>`).join('');
  const buttons=[...document.querySelectorAll('[data-edition]')];
  function activate(name,{changeHash=false,scroll=false}={}){
    const v2=name==='v2';q('#edition-v1').hidden=v2;q('#edition-v2').hidden=!v2;
    buttons.forEach(b=>{const on=b.dataset.edition===name;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;});
    q('.skip').href=v2?'#v2-main':'#main';q('footer a').href=v2?'#v2-verdict':'#verdict';
    if(v2){const player=q('#podcast');if(player&&!player.paused)player.pause();}
    if(changeHash)history.replaceState(null,'',`#edition-${name}`);
    if(scroll)window.scrollTo({top:0,behavior:'auto'});
  }
  buttons.forEach((b,i)=>{
    b.addEventListener('click',()=>activate(b.dataset.edition,{changeHash:true,scroll:true}));
    b.addEventListener('keydown',e=>{
      let idx;if(e.key==='ArrowRight')idx=(i+1)%buttons.length;else if(e.key==='ArrowLeft')idx=(i+buttons.length-1)%buttons.length;else if(e.key==='Home')idx=0;else if(e.key==='End')idx=buttons.length-1;else return;
      e.preventDefault();buttons[idx].focus();activate(buttons[idx].dataset.edition,{changeHash:true,scroll:true});
    });
  });
  function route(){
    let hash;try{hash=decodeURIComponent(location.hash.slice(1));}catch{hash='';}
    const target=document.getElementById(hash);
    const isV1=hash==='edition-v1'||(target&&q('#edition-v1').contains(target));
    activate(isV1?'v1':'v2');
    if(target&&hash!=='edition-v1'&&hash!=='edition-v2')requestAnimationFrame(()=>target.scrollIntoView());
  }
  addEventListener('hashchange',route);route();
})();
