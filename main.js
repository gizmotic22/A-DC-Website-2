const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

const menuBtn=$("#mb"),nav=$("#nav");
menuBtn.onclick=()=>nav.classList.toggle("open");
nav.onclick=()=>nav.classList.remove("open");

const services=$("#sv");
if(services){
  services.innerHTML=SV.map((s,i)=>`<div class="card" id="s${i+1}"><h3>${s[0]}</h3><ul>${s[1].map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("");
}

const tbody=$("#tb"),search=$("#q");
if(tbody){
  const render=(f="")=>{
    tbody.innerHTML=P.filter(r=>r.join(" ").toLowerCase().includes(f)).map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("");
  };
  render();
  search.oninput=e=>render(e.target.value.toLowerCase());
}

const team=$("#tm");
if(team){
  team.innerHTML=T.map((t,i)=>`<div>${TP[i]?`<img class="ph" src="${TP[i]}" alt="${t[0]}">`:`<div class="av">${t[0].replace("Archi. ","").split(" ").map(w=>w[0]).slice(0,2).join("")}</div>`}<b>${t[0]}</b><span>${t[1]}</span></div>`).join("");
}

const tabs=$$(".tabs button"),panels=$$(".panel");
tabs.forEach(b=>b.onclick=()=>{
  tabs.concat(panels).forEach(x=>x.classList.remove("on"));
  b.classList.add("on");
  panels[b.dataset.t].classList.add("on");
});

const slides=$$(".slide"),dots=$$(".dots i"),caption=$("#cap");
if(slides.length){
  const captions=["Retail &amp; Commercial Fit-outs","Engineering &amp; Construction","Safety-First Workmanship"];
  let k=0;
  const go=n=>{
    k=n;
    slides.forEach((s,i)=>s.classList.toggle("on",i==n));
    dots.forEach((d,i)=>d.classList.toggle("on",i==n));
    caption.innerHTML=captions[n];
  };
  dots.forEach((d,i)=>d.onclick=()=>go(i));
  const nx=()=>go((k+1)%slides.length);
  let tm=setInterval(nx,5500);const hr=$(".hero");
  hr.onmouseenter=()=>clearInterval(tm);hr.onmouseleave=()=>{tm=setInterval(nx,5500)};
}

const io=new IntersectionObserver(es=>es.forEach(x=>{
  if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}
}),{threshold:.12});
$$("section:not(.hero) .head,.card,.why,.proj,.team div,.pt,.story>*").forEach(e=>{e.classList.add("rv");io.observe(e)});

const up=$("#up");
addEventListener("scroll",()=>up.classList.toggle("show",scrollY>500));

const form=$("#cf");
if(form){
  const ff=$("#ff"),st=$("#fst"),OK=/\.(pdf|png|jpe?g|docx?|xlsx?|dwg)$/i,MAX=10*1024*1024;
  ff.onchange=()=>{const f=ff.files[0];st.textContent="";if(f&&(!OK.test(f.name)||f.size>MAX)){st.textContent="Unsupported file or larger than 10 MB. Allowed: PDF, JPG, PNG, DOC(X), XLS(X), DWG.";ff.value=""}};
  // To send attachments for real, replace this with a request to a form service or backend.
  const send=(d,f)=>{
    location.href="mailto:adcengineeringandconstruction@gmail.com?subject="+encodeURIComponent("Quote request: "+d.s)+"&body="+encodeURIComponent(d.m+"\n\n"+d.n+"\n"+d.e+"\n"+d.p);
    st.textContent=f?`Your email app is opening. Please attach "${f.name}" to the email before sending.`:"Your email app is opening. Thank you for your inquiry!";
  };
  form.onsubmit=e=>{e.preventDefault();const v=id=>$("#"+id).value;send({n:v("fn"),e:v("fe"),p:v("fp"),s:v("fs"),m:v("fm")},ff.files[0])};
}

// Services quick-jump links
const sj=$("#sj");
if(sj)sj.innerHTML=SV.map((s,i)=>`<a href="#s${i+1}"><b>0${i+1}</b>${s[0]}</a>`).join("")+`<a href="#process"><b>&rarr;</b>How We Work</a>`;

// Projects: search + category filter + photo popup (all projects in one grid)
const pg=$("#pg");
if(pg){
  const CATS=SV.map(s=>s[0].replace(/&amp;/g,"&")),fl=$("#fl"),em=$("#em"),md=$("#md"),pq=$("#pq"),cn=$("#cn");
  const ts=s=>{const m=s.match(/([A-Za-z]{3})[a-z]*\.?\s*(?:\d{1,2},\s*)?(\d{4})/);return m?new Date(m[1]+" 1, "+m[2]).getTime():0};
  const order=P.map((p,i)=>i).sort((a,b)=>ts(P[b][2])-ts(P[a][2])); // newest first
  const inCat=(i,c)=>c=="All"||CAT[i].includes(c);
  let cur="All";
  const draw=()=>{
    const q=pq.value.toLowerCase();
    const list=order.filter(i=>inCat(i,cur)&&P[i].join(" ").toLowerCase().includes(q));
    pg.innerHTML=list.map(i=>{
      const meta=`<span>${CAT[i].join(" · ")}</span><b>${P[i][0]}</b><em>${P[i][1]} · ${P[i][2]}</em>`;
      return PH[i].length?`<article class="proj" data-i="${i}" tabindex="0" role="button"><img src="${PH[i][0]}" alt="${P[i][0]}" loading="lazy"><div>${meta}</div></article>`:`<article class="proj nt"><div>${meta}</div></article>`;
    }).join("");
    em.hidden=list.length>0;
    em.innerHTML=q?"No projects match your search.":'Projects in this category are being added. <a href="contact.html">Contact us</a> to discuss your project.';
    cn.textContent=list.length?`Showing ${list.length} of ${P.length} projects`:"";
    fl.innerHTML=["All",...CATS].map(c=>{const n=order.filter(i=>inCat(i,c)).length;return `<button data-c="${c}" class="${c==cur?"on":""}${n?"":" z"}">${c}<i>${n}</i></button>`}).join("");
  };
  fl.onclick=e=>{const b=e.target.closest("button");if(b){cur=b.dataset.c;draw()}};
  pq.oninput=draw;
  const open=i=>{
    $("#mt").textContent=P[i][0];
    $("#ms").textContent=P[i][1]+" · "+P[i][2]+" · "+CAT[i].join(", ");
    $("#mg").innerHTML=`<img id="mi" src="${PH[i][0]}" alt="">`+PH[i].map((f,k)=>`<img class="th${k?"":" on"}" src="${f}" alt="Photo ${k+1}" data-f="${f}">`).join("");
    md.hidden=false;document.body.style.overflow="hidden";
  };
  const close=()=>{md.hidden=true;document.body.style.overflow=""};
  pg.onclick=e=>{const a=e.target.closest(".proj:not(.nt)");if(a)open(+a.dataset.i)};
  pg.onkeydown=e=>{if(e.key=="Enter"){const a=e.target.closest(".proj:not(.nt)");if(a)open(+a.dataset.i)}};
  md.onclick=e=>{
    if(e.target==md||e.target.id=="mx")close();
    const t=e.target.closest(".th");
    if(t){$("#mi").src=t.dataset.f;md.querySelectorAll(".th").forEach(x=>x.classList.toggle("on",x==t))}
  };
  addEventListener("keydown",e=>{if(e.key=="Escape")close()});
  draw();
}

// Animated stat counters (small numbers only)
$$(".stats b").forEach(b=>{
  const n=+b.textContent;
  if(n>0&&n<100){
    const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){let c=0;const t=setInterval(()=>{b.textContent=++c;if(c>=n)clearInterval(t)},40);o.disconnect()}});
    o.observe(b);
  }
});
