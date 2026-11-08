(() => {
  const source = document.getElementById('resume-data');
  if (!source) return;
  const entries = JSON.parse(source.textContent);
  const svg = document.getElementById('resume-timeline');
  const detail = document.getElementById('journey-detail');
  const filters = [...document.querySelectorAll('.journey-filters button')];
  const colors = {experience:'#a73476',education:'#5754a0',projects:'#267970',leadership:'#95621a'};
  let category = 'experience';
  let selected = 'pitt';
  const ns = 'http://www.w3.org/2000/svg';
  const month = value => { const [y,m] = value.split('-').map(Number); return y * 12 + m - 1; };
  const el = (tag, attributes, text) => {
    const node = document.createElementNS(ns,tag);
    for (const [key,value] of Object.entries(attributes)) node.setAttribute(key,value);
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function showDetail(entry) {
    selected = entry.id;
    const kicker = document.createElement('p'); kicker.className = 'eyebrow'; kicker.textContent = entry.category + ' / ' + entry.date;
    const title = document.createElement('h3'); title.textContent = entry.title;
    const org = document.createElement('p'); org.className = 'detail-org'; org.textContent = entry.org + ' · ' + entry.place;
    const ul = document.createElement('ul');
    for (const point of entry.points) { const li = document.createElement('li');li.textContent = point;ul.append(li); }
    const tags = document.createElement('div'); tags.className = 'skill-tags';
    for (const skill of entry.skills) { const span = document.createElement('span');span.textContent = skill;tags.append(span); }
    detail.replaceChildren(kicker,title,org,ul,tags);
    if (entry.link) { const a = document.createElement('a');a.href = entry.link;a.textContent = entry.linkLabel + ' ↗';a.className = 'detail-link';detail.append(a); }
    for (const row of svg.querySelectorAll('[data-entry]')) row.setAttribute('aria-pressed',String(row.dataset.entry === selected));
  }
  function render() {
    const visible = entries.filter(e => category === 'all' || e.category === category).sort((a,b) => month(a.start)-month(b.start));
    const first = Math.min(...visible.map(e => month(e.start)));
    const last = Math.max(...visible.map(e => month(e.end) + (e.milestone ? 0 : 1)));
    const low = Math.floor(first/12)*12;
    const high = (Math.floor(last/12)+1)*12;
    const left = 284, width = 574, rowHeight = 58, top = 62, height = top + visible.length * rowHeight + 18;
    const x = n => left + (n-low)/(high-low)*width;
    svg.setAttribute('viewBox',`0 0 930 ${height}`); svg.setAttribute('width','930');svg.setAttribute('height',String(height));
    svg.replaceChildren(el('title',{},'Resume timeline: '+category),el('desc',{},'Select a row or date bar to read its achievements. Dates are placed on a calendar scale. Graduation dates are milestones.'));
    const step = high-low > 84 ? 24 : 12;
    for (let n = low; n <= high; n += step) {
      svg.append(el('line',{x1:x(n),x2:x(n),y1:44,y2:height-15,class:'timeline-grid'}),el('text',{x:x(n),y:26,'text-anchor':'middle',class:'timeline-year'},String(n/12)));
    }
    visible.forEach((entry,index) => {
      const y = top + index*rowHeight;
      const g = el('g',{'data-entry':entry.id,role:'button',tabindex:'0','aria-pressed':String(entry.id===selected),'aria-label':`${entry.title}, ${entry.org}, ${entry.date}. Show details.`});
      g.append(el('rect',{x:6,y:y-18,width:912,height:52,rx:9,class:'timeline-row'}));
      g.append(el('text',{x:20,y:y+1,class:'timeline-role'},entry.org),el('text',{x:20,y:y+19,class:'timeline-date'},entry.date));
      const sx=x(month(entry.start)), ex=x(month(entry.end)+1);
      if (entry.milestone) {
        g.append(el('path',{d:`M ${sx} ${y-5} l 10 10 l -10 10 l -10 -10 Z`,fill:colors[entry.category]}));
      } else {
        g.append(el('rect',{x:sx,y:y-5,width:Math.max(ex-sx,12),height:20,rx:6,fill:colors[entry.category]}));
      }
      g.append(el('circle',{cx:894,cy:y+5,r:11,class:'timeline-selector'}),el('text',{x:894,y:y+9,'text-anchor':'middle',class:'timeline-plus','aria-hidden':'true'},'+'));
      g.addEventListener('click',()=>showDetail(entry));
      g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showDetail(entry);}});
      svg.append(g);
    });
    showDetail(visible.find(e=>e.id===selected)||visible[visible.length-1]);
  }
  filters.forEach(button=>button.addEventListener('click',()=>{
    category = button.dataset.category;
    filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    render();
  }));
  render();
})();
