'use strict';
const pages = ['index', 'privacy', 'support', 'how-to-play', 'about', 'terms'];
const page = document.body.dataset.page;
const requested = new URL(location.href).searchParams.get('lang');
const detected = navigator.language.toLowerCase().startsWith('vi') ? 'vi' : navigator.language.toLowerCase().startsWith('zh') ? 'zh-Hans' : 'en';
let language = CONTENT[requested] ? requested : detected;
const $ = s => document.querySelector(s);
function node(tag, text, className) { const e = document.createElement(tag); if (text !== undefined) e.textContent = text; if(className)e.className=className; return e; }
function link(text, target, className) { const a=node('a',text,className);a.href=target;return a; }
function route(p) { return p+'.html?lang='+encodeURIComponent(language); }
function paragraphs(parent,text) { text.split('\n\n').forEach(p=>parent.append(node('p',p))); }
function contact(u) {
 const section=node('section',undefined,'contact');section.append(node('h2',u.contact));
 const links=node('div',undefined,'contact-links');links.append(link('song775827@163.com','mailto:song775827@163.com'),node('span','WeChat ID: Siri3348'));
 const btn=node('button',u.copy);btn.type='button';const status=node('p','', 'status');status.setAttribute('role','status');
 btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('Siri3348');status.textContent=u.copied;}catch{status.textContent=u.failed;}});
 links.append(btn);section.append(links,status,node('p',u.note,'muted'));return section;
}
function board() {
 const art=node('div',undefined,'board-art');art.setAttribute('aria-hidden','true');art.append(node('div',undefined,'grid'));
 [[30,40,0],[40,40,1],[40,50,0],[50,50,1],[50,60,0],[60,40,1],[60,70,0],[70,80,0],[60,60,1]].forEach(([x,y,w])=>{const s=node('i',undefined,'stone'+(w?' white':''));s.style.left=x+'%';s.style.top=y+'%';art.append(s);});return art;
}
function render() {
 const d=CONTENT[language],u=d.ui;document.documentElement.lang=language;document.title=u.productName+' · '+u.nav[pages.indexOf(page)];
 $('meta[name="description"]').content=u.description;$('.brand').textContent=u.productName;
 const named=text=>text.replaceAll('{appName}',u.productName);
 $('#language').value=language;$('#language-label').textContent=u.language;$('.brand').href=route('index');
 const nav=$('nav');nav.replaceChildren();pages.forEach((p,i)=>{const a=link(u.nav[i],route(p));if(p===page)a.setAttribute('aria-current','page');nav.append(a);});
 const main=$('#main');main.replaceChildren();
 if(page==='index'){
  const hero=node('section',undefined,'hero'),text=node('div');text.append(node('p',u.eyebrow,'eyebrow'),node('h1',u.headline),node('p',named(u.intro),'intro'));
  const actions=node('div',undefined,'actions');actions.append(link(u.cta,route('how-to-play'),'button'),link(u.support,route('support'),'button secondary'));text.append(actions);hero.append(text,board());main.append(hero);
  const features=node('section',undefined,'features');u.labels.forEach((title,i)=>{const f=node('article');f.append(node('span','0'+(i+1),'feature-number'),node('h3',title),node('p',u.descs[i]));features.append(f);});main.append(features,contact(u));
 } else {
  const article=node('article',undefined,'article');article.append(node('p',u.eyebrow,'eyebrow'),node('h1',u.nav[pages.indexOf(page)]));
  if(page==='privacy'||page==='terms')article.append(node('aside',u.draft,'notice'));
  if(page==='privacy') {paragraphs(article,d.privacy);article.append(node('h2',u.hosting));paragraphs(article,u.hostingBody);article.append(link(u.hostLink,'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement'));}
  if(page==='terms'){paragraphs(article,d.terms);article.append(link('Apple Standard EULA','https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'));}
  if(page==='how-to-play')paragraphs(article,d.help);
  if(page==='about')paragraphs(article,named(u.about));
  if(page==='support') {paragraphs(article,u.supportIntro);article.append(node('h2',u.faqTitle));u.faq.forEach(([q,a])=>{const detail=node('details');detail.append(node('summary',q),node('p',a));article.append(detail);});}
  article.append(contact(u));main.append(article);
 }
 const footer=$('footer');footer.replaceChildren(node('p',u.productName+' · '+u.footer),node('p',u.pending,'pending'));
}
$('#language').addEventListener('change',e=>{language=e.target.value;const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);render();});
render();
