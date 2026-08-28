
document.addEventListener("DOMContentLoaded",()=>{const gs=document.querySelectorAll(".nav-group"),ls=document.querySelectorAll(".nav-link"),s=document.getElementById("searchInput"),sb=document.getElementById("sidebar"),ov=document.getElementById("overlay"),mb=document.getElementById("menuBtn"),em=document.getElementById("searchEmpty");
gs.forEach(g=>g.querySelector(".nav-toggle").addEventListener("click",()=>g.classList.toggle("open")));
ls.forEach(l=>l.addEventListener("click",()=>{ls.forEach(x=>x.classList.remove("active"));l.classList.add("active");if(innerWidth<=820)close()}));
if(s)s.addEventListener("input",()=>{const q=s.value.trim().toLowerCase(),items=document.querySelectorAll(".post-row.searchable");if(items.length){let n=0;items.forEach(i=>{let ok=!q||i.innerText.toLowerCase().includes(q);i.style.display=ok?"":"none";if(ok)n++});if(em)em.style.display=q&&n===0?"block":"none"}});
function open(){sb.classList.add("open");ov.classList.add("show");document.body.style.overflow="hidden"}function close(){sb.classList.remove("open");ov.classList.remove("show");document.body.style.overflow=""}
if(mb)mb.addEventListener("click",open);if(ov)ov.addEventListener("click",close);addEventListener("resize",()=>{if(innerWidth>820)close()})});
