// Kapil Singh Dame - Portfolio scripts
var root=document.documentElement;
try{var t=localStorage.getItem("theme");if(t)root.setAttribute("data-theme",t)}catch(e){}
document.getElementById("theme").onclick=function(){
  var dark=root.getAttribute("data-theme")==="dark"||(!root.getAttribute("data-theme")&&matchMedia("(prefers-color-scheme: dark)").matches);
  var n=dark?"light":"dark";root.setAttribute("data-theme",n);
  try{localStorage.setItem("theme",n)}catch(e){}
};
var roles=["Web Developer","Frontend Developer","UI Enthusiast"],ri=0,ci=0,del=false,el=document.getElementById("typed");
(function type(){
  var w=roles[ri];el.textContent=w.slice(0,ci)+"|";
  if(!del&&ci<w.length)ci++;
  else if(!del){del=true;return setTimeout(type,1200)}
  else if(ci>0)ci--;
  else{del=false;ri=(ri+1)%roles.length}
  setTimeout(type,del?50:90);
})();
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(e.isIntersecting){e.target.classList.add("show");
    e.target.querySelectorAll(".bar b").forEach(function(b){b.style.width=b.dataset.w+"%"})}
})},{threshold:.15});
document.querySelectorAll(".reveal").forEach(function(s){io.observe(s)});
document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
  location.href="mailto:your-email@example.com?subject="+encodeURIComponent("Message from "+document.getElementById("name").value)+"&body="+encodeURIComponent(document.getElementById("msg").value);
};
document.getElementById("year").textContent=new Date().getFullYear();
