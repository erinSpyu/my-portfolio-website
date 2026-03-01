// 简单交互：平滑滚动、点击标签跳转
document.addEventListener('DOMContentLoaded', function(){
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // 关键词跳转目标高亮（简易实现）
  document.querySelectorAll('.tag').forEach(t => {
    t.addEventListener('click', function(){
      const target = this.getAttribute('data-target-id');
      if(target){
        const el = document.getElementById(target);
        if(el){
          el.style.transition = 'background-color 0.3s ease';
          const orig = el.style.backgroundColor;
          el.style.backgroundColor = '#f3e38a';
          setTimeout(()=>{ el.style.backgroundColor = orig; }, 2000);
        }
      }
    });
  });

});
