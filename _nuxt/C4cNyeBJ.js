import{E as E1,o as N1,F as $1,G as C1,H as Z,I as U1,J as z1,K as O1,r as E,L as F1,M as D1,s as R1,k as R,N as t1,O as p,d as _1,x as V,y as S,z as t,P as L1,Q as P1,_ as j1,R as M1,C as B1,S as w,T as O,U,V as G,W as H,X as I1,A as x,Y as Q,Z as Y,D as V1,$ as W1}from"./BFCbcZuZ.js";import{u as J1}from"./BA5O1AgF.js";const G1=`key	series	other_name	center_skill_condition	raw_center_skill_text	raw_skill_text	ap	center_ability_text	smile	pure	cool	mental	rarity
other	蓮ノ空女学院スクールアイドルクラブ102期生	大賀美沙知			ap_up(10);skill_count>=3 ^ splice()	0		5880	5700	5700	480	ur
rurino	悠久の舞踏会		fever_start	ap_up(8);vol_lv >= 4 ^ ap_up(8)	vol_lv <= 8 ^ vol_buff(326.25);vol_lv >= 7 ^ score_buff(435);mental_down(10*)	10	appeal_up(g103, 200);ap_reduce(all, 2)	4320	7800	5160	480	ur
rurino	アイドゥーミー！		fever_start	ap_up(20); mental_rate <= 99 ^ vol_down(1000*)	mental_up(10*); mental_rate >= 100 ^ ap_up(15); mental_rate <= 99 ^ vol_down(1000*); skill_count >= 3 ^ splice()	5	appeal_up(miracra, 200)	6960	6360	5880	520	ur
megumi	久遠の銀河へ		fever_start	score_up(204.75); skill_count >= 6 ^ score_up(286.65)	skill_count <= 9 ^ ap_up(15*); skill_count >= 10 ^ score_up(522)	10	appeal_up(g102, 200);ap_reduce(all, 2)	7200	4920	4800	510	ur
kaho	アイドゥーミー！		end	score_up(418.5)	mental_up(10*); mental_rate >= 100 ^ score_up(1135); mental_rate <= 99 ^ vol_down(1000*); skill_count >= 3 ^ splice()	12	appeal_up(all, 72)	6000	6240	6960	520	ur
sayaka	アイドゥーミー！		fever_start	score_up(877.5); mental_rate <= 99 ^ vol_down(1000*)	skill_count <= 1 ^ vol_buff(78.75); skill_count >= 2 ^ score_buff(243); mental_rate >= 100 ^ vol_up(945); mental_rate <= 99 ^ vol_down(1000*)	14	appeal_up(dollche, 200)	6120	6960	6120	520	ur
kozue	輪廻の銀河へ		fever_start	ap_up(8); skill_count >= 6 ^ ap_up(8)	skill_count <= 3 ^ vol_buff(324); skill_count <= 3 ^ reset(); skill_count >= 4 ^ score_buff(324)	10	appeal_up(g102, 200);ap_reduce(all, 2)	5160	4680	7440	480	ur
ceras	16th Birthday		start	ap_up(10)	ap_up(5); vol_buff(54.45); reset(); skill_count >= 3 ^ splice()	0	appeal_up(ceras, 400)	5760	5760	5760	480	ur`,H1=e=>e.replace(/_([a-z])/g,(o,l)=>l.toUpperCase()),K1=e=>{const o=e.split(`
`),l=o[0].split("	");return o.slice(1).map(r=>r.split("	")).map(r=>l.reduce((i,u,s)=>(i={...i,[H1(u)]:r[s]===""||isNaN(Number(r[s]))?r[s]:Number(r[s])},i),{}))},K=K1(G1),q1=["<=",">="],Q1=["start","end","fever_start"],v1=["kaho","sayaka","kozue","tsuzuri","rurino","megumi","ginko","kosuzu","hime","ceras","izumi","other"],W={kaho:"花帆",sayaka:"さやか",kozue:"梢",tsuzuri:"綴理",rurino:"瑠璃乃",megumi:"慈",ginko:"吟子",kosuzu:"小鈴",hime:"姫芽",ceras:"セラス",izumi:"泉",other:"その他"},b1={kaho:"日野下花帆",sayaka:"村野さやか",kozue:"乙宗梢",tsuzuri:"夕霧綴理",rurino:"大沢瑠璃乃",megumi:"藤島慈",ginko:"百生吟子",kosuzu:"徒町小鈴",hime:"安養寺姫芽",ceras:"セラス・柳田・リリエンフェルト",izumi:"桂城泉"},X1={all:v1,g102:["kozue","tsuzuri","megumi"],g103:["kaho","sayaka","rurino"],g104:["ginko","kosuzu","hime","izumi"],g105:["ceras"],cerise:["kaho","kozue","ginko"],dollche:["sayaka","tsuzuri","kosuzu"],miracra:["rurino","megumi","hime"],edel:["ceras","izumi"]},Y1={all:"全員",g102:"102期生",g103:"103期生",g104:"104期生",g105:"105期生",cerise:"スリーズブーケに所属するメンバー",dollche:"DOLLCHESTRAに所属するメンバー",miracra:"みらくらぱーく！に所属するメンバー",edel:"Edel Noteに所属するメンバー"},Z1=["smile","pure","cool"],ee={smile:"スマイル",pure:"ピュア",cool:"クール"},k1={1:1,2:1.1,3:1.2,4:1.3,5:1.4,6:1.5,7:1.6,8:1.7,9:1.8,10:2,11:2.2,12:2.4,13:2.6,14:3},n1={vol_buff:2,vol_up:2,vol_down:2,score_up:2,score_buff:2,mental_up:2,mental_down:2,ap_up:0,ap_down:0},X=(e,o,l)=>{const c=e.rawSkillText.replace(/([\w_]+)\(([\d.]+)(?<no_change>\*?)\)/g,(i,u,s,d)=>{if(d)return`${u}(${s})`;const v=Math.floor(Number(s)*k1[o]/3*Math.pow(10,n1[u])+1e-6)/Math.pow(10,n1[u]);return`${u}(${v})`}),r=e.rawCenterSkillText.replace(/([\w_]+)\(([\d.]+)(?<no_change>\*?)\)/g,(i,u,s,d)=>{if(d)return`${u}(${s})`;const v=Math.floor(Number(s)*k1[l]/3*Math.pow(10,n1[u])+1e-6)/Math.pow(10,n1[u]);return`${u}(${v})`});return{...e,name:e.key,skill:c,centerSkillCondition:e.centerSkillCondition,centerSkill:r}},te=[X(K[0],14,14),X(K[6],14,14),X(K[5],14,14),X(K[7],14,14),X(K[4],14,14),X(K[1],14,14)],y1=e=>{if(!e)return;const o=q1.find(l=>e?.includes(l));if(o){const[l,c]=e.split(o).map(r=>r.trim());return!l||!c?void 0:[l,o,Number(c)]}else return},oe=e=>e.split(",").map(o=>o.trim()).map(o=>{const l=Number(o);return isNaN(l)?o:l}),q=e=>{const o=[],l=[],c=[],r=e.skill.split(";");for(const i of r){const[u,s]=i.split("^").map(T=>T.trim()),d=s?u:void 0,v=s||u,[,$,C]=v.match(/^(\w+)\((.*)\)$/)||[],A={type:$,value:C?Number(C):void 0,condition:y1(d)};o.push(A)}if(e.centerSkill){const i=e.centerSkill.split(";");for(const u of i){const[s,d]=u.split("^").map(g=>g.trim()),v=d?s:void 0,$=d||s,[,C,A]=$.match(/^(\w+)\((.*)\)$/)||[],T={type:C,value:A?Number(A):void 0,condition:y1(v)};l.push(T)}}if(e.centerAbilityText){const i=e.centerAbilityText.split(";");for(const u of i){const[,s,d]=u.match(/^(\w+)\((.*)\)$/)||[],v={type:s,value:d?oe(d):[]};c.push(v)}}return{...e,skills:o,centerSkills:l,centerAbilities:c,skillCount:0}},le=(e,o)=>X1[o]?.includes(e)||e===o,se=(e,o,l)=>{const r=e.find(i=>i.name===l)?.centerAbilities.find(i=>i.type==="appeal_up");return e.reduce((i,u)=>{const s=r?le(u.name,r?.value[0]):!1,d=Math.round(u.smile*(s?(100+r?.value[1])/100:1)/(o==="smile"?1:10)),v=Math.round(u.pure*(s?(100+r?.value[1])/100:1)/(o==="pure"?1:10)),$=Math.round(u.cool*(s?(100+r?.value[1])/100:1)/(o==="cool"?1:10));return i+d+v+$},0)},f1=e=>{switch(e){case"start":return"ライブ開始時に発動";case"end":return"ライブ終了時に発動";case"fever_start":return"FEVER開始時に発動"}},i1=e=>e.map(o=>{let l="";if(o.condition){const[c,r,i]=o.condition,u=r==="<="?"以下":"以上";switch(c){case"skill_count":l+=`スキル発動回数が${i}回${u}の時、`;break;case"vol_lv":l+=`ボルテージLv.が${i}${u}の時、`;break;case"mental_rate":l+=`メンタルが最大値の${i}%${u}の時、`;break;default:return l+="（条件文法エラー）の時",l}}switch(o.type){case"vol_buff":l+=`ボルテージ獲得効果スキルによるボルテージ獲得量が、1回の間${o.value||0}%上昇`;break;case"vol_up":{l+=`ボルテージPt.を${o.value||0}pt獲得`;break}case"vol_down":l+=`ボルテージPt.が${o.value||0}pt減少`;break;case"score_buff":l+=`スコア獲得効果スキルによるスコア獲得量が、1回の間${o.value||0}%上昇`;break;case"score_up":{l+=`合計アピール値の${o.value||0}%のスコアを獲得`;break}case"mental_up":l+=`最大値の${o.value||0}%分のメンタルを回復`;break;case"mental_down":l+=`最大値の${o.value||0}%分のメンタルを減少`;break;case"ap_up":l+=`APを${o.value||0}回復`;break;case"ap_down":l+=`APを${o.value||0}減少`;break;case"reset":l+="次に発動するスキルをデッキの1枚目から順に戻す（除外されたカードは戻らない）";break;case"splice":l+="このカードを除外する";break;default:l="（効果文法エラー）"}return l}).join("／"),T1=e=>e.map(o=>{let l="";switch(o.type){case"appeal_up":l+=`${Y1[o.value[0]]||W[o.value[0]]}のアピール値が${o.value[1]}%上昇`;break;case"ap_reduce":l+=`全てのスキルの消費APが${o.value[1]}減少`;break;case"cooltime_reduce":l+=`クールタイムが${o.value[0]}秒減少`;break;default:l="（効果文法エラー）"}return l}).join("／"),h1=(e,o)=>{let l=1,c=o||0,r=!1;const i=[],u=e.replaceAll(/\/\/.*$/gm,"").split(/[\n\r\s]/);for(const s of u)if(s)if(s.startsWith("(")){const d=s.indexOf(")");l=Number(s.slice(1,d))}else if(s==="#FEVERSTART")r=!0,i.push({time:c,normalCount:0,slideCount:0,fever:r});else if(s==="#FEVEREND")r=!1,i.push({time:c,normalCount:0,slideCount:0,fever:r});else{const d=s.match(/^(?<normal>\d+)(-(?<slide>\d+))?-(?<length>\d+)$/);if(!d)throw new Error(`Undefined comment: ${s}`);const v=Number(d.groups?.normal),$=Number(d.groups?.slide||0),C=Number(d.groups?.length);i.push({time:c,normalCount:v,slideCount:$,fever:r}),c+=240/l/C}return i},x1=e=>e.reduce((o,l)=>o+l.normalCount+l.slideCount,0),ne=(e,o)=>60/(e-(o||0))*(1.5*e-15),m1=e=>e<=2100?Math.floor((-5+Math.sqrt(25+20*e))/10):Math.floor(20+(e-2100)/200),g1=(e,o,l)=>(1+e/100)*(1+m1(o)*(l?2:1)/10),d1=e=>e<10?1:e<20?1.1:e<30?1.2:e<40?1.3:e<50?1.4:1.5,ae=({notes:e,convertedMembers:o,center:l,appealSum:c,mentalSum:r,masteryLevel:i,comboOffset:u})=>{const s=o.find(b=>b.name===l),d=s?.centerSkillCondition,v=s?.centerSkills||[],$=s?.centerAbilities||[],C=$.find(b=>b.type==="cooltime_reduce"),A=$.find(b=>b.type==="ap_reduce"),T=5-Number(C?.value[0]||0),g=Number(A?.value[1]||0),m=o.slice();let f=T,N=0,D=r,F=0,j=0;const J=[],B=[];let k=0,n=0;const a=x1(e);let z=0;const y=60/(a-(u||0));let I,L="";const _=(b,M)=>{const l1=m1(j);e:for(const h of M){if(h.condition){const[P,s1,c1]=h.condition;let o1=0;switch(P){case"skill_count":o1=b.skillCount;break;case"vol_lv":o1=l1;break;case"mental_rate":o1=D*100/r;break;default:throw new Error(`条件式が不正です: ${P}`)}if(c1===void 0)throw new Error(`条件式が不正です: ${P}`);switch(s1){case"<=":if(!(o1<=c1))continue e;break;case">=":if(!(o1>=c1))continue e;break}}switch(h.type){case"vol_buff":B[0]=(B[0]||0)+(h.value||0);break;case"vol_up":{const P=B.shift()||0;j+=(h.value||0)*(1+P/100),L+=`vol_up: +${(h.value||0)*(1+P/100)}
`;break}case"vol_down":j-=h.value||0,L+=`${W[b.name]} vol_down: -${h.value||0}
`;break;case"score_buff":J[0]=(J[0]||0)+(h.value||0);break;case"score_up":{const P=J.shift()||0,s1=(h.value||0)/100*(1+P/100)*g1(i,j,I?.fever||!1);F+=Math.ceil(c*s1),L+=`${W[b.name]} score_up: +${Math.ceil(c*s1)}
`;break}case"mental_up":D+=Math.ceil((h.value||0)/100*r),L+=`${W[b.name]} mental_up: +${Math.ceil((h.value||0)/100*r)}
`;break;case"mental_down":D-=Math.ceil((h.value||0)/100*r),L+=`${W[b.name]} mental_down: -${Math.ceil((h.value||0)/100*r)}
`,D<=0&&(D=1);break;case"ap_up":N+=(h.value||0)*d1(z),L+=`${W[b.name]} ap_up: +${(h.value||0)*d1(z)}
`;break;case"ap_down":N-=h.value||0,L+=`${W[b.name]} ap_down: -${h.value||0}
`;break;case"reset":k=m.length-1;break;case"splice":m.splice(m.indexOf(b),1),k--;break;default:throw new Error(`skill typeが不正です: ${h.type}`)}}};s&&d==="start"&&_(s,v);for(let b=0;b<e.length;b++){const M=e[b];if(I=e[b-1],!M)throw new Error("noteが見つかりません");for(s&&M.fever&&!I?.fever&&d==="fever_start"&&_(s,v),f-=M.time-n,n=M.time;;){const h=m[k];if(!h)throw new Error("メンバーが見つかりません");const P=Math.max(h.ap-g,0);if(P<=N&&f<=0)N-=P,h.skillCount++,_(h,h.skills),k=m.length-1===k?0:k+1,f+=T;else break}f=Math.max(0,f);const l1=Math.ceil(c/a*30*g1(i,j,M.fever))*(M.normalCount+M.slideCount);F+=l1;for(let h=0;h<M.normalCount+M.slideCount;h++)N+=y*d1(z),z++;L+=`combo: ${z}, score: ${F} (+${l1}), ap: ${N}, mental: ${D}, vol_lv: ${m1(j)*(M.fever?2:1)}
`}return s&&d==="end"&&_(s,v),{score:F,log:L}},re={title:"TOKIMEKI Runners",titleFurigana:"ときめきらんなーず",offset:2.5,center:"rurino",attribute:"smile",apSum:86.75,note:{normal:`
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
`}},ie={title:"僕らのLIVE 君とのLIFE",titleFurigana:"ぼくらのらいぶきみとのらいふ",offset:0,center:"megumi",attribute:"pure",comboOffset:4,note:{master:`
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
0-4-8 0-5-8 0-5-8 0-5-8 0-5-4 2-8 2-1 `}},e1=Object.freeze(Object.defineProperty({__proto__:null,borarara:ie,tokimeki:re},Symbol.toStringTag,{value:"Module"}));function ue(e){return U1()?(z1(e),!0):!1}function ce(e){let o=!1,l;const c=E1(!0);return(...r)=>(o||(l=c.run(()=>e(...r)),o=!0),l)}const de=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const pe=Object.prototype.toString,ve=e=>pe.call(e)==="[object Object]",fe=()=>{};function me(...e){if(e.length!==1)return O1(...e);const o=e[0];return typeof o=="function"?C1(F1(()=>({get:o,set:fe}))):E(o)}function _e(e,o){function l(...c){return new Promise((r,i)=>{Promise.resolve(e(()=>o.apply(this,c),{fn:o,thisArg:this,args:c})).then(r).catch(i)})}return l}const A1=e=>e();function be(e=A1,o={}){const{initialState:l="active"}=o,c=me(l==="active");function r(){c.value=!1}function i(){c.value=!0}const u=(...s)=>{c.value&&e(...s)};return{isActive:C1(c),pause:r,resume:i,eventFilter:u}}function p1(e){return Array.isArray(e)?e:[e]}function ke(e){return D1()}function ye(e,o,l={}){const{eventFilter:c=A1,...r}=l;return Z(e,_e(c,o),r)}function he(e,o,l={}){const{eventFilter:c,initialState:r="active",...i}=l,{eventFilter:u,pause:s,resume:d,isActive:v}=be(c,{initialState:r});return{stop:ye(e,o,{...i,eventFilter:u}),pause:s,resume:d,isActive:v}}function ge(e,o=!0,l){ke()?N1(e,l):o?e():$1(e)}function we(e,o,l){return Z(e,o,{...l,immediate:!0})}const u1=de?window:void 0;function Se(e){var o;const l=t1(e);return(o=l?.$el)!=null?o:l}function w1(...e){const o=[],l=()=>{o.forEach(s=>s()),o.length=0},c=(s,d,v,$)=>(s.addEventListener(d,v,$),()=>s.removeEventListener(d,v,$)),r=R(()=>{const s=p1(t1(e[0])).filter(d=>d!=null);return s.every(d=>typeof d!="string")?s:void 0}),i=we(()=>{var s,d;return[(d=(s=r.value)==null?void 0:s.map(v=>Se(v)))!=null?d:[u1].filter(v=>v!=null),p1(t1(r.value?e[1]:e[0])),p1(p(r.value?e[2]:e[1])),t1(r.value?e[3]:e[2])]},([s,d,v,$])=>{if(l(),!s?.length||!d?.length||!v?.length)return;const C=ve($)?{...$}:$;o.push(...s.flatMap(A=>d.flatMap(T=>v.map(g=>c(A,T,g,C)))))},{flush:"post"}),u=()=>{i(),l()};return ue(l),u}const a1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r1="__vueuse_ssr_handlers__",$e=Ce();function Ce(){return r1 in a1||(a1[r1]=a1[r1]||{}),a1[r1]}function Me(e,o){return $e[e]||o}function Ve(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Te={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},S1="vueuse-storage";function xe(e,o,l,c={}){var r;const{flush:i="pre",deep:u=!0,listenToStorageChanges:s=!0,writeDefaults:d=!0,mergeDefaults:v=!1,shallow:$,window:C=u1,eventFilter:A,onError:T=_=>{console.error(_)},initOnMounted:g}=c,m=($?R1:E)(typeof o=="function"?o():o),f=R(()=>t1(e));if(!l)try{l=Me("getDefaultStorage",()=>{var _;return(_=u1)==null?void 0:_.localStorage})()}catch(_){T(_)}if(!l)return m;const N=t1(o),D=Ve(N),F=(r=c.serializer)!=null?r:Te[D],{pause:j,resume:J}=he(m,()=>z(m.value),{flush:i,deep:u,eventFilter:A});Z(f,()=>I(),{flush:i});let B=!1;const k=_=>{g&&!B||I(_)},n=_=>{g&&!B||L(_)};C&&s&&(l instanceof Storage?w1(C,"storage",k,{passive:!0}):w1(C,S1,n)),g?ge(()=>{B=!0,I()}):I();function a(_,b){if(C){const M={key:f.value,oldValue:_,newValue:b,storageArea:l};C.dispatchEvent(l instanceof Storage?new StorageEvent("storage",M):new CustomEvent(S1,{detail:M}))}}function z(_){try{const b=l.getItem(f.value);if(_==null)a(b,null),l.removeItem(f.value);else{const M=F.write(_);b!==M&&(l.setItem(f.value,M),a(b,M))}}catch(b){T(b)}}function y(_){const b=_?_.newValue:l.getItem(f.value);if(b==null)return d&&N!=null&&l.setItem(f.value,F.write(N)),N;if(!_&&v){const M=F.read(b);return typeof v=="function"?v(M,N):D==="object"&&!Array.isArray(M)?{...N,...M}:M}else return typeof b!="string"?b:F.read(b)}function I(_){if(!(_&&_.storageArea!==l)){if(_&&_.key==null){m.value=N;return}if(!(_&&_.key!==f.value)){j();try{_?.newValue!==F.write(m.value)&&(m.value=y(_))}catch(b){T(b)}finally{_?$1(J):J()}}}}function L(_){I(_.detail)}return m}function Ae(e,o,l={}){const{window:c=u1}=l;return xe(e,o,c?.localStorage,l)}const Ee={class:"card-body"},Ne=_1({__name:"MPopup",props:{onClose:{type:Function,default:()=>{}}},setup(e){return(o,l)=>(S(),V("div",{class:"popup-wrapper",onClick:l[1]||(l[1]=c=>o.onClose(null))},[t("div",{class:"popup card overflow-scroll h-100 w-100",onClick:l[0]||(l[0]=P1(()=>{},["stop"]))},[t("div",Ee,[L1(o.$slots,"default",{},void 0)])])]))}}),Ue=Object.assign(j1(Ne,[["__scopeId","data-v-eec55aae"]]),{__name:"MPopup"}),ze={class:"my-2"},Oe={class:"input-group mb-3"},Fe=["value"],De={class:"card my-2"},Re={class:"card-body"},Le={key:0,class:"my-2"},Pe={class:"alert alert-info"},je={class:"card my-2"},Be={class:"card-body"},Ie={key:0,class:"my-2"},We={class:"alert alert-info"},Je={class:"card my-2"},Ge={class:"card-body"},He={key:0,class:"my-2"},Ke={class:"alert alert-info"},qe=_1({__name:"MdCardSelect",props:{onClose:{}},setup(e){const o=E(""),l=g=>`[${g.series}] ${g.key!=="other"?b1[g.key]:g.otherName}`,c=R(()=>K.filter(g=>l(g).includes(o.value))),r=E(0),i=R(()=>K[r.value]),u=R(()=>i.value?X(i.value,d.value,v.value):null),s=R(()=>u.value?i1(q(u.value).skills):""),d=E(14),v=E(14),$=R(()=>u.value?i1(q(u.value).centerSkills):""),C=R(()=>u.value?T1(q(u.value).centerAbilities):""),A=Ae("skillCache",{}),T=g=>`${g.key}-${g.series}`;return Z(i,()=>{i.value&&(d.value=A.value[T(i.value)]?.skillLevel||14,v.value=A.value[T(i.value)]?.centerSkillLevel||14)}),Z([d,v],()=>{i.value&&(A.value[T(i.value)]={centerSkillLevel:v.value,skillLevel:d.value})}),(g,m)=>(S(),M1(Ue,{"on-close":g.onClose},{default:B1(()=>[t("div",ze,[t("div",Oe,[m[5]||(m[5]=t("div",{class:"input-group-prepend"},[t("span",{class:"input-group-text"},"検索")],-1)),w(t("input",{"onUpdate:modelValue":m[0]||(m[0]=f=>O(o)?o.value=f:null),type:"text",class:"form-control"},null,512),[[U,p(o)]])]),w(t("select",{"onUpdate:modelValue":m[1]||(m[1]=f=>O(r)?r.value=f:null),class:"form-select"},[(S(!0),V(G,null,H(p(c),(f,N)=>(S(),V("option",{key:`${f.key}-${f.series}`,class:I1(["card",{"bg-primary":p(i)?.key===f.key}]),value:N}," ["+x(f.series)+"] "+x(f.key!=="other"?p(b1)[f.key]:f.otherName),11,Fe))),128))],512),[[Q,p(r)]])]),t("div",De,[m[7]||(m[7]=t("div",{class:"card-header"}," スキル ",-1)),t("div",Re,[t("div",null,[m[6]||(m[6]=V1(" スキルレベル： ")),w(t("input",{"onUpdate:modelValue":m[2]||(m[2]=f=>O(d)?d.value=f:null),type:"number",class:"form-control",min:"1",max:"14"},null,512),[[U,p(d)]])]),p(i)?(S(),V("div",Le,[t("div",Pe,x(p(s)),1)])):Y("",!0)])]),t("div",je,[m[9]||(m[9]=t("div",{class:"card-header"}," センタースキル ",-1)),t("div",Be,[m[8]||(m[8]=t("label",{class:"form-label"}," センタースキルレベル： ",-1)),w(t("input",{"onUpdate:modelValue":m[3]||(m[3]=f=>O(v)?v.value=f:null),type:"number",class:"form-control",min:"1",max:"14"},null,512),[[U,p(v)]]),p(i)?(S(),V("div",Ie,[t("div",We," 【"+x(p(f1)(p(i).centerSkillCondition))+"】"+x(p($)),1)])):Y("",!0)])]),t("div",Je,[m[10]||(m[10]=t("div",{class:"card-header"}," センター特性 ",-1)),t("div",Ge,[p(i)?(S(),V("div",He,[t("div",Ke,x(p(C)),1)])):Y("",!0)])]),t("button",{type:"button",class:"btn btn-primary",onClick:m[4]||(m[4]=f=>g.onClose(p(u)))}," 選択 ")]),_:1},8,["on-close"]))}}),Qe=Object.assign(qe,{__name:"MdCardSelect"}),Xe=ce(()=>{const e=E([]);return{modals:e,openModal:l=>{let c;const r=new Promise(s=>{c=s}),u={component:l,onClose:s=>{e.value.splice(e.value.indexOf(u),1),c(s)}};return e.value.push(u),r}}}),Ye={class:"container-md"},Ze={class:"card my-2"},et={class:"card-body"},tt={class:"mb-2"},ot=["value"],lt={class:"mb-2"},st={key:0,value:"normal"},nt={key:1,value:"hard"},at={key:2,value:"expert"},rt={key:3,value:"master"},it={class:"card my-2"},ut={class:"card-body p-4"},ct={class:"row row-gap-1"},dt={class:"col-sm"},pt=["value"],vt={class:"col-sm"},ft=["value"],mt={class:"my-2 row row-gap-1"},_t={class:"col-sm"},bt={class:"col-sm"},kt={class:"my-2"},yt={class:"my-2"},ht={class:"card my-2"},gt={class:"card-body"},wt={class:"mb-2"},St={class:"row"},$t={class:"col"},Ct={class:"card-header"},Mt={class:"card-body"},Vt=["onClick"],Tt={class:"row my-2 align-items-center justify-content-start"},xt={class:"col-auto"},At=["onUpdate:modelValue"],Et=["value"],Nt={class:"row my-2 align-items-center justify-content-start"},Ut={class:"col-auto"},zt=["onUpdate:modelValue"],Ot={class:"row row-gap-1"},Ft={class:"col-md"},Dt=["onUpdate:modelValue"],Rt={class:"col-md"},Lt=["onUpdate:modelValue"],Pt={class:"col-md"},jt=["onUpdate:modelValue"],Bt={class:"col-md"},It={class:"input-group"},Wt=["onUpdate:modelValue"],Jt={class:"my-2"},Gt={class:"row"},Ht={class:"col-sm"},Kt=["onUpdate:modelValue"],qt={class:"col-sm"},Qt={class:"alert alert-secondary"},Xt={class:"my-2"},Yt={class:"row"},Zt={class:"col-sm"},eo=["onUpdate:modelValue"],to=["value"],oo=["onUpdate:modelValue"],lo={class:"col-sm"},so={class:"alert alert-secondary"},no={class:"my-2"},ao={class:"row"},ro={class:"col-sm"},io=["onUpdate:modelValue"],uo={class:"col-sm"},co={class:"alert alert-secondary"},po={class:"row"},vo={class:"col"},fo={class:"form-label"},mo={class:"col"},_o={class:"form-label"},bo={class:"card my-2"},ko={class:"card-body"},yo={class:"my-2"},ho={class:"my-2"},So=_1({__name:"index",setup(e){const o=E("tokimeki"),l=E("normal"),c=E(""),r=E(""),i=E(0),u=E(0),s=E("smile"),d=R(()=>{const k=h1(c.value,0);return x1(k)}),v=R(()=>ne(d.value,u.value)),$=()=>{const k=e1[o.value];k&&(c.value=k.note[l.value]||"",r.value=k.center,i.value=k.offset,u.value=k.comboOffset||0,s.value=k.attribute)},C=E(80820),A=E(2960),T=E(50),g=E(""),m=E(0),f=E(te),N=()=>{const k=f.value.map(q),n=h1(c.value,i.value),{score:a,log:z}=ae({notes:n,convertedMembers:k,center:r.value,appealSum:C.value,mentalSum:A.value,masteryLevel:T.value,comboOffset:u.value});m.value=a,g.value=z},D=R(()=>f.value.reduce((k,n)=>k+n.mental,0)),F=R(()=>{const k=f.value.map(q);return se(k,s.value,r.value)});Z(D,()=>{f.value.every(k=>k.mental)&&(A.value=D.value)}),Z(F,()=>{f.value.every(k=>k.smile&&k.pure&&k.cool)&&(C.value=F.value)}),J1({title:"スクショウ計算機"});const{modals:j,openModal:J}=Xe(),B=async k=>{const n=await J(Qe);n&&f.value.splice(f.value.indexOf(k),1,n)};return(k,n)=>(S(),V("div",Ye,[n[28]||(n[28]=t("h1",null,"スクショウ計算機",-1)),t("div",Ze,[n[11]||(n[11]=t("div",{class:"card-header"}," 楽曲プリセット ",-1)),t("div",et,[t("form",null,[t("div",tt,[w(t("select",{"onUpdate:modelValue":n[0]||(n[0]=a=>O(o)?o.value=a:null),class:"form-select"},[(S(),V(G,null,H(e1,(a,z)=>t("option",{key:z,value:z},x(a.title),9,ot)),64))],512),[[Q,p(o)]])]),t("div",lt,[w(t("select",{"onUpdate:modelValue":n[1]||(n[1]=a=>O(l)?l.value=a:null),class:"form-select"},[e1[p(o)].note.normal?(S(),V("option",st," normal ")):Y("",!0),e1[p(o)].note.hard?(S(),V("option",nt," hard ")):Y("",!0),e1[p(o)].note.expert?(S(),V("option",at," expert ")):Y("",!0),e1[p(o)].note.master?(S(),V("option",rt," master ")):Y("",!0)],512),[[Q,p(l)]])]),t("div",{class:"mb-2"},[t("button",{type:"button",class:"btn btn-primary",onClick:$}," 読み込み ")])])])]),t("div",it,[n[16]||(n[16]=t("div",{class:"card-header"}," 楽曲データ ",-1)),t("div",ut,[t("div",ct,[t("div",dt,[n[12]||(n[12]=t("label",{class:"form-label"}," センター： ",-1)),w(t("select",{"onUpdate:modelValue":n[2]||(n[2]=a=>O(r)?r.value=a:null),class:"form-select"},[(S(!0),V(G,null,H(p(v1),a=>(S(),V("option",{key:a,value:a},x(p(W)[a]),9,pt))),128))],512),[[Q,p(r)]])]),t("div",vt,[n[13]||(n[13]=t("label",{class:"form-label"}," 楽曲属性： ",-1)),w(t("select",{"onUpdate:modelValue":n[3]||(n[3]=a=>O(s)?s.value=a:null),class:"form-select"},[(S(!0),V(G,null,H(p(Z1),a=>(S(),V("option",{key:a,value:a},x(p(ee)[a]),9,ft))),128))],512),[[Q,p(s)]])])]),t("div",mt,[t("div",_t,[n[14]||(n[14]=t("label",{class:"form-label"}," オフセット： ",-1)),w(t("input",{"onUpdate:modelValue":n[4]||(n[4]=a=>O(i)?i.value=a:null),class:"form-control"},null,512),[[U,p(i),void 0,{number:!0}]])]),t("div",bt,[n[15]||(n[15]=t("label",{class:"form-label"}," コンボ誤差： ",-1)),w(t("input",{"onUpdate:modelValue":n[5]||(n[5]=a=>O(u)?u.value=a:null),class:"form-control"},null,512),[[U,p(u),void 0,{number:!0}]])])]),t("div",kt,[w(t("textarea",{"onUpdate:modelValue":n[6]||(n[6]=a=>O(c)?c.value=a:null),rows:"6",class:"form-control"},null,512),[[U,p(c)]])]),t("div",yt," 総コンボ数："+x(p(d))+" 総AP："+x(p(v)),1)])]),t("div",ht,[n[25]||(n[25]=t("div",{class:"card-header"}," メンバーデータ ",-1)),t("div",gt,[t("div",wt,[t("div",St,[t("div",$t,[n[17]||(n[17]=t("label",{class:"form-label"},"マスタリーレベル：",-1)),w(t("input",{"onUpdate:modelValue":n[7]||(n[7]=a=>O(T)?T.value=a:null),type:"number",class:"form-control"},null,512),[[U,p(T),void 0,{number:!0}]])])])]),(S(!0),V(G,null,H(p(f),(a,z)=>(S(),V("div",{key:z,class:"card m-3"},[t("div",Ct,x(z+1)+"人目 ",1),t("div",Mt,[t("div",null,[t("button",{type:"button",class:"btn btn-primary",onClick:y=>B(a)}," カードを選択して入力 ",8,Vt)]),t("div",Tt,[n[18]||(n[18]=t("div",{class:"col-auto"},[t("label",{class:"form-label"}," メンバー： ")],-1)),t("div",xt,[w(t("select",{"onUpdate:modelValue":y=>a.name=y,class:"form-select"},[(S(!0),V(G,null,H(p(v1),y=>(S(),V("option",{key:y,value:y},x(p(W)[y]),9,Et))),128))],8,At),[[Q,a.name]])])]),t("div",Nt,[n[19]||(n[19]=t("div",{class:"col-auto"},[t("label",{class:"form-label"}," 消費AP： ")],-1)),t("div",Ut,[w(t("input",{"onUpdate:modelValue":y=>a.ap=y,type:"number",class:"form-control"},null,8,zt),[[U,a.ap,void 0,{number:!0}]])])]),n[24]||(n[24]=t("div",{class:"my-2"}," ステータス： ",-1)),t("div",Ot,[t("div",Ft,[w(t("input",{"onUpdate:modelValue":y=>a.smile=y,type:"number",class:"form-control",style:{"background-color":"#ffddee"},placeholder:"スマイル"},null,8,Dt),[[U,a.smile,void 0,{number:!0}]])]),t("div",Rt,[w(t("input",{"onUpdate:modelValue":y=>a.pure=y,type:"number",class:"form-control",style:{"background-color":"#ddffdd"},placeholder:"ピュア"},null,8,Lt),[[U,a.pure,void 0,{number:!0}]])]),t("div",Pt,[w(t("input",{"onUpdate:modelValue":y=>a.cool=y,type:"number",class:"form-control",style:{"background-color":"#ddddff"},placeholder:"クール"},null,8,jt),[[U,a.cool,void 0,{number:!0}]])]),t("div",Bt,[t("div",It,[n[20]||(n[20]=t("div",{class:"input-group-prepend"},[t("span",{class:"input-group-text",style:{color:"#22ddaa"}},"♡")],-1)),w(t("input",{"onUpdate:modelValue":y=>a.mental=y,type:"number",class:"form-control",placeholder:"メンタル"},null,8,Wt),[[U,a.mental,void 0,{number:!0}]])])])]),t("div",Jt,[n[21]||(n[21]=t("label",{class:"form-label"}," スキル： ",-1)),t("div",Gt,[t("div",Ht,[w(t("textarea",{"onUpdate:modelValue":y=>a.skill=y,class:"form-control"},null,8,Kt),[[U,a.skill]])]),t("div",qt,[t("div",Qt,x(p(i1)(p(q)(a).skills)),1)])])]),t("div",Xt,[n[22]||(n[22]=t("label",{class:"form-label"}," センタースキル： ",-1)),t("div",Yt,[t("div",Zt,[w(t("select",{"onUpdate:modelValue":y=>a.centerSkillCondition=y,class:"form-select"},[(S(!0),V(G,null,H(p(Q1),y=>(S(),V("option",{key:y,value:y},x(p(f1)(y)),9,to))),128))],8,eo),[[Q,a.centerSkillCondition]]),w(t("textarea",{"onUpdate:modelValue":y=>a.centerSkill=y,class:"form-control"},null,8,oo),[[U,a.centerSkill]])]),t("div",lo,[t("div",so," 【"+x(p(f1)(a.centerSkillCondition))+"】"+x(p(i1)(p(q)(a).centerSkills)),1)])])]),t("div",no,[n[23]||(n[23]=t("label",{class:"form-label"}," センター特性： ",-1)),t("div",ao,[t("div",ro,[w(t("textarea",{"onUpdate:modelValue":y=>a.centerAbilityText=y,class:"form-control"},null,8,io),[[U,a.centerAbilityText]])]),t("div",uo,[t("div",co,x(p(T1)(p(q)(a).centerAbilities)),1)])])])])]))),128)),t("div",po,[t("div",vo,[t("label",fo,"総合アピール値（"+x(p(F))+"）：",1),w(t("input",{"onUpdate:modelValue":n[8]||(n[8]=a=>O(C)?C.value=a:null),type:"number",class:"form-control"},null,512),[[U,p(C),void 0,{number:!0}]])]),t("div",mo,[t("label",_o,"総合メンタル値（"+x(p(D))+"）：",1),w(t("input",{"onUpdate:modelValue":n[9]||(n[9]=a=>O(A)?A.value=a:null),type:"number",class:"form-control"},null,512),[[U,p(A),void 0,{number:!0}]])])])])]),t("div",bo,[n[27]||(n[27]=t("div",{class:"card-header"}," 計算 ",-1)),t("div",ko,[t("button",{type:"button",class:"btn btn-primary",onClick:N}," 計算 "),t("div",yo," 計算結果: "+x(p(m)),1),t("div",ho,[n[26]||(n[26]=V1(" ログ： ")),w(t("textarea",{"onUpdate:modelValue":n[10]||(n[10]=a=>O(g)?g.value=a:null),rows:"6",class:"form-control"},null,512),[[U,p(g)]])])])]),(S(!0),V(G,null,H(p(j),(a,z)=>(S(),M1(W1(a.component),{key:`modal-${z}`,"on-close":a.onClose},null,40,["on-close"]))),128))]))}});export{So as default};
