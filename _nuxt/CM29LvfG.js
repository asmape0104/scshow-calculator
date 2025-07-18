import{d as l1,x as $,y,z as e,E as f1,F as _1,_ as k1,r as C,k as P,G as p1,C as b1,H as I,I as w,J as x,K as V,L as a,M as B,N as D,O as y1,A as M,P as j,D as v1,Q as h1,R as $1}from"./C-ZAXNTl.js";import{u as w1}from"./CCi8UxbJ.js";const C1={name:"other",ap:0,skill:"ap_up(7);skill_count>=3 ^ splice()"},g1={name:"kozue",ap:8,skill:"skill_count<=3 ^ vol_buff(237.6);skill_count<=3 ^ reset();skill_count>=4 ^ score_buff(237.6)"},S1={name:"sayaka",ap:12,skill:"skill_count <= 1 ^ vol_buff(57.75);skill_count >= 2 ^ score_buff(178.2);mental_rate>=100 ^ vol_up(693);mental_rate <= 99 ^ vol_down(1000)"},M1={name:"ceras",ap:0,skill:"ap_up(5);vol_buff(36.3);reset();skill_count>=3 ^ splice()"},x1={name:"kaho",ap:10,skill:"mental_up(10);mental_rate>=100 ^ score_up(831.6);mental_rate<=99 ^ vol_down(1000)"},V1={name:"rurino",ap:8,skill:"vol_lv <= 8 ^ vol_buff(326.25);vol_lv >= 7 ^ score_buff(435);mental_down(10)",centerSkill:"ap_up(4);vol_lv >= 4 ^ ap_up(4)",centerSkillCondition:"fever_start"},s1={1:1,2:1.1,3:1.2,4:1.3,5:1.4,6:1.5,7:1.6,8:1.7,9:1.8,10:2,11:2.2,12:2.4,13:2.6,14:3},X={vol_buff:2,vol_up:2,vol_down:2,score_up:2,score_buff:2,mental_up:2,mental_down:2,ap_up:0,ap_down:0},T1=(l,s,o)=>{const c=l.rawSkillText.replace(/([\w_]+)\(([\d.]+)(?<no_change>\*?)\)/g,(u,r,d,_)=>{if(_)return`${r}(${d})`;const k=Math.floor(Number(d)*s1[s]/3*Math.pow(10,X[r]))/Math.pow(10,X[r]);return`${r}(${k})`}),i=l.rawCenterSkillText.replace(/([\w_]+)\(([\d.]+)(?<no_change>\*?)\)/g,(u,r,d,_)=>{if(_)return`${r}(${d})`;const k=Math.floor(Number(d)*s1[o]/3*Math.pow(10,X[r]))/Math.pow(10,X[r]);return`${r}(${k})`});return{name:l.key,ap:l.ap,skill:c,centerSkillCondition:l.centerSkillCondition,centerSkill:i}},n1=[C1,g1,S1,M1,x1,V1],E1=["<=",">="],U1=["start","end","fever_start"],a1=l=>{if(!l)return;const s=E1.find(o=>l?.includes(o));if(s){const[o,c]=l.split(s).map(i=>i.trim());return!o||!c?void 0:[o,s,Number(c)]}else return},H=l=>{const s=[],o=[],c=l.skill.split(";");for(const i of c){const[u,r]=i.split("^").map(p=>p.trim()),d=r?u:void 0,_=r||u,[,k,h]=_.match(/^(\w+)\((.*)\)$/)||[],f={type:k,value:h?Number(h):void 0,condition:a1(d)};s.push(f)}if(l.centerSkill){const i=l.centerSkill.split(";");for(const u of i){const[r,d]=u.split("^").map(v=>v.trim()),_=d?r:void 0,k=d||r,[,h,f]=k.match(/^(\w+)\((.*)\)$/)||[],p={type:h,value:f?Number(f):void 0,condition:a1(_)};o.push(p)}}return{name:l.name,ap:l.ap,skills:s,centerSkills:o,centerSkillCondition:l.centerSkillCondition,skillCount:0}},t1=l=>{switch(l){case"start":return"ライブ開始時に発動";case"end":return"ライブ終了時に発動";case"fever_start":return"FEVER開始時に発動"}},Y=l=>l.map(s=>{let o="";if(s.condition){const[c,i,u]=s.condition,r=i==="<="?"以下":"以上";switch(c){case"skill_count":o+=`スキル発動回数が${u}回${r}の時、`;break;case"vol_lv":o+=`ボルテージLv.が${u}${r}の時、`;break;case"mental_rate":o+=`メンタルが最大値の${u}%${r}の時、`;break;default:return o+="（条件文法エラー）の時",o}}switch(s.type){case"vol_buff":o+=`ボルテージ獲得効果スキルによるボルテージ獲得量が、1回の間${s.value||0}%上昇`;break;case"vol_up":{o+=`ボルテージPt.を${s.value||0}pt獲得`;break}case"vol_down":o+=`ボルテージPt.が${s.value||0}pt減少`;break;case"score_buff":o+=`スコア獲得効果スキルによるスコア獲得量が、1回の間${s.value||0}%上昇`;break;case"score_up":{o+=`合計アピール値の${s.value||0}%のスコアを獲得`;break}case"mental_up":o+=`最大値の${s.value||0}%分のメンタルを回復`;break;case"mental_down":o+=`最大値の${s.value||0}%分のメンタルを減少`;break;case"ap_up":o+=`APを${s.value||0}回復`;break;case"ap_down":o+=`APを${s.value||0}減少`;break;case"reset":o+="次に発動するスキルをデッキの1枚目から順に戻す（除外されたカードは戻らない）";break;case"splice":o+="このカードを除外する";break;default:o="（効果文法エラー）"}return o}).join("／"),r1=(l,s)=>{let o=1,c=s||0,i=!1;const u=[],r=l.replaceAll(/\/\/.*$/mg,"").split(/[\n\r\s]/);for(const d of r)if(d)if(d.startsWith("(")){const _=d.indexOf(")");o=Number(d.slice(1,_))}else if(d==="#FEVERSTART")i=!0,u.push({time:c,normalCount:0,slideCount:0,fever:i});else if(d==="#FEVEREND")i=!1,u.push({time:c,normalCount:0,slideCount:0,fever:i});else{const _=d.match(/^(?<normal>\d+)(-(?<slide>\d+))?-(?<length>\d+)$/);if(!_)throw new Error(`Undefined comment: ${d}`);const k=Number(_.groups?.normal),h=Number(_.groups?.slide||0),f=Number(_.groups?.length);u.push({time:c,normalCount:k,slideCount:h,fever:i}),c+=240/o/f}return u},m1=l=>l.reduce((s,o)=>s+o.normalCount+o.slideCount,0),N1=(l,s)=>60/(l-(s||0))*(1.5*l-15),i1=["kaho","sayaka","kozue","tsuzuri","rurino","megumi","ginko","kosuzu","hime","ceras","izumi","other"],A={kaho:"花帆",sayaka:"さやか",kozue:"梢",tsuzuri:"綴理",rurino:"瑠璃乃",megumi:"慈",ginko:"吟子",kosuzu:"小鈴",hime:"姫芽",ceras:"セラス",izumi:"泉",other:"その他"},u1={kaho:"日野下花帆",sayaka:"村野さやか",kozue:"乙宗梢",tsuzuri:"夕霧綴理",rurino:"大沢瑠璃乃",megumi:"藤島慈",ginko:"百生吟子",kosuzu:"徒町小鈴",hime:"安養寺姫芽",ceras:"セラス・柳田・リリエンフェルト",izumi:"桂城泉"},o1=l=>l<=2100?Math.floor((-5+Math.sqrt(25+20*l))/10):Math.floor(20+(l-2100)/200),c1=(l,s,o)=>(1+l/100)*(1+o1(s)*(o?2:1)/10),e1=l=>l<10?1:l<20?1.1:l<30?1.2:l<40?1.3:l<50?1.4:1.5,z1=({notes:l,convertedMembers:s,center:o,appealSum:c,mentalSum:i,masteryLevel:u,comboOffset:r})=>{const _=s.slice();let k=5,h=0,f=i,p=0,v=0;const N=[],R=[],E=s.find(S=>S.name===o),K=E?.centerSkillCondition,G=E?.centerSkills||[];let F=0,g=0;const t=m1(l);let n=0;const U=60/(t-(r||0));let b,z="";const q=(S,T)=>{const J=o1(v);e:for(const m of T){if(m.condition){const[O,Q,Z]=m.condition;let W=0;switch(O){case"skill_count":W=S.skillCount;break;case"vol_lv":W=J;break;case"mental_rate":W=f*100/i;break;default:throw new Error(`条件式が不正です: ${O}`)}if(Z===void 0)throw new Error(`条件式が不正です: ${O}`);switch(Q){case"<=":if(!(W<=Z))continue e;break;case">=":if(!(W>=Z))continue e;break}}switch(m.type){case"vol_buff":R[0]=(R[0]||0)+(m.value||0);break;case"vol_up":{const O=R.shift()||0;v+=(m.value||0)*(1+O/100),z+=`vol_up: +${(m.value||0)*(1+O/100)}
`;break}case"vol_down":v-=m.value||0,z+=`${A[S.name]} vol_down: -${m.value||0}
`;break;case"score_buff":N[0]=(N[0]||0)+(m.value||0);break;case"score_up":{const O=N.shift()||0,Q=(m.value||0)/100*(1+O/100)*c1(u,v,b?.fever||!1);p+=Math.ceil(c*Q),z+=`${A[S.name]} score_up: +${Math.ceil(c*Q)}
`;break}case"mental_up":f+=Math.ceil((m.value||0)/100*i),z+=`${A[S.name]} mental_up: +${Math.ceil((m.value||0)/100*i)}
`;break;case"mental_down":f-=Math.ceil((m.value||0)/100*i),z+=`${A[S.name]} mental_down: -${Math.ceil((m.value||0)/100*i)}
`,f<=0&&(f=1);break;case"ap_up":h+=(m.value||0)*e1(n),z+=`${A[S.name]} ap_up: +${(m.value||0)*e1(n)}
`;break;case"ap_down":h-=m.value||0,z+=`${A[S.name]} ap_down: -${m.value||0}
`;break;case"reset":F=_.length-1;break;case"splice":_.splice(_.indexOf(S),1),F--;break;default:throw new Error(`skill typeが不正です: ${m.type}`)}}};E&&K==="start"&&q(E,G);for(let S=0;S<l.length;S++){const T=l[S];if(b=l[S-1],!T)throw new Error("noteが見つかりません");for(E&&T.fever&&!b?.fever&&K==="fever_start"&&(q(E,G),console.log("center skill:fever_start")),k-=T.time-g,g=T.time;;){const m=_[F];if(!m)throw new Error("メンバーが見つかりません");if(m.ap<=h&&k<=0)h-=m.ap,m.skillCount++,q(m,m.skills),F=_.length-1===F?0:F+1,k+=5,console.log(`name: ${m.name}, scoreBuff: ${N[0]||0}, voltageBuff: ${R[0]||0}`);else break}k=Math.max(0,k);const J=Math.ceil(c/t*30*c1(u,v,T.fever))*(T.normalCount+T.slideCount);p+=J;for(let m=0;m<T.normalCount+T.slideCount;m++)h+=U*e1(n),n++;z+=`combo: ${n}, score: ${p} (+${J}), ap: ${h}, mental: ${f}, vol_lv: ${o1(v)*(T.fever?2:1)}
`}return E&&K==="end"&&q(E,G),{score:p,log:z}},R1={title:"TOKIMEKI Runners",titleFurigana:"ときめきらんなーず",offset:2.5,center:"rurino",apSum:86.75,note:{normal:`
(180)
2-8
0-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-4 0-8 0-1-8
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 
0-1-2 1-4 0-8 2-8
0-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-4 0-8 2-8
0-4 0-8 2-8 0-2

// Aメロ
2-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2

0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
2-4 0-8 0-1-8 0-1-8 0-1-8 0-4
2-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-4 0-8 1-4 0-8 0-1-8 0-1-8
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2

// Bメロ
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2

1-2 1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2

1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
2-2 2-2
2-2 2-4 0-8 0-1-8
0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8
0-1-2 0-4 0-8 2-8

#FEVERSTART
0-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
1-2 1-2
1-2 1-4 0-8 0-1-8
0-1-8 0-1-8 0-1-8 0-1-8 0-1-4 0-8 2-8

0-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
1-2 1-2
1-2 1-2
1-2 1-2


0-2-8 0-2-8 0-2-8
#FEVEREND
0-2-8 0-2-8 0-2-8 0-2-8 0-2-8
0-2-1
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-2
1-2 1-2
1-2 1-2
0-1-8 0-1-8 0-1-8 0-1-8 0-1-4 0-8 2-8
`}},F1={title:"僕らのLIVE 君とのLIFE",titleFurigana:"ぼくらのらいぶきみとのらいふ",offset:0,center:"megumi",comboOffset:4,note:{master:`
(210)
0-1 
0-1 
1-4 1-8 1-4 1-4 1-4 
1-4 1-4 1-4 1-8 
1-4 1-8 1-4 1-4 1-4 
1-4 1-4 1-4 1-8 
0-1-8 0-1-8 1-1-8 1-1-8 0-1-8 1-1-8 0-1-8 2-1-8 
0-1-8 1-1-8 0-1-8 2-1-8 0-1-8 1-1-8 0-1-8 1-1-8 
0-2-8 0-1-8 1-1-8 1-1-8 0-1-8 1-1-8 0-1-8 2-1-8 
1-1-8 2-8 2-8 4-8 4-8 1-16 1-16 1-16 1-16 1-16 1-16 
2-8 1-8 2-8 1-16 1-16 1-1-8 1-1-8 1-8 1-8 
2-8 1-8 2-8 1-1-8 1-1-8 1-1-8 2-8 1-8 
2-8 1-8 2-8 1-16 1-16 1-8 2-8 1-8 1-1-8 
0-1-8 1-1-16 1-16 2-8 1-16 1-16 2-8 1-16 1-16 1-16 1-16 1-16 1-16 
2-8 1-8 2-8 1-16 1-16 1-8 2-8 1-8 1-1-8 
0-1-8 1-1-16 1-16 1-1-16 1-16 1-1-8 1-1-16 1-16 1-1-16 1-16 1-1-8 1-16 1-16 
2-8 2-8 2-8 2-4 2-8 2-8 2-4 
2-8 2-8 2-4 2-8 2-8 1-16 1-16 
2-8 1-8 2-8 1-16 1-16 1-1-8 1-1-8 1-8 1-8 
2-8 1-8 2-8 1-1-8 1-1-8 1-1-8 2-8 1-8 
2-8 1-8 2-8 1-16 1-16 1-8 2-8 1-8 1-1-8 
0-1-8 0-2-8 1-1-8 0-1-8 1-1-8 1-8 1-16 1-16 1-16 1-16 
2-8 1-16 1-16 1-8 2-8 1-16 1-16 1-8 1-2-8 0-2-8 
0-2-8 1-2-8 1-2-8 1-8 1-8 2-8 2-8 2-8 
2-8 2-8 2-8 2-16 2-16 2-16 2-16 2-8 1-8 2-4 
2-4 2-8 2-4 2-4 

// Aメロ
2-8 1-8 1-8 2-8 1-8 2-8 1-8 0-1-8 
0-1-8 1-1-8 0-2-8 1-1-8 0-2-8 1-1-8 1-1-8 0-2-8 
0-2-8 0-2-8 0-2-8 0-2-8 0-2-4 2-4 
1-8 1-8 2-8 2-8 1-8 2-8 1-8 1-1-8 
0-1-8 1-1-8 1-1-8 0-1-8 1-1-8 1-8 2-8 1-8 
1-8 2-8 1-8 2-4 2-4 1-1-8 
0-1-8 0-1-8 1-1-8 0-1-8 1-1-8 1-1-8 1-1-8 0-1-8 
1-1-8 1-16 1-16 1-8 2-8 2-8 2-8 1-8 1-8 

1-1-8 0-1-8 1-1-8 0-1-8 1-1-8 1-1-8 1-1-8 1-1-16 1-16 
// 先頭4コンボ扱い
1-3-8 0-1-8 1-1-8 1-1-16 1-16 1-1-8 1-1-8 1-1-8 1-1-16 1-16
1-2-8 0-1-8 2-1-8 1-1-8 1-1-8 1-1-8 2-1-8 0-1-8 
1-1-4 0-2-8 0-2-8 0-2-8 0-2-8 2-8 2-8 
1-8 2-8 1-8 2-8 1-8 2-8 2-8 2-4 
2-8 1-8 1-16 1-16 2-8 0-1-8 2-1-8 0-1-8 
2-1-8 1-8 1-8 1-8 1-16 1-16 1-8 2-8 0-1-8 
// 三番目2コンボ扱い
0-1-8 0-2-16 0-2-16 1-1-8 1-16 0-1-16 1-1-8 4-8 4-8 4-8 

2-8 1-8 1-8 2-8 1-8 2-8 1-8 0-1-8 
0-1-8 1-1-8 0-2-8 1-1-8 0-2-8 1-1-8 1-1-8 0-2-8 
0-2-8 0-2-8 0-2-8 0-2-8 0-2-4 2-4 
1-8 1-8 2-8 2-8 1-8 2-8 1-8 1-1-8 
0-1-8 1-1-8 1-1-8 0-1-8 1-1-8 1-8 2-8 1-8 
1-8 2-8 1-8 2-4 2-4 1-1-8 
0-1-8 0-1-8 1-1-8 0-1-8 1-1-8 1-1-8 1-1-8 0-1-8 
1-1-8 1-16 1-16 1-8 2-8 2-8 2-8 1-8 1-8 

1-1-8 0-1-8 1-1-8 1-1-8 1-1-8 1-1-8 1-1-8 1-1-16 1-16 
// 先頭4コンボ扱い
1-3-8 0-1-8 1-1-8 1-1-16 1-16 1-1-8 1-1-8 1-1-8 1-1-8 
1-2-8 1-1-16 1-16 1-1-8 1-1-8 1-1-8 1-1-8 1-1-8 1-1-4 
2-8 2-8 1-16 1-16 1-8 1-8 2-4 
0-1-8 0-1-8 1-1-8 0-1-8 0-2-8 0-2-8 1-2-8 0-2-8 
0-3-8 0-3-8 1-3-8 0-3-8 0-4-8 0-4-8 1-4-8 2-4 
1-8 3-4 1-8 1-8 3-4 
1-8 2-16 2-16 1-4 0-2-4 0-2-4 

// Bメロ
0-1-8 0-1-8 0-1-8 1-1-8 1-1-4 1-8 1-8 
0-1-8 0-1-8 1-1-8 0-1-8 1-1-4 2-8 2-8 
0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 
0-2-8 0-1-8 0-1-4 1-4 1-8 1-1-8 
0-1-8 0-1-8 0-1-4 1-4 1-8 1-1-8 
0-1-8 0-1-8 0-2-8 0-1-8 0-2-8 1-1-8 1-1-8 1-8 
2-8 1-8 2-8 1-16 1-16 2-8 1-8 2-8 1-16 1-16 
2-8 1-8 2-8 1-16 1-16 1-8 1-16 1-16 1-16 1-16 1-16 1-16 
2-8 1-16 0-1-16 0-1-16 0-1-16 0-1-8 1-1-16 0-1-16 0-1-16 0-1-16 0-1-8 1-1-16 1-16 
1-8 1-16 1-16 1-8 1-16 1-16 1-8 2-16 2-16 2-16 2-16 2-16 2-16 

// サビ
#FEVERSTART
1-8 1-8 2-8 1-8 1-16 1-16 1-8 1-8 1-1-8 
0-1-8 1-1-8 2-8 1-8 1-16 1-16 1-8 1-8 0-1-8 
0-1-8 1-1-8 0-2-48 0-1-24 0-1-16 0-1-8 0-2-48 0-1-24 0-1-16 0-1-8 1-1-48 0-1-24 0-1-16 0-1-8 
1-1-8 0-1-8 1-1-4 1-4 0-1-8 1-1-8 
2-1-8 1-8 2-8 1-8 1-1-8 0-1-8 1-1-8 0-1-8 
0-1-8 1-1-8 2-8 1-8 2-8 1-8 2-8 1-8 
0-1-8 0-1-8 1-1-8 0-2-8 0-3-8 0-2-8 1-2-8 1-2-4 
1-8 1-8 1-8 2-8 1-8 2-8 1-8 

2-8 1-8 2-8 1-8 2-8 1-8 1-8 1-1-8 
0-1-8 0-1-8 1-2-48 0-1-24 0-1-6 0-48 1-1-48 0-1-24 0-1-6 0-48 1-1-48 0-1-24 0-1-6 0-48 
3-8 1-8 3-4 3-8 1-8 3-8 1-8 
0-1-8 1-1-8 0-2-8 1-1-8 0-2-8 1-1-8 0-2-8 1-1-8 
1-1-4 2-8 1-1-8 1-1-16 1-16 1-1-8 1-1-4 
2-4 2-8 1-1-8 1-1-16 1-16 1-1-8 1-1-8 1-8 
1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 1-16 
0-2-8 0-2-8 2-2-8 1-16 1-16 1-8 1-16 1-16 1-16 1-16 1-16 1-16 

1-8 1-8 2-8 1-8 1-16 1-16 1-8 1-8 1-1-8 
0-1-8 1-1-8 2-8 1-8 1-16 1-16 1-8 1-8 1-1-8 
0-1-8 1-1-8 0-2-48 0-1-24 0-1-16 0-1-8 0-2-48 0-1-24 0-1-16 0-1-8 1-1-48 0-1-24 0-1-16 0-1-8 
1-1-8 0-1-8 1-1-4 1-4 1-1-8 1-1-8 
2-1-8 1-8 2-8 1-8 1-1-8 1-1-8 1-1-8 0-1-8 
0-1-8 1-1-8 2-8 1-8 2-8 1-8 2-8 1-8 
// 4番目3コンボ扱い
1-1-8 0-1-8 1-1-8 0-3-8 0-1-8 0-1-8 1-1-8 2-4 
1-8 2-8 1-16 1-16 1-16 1-16 1-16 1-16 2-4 

2-1-8 1-1-8 2-1-8 0-1-8 1-2-8 2-1-8 1-1-8 2-1-4 
1-8 1-1-8 0-1-8 1-1-8 0-1-8 1-1-8 0-1-8 
1-1-8 0-1-8 0-1-8 0-1-8 0-2-8 0-2-8 0-2-8 0-5-8 
0-2-8 0-2-8 0-2-8 0-2-8 0-3-8 0-1-8 0-1-8 0-1-8 
0-1-8 0-1-8 1-1-8 0-1-8 0-2-8 0-1-8 1-1-8 0-1-8 
0-2-8 0-1-8 1-1-8 0-1-8 0-2-8 0-1-8 1-1-8 0-1-8 
1-1-4 2-8 2-8 2-8 2-8 2-8 1-4 
1-8 1-4 1-8 1-8 1-8 0-1-8 

0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 
0-1-1 
0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 
0-1-8 1-16 1-16 1-8 1-8 1-8 1-8 1-8 0-1-8 
0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 
0-1-1 
2-8 1-8 2-8 2-4 1-8 1-8 2-8 
1-8 2-16 1-16 1-8 2-16 1-16 1-16 1-16 1-16 1-16 2-16 1-16 1-16 1-16 

#FEVEREND
2-8 1-8 2-8 1-16 1-16 1-1-8 1-1-8 1-1-8 1-8 
2-8 1-8 2-8 1-1-8 1-1-8 1-1-8 2-8 1-8 
2-8 2-8 2-8 1-16 1-16 1-16 1-16 2-8 1-8 1-1-8 
0-1-8 1-1-16 1-16 2-8 1-16 1-16 2-8 1-16 1-16 1-16 1-16 1-16 1-16 
3-8 1-8 2-8 1-16 1-16 1-8 2-8 1-16 1-16 1-1-8 
0-1-8 1-1-16 1-16 1-1-16 1-16 1-1-16 1-16 1-1-16 1-16 1-1-16 1-16 1-1-8 1-16 1-16 
2-8 2-8 2-8 2-4 2-8 2-8 2-4 
2-8 2-8 2-4 2-8 2-8 1-16 1-16 

2-8 1-8 2-8 1-16 1-16 1-1-8 1-1-8 1-1-8 1-8 
2-8 1-8 2-8 1-1-8 1-1-8 1-1-8 2-8 1-8 
2-8 1-8 2-8 1-16 1-16 1-16 1-16 2-8 1-8 1-1-8 
1-1-8 0-2-8 1-1-8 0-1-8 1-1-8 1-8 1-16 1-16 1-16 1-16 
2-8 1-16 1-16 1-8 2-8 1-16 1-16 1-8 1-1-8 0-1-8 
0-1-8 0-1-8 0-1-8 0-1-8 0-1-8 2-8 1-8 1-8 
1-1-8 0-1-8 1-1-8 0-2-8 0-1-8 1-1-8 1-1-8 2-4 
2-4 2-8 1-4 4-8 0-4-8 
0-4-8 0-5-8 0-5-8 0-5-8 0-5-4 2-8 2-1 `}},L=Object.freeze(Object.defineProperty({__proto__:null,borarara:F1,tokimeki:R1},Symbol.toStringTag,{value:"Module"})),O1=`key	series	other_name	raw_skill_text	ap	center_skill_condition	raw_center_skill_text	center_ability	smile	pure	cool	mental	rarity
other	蓮ノ空女学院スクールアイドルクラブ102期生	大賀美沙知	ap_up(10);skill_count>=3 ^ splice()	0				5880	5700	5700	480	ur
rurino	悠久の舞踏会		vol_lv <= 8 ^ vol_buff(326.25);vol_lv >= 7 ^ score_buff(435);mental_down(10*)	10	fever_start	ap_up(8);vol_lv >= 4 ^ ap_up(8)	appeal_up(g103, 200);ap_reduce(all, 2)	4320	7800	5160	480	ur
rurino	アイドゥーミー！		mental_up(10*); mental_rate >= 100 ^ ap_up(15); mental_rate <= 99 ^ vol_down(1000*); skill_count >= 3 ^ splice()	5	fever_start	ap_up(20); mental_rate <= 99 ^ vol_down(1000*)	appeal_up(miracra, 200)	6960	6360	5880	520	ur`,A1=l=>l.replace(/_([a-z])/g,(s,o)=>o.toUpperCase()),B1=l=>{const s=l.split(`
`),o=s[0].split("	");return s.slice(1).map(i=>i.split("	")).map(i=>o.reduce((u,r,d)=>(u={...u,[A1(r)]:i[d]},u),{}))},d1=B1(O1),D1={class:"card-body"},P1=l1({__name:"MPopup",props:{onClose:{type:Function,default:()=>{}}},setup(l){return(s,o)=>(y(),$("div",{class:"popup-wrapper",onClick:o[1]||(o[1]=c=>s.onClose(null))},[e("div",{class:"card overflow-scroll h-100 w-100",onClick:o[0]||(o[0]=_1(()=>{},["stop"]))},[e("div",D1,[f1(s.$slots,"default",{},void 0)])])]))}}),L1=Object.assign(k1(P1,[["__scopeId","data-v-89d6b5ab"]]),{__name:"MPopup"}),j1={class:"my-2"},I1={class:"input-group mb-3"},K1=["value"],G1={class:"my-2"},W1={key:0},H1={class:"alert alert-info"},q1={class:"my-2"},J1={key:1},Q1={class:"alert alert-info"},X1=l1({__name:"MdCardSelect",props:{onClose:{}},setup(l){const s=C(""),o=f=>`[${f.series}] ${f.key!=="other"?u1[f.key]:f.otherName}`,c=P(()=>d1.filter(f=>o(f).includes(s.value))),i=C(0),u=P(()=>d1[i.value]),r=P(()=>u.value?T1(u.value,_.value,k.value):null),d=P(()=>r.value?Y(H(r.value).skills):""),_=C(14),k=C(14),h=P(()=>r.value?Y(H(r.value).centerSkills):"");return(f,p)=>(y(),p1(L1,{"on-close":f.onClose},{default:b1(()=>[e("div",j1,[e("div",I1,[p[5]||(p[5]=e("div",{class:"input-group-prepend"},[e("span",{class:"input-group-text"},"検索")],-1)),w(e("input",{"onUpdate:modelValue":p[0]||(p[0]=v=>x(s)?s.value=v:null),type:"text",class:"form-control"},null,512),[[V,a(s)]])]),w(e("select",{"onUpdate:modelValue":p[1]||(p[1]=v=>x(i)?i.value=v:null),class:"form-select"},[(y(!0),$(B,null,D(a(c),(v,N)=>(y(),$("option",{key:`${v.key}-${v.series}`,class:y1(["card",{"bg-primary":a(u)?.key===v.key}]),value:N}," ["+M(v.series)+"] "+M(v.key!=="other"?a(u1)[v.key]:v.otherName),11,K1))),128))],512),[[j,a(i)]])]),e("div",G1,[p[6]||(p[6]=v1(" スキルレベル： ")),w(e("input",{"onUpdate:modelValue":p[2]||(p[2]=v=>x(_)?_.value=v:null),type:"number",class:"form-control",min:"1",max:"14"},null,512),[[V,a(_)]])]),a(u)?(y(),$("div",W1,[e("div",H1,M(a(d)),1)])):I("",!0),e("div",q1,[p[7]||(p[7]=e("label",{class:"form-label"}," センタースキルレベル： ",-1)),w(e("input",{"onUpdate:modelValue":p[3]||(p[3]=v=>x(k)?k.value=v:null),type:"number",class:"form-control",min:"1",max:"14"},null,512),[[V,a(k)]])]),a(u)?(y(),$("div",J1,[e("div",Q1," 【"+M(a(t1)(a(u).centerSkillCondition))+"】"+M(a(h)),1)])):I("",!0),e("button",{type:"button",class:"btn btn-primary",onClick:p[4]||(p[4]=v=>f.onClose(a(r)))}," 選択 ")]),_:1},8,["on-close"]))}}),Y1=Object.assign(X1,{__name:"MdCardSelect"});function Z1(l){let s=!1,o;const c=h1(!0);return(...i)=>(s||(o=c.run(()=>l(...i)),s=!0),o)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ee=Z1(()=>{const l=C([]);return{modals:l,openModal:o=>{let c;const i=new Promise(d=>{c=d}),r={component:o,onClose:d=>{l.value.splice(l.value.indexOf(r),1),c(d)}};return l.value.push(r),i}}}),te={class:"container-md"},oe={class:"card my-2"},le={class:"card-body"},se={class:"mb-2"},ne=["value"],ae={class:"mb-2"},re={key:0,value:"normal"},ie={key:1,value:"hard"},ue={key:2,value:"expert"},ce={key:3,value:"master"},de={class:"card my-2"},pe={class:"card-body p-4"},ve={class:"row"},me={class:"col-md-6"},fe=["value"],_e={class:"col"},ke={class:"col"},be={class:"my-2"},ye={class:"my-2"},he={class:"card my-2"},$e={class:"card-body"},we={class:"mb-2"},Ce={class:"row"},ge={class:"col"},Se={class:"col"},Me={class:"col"},xe={class:"m-3"},Ve=["onClick"],Te={class:"row my-2 align-items-center justify-content-start"},Ee={class:"col-auto"},Ue=["onUpdate:modelValue"],Ne=["value"],ze={class:"row my-2 align-items-center justify-content-start"},Re={class:"col-auto"},Fe=["onUpdate:modelValue"],Oe={class:"my-2"},Ae={class:"row"},Be={class:"col"},De=["onUpdate:modelValue"],Pe={class:"col"},Le={class:"alert alert-secondary"},je={class:"my-2"},Ie={class:"row"},Ke={class:"col"},Ge=["onUpdate:modelValue"],We=["value"],He=["onUpdate:modelValue"],qe={class:"col"},Je={class:"alert alert-secondary"},Qe={class:"card my-2"},Xe={class:"card-body"},Ye={class:"my-2"},Ze={class:"my-2"},ot=l1({__name:"index",setup(l){const s=C("tokimeki"),o=C("normal"),c=C(""),i=C(""),u=C(0),r=C(0),d=P(()=>{const g=r1(c.value,0);return m1(g)}),_=P(()=>N1(d.value,r.value)),k=()=>{const g=L[s.value];g&&(c.value=g.note[o.value]||"",i.value=g.center,u.value=g.offset,r.value=g.comboOffset||0)},h=C(80820),f=C(2960),p=C(50),v=C(""),N=C(0),R=C(n1),E=()=>{const g=n1.map(H),t=r1(c.value,u.value),{score:n,log:U}=z1({notes:t,convertedMembers:g,center:i.value,appealSum:h.value,mentalSum:f.value,masteryLevel:p.value,comboOffset:r.value});N.value=n,v.value=U};w1({title:"スクショウ計算機"});const{modals:K,openModal:G}=ee(),F=async g=>{const t=await G(Y1);t&&R.value.splice(R.value.indexOf(g),1,t)};return(g,t)=>(y(),$("div",te,[t[25]||(t[25]=e("h1",null,"スクショウ計算機",-1)),e("div",oe,[t[10]||(t[10]=e("div",{class:"card-header"}," 楽曲プリセット ",-1)),e("div",le,[e("form",null,[e("div",se,[w(e("select",{"onUpdate:modelValue":t[0]||(t[0]=n=>x(s)?s.value=n:null),class:"form-select"},[(y(),$(B,null,D(L,(n,U)=>e("option",{key:U,value:U},M(n.title),9,ne)),64))],512),[[j,a(s)]])]),e("div",ae,[w(e("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>x(o)?o.value=n:null),class:"form-select"},[L[a(s)].note.normal?(y(),$("option",re," normal ")):I("",!0),L[a(s)].note.hard?(y(),$("option",ie," hard ")):I("",!0),L[a(s)].note.expert?(y(),$("option",ue," expert ")):I("",!0),L[a(s)].note.master?(y(),$("option",ce," master ")):I("",!0)],512),[[j,a(o)]])]),e("div",{class:"mb-2"},[e("button",{type:"button",class:"btn btn-primary",onClick:k}," 読み込み ")])])])]),e("div",de,[t[14]||(t[14]=e("div",{class:"card-header"}," 楽曲データ ",-1)),e("div",pe,[e("div",ve,[e("div",me,[t[11]||(t[11]=e("label",{class:"form-label"}," センター： ",-1)),w(e("select",{"onUpdate:modelValue":t[2]||(t[2]=n=>x(i)?i.value=n:null),class:"form-select"},[(y(!0),$(B,null,D(a(i1),n=>(y(),$("option",{key:n,value:n},M(a(A)[n]),9,fe))),128))],512),[[j,a(i)]])]),e("div",_e,[t[12]||(t[12]=e("label",{class:"form-label"}," オフセット： ",-1)),w(e("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>x(u)?u.value=n:null),class:"form-control"},null,512),[[V,a(u),void 0,{number:!0}]])]),e("div",ke,[t[13]||(t[13]=e("label",{class:"form-label"}," コンボ誤差： ",-1)),w(e("input",{"onUpdate:modelValue":t[4]||(t[4]=n=>x(r)?r.value=n:null),class:"form-control"},null,512),[[V,a(r),void 0,{number:!0}]])])]),e("div",be,[w(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=n=>x(c)?c.value=n:null),rows:"6",class:"form-control"},null,512),[[V,a(c)]])]),e("div",ye," 総コンボ数："+M(a(d))+" 総AP："+M(a(_)),1)])]),e("div",he,[t[22]||(t[22]=e("div",{class:"card-header"}," メンバーデータ ",-1)),e("div",$e,[e("div",we,[e("div",Ce,[e("div",ge,[t[15]||(t[15]=e("label",{class:"form-label"},"総合アピール値：",-1)),w(e("input",{"onUpdate:modelValue":t[6]||(t[6]=n=>x(h)?h.value=n:null),type:"number",class:"form-control"},null,512),[[V,a(h),void 0,{number:!0}]])]),e("div",Se,[t[16]||(t[16]=e("label",{class:"form-label"},"総合メンタル値：",-1)),w(e("input",{"onUpdate:modelValue":t[7]||(t[7]=n=>x(f)?f.value=n:null),type:"number",class:"form-control"},null,512),[[V,a(f),void 0,{number:!0}]])]),e("div",Me,[t[17]||(t[17]=e("label",{class:"form-label"},"マスタリーレベル：",-1)),w(e("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>x(p)?p.value=n:null),type:"number",class:"form-control"},null,512),[[V,a(p),void 0,{number:!0}]])])])]),(y(!0),$(B,null,D(a(R),(n,U)=>(y(),$("div",{key:U,class:"card m-3 border border-dark-subtle"},[e("div",xe,[e("div",null,[e("button",{type:"button",class:"btn btn-primary",onClick:b=>F(n)}," カード選択 ",8,Ve)]),e("div",Te,[t[18]||(t[18]=e("div",{class:"col-auto"},[e("label",{class:"form-label"}," メンバー： ")],-1)),e("div",Ee,[w(e("select",{"onUpdate:modelValue":b=>n.name=b,class:"form-select"},[(y(!0),$(B,null,D(a(i1),b=>(y(),$("option",{key:b,value:b},M(a(A)[b]),9,Ne))),128))],8,Ue),[[j,n.name]])])]),e("div",ze,[t[19]||(t[19]=e("div",{class:"col-auto"},[e("label",{class:"form-label"}," 消費AP： ")],-1)),e("div",Re,[w(e("input",{"onUpdate:modelValue":b=>n.ap=b,type:"number",class:"form-control"},null,8,Fe),[[V,n.ap,void 0,{number:!0}]])])]),e("div",Oe,[t[20]||(t[20]=e("label",{class:"form-label"}," スキル： ",-1)),e("div",Ae,[e("div",Be,[w(e("textarea",{"onUpdate:modelValue":b=>n.skill=b,class:"form-control"},null,8,De),[[V,n.skill]])]),e("div",Pe,[e("div",Le,M(a(Y)(a(H)(n).skills)),1)])])]),e("div",je,[t[21]||(t[21]=e("label",{class:"form-label"}," センタースキル： ",-1)),e("div",Ie,[e("div",Ke,[w(e("select",{"onUpdate:modelValue":b=>n.centerSkillCondition=b,class:"form-select"},[(y(!0),$(B,null,D(a(U1),b=>(y(),$("option",{key:b,value:b},M(a(t1)(b)),9,We))),128))],8,Ge),[[j,n.centerSkillCondition]]),w(e("textarea",{"onUpdate:modelValue":b=>n.centerSkill=b,class:"form-control"},null,8,He),[[V,n.centerSkill]])]),e("div",qe,[e("div",Je," 【"+M(a(t1)(n.centerSkillCondition))+"】"+M(a(Y)(a(H)(n).centerSkills)),1)])])])])]))),128))])]),e("div",Qe,[t[24]||(t[24]=e("div",{class:"card-header"}," 計算 ",-1)),e("div",Xe,[e("button",{type:"button",class:"btn btn-primary",onClick:E}," 計算 "),e("div",Ye," 計算結果: "+M(a(N)),1),e("div",Ze,[t[23]||(t[23]=v1(" ログ： ")),w(e("textarea",{"onUpdate:modelValue":t[9]||(t[9]=n=>x(v)?v.value=n:null),rows:"6",class:"form-control"},null,512),[[V,a(v)]])])])]),(y(!0),$(B,null,D(a(K),(n,U)=>(y(),p1($1(n.component),{key:`modal-${U}`,"on-close":n.onClose},null,40,["on-close"]))),128))]))}});export{ot as default};
