var archiveData = {
  tanabata:{img:'',tag:'ワークショップ',tagClass:'tag-b',date:'2026年7月5日',title:'金沢八景　七夕まつり',body:'写真・詳細は後日追加予定です。',links:[]},
  miyazaki2026:{img:'miyazaki_2026.jpg',tag:'ワークショップ',tagClass:'tag-b',date:'2026年4月26日',title:'千葉市・宮崎公園ワークショップ',body:'宮崎公園の芝生周りに杭を立てるワークショップを行いました。子どもたちがワクワクする配置を意識しながら、杭と風鈴のデザインを自分たちで考え、芝生の周りに設置。色鮮やかでワクワクする柵が完成しました。',links:[]},
  asunoko:{img:'images/pottery1.jpg',tag:'ワークショップ',tagClass:'tag-b',date:'2025年10月〜12月',title:'瀬ヶ崎小学校 あすのこ広場 改造計画',body:'瀬ケ崎小学校の六年生とあすのこ広場にウッドデッキを制作しました。設計は児童の「こんなことがしたい！」という声をもとに進め、地域住民・多学年の児童と共に施工。開催を重ねるごとに丸ノコやドライバーを扱える参加者が増え、子どもたちの成長と地域とのつながりに大きな喜びを感じた活動でした。',links:[]},
  minatoyu:{img:'images/minatoyu.jpg',tag:'ワークショップ',tagClass:'tag-b',date:'2025年9月27日',title:'みなと湯 みんなのみなと湯大改造',body:'老舗温泉地で子どもたちと木陰に設置するベンチを制作しました。木材を運び、ネジを締め、共に汗を流しながら完成させたベンチは温泉を訪れる方々の憩いの場となります。自分たちの手で形にしたものが地域に根づく喜びをともに分かち合った一日でした。',links:[]},
  yhcs2025:{img:'images/yhcs2025.jpg',tag:'YHCS',tagClass:'tag-yhcs',date:'2025年9月1日〜5日',title:'横浜ハーバーシティスタディズ 2025（第8回）',body:'伊勢佐木クロスストリートにて講師5名・学生33名・ゲスト8名で開催。テーマ「Urban Thresholds: Creating Across Scales（都市の閾値：スケールを越える創造）」のもと、4班がそれぞれモンタージュ映像を制作しました。\n\n田代班「名前も知らない」、神永班「9.6÷4.6＝」、向山班「みかたを変えれば」、丁班「『 。』」—それぞれが横浜の都市空間を独自の視点で読み解いた力作です。',links:[{label:'▶ 映像を見る',url:'https://youtu.be/MZ2COpXG-ws?si=acI28078cTwy_6W2'}]},
  pottery2:{img:'images/pottery2.jpg',tag:'ワークショップ',tagClass:'tag-b',date:'2025年7月15日',title:'瀬ヶ崎小学校 陶芸WS（色塗り）',body:'前回作った作品に色を塗る第2回ワークショップ。子どもたちとのコミュニケーションも深まり、それぞれが自分だけの色を選んで丁寧に作品を仕上げていきました。表現力豊かな子どもたちの姿に、私たち自身も多くのことを学ぶ時間となりました。',links:[]},
  miyazaki:{img:'images/miyazaki.jpg',tag:'ワークショップ',tagClass:'tag-b',date:'2025年7月5日',title:'千葉市・宮崎公園WS',body:'地域の皆様100名、フージャースコーポレーション、千葉大学伊藤研究室と共に自然素材を使った未来の公園を描くアートづくりを行いました。参加者それぞれが思い描く公園の姿を素材で表現し、完成作品は公園沿道に掲示されています。',links:[{label:'関連記事を読む ↗',url:'https://www.hoshikatta-kurashi-lab.com/article/13513/'}]},
  pottery1:{img:'images/pottery1.jpg',tag:'ワークショップ',tagClass:'tag-b',date:'2025年6月12日',title:'瀬ヶ崎小学校 陶芸WS（初回）',body:'元気な3年生たちと初めての陶芸体験。斬新なアイデアにあふれる作品が次々と生まれ、子どもたちの豊かな発想力に驚かされました。はじめは土を触ることに戸惑っていた子も、最後には夢中になって作品を作り上げていました。',links:[]}
};

var memberData = {
  nakatsu:  {initial:'中',isPI:true, name:'中津秀之',  role:'教授・研究室主宰',note:'関東学院大学 建築・環境学部 教授。こどもまんなかのまちづくりを目指す「ランドスケープ・デザイナー」として、地域・学校・まちと共にワクワクする場と体験をつくり続けています。'},
  kuroishi: {initial:'黒',isPI:false,name:'黒石 凜太朗',role:'院生',note:'美味しいものと友達と飲むのが好きです。'},
  miyake:   {initial:'三',isPI:false,name:'三宅 剛史',  role:'院生',note:''},
  mizuguchi:{initial:'水',isPI:false,name:'水口 功也',  role:'院生',note:'映画館が好きです。'},
  iwagaki:  {initial:'岩',isPI:false,name:'岩垣 侑利',  role:'ゼミ生',note:'生き物が好きです。鳥とハリネズミと同居してます。',img:'members/iwagaki.jpg'},
  omori:    {initial:'大',isPI:false,name:'大森 一乃',  role:'ゼミ生',note:'アニメとゲームが好き。',img:'members/omori.jpg'},
  onoue:    {initial:'尾',isPI:false,name:'尾上 智規',  role:'ゼミ生',note:'車で日本一周したいです。',img:'members/onoue.jpg'},
  takada:   {initial:'高',isPI:false,name:'高田 優',    role:'ゼミ生',note:'海鮮が大好きです！',img:'members/takada.jpg'},
  takamura: {initial:'高',isPI:false,name:'高村 和希',  role:'ゼミ生',note:'温泉が大好きです♨',img:'members/takamura.jpg'},
  nishimura:{initial:'西',isPI:false,name:'西村 翔太',  role:'ゼミ生',note:'音楽を聴くことと古着が好きです。',img:'members/nishimura.jpg'},
  hiraga:   {initial:'平',isPI:false,name:'平賀 大暉',  role:'ゼミ生',note:'アイドル、競馬、料理！飛びポが来るぞ！ラスサビ飛びポ！ｳｯｵｲ🙌',img:'members/hiraga.jpg'},
  yoshida:  {initial:'吉',isPI:false,name:'吉田 瑠夏',  role:'ゼミ生',note:'ダンスが好きです！！',img:'members/yoshida.jpg'},
  minemura: {initial:'峰',isPI:false,name:'峰村 沙希',  role:'ゼミ生',note:'アウトドア、旅行、ダンスが好き！',img:'members/minemura.jpg'}
};

/* ハンバーガー */
function toggleMenu(){
  var btn=document.getElementById('hamburgerBtn');
  var menu=document.getElementById('sideMenu');
  var bd=document.getElementById('menuBackdrop');
  var isOpen=menu.classList.contains('open');
  btn.classList.toggle('open');
  menu.classList.toggle('open');
  bd.classList.toggle('open');
  document.body.style.overflow=isOpen?'':'hidden';
}
function toggleAcc(){
  document.getElementById('accBody').classList.toggle('open');
  document.getElementById('accArrow').classList.toggle('open');
}
window.addEventListener('scroll',function(){
  var m=document.getElementById('sideMenu');
  if(m&&m.classList.contains('open'))toggleMenu();
},{passive:true});

/* メンバーモーダル */
function openMemberModal(key){
  var d=memberData[key];if(!d)return;
  var avEl=document.getElementById('memberModalAvatar');
  if(d.img){
    avEl.outerHTML='<img id="memberModalAvatar" class="modal-avatar-img" src="'+d.img+'" alt="'+d.name+'"/>';
  } else {
    avEl.outerHTML='<div id="memberModalAvatar" class="'+(d.isPI?'modal-avatar is-pi':'modal-avatar')+'">'+d.initial+'</div>';
  }
  document.getElementById('memberModalName').textContent=d.name;
  document.getElementById('memberModalRole').textContent=d.role;
  document.getElementById('memberModalNote').textContent=d.note;
  document.getElementById('memberModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal('memberModal');closeWsPage();}});

/* WSページ */
function openWsPage(key){
  var d=archiveData[key];if(!d)return;
  var imgEl=document.getElementById('wsImg');
  if(d.img){imgEl.src=d.img;imgEl.style.display='block';}
  else{imgEl.style.display='none';}
  imgEl.alt=d.title;
  var t=document.getElementById('wsTag');t.textContent=d.tag;t.className='tag '+d.tagClass;
  document.getElementById('wsDate').textContent=d.date;
  document.getElementById('wsTitle').textContent=d.title;
  document.getElementById('wsBody').textContent=d.body;
  var linksEl=document.getElementById('wsLinks');
  linksEl.innerHTML='';
  (d.links||[]).forEach(function(lk){
    var a=document.createElement('a');
    a.className='ws-link';a.href=lk.url;a.target='_blank';a.textContent=lk.label;
    linksEl.appendChild(a);
  });
  var pg=document.getElementById('ws-page');
  pg.classList.add('active');pg.scrollTop=0;
  document.body.style.overflow='hidden';
  history.pushState({wsKey:key},'','#ws-'+key);
}
function closeWsPage(){
  var pg=document.getElementById('ws-page');
  pg.style.transition='opacity .35s ease, transform .35s cubic-bezier(.4,0,.2,1)';
  pg.style.opacity='0';
  pg.style.transform='translateY(20px)';
  setTimeout(function(){
    pg.classList.remove('active');
    pg.style.transition='';
    pg.style.opacity='';
    pg.style.transform='';
    document.body.style.overflow='';
  },350);
  history.back();
}
window.addEventListener('popstate',function(){
  var pg=document.getElementById('ws-page');
  if(pg&&pg.classList.contains('active')){pg.classList.remove('active');document.body.style.overflow='';}
});

/* 文字アニメ */
(function(){
  var h1=document.querySelector('.hero h1');if(!h1)return;
  var text=h1.innerText;h1.innerHTML='';
  text.split('').forEach(function(ch,i){
    var s=document.createElement('span');s.className='char';
    s.textContent=ch===' '?'\u00a0':ch;
    s.style.animationDelay=(0.05+i*0.07)+'s';h1.appendChild(s);
  });
})();

/* スクロールリビール */
(function(){
  document.querySelectorAll('.archive-card').forEach(function(el,i){el.classList.add('reveal-up','delay-'+((i%6)+1));});
  document.querySelectorAll('.member-card').forEach(function(el,i){el.classList.add('reveal-up','delay-'+((i%6)+1));});
  document.querySelectorAll('.section-head').forEach(function(el){el.classList.add('reveal-up');});
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in-view');});},{threshold:0.12});
  document.querySelectorAll('.reveal-up').forEach(function(el){obs.observe(el);});
})();



/* カーソルカラー（PC限定） */
(function(){
  if(window.matchMedia('(pointer:coarse)').matches)return;
  var glow=document.createElement('div');glow.className='cursor-glow';document.body.appendChild(glow);
  var dot=document.createElement('div');dot.className='cursor-dot';document.body.appendChild(dot);
  var cA={r:229,g:211,b:179},cB={r:122,g:127,b:85};
  function lc(a,b,t){return{r:Math.round(a.r+(b.r-a.r)*t),g:Math.round(a.g+(b.g-a.g)*t),b:Math.round(a.b+(b.b-a.b)*t)};}
  function lp(a,b,t){return a+(b-a)*t;}
  var mx=window.innerWidth/2,my=window.innerHeight/2,gx=mx,gy=my;
  document.addEventListener('mousemove',function(e){
    mx=e.clientX;my=e.clientY;glow.classList.add('active');
    dot.style.left=mx+'px';dot.style.top=my+'px';
    var col=lc(cA,cB,mx/window.innerWidth);
    var br=1+(0.5-my/window.innerHeight)*0.15;
    col.r=Math.min(255,Math.round(col.r*br));col.g=Math.min(255,Math.round(col.g*br));col.b=Math.min(255,Math.round(col.b*br));
    var rgb='rgb('+col.r+','+col.g+','+col.b+')';
    glow.style.backgroundColor=rgb;dot.style.backgroundColor=rgb;
  });
  (function loop(){gx=lp(gx,mx,.06);gy=lp(gy,my,.06);glow.style.left=gx+'px';glow.style.top=gy+'px';requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button,.archive-card,.member-card').forEach(function(el){
    el.addEventListener('mouseenter',function(){dot.style.transform='translate(-50%,-50%) scale(2.5)';});
    el.addEventListener('mouseleave',function(){dot.style.transform='translate(-50%,-50%) scale(1)';});
  });
})();

/* プログレスバー */
(function(){
  var bar=document.createElement('div');bar.id='progress-bar';document.body.appendChild(bar);
  window.addEventListener('scroll',function(){bar.style.width=(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight)*100)+'%';},{passive:true});
})();