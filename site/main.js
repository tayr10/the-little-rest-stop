// Mobile menu
function toggleMM(){
  const m=document.getElementById('mm');
  m.classList.toggle('open');
  document.body.style.overflow=m.classList.contains('open')?'hidden':'';
}
// Menu tabs
function setTab(t){
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
  const tb=document.getElementById('tab-'+t);
  const pb=document.getElementById('panel-'+t);
  if(tb)tb.classList.add('on');
  if(pb)pb.classList.add('on');
  document.getElementById('menu').scrollIntoView({behavior:'smooth',block:'start'});
}
// Scroll reveal
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in')})
},{threshold:0.08});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));
// Close mobile menu on resize
window.addEventListener('resize',()=>{
  if(window.innerWidth>768){
    document.getElementById('mm').classList.remove('open');
    document.body.style.overflow='';
  }
});
