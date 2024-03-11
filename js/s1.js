
/*
把数字转变为全位的字符串
p1: 需要转换的数字
p2: 字符串位数 2或3
 */
function getStr(p1,p2){
	var str1='';
	if ( p2 === 2){
		if (p1<10)
			str1 = '0' + p1;
		else
			str1 = p1;
	}
	if( p2===3 ){
		if (p1<10)
			str1 = '00' + p1;
		if ( p1>=10 && p1<100)
			str1 = '0' + p1;
		if (p1>=100)
			str1 = p1;
	}
return str1;
}

//ds:datas 一维数组,cs:contdatas 二维数组,gjc:关键词
function pushDatas(ds,cs,gjc){
				var str1='';
				//不需要比较p1，就是按关键字查询
				for(var i=0;i<cs.length;i++){
				//查询原始资料，引用的不查
					if ( cs[i][10]  !== "引用")
					{
						str1 = cs[i][5];
						index =  str1.indexOf(gjc);  //查关键词
						str1 = '';
						if (index !== -1) {  
						
						str1 = '【' + cs[i][0] + '-';  
						if (cs[i][1] !== '')
							str1 = str1 + cs[i][1] + '-'; 
						if (cs[i][2] !== '')
							str1 = str1 + cs[i][2] + '-'; 
						if (cs[i][3] !== '')
							str1 = str1 + cs[i][3] + '-'; 
						str1 = str1 + '】' + cs[i][5];
						ds.push(str1);
						//ds.push(cs[i][5]);
						ds.push(cs[i][6]);
						ds.push(cs[i][9]);
						//datas.push('dfsfs');
						} 
					}
       			}
	return;
}
/*
p1: 类别一
p2: 类别二
p3: 类别三
p4: 类别四
p5: 关键词
p6: 是否查询关键词 是/不
p7: 比较第几层
*/
function getData(p1,p2,p3,p4,p5,p6,p7) {

var myaddr = 'http://www.zhigui48.cn/';
//var myaddr = 'http://localhost:4000/';

//督导修学模式 原资料 地址
var ddxxms_ys = [];
ddxxms_ys[0] = '';//空置

//01督导修学缘起
ddxxms_ys[1] = '';
//02何谓“督导修学模式”
ddxxms_ys[2] = '';
//03督导修学模式有什么优势？
ddxxms_ys[3] = '';
//04督导修学模式分几种？
ddxxms_ys[4] = '';
//05何谓五级修心次第？
ddxxms_ys[5] = '';
//06为什么要重视基础心态的建立？
ddxxms_ys[6] = '';
//07为什么不能轻视基础理论？
ddxxms_ys[7] = '';
//08修心方法主要是什么？
ddxxms_ys[8]= '';
//09修心的理论依据是什么？
ddxxms_ys[9] = '';
//10督导修学模式具体实施细节是什么？
ddxxms_ys[10] = '';
//11参与督导修学的条件是什么
ddxxms_ys[11] = '';

//净土次第修 原始资料 地址
var jtcdx_ys = [];

//0师父简介
jtcdx_ys[0] = '';
//01前言
jtcdx_ys[1] = 'https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494584&idx=3&sn=c6d03b4759509ad1b02ae5ac19bffe8f&scene=21#wechat_redirect';
//02修学纲领
jtcdx_ys[2] = '';
//03修学次第
jtcdx_ys[3] = '';
//04思维修安住修
jtcdx_ys[4] = 'https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247484335&idx=6&sn=8a604066ca17a180aaaa012b1cef63bc&scene=21#wechat_redirect';
//05形式佛法
jtcdx_ys[5] = '';
//06每天四项
jtcdx_ys[6] = '';
//07修行之心
jtcdx_ys[7] = '';
//08出离心
jtcdx_ys[8] = '';
//09怎能不求生
jtcdx_ys[9] = '';
//10自律
jtcdx_ys[10] = '';
//11迅速转变
jtcdx_ys[11] = '';
//12不可以任何理由生气
jtcdx_ys[12] = '';
//13静处养动处练
jtcdx_ys[13] = '';
//14因果无情
jtcdx_ys[14] = '';
//15一心皈命
jtcdx_ys[15] = '';
//16问题出在哪里
jtcdx_ys[16] = '';
//17思维修的说明
jtcdx_ys[17] = '';
//18改过要有重点
jtcdx_ys[18] = '';
//19忏悔改过之次第
jtcdx_ys[19] = '';
//20莫跟着感觉走
jtcdx_ys[20] = '';
//21思维因缘果
jtcdx_ys[21] = '';
//22法用对否
jtcdx_ys[22] = '';
//23平凡
jtcdx_ys[23] = '';
//24靠什么往生？
jtcdx_ys[24] = '';
//25热衷于福报
jtcdx_ys[25] = '';
//26补充说明一
jtcdx_ys[26] = '';
//27念佛方法 印祖
jtcdx_ys[27] = '';
//28读经方法
jtcdx_ys[28] = '';
//29如何起精进心
jtcdx_ys[29] = '';
//30 阶段小结
jtcdx_ys[30] = 'https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247484522&idx=8&sn=9ff9039f3d478eab26d836dce22094b8&scene=21#wechat_redirect';
//31静心入手处
jtcdx_ys[31] = '';
//32突破障难
jtcdx_ys[32] = '';
//33包容心
jtcdx_ys[33] = '';
//34深入改变
jtcdx_ys[34] = '';
//35质量与数量
jtcdx_ys[35] = '';
//36一向专念
jtcdx_ys[36] = '';
//37讲理
jtcdx_ys[37] = '';
//38极妙秘诀印祖
jtcdx_ys[38] = '';
//39净土法门的核心
jtcdx_ys[39] = '';
//40对法麻木
jtcdx_ys[40] = '';
//41七笔勾莲池大师
jtcdx_ys[41] = '';
//42百不管
jtcdx_ys[42] = '';
//43有针对性
jtcdx_ys[43] = '';
//44重复的力量
jtcdx_ys[44] = '';
//45欲望的本质
jtcdx_ys[45] = '';
//46往生不是自私
jtcdx_ys[46] = '';
//47自警 莲池大师
jtcdx_ys[47] = '';
//48心田种子
jtcdx_ys[48] = '';
//49六度何成障碍法
jtcdx_ys[49] = '';
//50关于净土流派
jtcdx_ys[50] = '';
//51怎样对待病苦
jtcdx_ys[51] = '';
//52善调心态
jtcdx_ys[52] = '';
//53念佛功夫 江味农
jtcdx_ys[53] = '';
//54三力与往生
jtcdx_ys[54] = '';
//55标准检验
jtcdx_ys[55] = '';
//56世事浮华
jtcdx_ys[56] = '';
//57往生的障碍
jtcdx_ys[57] = '';
//58助念流程
jtcdx_ys[58] = '';
//59阶段小结二
jtcdx_ys[59] = 'https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247484760&idx=6&sn=bab5c15c401405f902a9e00553be626e&scene=21#wechat_redirect';
//60思维修补充一
jtcdx_ys[60] = '';
//61思维修补充二
jtcdx_ys[61] = '';
//62思维修补充三
jtcdx_ys[62] = '';
//63关于孩子的问题
jtcdx_ys[63] = '';
//64思维修补充四
jtcdx_ys[64] = '';
//65陌生又熟悉
jtcdx_ys[65] = '';
//66思维修补充五
jtcdx_ys[66] = '';
//67放松训练
jtcdx_ys[67] = '';
//68定慧等持
jtcdx_ys[68] = '';
//69修学内容的选择
jtcdx_ys[69] = '';
//70思维修补充六
jtcdx_ys[70] = '';
//71修学点滴之一
jtcdx_ys[71] = '';
//72关于皈依
jtcdx_ys[72] = '';
//73修学点滴之二
jtcdx_ys[73] = '';
//74关于戒律
jtcdx_ys[74] = '';
//75思维修补充七
jtcdx_ys[75] = '';
//76修学点滴之三
jtcdx_ys[76] = '';
//77降化烦恼
jtcdx_ys[77] = '';
//78修学点滴之四
jtcdx_ys[78] = '';
//79《无量寿经》中的思维修
jtcdx_ys[79] = '';
//80修学点滴之五
jtcdx_ys[80] = '';
//81思维修补充八
jtcdx_ys[81] = '';
//82修学点滴之六
jtcdx_ys[82] = '';
//83拓开心量
jtcdx_ys[83] = '';
//84修学点滴之七
jtcdx_ys[84] = '';
//85修学点滴之八
jtcdx_ys[85] = '';
//86烦恼种类
jtcdx_ys[86] = '';
//87修学点滴之九
jtcdx_ys[87] = '';
//88快速提升
jtcdx_ys[88] = '';
//89再谈因果
jtcdx_ys[89] = '';
//90修学点滴之十
jtcdx_ys[90] = '';
//91国王与大臣
jtcdx_ys[91] = '';
//92修学点滴之十一
jtcdx_ys[92] = '';
//93劝发菩提心前言
jtcdx_ys[93] = '';
//93劝发菩提心2
jtcdx_ys[94] = '';
//93劝发发菩提心3
jtcdx_ys[95] = '';
//93劝发菩提心4
jtcdx_ys[96] = '';
//94学佛四步曲
jtcdx_ys[97] = '';
//95修学点滴之十二
jtcdx_ys[98] = '';
//96思维修补充九
jtcdx_ys[99] = '';
//97修学点滴之十三
jtcdx_ys[100] = '';
//98善护口业
jtcdx_ys[101] = '';
//99不见世间过
jtcdx_ys[102] = '';
//100修学点滴之十四
jtcdx_ys[103] = '';
//101关于“正思维”
jtcdx_ys[104] = '';
//102居士礼仪戒规
jtcdx_ys[105] = '';
//103正确和完整
jtcdx_ys[106] = '';
//104思维修之运用【印祖】
jtcdx_ys[107] = '';
//105辞旧迎新
jtcdx_ys[108] = '';
//106修学点滴之十五
jtcdx_ys[109] = '';
//107关于“我”
jtcdx_ys[110] = '';
//108当下
jtcdx_ys[111] = '';
//109缘起浅谈
jtcdx_ys[112] = '';
//110佛法助人
jtcdx_ys[113] = '';
//111点评摘录之一
jtcdx_ys[114] = '';
//112点评摘录之二
jtcdx_ys[115] = '';
//113点评摘录之三
jtcdx_ys[116] = '';
//114点评摘录之四
jtcdx_ys[117] = '';
//115点评摘录之五
jtcdx_ys[118] = '';
//116点评摘录之六
jtcdx_ys[119] = '';
//117点评摘录之七
jtcdx_ys[120] = '';
//118点评摘录之八
jtcdx_ys[121] = '';
//119点评摘录之九
jtcdx_ys[122] = '';
//120点评摘录之十
jtcdx_ys[123] = '';
//121点评摘录之十一
jtcdx_ys[124] = '';
//122点评摘录之十二
jtcdx_ys[125] = '';
//123新春嘱语-2020
jtcdx_ys[126] = '';
//124新年寄语-2020
jtcdx_ys[127] = '';
//125学员心得提炼
jtcdx_ys[128] = '';
//126点评摘录之十三
jtcdx_ys[129] = '';
//127施食
jtcdx_ys[130] = '';
//128大光明真言
jtcdx_ys[131] = '';
//129次第修学导图(框架脉络
jtcdx_ys[132] = '';
//130每日四项流程图
jtcdx_ys[133] = '';
//131师父开示:苦苦·行苦·坏苦
jtcdx_ys[134] = '';
//132布施注意事项
jtcdx_ys[135] = '';
//133女居士与出家师父的相关礼仪
jtcdx_ys[136] = '';
//134八退八进之训
jtcdx_ys[137] = '';
//135关于扶乩
jtcdx_ys[138] = '';
//136专修净土【印祖开示】
jtcdx_ys[139] = '';
//137破邪显正之一
jtcdx_ys[140] = '';
//138佛堂设置及供养礼拜
jtcdx_ys[141] = '';
//139榜样的力量
jtcdx_ys[142] = '';
//140小组批语摘录
jtcdx_ys[143] = '';
//141师父开示反思总结具体化
jtcdx_ys[144] = '';
//142关于净土菩提心和般若净土的问答
jtcdx_ys[145] = '';
//143四种决定清净明诲
jtcdx_ys[146] = '';
//144思维修要简捷高效
jtcdx_ys[147] = '';
//145因缘果四条的简要概括 
jtcdx_ys[148] = '';
//146当下的心行既是种因又是助缘
jtcdx_ys[149] = '';
//147每日四项流程图四大要项
jtcdx_ys[150] = '';
//148西方发愿文【莲池大师】
jtcdx_ys[151] = '';
//149真正的道人
jtcdx_ys[152] = '';
//150不要让修行成为一场骗局
jtcdx_ys[153] = 'https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247486039&idx=3&sn=ca5f9cc1229ecf6c53bad4f594946e99&scene=21#wechat_redirect';
//151反思总结的总标准和具体标准
jtcdx_ys[154] = '';
//152印祖破斥求开悟不求往生
jtcdx_ys[155] = '';
//153反思总结具体化示范
jtcdx_ys[156] = '';
//154礼敬心开示之一
jtcdx_ys[157] = '';
//155礼敬心开示之二
jtcdx_ys[158] = '';
//156每个项目修学所遵循的过程
jtcdx_ys[159] = '';
//157对境时怎么灵活运用项目
jtcdx_ys[160] = '';
//158对境时怎样更好的提起觉照
jtcdx_ys[161] = '';
//159师父教师节开示
jtcdx_ys[162] = '';
//160日行一善的神奇效验
jtcdx_ys[163] = '';
//161佛陀渐次成熟罗睺罗解脱智
jtcdx_ys[164] = 'https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247485848&idx=2&sn=ea133fc9b4196f623b90afbe689dc9a4&scene=21#wechat_redirect';
//162关于诚信和誓愿
jtcdx_ys[165] = '';
//163 民国第一术士
jtcdx_ys[166] = '';
//164关于“无记业”
jtcdx_ys[167] = '';
//165无趣无聊
jtcdx_ys[168] = '';
//166以果决心做好自律
jtcdx_ys[169] = '';
//167念佛四层功夫
jtcdx_ys[170] = '';
//168关于每日功课的读经
jtcdx_ys[171] = '';
//169老实念佛【2021】
jtcdx_ys[172] = '';
//170 盲区与明区
jtcdx_ys[173] = '';
//171往生极乐世界九品莲位图文详解！
jtcdx_ys[174] = '';
//172慢、松、静、定→放松才能专注!
jtcdx_ys[175] = '';
//173修学不要随习气、感受走!
jtcdx_ys[176] = '';
//174《吊藤馋蜜图》的故事
jtcdx_ys[177] = '';
//175《五母子经》原文、白话文
jtcdx_ys[178] = '';
//176《业报差别经》白话文
jtcdx_ys[179] = '';
//177这样念佛
jtcdx_ys[180] = '';
//178境随心转
jtcdx_ys[181] = '';


/*
概览说明 contdatas1
基础班资料 contdatas2
每日四项讲解 contdatas3
净土次第修 contdatas4
学员分享摘选 contdatas5
随缘开示 contdatas6
其他专题 contdatas7

选学资料汇总 老年修学资料 contdatas8
选学资料汇总 静修班资料 contdatas9
选学资料汇总 印祖文钞选讲 contdatas10
选学资料汇总 二级修学资料 contdatas11 */


var contdatas1 = [

/*
['类别一','类别二','类别三','类别四','在分类中的序号','标题','地址','有/无音频','有/无视频','文章/目录','原始/引用'],
 */
/* 概览说明 */ 

['概览说明','','','','001','各项资料使用说明','https://mp.weixin.qq.com/s/eMWObPJmLugqB2U9WLFJtQ','无','无','文章','原始'],


/* 概览说明 - 次第修学概览 */ 
['概览说明','次第修学概览','','','001','前言',jtcdx_ys[1],'无','无','文章','引用'],//引用 净土次第修

['概览说明','次第修学概览','','','002','莲社简介和规章制度资料','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494618&idx=1&sn=652f70b61f22ff089cd9327fa8f6112a&scene=21#wechat_redirect','无','无','文章','原始'],

['概览说明','次第修学概览','','','003','次第修学所用资料','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494584&idx=5&sn=6d1dd01a2f4be4abffecdde6fdd2e84b&scene=21#wechat_redirect','无','无','文章','原始'],

//添加一个目录 glsm/cdxxgl/whycdxw/
['概览说明','次第修学概览','','','004','为何要次第修学',myaddr+'glsm/cdxxgl/whycdxx/','无','无','目录',''],
//添加"为何要次第修学"里的单篇
//有的是入门手册里的，可以作为原始资料
['概览说明','次第修学概览','为何要次第修学','','001','为什么要次第修？','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247483969&idx=1&sn=9e0e43d11c70e042b12c91aeb05e04f4&scene=21#wechat_redirect','无','无','文章','原始'],
['概览说明','次第修学概览','为何要次第修学','','002','不按次第修法的几种病','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247483783&idx=1&sn=5c168a6ed3362ef7de38583ce76659bd&scene=21#wechat_redirect','无','无','文章','原始'],
['概览说明','次第修学概览','为何要次第修学','','003','次第修“专题”【小段资料整理】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494597&idx=1&sn=ff12e26cf37a653c852b1b5daa2da777&scene=21#wechat_redirect','无','无','文章','原始'],
['概览说明','次第修学概览','为何要次第修学','','004','次第修心概览','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494584&idx=6&sn=1ace9147d863028e0ffdfb630de33589&scene=21#wechat_redirect','无','无','文章','原始'],
['概览说明','次第修学概览','为何要次第修学','','005','不要让修行成为一场骗局',jtcdx_ys[153],'无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要次第修学','','006','佛陀渐次成熟罗睺罗心解脱智',jtcdx_ys[164],'无','无','文章','引用'],//引用 净土次第修

//添加一个目录 glsm/cdxxgl/whyzgsy/
['概览说明','次第修学概览','','','005','为何要止观双运',myaddr+'glsm/cdxxgl/whyzgsy/','无','无','目录',''],
//添加"为何要止观双运"里的单篇
['概览说明','次第修学概览','为何要止观双运','','001','思维修安住修',jtcdx_ys[4],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','','002','阶段小结',jtcdx_ys[30],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','','003','阶段小结二',jtcdx_ys[59],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','','004','定慧等持',jtcdx_ys[68],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','','005','止观“专题”【小段资料整理】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494593&idx=2&sn=be88d5951c33ea198719c6ae0379aa37&scene=21#wechat_redirect','有','无','文章','原始'],
//添加一个目录 glsm/cdxxgl/whyzgsy/swxjlyj/
['概览说明','次第修学概览','为何要止观双运','','006','思维修经论依据',myaddr+'glsm/cdxxgl/whyzgsy/swxjlyj/','无','无','目录',''],
//添加"思维修经论依据"里的单篇
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','001','陌生又熟悉',jtcdx_ys[65],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','002','无量寿经中的思维修',jtcdx_ys[79],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','003','劝发菩提心（前言）',jtcdx_ys[93],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','004','学佛四部曲',jtcdx_ys[97],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','005','关于正思维',jtcdx_ys[104],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','006','思维修之运用【印祖】',jtcdx_ys[107],'有','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','007','关于无记业',jtcdx_ys[167],'有','无','文章','引用'],//引用 净土次第修

['概览说明','次第修学概览','','','006','次第修学导图【框架脉络】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247485480&idx=6&sn=05ccc6ce8f955ea3d50b998145fa4497&scene=21#wechat_redirect','无','无','文章','引用'],//引用 每日四项讲解


['概览说明','次第修学概览','','','007','功课的具体落实：每日四项流程图','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247485480&idx=7&sn=1b0e3577ec6ee7fe46e60610c144cc24&scene=21#wechat_redirect','无','无','文章','引用'],//引用 每日四项讲解

['概览说明','次第修学概览','','','008','次第修心【概览】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494584&idx=6&sn=1ace9147d863028e0ffdfb630de33589&scene=21#wechat_redirect','无','无','文章','引用'], //引用 概览说明

['概览说明','次第修学概览','','','009','次第修学-阶段划分说明','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247488873&idx=1&sn=3292c81e5839ade9ac527a8268016dfc&scene=21#wechat_redirect','无','有','文章','引用'], //引用 概览说明


//添加一个目录 glsm/cdxxgl/ddxxms/
['概览说明','次第修学概览','','','010','督导修学模式',myaddr+'glsm/cdxxgl/ddxxms/','无','无','目录',''],
//添加"督导修学模式"里的单篇
['概览说明','次第修学概览','督导修学模式','','001','督导修学缘起',ddxxms_ys[1],'无','有','文章','引用'], //引用 
['概览说明','次第修学概览','督导修学模式','','002','何谓督导修学模式',ddxxms_ys[2],'无','有','文章','引用'], //引用 
['概览说明','次第修学概览','督导修学模式','','003','督导修学模式有什么优势',ddxxms_ys[3],'无','有','文章','引用'], //引用 

['概览说明','次第修学概览','','','011','学员修学效果分享','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247488268&idx=2&sn=158756a50e2c248548c53eb6cf9b4cd3&scene=21#wechat_redirect','无','有','文章','引用'] //引用 基础班资料
];


var contdatas2 = [
//基础班资料 原始资料
['基础班资料','原始资料','','','001','《佛教基础》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487443&amp;idx=2&amp;sn=73ad3e183d54488bf5a6f23603424a5e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','002','《皈依三宝》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487443&amp;idx=3&amp;sn=250722b93b98c163ca786a9be3629674&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','003','《关于皈依》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487443&amp;idx=4&amp;sn=7067ba90dc3ed48b14570623a719374c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','004','《因果轮回的科学证明》1','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490146&amp;idx=5&amp;sn=76eca46ab7d5bab28518fedf33fb93dd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','005','《因果轮回的科学证明》2','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490146&amp;idx=6&amp;sn=0172723d1734dd668a184edf3a0fedbf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','006','《因果轮回的科学证明》3','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490146&amp;idx=7&amp;sn=eda6d8c8e49890857719b285263c6fcb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','007','《因果轮回的科学证明》4','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490146&amp;idx=8&amp;sn=55c88ff3d48418b3638b4cb9148f3403&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','008','《关于戒律》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487443&amp;idx=5&amp;sn=2cdbac97082a01c48f0cdbce2684c603&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','009','《五戒表解》学戒的意义','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486787&amp;idx=1&amp;sn=f871d41f5fca7d7184de8eb9640bf3ea&amp;chksm=cff51c51f8829547e5ed194b77659fa02db88304f49a218039fe290635c4eb29970dd2eae881&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','0010','《五戒表解》杀戒和盗戒','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486787&amp;idx=2&amp;sn=8cb491b589b558153328ef54ee035485&amp;chksm=cff51c51f88295472b6ce6c07c54a61027412c668065d51067ef160b8825108ff10452e0f2f4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','011','《五戒表解》盗戒，邪淫，妄语','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486787&amp;idx=3&amp;sn=9336c019329ef59c223df37791fe4500&amp;chksm=cff51c51f8829547a56d1d572339419b1cdd7ec122de8f8c9d22c4a4ee3d2349984e32cb37b3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','012','《五戒表解》酒戒和受戒仪轨','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486787&amp;idx=4&amp;sn=f0a872bbfa543eca33eb4dc20c08fd07&amp;chksm=cff51c51f8829547586218cbd86b0c2ea8ebf7b87aab914136ceee1096697a1f7f1ae16263f7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','013','《了凡四训》简介','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487443&amp;idx=6&amp;sn=6846654f3c28bdb4d09dc1fe8faef5be&amp;scene=21f51c51f8829547586218cbd86b0c2ea8ebf7b87aab914136ceee1096697a1f7f1ae16263f7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','014','《了凡四训》第一篇-立命之学1','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487443&amp;idx=7&amp;sn=f02db186a41f1b6183779535b7624705&amp;scene=21f51c51f8829547586218cbd86b0c2ea8ebf7b87aab914136ceee1096697a1f7f1ae16263f7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','015','《了凡四训》第一篇-立命之学2','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487443&amp;idx=8&amp;sn=8a27fbb135fde2a05266a7095c526537&amp;scene=21f51c51f8829547586218cbd86b0c2ea8ebf7b87aab914136ceee1096697a1f7f1ae16263f7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','016','《了凡四训》第二篇-改过之法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487542&amp;idx=1&amp;sn=fc7ced2c179185d65a2cf8485be5e65b&amp;scene=21f51c51f8829547586218cbd86b0c2ea8ebf7b87aab914136ceee1096697a1f7f1ae16263f7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','017','《了凡四训》第三篇-行善积德的事迹','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=1&amp;sn=23e05d5d3b2c376764426318695ab039&amp;chksm=cff51d88f882949e098c937380153603190f29d12db2fa551ccf95fc7a486cabeaae4915ffcf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','018','《了凡四训》第三篇-对于“善”的辨析','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=2&amp;sn=712130f118b6f93bae3c28ee973a8108&amp;chksm=cff51d88f882949e3cc28057436a7e96c5724b16ff97211aa9effb8b9b7e7e1d603c7485324c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','019','《了凡四训》第三篇-救济众人的十种方式','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=3&amp;sn=a35a395b4d60897e53405ec973d7ccbd&amp;chksm=cff51d88f882949e13b33be1d5a1d4299668b4bd11cd7398cec9b0f7ed0661d261af9866996f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','020','《了凡四训》第四篇-谦德之效','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=4&amp;sn=0b6da027b501392b4ec77c95dd80816c&amp;chksm=cff51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','021','《十善业1_身三业》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487542&amp;idx=6&amp;sn=af6f2df22bf96f836576aa662a24fb14&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','022','《十善业2_口四业》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487585&amp;idx=1&amp;sn=0c49d625a90b0a0a206ca3e9fe9d788d&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','023','《十善业3_意三业》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487585&amp;idx=2&amp;sn=7f3481fd049d23e7d0614e37fb0e7b31&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','024','《形式佛法》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=1&amp;sn=7cf2b1bd05a89302dc4ad05a95002ea4&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','025','《问题出在哪里》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=2&amp;sn=1ad8d3eb617f2c94b1903e2ea50f0e33&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','026','《孩子的问题》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=3&amp;sn=8faf4f76d3c872d5a304336e479cc613&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','027','《心田种子》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=4&amp;sn=2f7a3460cfb98bf1149cb2963eb2eb7f&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','028','《善调心态》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=5&amp;sn=5fed5f6777caac70b6624ad1ae12a0c2&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','029','《极妙秘诀》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=6&amp;sn=cec1800b89d7859d7e28d8b33c3e33d5&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','030','《世事浮华》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=7&amp;sn=74fffddf81c945fa63a911a4629aa302&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','031','《修行之心》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487552&amp;idx=8&amp;sn=ce4f5f6e592ffb52c5519d84e2ebbc3f&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','032','《突破障难》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487585&amp;idx=3&amp;sn=c45041f600ce4ac24e76a21daf95a510&amp;scene=21f51d88f882949ee44361a0ceb5c70c032ad715ed8ca766466874585646352de8b52f5392b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','033','督导修学缘起','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=5&amp;sn=09de540e172f809fdcad04c855596ed0&amp;chksm=cff51d88f882949e56fed7909e0ee4af3bca34856621d2b44eccb11a186287f4819712354c89&amp;scene=21#wechat_redirect','有','无','文章','引用'],
['基础班资料','原始资料','','','034','什么是督导修学模式','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=6&amp;sn=d0669423075766dd9a342a311abc04a0&amp;chksm=cff51d88f882949e9f9f9950238adf1379a56d25cb9ee3aaa23f4240ccf523005d5cbdfe47ee&amp;scene=21#wechat_redirect','有','无','文章','引用'],
['基础班资料','原始资料','','','035','督导修学有什么优势','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=7&amp;sn=82ad449969556bca46992d234bfc1397&amp;chksm=cff51d88f882949e160977d397d53d28eb65048bbf77ad6303dcbc1a7230df8ead5d86a960de&amp;scene=21#wechat_redirect','有','无','文章','引用'],
['基础班资料','原始资料','','','036','次第修心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493939&amp;idx=4&amp;sn=db5179c31ff3d7d4ab06631a8a24f4c6&amp;scene=21f51d88f882949e160977d397d53d28eb65048bbf77ad6303dcbc1a7230df8ead5d86a960de&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','037','同修实修效果','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493939&amp;idx=5&amp;sn=2f11a82913577a063fcaf15028c0733a&amp;scene=21f51d88f882949e160977d397d53d28eb65048bbf77ad6303dcbc1a7230df8ead5d86a960de&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','038','《基础班资料》小组学习总结',myaddr+'jcbzl/yszl/xzxxzj/','有','无','目录','原始'],
//添加 小组学习总结目录下
['基础班资料','原始资料','小组学习总结','','001','师父开场序','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486487&amp;idx=1&amp;sn=0f71c68466c47e4cd91ee3c7f4ac21a8&amp;chksm=cff51d05f8829413b6eb2a6c8abb0218ff8320057bd179717cfc824294bfa270893bfcd4907f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','002','佛教基础','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486487&amp;idx=2&amp;sn=3a3753df1a7396f4fa2a02ca4c313c68&amp;chksm=cff51d05f882941367f1acf1be65e5063b167565f2d18ad451d8b359380a21c728299c42be3c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','003','皈依三宝','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486487&amp;idx=3&amp;sn=97e76db9e2861dbfc03095afef40c63c&amp;chksm=cff51d05f882941329031e8999ba1d90976ed88581834b7b07202132221b3fd24efb20cd832f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','004','关于皈依','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486487&amp;idx=4&amp;sn=c1ec66a09023600548deb1afc6a420a0&amp;chksm=cff51d05f8829413bd04453e69fa593edb466b2dc1370882822924d8c3074f47796220cf353a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','005','因果轮回的科学证明1','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486582&amp;idx=1&amp;sn=43540b682dba25d6ee26cbd1379df78c&amp;chksm=cff51d64f882947231a0b2688d3688cf8b284901e2bba97f72e4a6b6cccb8370d0058b178a7e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','006','因果轮回的科学证明2','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486496&amp;idx=5&amp;sn=b827624e8d5dea50b6cedab16b0ea626&amp;chksm=cff51d32f8829424a195ad4e3987ae96b37f0b07f59a475e0e9d31a97addf30869c1de4e5811&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','007','戒律','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486506&amp;idx=1&amp;sn=4b0d3e623efe8bee649810c4a550567b&amp;chksm=cff51d38f882942e7e992d688bab2f865521fda6f9b48b3763fbd1954207e556601ac91160ab&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','008','五戒表解','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486487&amp;idx=7&amp;sn=05eb6cab8d5a446dd039e26f13b9ba7d&amp;chksm=cff51d05f882941314e9f80e25d5e9625cd31025876106a91b9460f654db5d4377715b520e05&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','009','了凡四训','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486487&amp;idx=8&amp;sn=023382a2ab0459db3b10533cb1b47863&amp;chksm=cff51d05f88294132e0a8bb17a4015ec014fb447462d5e436dff74aa1e795efcafed67257227&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','0010','十善业','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=1&amp;sn=8edde3085a24c2dce4772af72e3842f9&amp;chksm=cff51d1cf882940a6220653bab324857a1997bb2ade4637fb2f08d8c73fa70398f76c861cdfe&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','011','形式佛法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=2&amp;sn=c5b891c69b62abde51c56feb01582ffc&amp;chksm=cff51d1cf882940a155f9f1f554f6a4af77d2af280e4b0c75bf6fa553b2cb01e98f78fa1bb72&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','012','问题出在哪里','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=3&amp;sn=fb8c111a74a1c3c8a03f66d712df73cb&amp;chksm=cff51d1cf882940aa58f66b3112bb9afd95ebd2031e1566c3c82f9e0f691d2084ff1447490a8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','013','孩子问题','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=4&amp;sn=3cd13f58e84e7700808410c5c11ab7c3&amp;chksm=cff51d1cf882940aba7773e2ff7f8b85fff198db7734ea49c4885befa89d6da8752ea2772441&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','014','心田种子','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=5&amp;sn=ba87688cdc9131dee0b0ed0d19a75c0a&amp;chksm=cff51d1cf882940ad51c73694fb83903fae2773367ba18fd2f2cf3998bf8a7a1d364d4556ca8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','015','善调心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=6&amp;sn=0bf59ce7a315089a682c0807e293e5d5&amp;chksm=cff51d1cf882940ae515105551e60366e354245741cc8e756ddec3bb4120ee19bcf207553fb8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','016','极妙秘诀','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=7&amp;sn=3417db82d12529251ca46fd1c32d3101&amp;chksm=cff51d1cf882940a39d200d80447699cea874443aa1d83fa82e7598c0be0b238b62972977634&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','017','世事浮华','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486478&amp;idx=8&amp;sn=ae32309a6487425b2284e4cd09b2a90a&amp;chksm=cff51d1cf882940a6c076b9e5be7bd618fba7a37c2c467a7f00413a3fa04da2c523872a544ee&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','018','修行之心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486496&amp;idx=1&amp;sn=36d47e8316bd428c4c384d73028dd4ae&amp;chksm=cff51d32f88294244737a8025985a587bb25c9a986747b3d471b21718d6f0641fd0344c78d8a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','019','突破障难','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486496&amp;idx=2&amp;sn=e4d677c4e337de3a8f0ac9d8ce09ff4e&amp;chksm=cff51d32f882942432e3a176b8bca60332100debf450177a158ac41b1fd7b1ee0a9ddcfdeb62&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','020','关于督导修学','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486496&amp;idx=3&amp;sn=0310502ed2109278ce6cb4a3125d298a&amp;chksm=cff51d32f88294245c0646a6e0f1b8fe94f1befdbd18e00fad8215abb9774bf24dc3f5ef3dc4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','小组学习总结','','021','师父开示','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486496&amp;idx=4&amp;sn=ebb270a491ebaa8b3b74c5d6128938ad&amp;chksm=cff51d32f8829424a3d1d33e46e77aecdfd4606c0c07f8a71a6da226fec28c4b626817e31619&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['基础班资料','原始资料','','','039','次第修学-阶段划分','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488873&amp;idx=1&amp;sn=3292c81e5839ade9ac527a8268016dfc&amp;scene=21f51d69f882947f3e1cb106f6d166365c5d8c55217e61cbd8e5950789253aa95de90e2b2744&amp;scene=21#wechat_redirect','有','无','文章','引用'],

//基础班资料-问题列表-全部
['基础班资料','问题列表_全部','','','001','《师父讲佛教基础》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492157&amp;idx=3&amp;sn=aaa0720a915068bc202aa0ac2e24a501&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','问题列表_全部','','','002','《皈依三宝》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492157&amp;idx=4&amp;sn=d804f90425089470466a913f2c077f8d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','003','《关于皈依》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492157&amp;idx=5&amp;sn=ab7e16b56df0ae799761ad75a8d3cb19&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','004','《因果轮回的科学证明》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492157&amp;idx=6&amp;sn=6bc180da05a831d6a18a58ff43c8718a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','005','《关于戒律》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492157&amp;idx=7&amp;sn=506c1b9ecbf6c533db258fae9bf24cdc&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','006','《五戒表解》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492157&amp;idx=8&amp;sn=75e7d5421ca9ed2c896e533c49e9bc7a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','007','《了凡四训》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=1&amp;sn=aad9dab94e99e182047a22ecc7d18524&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','008','《十善业》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=2&amp;sn=fcd519f288f358ac2241720f51cb22f4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','009','《形式佛法》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=3&amp;sn=e33944b44bb46117335021634f1dabcb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','0010','《问题出在那里》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=4&amp;sn=e81e4b5414d6929af72c335d59b8c094&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','011','《孩子的问题》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=5&amp;sn=1d28014442f5bff71f6d24285c3d35d3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','012','《心田种子》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=6&amp;sn=0ba5887fa42a5e54084cbef9a32a1c3e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','013','《善调心态》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=7&amp;sn=490bacc6dc060720744c1b7244666a8f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','014','《极妙秘诀》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492209&amp;idx=8&amp;sn=d172c27601408fb933eac30f3691b5ab&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','015','《世事浮华》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492255&amp;idx=1&amp;sn=c21753e8b62ded9fe79d4799ad4ad40e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','问题列表_全部','','','016','《修行之心》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492255&amp;idx=2&amp;sn=aec550b6ba18dc066c35972f7cf32d98&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_全部','','','017','《如何突破障难》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492255&amp;idx=3&amp;sn=4b6c77413f1e9bbb8b1467f1f8afb6e1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','问题列表_全部','','','018','《督导修学》','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492255&amp;idx=4&amp;sn=e2b4352b1ba288f60f828ba330d9d5de&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//基础班资料 问题列表_部分
['基础班资料','问题列表_部分','','','001','《师父讲佛教基础》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486663&amp;idx=1&amp;sn=3fcc2caca95ae5445aa48dd8faef0ebe&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','002','《皈依三宝》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486663&amp;idx=2&amp;sn=53e11db99462fe24b30d91a9ae086b5b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','003','《关于皈依》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486663&amp;idx=3&amp;sn=9dcf12402ab899bd82d6d7f7ea3eba1b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','004','《关于戒律》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486663&amp;idx=4&amp;sn=74b4fca60492c6bd6c50bf56770bbae6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','005','《五戒表解》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486663&amp;idx=5&amp;sn=3d02ff2ba85ef85c0f5fa35775496238&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','006','《了凡四训简介》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486663&amp;idx=6&amp;sn=a0dbc2575a50d3c4751d82d08abbb03a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','007','《十善业》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486663&amp;idx=7&amp;sn=04e249dae89f714bf8416f6b160f0130&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','008','《形式佛法》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=1&amp;sn=2a40e9f1fe9d80164d0cbaab4af186c8&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','009','《问题出在那里》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=2&amp;sn=75260f4d93e0fd60531f2fc3599b3cf2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','0010','《孩子的问题》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=3&amp;sn=5880551e4b2f05ba9096b43a85233412&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','011','《心田种子》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=4&amp;sn=6d234dc9e2defb49a420a59b6a91d4b4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','012','《善调心态》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=5&amp;sn=7ef47e43ef389f8f293a1cce0223e565&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','013','《极妙秘诀》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=6&amp;sn=f6c2785a9cbf25b893d65c9c6a1993c2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','014','《世事浮华》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=7&amp;sn=ea1e9615fa5a73c3daff3b822dbc4e64&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','015','《修行之心》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486693&amp;idx=8&amp;sn=befaab714c1581d6e8852c3d8e3af2f8&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题列表_部分','','','016','《督导修学》','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486694&amp;idx=1&amp;sn=4937b37eab9d0f3f057292de2db8275f&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//基础班资料 问题和答案列表_全部
['基础班资料','问题和答案列表_全部','','','001','佛教基础','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486874&amp;idx=1&amp;sn=73af82ceae8283b85a50dfc5acc4ca67&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','002','皈依三宝','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486827&amp;idx=6&amp;sn=261add153020aef7e743659c505f1178&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','003','关于皈依','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486827&amp;idx=7&amp;sn=2ffb50909e788366b7635134612c71b8&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','004','因果轮回科学证明','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486840&amp;idx=1&amp;sn=a8d2288523752e02d86efcfb5de8e2eb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','005','关于戒律','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486840&amp;idx=2&amp;sn=d3b2bfa433b349931f447efe821bae53&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','006','五戒表解','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486874&amp;idx=2&amp;sn=e902e04c613c9bf9ca64708c4290c62e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','007','了凡四训','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486874&amp;idx=4&amp;sn=977aa55e42663f6b40222b06993eb37c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','008','十善业','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486874&amp;idx=5&amp;sn=56289917d4e6c0545fd2af4043239f38&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','009','形式佛法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486840&amp;idx=6&amp;sn=c3d4a66195e23a4066a84d66f13161e0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','0010','问题出在哪里','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486874&amp;idx=3&amp;sn=a515f991cda37f128d7def47d5497449&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','011','关于孩子的问题','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486841&amp;idx=1&amp;sn=36665d73a4ecc16cbff441b0535878de&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','012','心田种子','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486841&amp;idx=2&amp;sn=8d3efe228448a423bef7c969979e0dff&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','013','善调心态','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486841&amp;idx=3&amp;sn=d93fa0f175c39f113e71a73c5f98963c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','014','极妙秘诀印祖','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486841&amp;idx=4&amp;sn=edb52325d3fa744bb4b144605b3d406c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','015','世事浮华','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486841&amp;idx=5&amp;sn=37b8a64bc57efa01a7e3c7217ca065a3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','016','修行之心','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486841&amp;idx=6&amp;sn=92a1a40dc395f31619212ea783cb85fa&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_全部','','','017','突破障难','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486841&amp;idx=7&amp;sn=aef3b207d4cbdb29a505f9b7be2ac793&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//基础班资料 问题和答案列表_部分


['基础班资料','问题和答案列表_部分','','','001','佛教基础','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486694&amp;idx=4&amp;sn=0ec90953b9f51e62d83c5887961264b0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','002','皈依三宝','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486694&amp;idx=5&amp;sn=e47b79d6b6ace94fc5fa5f4fc4bbc0b0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','003','关于皈依','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486694&amp;idx=6&amp;sn=3e2d0a8b99590ffed173d6085c3b2ad1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','004','关于戒律','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486694&amp;idx=7&amp;sn=5157e339199f2f52aaca13955362bde1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','005','五戒表解','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486909&amp;idx=1&amp;sn=540928af9fcc9005651b71c21a07cd65&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','006','了凡四训','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486889&amp;idx=2&amp;sn=28fca145044e47807d4edcd6be11de7d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','007','十善业','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486889&amp;idx=3&amp;sn=dcbf2a9050ddbb75a2bb73e073178b23&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','008','形式佛法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486713&amp;idx=3&amp;sn=39ecb92271d61094c690be807794a1b0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','009','问题出在哪里','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486889&amp;idx=4&amp;sn=2f5fd3afe7ec8365d58bb5ea525386fa&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','0010','关于孩子的问题','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486713&amp;idx=5&amp;sn=5d78839e4e8c09f9578b83664b324ff8&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','011','心田种子','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486713&amp;idx=6&amp;sn=4b77591b67f654909102951d6c899dbb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','012','善调心态','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486713&amp;idx=7&amp;sn=92c01920887e68da5892e6351bc8c435&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','013','极妙秘诀印祖','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486713&amp;idx=8&amp;sn=592f2fd42f17a179152318080c8fd3f6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','014','世事浮华','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486840&amp;idx=8&amp;sn=8d898c3397980be60ca2c7df176439f5&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','问题和答案列表_部分','','','015','修行之心','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486827&amp;idx=2&amp;sn=e9cdf79d00331150c402ed47fa5f3f6b&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//基础班资料 辅助资料
['基础班资料','辅助资料','','','001','佛堂设置及供养礼拜','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485529&amp;idx=6&amp;sn=082561fbb1afd5211ebaf21f0dcd8408&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['基础班资料','辅助资料','','','002','关于时间管理','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494553&amp;idx=1&amp;sn=1b0d93f1d789d2140d4a50ae62f5a375&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['基础班资料','辅助资料','','','003','放松训练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486611&amp;idx=1&amp;sn=ef746766e13146ab2587f10d9e98a0c6&amp;chksm=cff51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','004','关于诚信和誓愿','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485984&amp;idx=4&amp;sn=cb41efdcc45ee468cdd02a58db292805&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','005','八退八进之训','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485529&amp;idx=3&amp;sn=8176d3b3bfa3143c597923bd97f1e6bf&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','006','关于每日功课的读经','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486039&amp;idx=2&amp;sn=1e9b707444f7de03850bd3d259f3e721&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','007','关于“无记业”','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485848&amp;idx=5&amp;sn=8fea7867209d52e29168015bb9be0a0f&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','008','民国第一术士','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486039&amp;idx=1&amp;sn=b9975d7ba7a725cb59d355f7191badec&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','009','佛陀渐次成熟罗睺罗心解脱智','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485848&amp;idx=2&amp;sn=ea133fc9b4196f623b90afbe689dc9a4&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','0010','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486039&amp;idx=3&amp;sn=ca5f9cc1229ecf6c53bad4f594946e99&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','011','师父在教师节给与同修的开示','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485761&amp;idx=8&amp;sn=0574ae788d9799357a9c082669ff2ea2&amp;scene=21f51d81f8829497d9a9e4a1d5c0cb60fd23c61ce5271ee66a73ca3bc8cdf6a81f9b0d67355a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','012','快速提升','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486611&amp;idx=2&amp;sn=f3a000cceef20038fd3f26f104870a79&amp;chksm=cff51d81f88294979bd4310738ec7757ccfa17a0799da6d5e434ae65f411024d33c9ca0aee6c&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','013','新春嘱语-2020恩师作','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486611&amp;idx=3&amp;sn=9cfca6569a3c043d0b44917b36c86794&amp;chksm=cff51d81f8829497ea0015cb7940a24fd81e929a39e9e31160bddab69b858070a345193de052&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','014','爱惜字纸，原来竟有如此大的功德！','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495235&amp;idx=1&amp;sn=6afe5b22a3366a11b7c72a80d7901697&amp;scene=21f51d81f8829497ea0015cb7940a24fd81e929a39e9e31160bddab69b858070a345193de052&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','015','曾国藩30岁起、脱胎换骨，带来的人生启示','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495235&amp;idx=3&amp;sn=f1cfef5be8deafab70fc7b79d988c3b3&amp;scene=21f51d81f8829497ea0015cb7940a24fd81e929a39e9e31160bddab69b858070a345193de052&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','016','《礼节》概讲',myaddr+'jcbzl/fzzl/ljgj/','有','无','目录','原始'],
//基础班资料 辅助资料 礼节概讲 下面的文章
['基础班资料','辅助资料','礼节概讲','','001','礼节条目汇集','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483831&amp;idx=4&amp;sn=c797482bea85aa3325a748dd62016fe5&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','002','什么是礼节','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483756&amp;idx=1&amp;sn=449f37f01786c4bb13c95e78f96566dc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','003','内心与事相的结合','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483756&amp;idx=2&amp;sn=ca17723806f40e89af5546820182ebf0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','004','佛门见面礼节概讲','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483831&amp;idx=1&amp;sn=cd425d63ef1d8793bf34067ae0539edf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','005','佛门男女礼节','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483831&amp;idx=2&amp;sn=37607c024edbb34e0f70e660937da0f4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','006','出家师父出门在外住的住宿礼节','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483756&amp;idx=5&amp;sn=20560760f1024ba0156e068be6ef6929&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','007','介绍人与人认识的礼节','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483756&amp;idx=6&amp;sn=d9ad876e54808b0e7f2f4aec364c415a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','008','称呼上的礼节','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483756&amp;idx=7&amp;sn=8470a30dcc7b3bf96d16e1e8a3dbfd5d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','009','入座礼节','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483756&amp;idx=8&amp;sn=9aa758cc4d50abffa7d6ca9a87258048&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','0010','在一定场合说话时不要喧宾夺主','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=1&amp;sn=41b45d0d697f40acc76d4dbb6dbb700f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','011','不要随便打断他人说话','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=2&amp;sn=650d61f54a99ac61e6fee25860c6e32f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','012','长话短说','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=3&amp;sn=78ce7a88977a49cb32b596462cd2ac39&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','013','不说是非','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=4&amp;sn=9cdc47cc8ba5671b6516ec5750aa9281&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','014','少谈他人过失','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=5&amp;sn=a93344eeebb21f8fa1d6ae9831106972&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','015','少批评人','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=6&amp;sn=e8785c3853fc8735bec29faf05f2348f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','016','说话要顾及他人的感受','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=7&amp;sn=bcba715a3aaf3e7b9a63364e75ec97ed&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','017','从感恩辅导员说起要懂得理事结合','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483789&amp;idx=8&amp;sn=268af412b87c46ee295db8dc7c40c2fd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','018','及时反馈','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483807&amp;idx=1&amp;sn=6b8a67b35a835783a784faa6996f86e0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','019','如何融入团队','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483807&amp;idx=2&amp;sn=7bcc1a9794dda0907f4542f7534637b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','礼节概讲','','020','重视基础次第修学','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483807&amp;idx=3&amp;sn=d58056c2fc386af28d6b69509c329ca7&amp;scene=21#wechat_redirect','有','无','文章','原始']
];



//每日四项
var contdatas3 = [['类别一','类别二','类别三','类别四','在分类中的序号','标题','地址','有无音频','有无视频','文章目录','原始引用']];

//净土次第修

/* 举例：净土次第修-分类导读-思维修-思维修经论依据 */ 
var contdatas4 = [
['净土次第修','分类导读','思维修','思维修经论依据','001','陌生又熟悉资料','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247484821&idx=4&sn=2597ebb801fba72c7d339022615934ca&scene=21#wechat_redirect','无','无','文章','原始'],  
['净土次第修','分类导读','思维修','思维修经论依据','002','无量寿经中的思维修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247485061&idx=2&sn=4d503b182ba78f8482a3b11526d4fd44&scene=21#wechat_redirect','无','无','文章','原始']
];

var contdatas5 = [
//学员分享 修学综合感受
['学员分享摘选','修学综合感受','','','001','受益进步部分','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493275&amp;idx=2&amp;sn=447c34d6e001b648d961f94474f6a054&amp;chksm=fde2473dca95ce2b2d8788060b0014ab157ff27fbb4abc6e20aa5fe015ab49f937fa9ff38302&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','修学综合感受','','','002','推荐59号全篇:对督导修学的认识、学习、观修与反思总结','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493275&amp;idx=3&amp;sn=d126b17a07704832c6a49ae974c4e2f9&amp;chksm=fde2473dca95ce2ba70d31159ddcce5c4e8ecbfc63776a3a6993448d9f3b12be4512a57a9ed9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','修学综合感受','','','003','修学误区部分','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493275&amp;idx=4&amp;sn=6dfa1dd1db3e8d7035fceebad7f1ac04&amp;chksm=fde2473dca95ce2bc757be8e417d16b8d5b07ffed5d3c2a9c1c20e2059c46eb449ec9e85bdfb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','修学综合感受','','','004','推荐6号全篇：侧重初修误区避免提醒、感恩心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493275&amp;idx=5&amp;sn=51aec08ffa1579621ae4373e69edc81e&amp;chksm=fde2473dca95ce2b9250c2f579de296346f86cac922132e97701185381575628aa2ae60f286d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//学员分享 每日四项
['学员分享摘选','每日四项','','','001','礼忏部分','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493275&amp;idx=6&amp;sn=e66cf780f4af474e50cd4daa814decbd&amp;chksm=fde2473dca95ce2b48cf353ce352a67f2d32537c27066e74e526d13d0a21910a66592f21496e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','每日四项','','','002','学习部分','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493275&amp;idx=7&amp;sn=c726ab27cd14fcce576c755a040ad397&amp;chksm=fde2473dca95ce2b4eaae17583d035a88d3e0e1eb5e5922d58777e55a36dafa319e6b31ea3c1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','每日四项','','','003','静修部分','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493275&amp;idx=8&amp;sn=df776952be82f335bf7f88f0408420bc&amp;chksm=fde2473dca95ce2b42352167121c4b2d665f16ced4cf644b1ebfa7920e0feb07fc9db38f0b05&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','每日四项','','','004','推荐1号全篇：思维修如何下手','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=1&amp;sn=3cf214a1fdc0c5b09c03a4e35f699132&amp;chksm=fde24741ca95ce576a7ea27c66949b72f7eab0041731d403f08099a21afc2edd2a224839b557&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','每日四项','','','005','观修部分','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=2&amp;sn=1e9c941b3efe1ba65c7958474d705c83&amp;chksm=fde24741ca95ce5779ca5cbecf8c9504a5bd4c42d5a8ae6aed307d991299a3cf147c30a3050d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','每日四项','','','006','反思总结部分','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=3&amp;sn=ea1383b7d8647fb1138e4b205f9abea7&amp;chksm=fde24741ca95ce57676cd35d13646432c22787a429b2ab16d05a601d29c5d06767f6d22bcefb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//学员分享 基础心态
['学员分享摘选','基础心态','','','001','修行意愿','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=4&amp;sn=836b5e790d469daaa8cbb1235d8e27aa&amp;chksm=fde24741ca95ce57c50c24f9f865144b9fadaa0fa31cad9dba8798809f7ad1bd0f40ddefffe3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','002','自律性','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=5&amp;sn=93f3df24c248b6100ad64f166f8d111c&amp;chksm=fde24741ca95ce578c84cbfa333024b6a6eda7a9a215cdc03a4c7bb6d321effbb1f4f3ca1ae4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','003','包容心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=6&amp;sn=76d39c26b928326f8a31ba60c37c508a&amp;chksm=fde24741ca95ce578240a1008bda07a2157e1a29a4944985199eec652b2ddddf5df4060afde0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','004','推荐10号全篇：思维运用包容心与感恩心做可亲可敬师长','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=7&amp;sn=26d5488f22c05ee00be9a78253fdf15b&amp;chksm=fde24741ca95ce5761d2ae76b4e6baf3256aaacdcc57ec3f58f25361558522568e41f9fe0e8e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','005','因缘果','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493351&amp;idx=8&amp;sn=44e109153e2e132bf934d0ab3a1b231a&amp;chksm=fde24741ca95ce575871fbc24678907293ffe30854cf5e098efdd978cbb19100aaaee9f9e646&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','006','推荐255号全篇为新修典范:内容规范周全值得学习,侧重包容心与因缘果','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493427&amp;idx=1&amp;sn=fd27932511595cdb51bb099eda095194&amp;chksm=fde24695ca95cf836bfb97ce782f4b8a654d5e6585b024ced2f28958ddec5e74786291772bf0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','007','推荐97号全篇供参考:侧重因缘果,逐项思维再串联修','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493427&amp;idx=2&amp;sn=6c78ef0ef526bf577c7d9719171a3feb&amp;chksm=fde24695ca95cf83d41f1e459dc5dd0ffc2cd99eee02c0c169a58c43fda4c41ce9e8ab1368f5&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','008','推荐57号全篇:侧重因缘果与包容感恩礼敬心的综合运用','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=2&amp;sn=2e616615423413e75ba3b0b8039562ca&amp;chksm=fde249cdca95c0dba1ca7784dbc91aad08f3c9b0a847872ecdf7d5c46dbb39c3d3a7fb032f50&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','009','推荐92号全篇分享:侧重因缘果、帮助心的思维运用','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493427&amp;idx=4&amp;sn=9fe2927971e547f714235ac3a7a08f00&amp;chksm=fde24695ca95cf83248a6e00d5d2e29ef3a7c8c4076a3e4f0214c0f79888ebaea2994c542efa&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','0010','推荐134号全篇:主修因缘果,切身感受督导修学简捷高效','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493427&amp;idx=5&amp;sn=923f753c7f25f3808a3331524495479c&amp;chksm=fde24695ca95cf83e641906a645f61ec6664a0bdfb6fbbe7611b1c443fb1ed233015124e35c8&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','011','感恩心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493427&amp;idx=6&amp;sn=8ee0f57a4e9b743964a4940d8e2fa590&amp;chksm=fde24695ca95cf833347083773c2c2745135c89629b4e709c4dcb1c4241f9a2785dd7b37e801&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','012','推荐81号全篇：侧重感恩心、学习、观修、反思总结','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493427&amp;idx=7&amp;sn=c5b5b39fee5a63152f10bee3aa897e0d&amp;chksm=fde24695ca95cf83b1a1e471ae5c8328bdde7ec1fba78b788b0c3621bc703ac1d510d83fd177&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','013','推荐225号全篇：主修感恩心，虔心修学进步快','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493427&amp;idx=8&amp;sn=64a7d83078f8ec8d1270d18f59f0bec3&amp;chksm=fde24695ca95cf83b296d2a49cd34b1da09386f3a1ba29ea41d2536d0d693e5d7be6aeba1a4c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','014','推荐29号全篇：侧重感恩心和修行意愿的思维','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=1&amp;sn=5825efff521d4b496e2c23a2137ac455&amp;chksm=fde246daca95cfcc00bc329089c42235ec0ad2b90e4d78fb5ce9b9853689aff774ef92050af6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','015','礼敬心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=2&amp;sn=c8eac1c027bc6ef03d620b02dd1b2682&amp;chksm=fde246daca95cfcc5e589f7102980a6ac6996f0e6313c705be1103a6d1fdb5bb68953d35874a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','016','知足心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=3&amp;sn=e6121e0e8ad128604dd06104d72b782c&amp;chksm=fde246daca95cfcc4e23a9e3e03425253bdadb10b3632bf17ec89ef3128a8fbec316d02291df&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','017','惭愧心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=4&amp;sn=2ed51b14694273231bf2cf29f6f6d494&amp;chksm=fde246daca95cfcc0ff5fcca9b74bfb9f625c6ef89185fe41c88099c1bd980f861b4606d100f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','018','推荐254号全篇:侧重惭愧心、包容心与误区避免','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=5&amp;sn=ef8730f14c7d33580b165858dafaab87&amp;chksm=fde246daca95cfccca3451ecac2a929d55c12df02a5fb4bb4c55a9829cae612cb9432fcf8911&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','019','谦卑心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=6&amp;sn=af565f6073ca1c5e50f2dca715ba95e2&amp;chksm=fde246daca95cfcc4814b778b02e77fb7b30f1a772afac99e98bbf90d16baf05fc673c67798c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','020','随喜心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=7&amp;sn=97e8251a03ec5ee604a39cdf465162eb&amp;chksm=fde246daca95cfccfd78f0acdb05525e63aeb8aa8472d309ad0d888ce8620f4b5b248e35bf09&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','021','推荐220号全篇:主修随喜心，认真修学全面进步','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493500&amp;idx=8&amp;sn=e384b8a32bb634d335f2dd662bef0e51&amp;chksm=fde246daca95cfcc7aca9ad86f9b214fd8e25271cf197ce55768522ec20fcccefb0b06093dde&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','022','帮助心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=1&amp;sn=85851595c85e7a5832f8a90355707c98&amp;chksm=fde24669ca95cf7fd29c9e11400c36eac3ddfcb1b92f147032c5bc6ac442fe26287e99b2fa38&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','023','去虚荣心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=2&amp;sn=dd2b9da99243fb7bcc7a1efb8f4130d5&amp;chksm=fde24669ca95cf7ffb5f04d35aa3a766046db0a0ed4c70b20cfcb39143e25243a124f515805e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','024','推荐234号全篇：侧重借鉴去虚荣、因缘果','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=3&amp;sn=d8790cb89c54c1e722033e34b5da3f16&amp;chksm=fde24669ca95cf7fc4eb8007d01477584c6c8fe2813fa20d858fe742c617d8c65ea56d9914ce&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','025','推荐249号全篇:共勉借鉴去虚荣、良善心态综合思维运用','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=4&amp;sn=57c30fe7c1668a93a49abc09da71c8d8&amp;chksm=fde24669ca95cf7f15c47eb3470f71c65dab20b0f9910cf9d6bca5b3a266062ce5c04e5420c3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','026','推荐140号全篇:侧重去虚荣、礼忏、包容与帮助心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=5&amp;sn=9de5332aff1bbd8f26c89bc41431b17b&amp;chksm=fde24669ca95cf7f3a74e7aaa56b062792cdfba04471fd22db75221f2797fde37bfcbef38af7&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','基础心态','','','027','推荐102号全篇：良善心态综合串习运用产生突破性改变','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=6&amp;sn=4c0089a82644b681e5af90a997271dd0&amp;chksm=fde24669ca95cf7f9f6e669cec18b295be1f987671cd3dac154ff9807bda5f05a82a8815aee0&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//学员分享 弱化执着
['学员分享摘选','弱化执着','','','001','情执','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=7&amp;sn=1db684692ab814bd01c53f2c2b13b688&amp;chksm=fde24669ca95cf7ff9c8ca4190e58dc239471177fa4586d7ce53b75ba8da835a23c016bb065c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','002','欲望','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493583&amp;idx=8&amp;sn=6e653348dc5d2abf7af3fa0618038e38&amp;chksm=fde24669ca95cf7f3ca02e87bababec5ec0f77a79cb6085d1a94600aa7b1f8b5c19817f7c5d2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','003','情执欲望','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=1&amp;sn=ecd7415889ddd57e61e4e664d003caa7&amp;chksm=fde249b2ca95c0a4ecde631b1be61b825662546822b44075700f973eba3be35f855df1fb0f65&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','004','推荐93号全篇为条理清晰汇报修学的样板:主修去情感欲望','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=2&amp;sn=85f58debd82ebcf176fc69e1a24c14d1&amp;chksm=fde249b2ca95c0a4bf4df300d8330dfd6a2d73b368ff02def8ac66be0acc4279cd0e08471f43&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','005','推荐142号全篇:主修弱化情执，侧重学习、修行意愿','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=3&amp;sn=48c6d36fb4a148e064858c80e780fe44&amp;chksm=fde249b2ca95c0a4c5b3defb1670b393dfe640d0392b3e20443e62f47bc9b0bcd19f584d38d6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','006','弱化我执法执','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=4&amp;sn=98dfc4603389bb0517d315a44baf6c40&amp;chksm=fde249b2ca95c0a460336abfdbea4c7fcde9e3864fa659a24f8c1860eef1b4b7500ec470fbc2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','007','推荐244号全篇为很全面很好的榜样:主修弱化执着,随时记录反思特别值得学 文章','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=5&amp;sn=ffedfc6987782208d8e7fd3d21dfbcbd&amp;chksm=fde249b2ca95c0a4b9ecaade202f6d7f1c3aa89ccf31455a49c424b3c8b66efdfe5587945201&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','008','推荐217号全篇:弱化我执、观修、因缘果、反思值得借鉴','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=6&amp;sn=60231f0c84731f965b7eae7de44860d5&amp;chksm=fde249b2ca95c0a4151eef9d70622b91421baa6f4ebaed4b07e12a9f589ec84dbc1e84855b33&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','009','推荐222号全篇: 真诚悲悯，侧重去执着、观修、因缘果','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=7&amp;sn=d10e53d99b14fff7ca5a6a3b89ab5a43&amp;chksm=fde249b2ca95c0a453c2a45cd34be1cd6eca60ce51fba7cf886c787720928e0acbdda00c1d76&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','弱化执着','','','0010','推荐258号全篇:以修学效果证实赞叹督导修学，主修去执着','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493652&amp;idx=8&amp;sn=58bc5345e1aabd4b3a195ee6385ce214&amp;chksm=fde249b2ca95c0a4f2ffc6c4fac3dc02c2055541dcfc3318f36bcaf0ab6a7c4966f7a6bcb8e4&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//学员分享 出离心
['学员分享摘选','出离心','','','001','出离心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=1&amp;sn=0d261cb20e1758fad7d8b160b17558ff&amp;chksm=fde249cdca95c0db564b9e47bd9d4d7f15383f00015a619c8db7ca24bb9eb1e5871c790ce8ee&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','出离心','','','002','推荐257号全篇:侧重出离心、去情执、观修、反思总结','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=2&amp;sn=2e616615423413e75ba3b0b8039562ca&amp;chksm=fde249cdca95c0dba1ca7784dbc91aad08f3c9b0a847872ecdf7d5c46dbb39c3d3a7fb032f50&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','出离心','','','003','推荐256号全篇:侧重出离心、误区避免提醒与弱化执着','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=3&amp;sn=db9f8a53edc42110dae6a1f2d104ee1f&amp;chksm=fde249cdca95c0dbe3e9758f5b731e1f63434a72d5ab7ba2fdae043c0ab2479613f2a8c49e8f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','出离心','','','004','轮回与三恶道','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=4&amp;sn=369c4cc3de58810395c04c24213c2f09&amp;chksm=fde249cdca95c0db8e8f9f4db2e7113fad7603f7629f0eeb72f1bbe30f7830097d104ee834d4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','出离心','','','005','推荐187号全篇:真诚悲悯诉说轮回之因、轮回之苦','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=5&amp;sn=41789aa565744e56debdd1d139d5ac67&amp;chksm=fde249cdca95c0db596cee35c16b8608bc85a4adfcbab5ea3193bb31b8730d4285b23bef590b&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//学员分享 欣求心
['学员分享摘选','欣求心','','','001','欣求心','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=6&amp;sn=abf9f3f039244d21a531f97a6588c176&amp;chksm=fde249cdca95c0db5dce7b2e6b82c786c0c1f1ff5aa1af831c436f6bb3bfbacf68e867bd2d3c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['学员分享摘选','欣求心','','','002','推荐260号全篇:侧重欣求心、修学针对性与总结误区避免提醒','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=8&amp;sn=dc7cc185a6970d3d0e30017ff0edad95&amp;chksm=fde249cdca95c0db8fbbe18b3a67cfc0ddda7cef6045e4f5da215799c20e84c3c3f184b735bb&amp;scene=21#wechat_redirect','无','无','文章','原始']
];



//辅助资料


var contdatas6 = [
//随缘开示 因缘果汇集

['随缘开示','因缘果汇集','','','001','因缘果讲解','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492375&amp;idx=1&amp;sn=aa6540189713055bed140f7b08f10f90&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','002','什么是因缘果','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247489993&amp;idx=5&amp;sn=fc07da06893cd612ab528ed35ee56de2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','003','因缘果的重要','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247489993&amp;idx=4&amp;sn=5f28c120451f111a1e2a55d72c05f25f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','004','细讲正报和依报，都是自己修来的','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247489993&amp;idx=6&amp;sn=c92c1414aa33d97810b2760614fe0fef&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','005','因缘果第一条【有修有得】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247488232&amp;idx=3&amp;sn=b561acae83ff48d8f3f4ac406834c5e0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','006','因缘果第二条【自作自受】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247488232&amp;idx=4&amp;sn=21b4a87879afa96c1b1468afd8e48846&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','007','因缘果第三条【因果公平公正】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247488232&amp;idx=5&amp;sn=c31a1618355ded2aa0c1c02a9c60510a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','008','因缘果第四条【因果平衡】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247488232&amp;idx=6&amp;sn=8063ad2b3ef7e60cec22efa351ad2ccd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','009','因缘果问题列表','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492518&amp;idx=4&amp;sn=87ff9b3806911636851d1c5bb05cf1fd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','0010','因缘果四条的简要概括','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492560&amp;idx=7&amp;sn=efa99ff79e7920a047827bf9ebeaf29b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','011','先学会止语','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490421&amp;idx=3&amp;sn=21f5ac1c6ee5e2d450cc5cbd77ad0ba0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','012','修行人对待疾病','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490421&amp;idx=7&amp;sn=efd6197019f5c219a7aa1e2d5b9ded0c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','013','遇到突发事情首先要反思自己','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490525&amp;idx=4&amp;sn=b12083d63e580efca50d1c72f9a83d54&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','014','贪嗔痴慢会堵自己气脉','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490471&amp;idx=3&amp;sn=a34071980cf0f9f6cb034b3c1e58bb4a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','015','功夫是靠平日累积','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490471&amp;idx=6&amp;sn=af6d2278eeb1c8263b4a75266a344758&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','016','往生的助缘也是修来的','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490471&amp;idx=5&amp;sn=dfadc1f0b42d59788df4be9bba344431&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','017','放下比改变更重要，以修往生为要','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490471&amp;idx=4&amp;sn=235433bd5ab6508427451d85e8250a53&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','018','佛法的核心‘缘起’','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492611&amp;idx=2&amp;sn=da6ace20924e764db3bfa37c4fcf84a3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','019','苦集灭道','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492560&amp;idx=1&amp;sn=c46ffe59d1651eec38adff1571e8fc7a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','020','不昧因果','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492518&amp;idx=5&amp;sn=6c8c57e878877eb1128c7c5900dcd644&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','021','十二因缘','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492560&amp;idx=2&amp;sn=2ff1b9e5da16dcbc1afe4eed37973119&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','022','当下的心行既是种因又是助缘','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247487749&amp;idx=4&amp;sn=faff196367cd0162192bf01954137bf7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','023','果上的标准和因上的标准','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492560&amp;idx=3&amp;sn=1b35039e5023a8ed003915724b48c767&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','024','因上修对，果上自然改变','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247489303&amp;idx=8&amp;sn=f594b47a72f8db64fa48b16136885d18&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','025','通过转变心行摆脱无形众生的干扰','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492560&amp;idx=8&amp;sn=53a5d99029dbd2a03b0327e384fed2a6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','026','内心让它不苦','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492560&amp;idx=6&amp;sn=dbbb2b2b26bae37ac94972d1b0ae4391&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','027','决定解的重要','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491840&amp;idx=6&amp;sn=a092c063cf444539c2a5e0eb50bf5965&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','028','每个现象形成不是偶然的，都有背后因缘','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491840&amp;idx=7&amp;sn=9e5492cb0a51aca0eae5ecd03474555b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','029','依法看待心自在','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491840&amp;idx=5&amp;sn=ca4fb05b9c8e55e5395670bcb927ca68&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','030','不要把自己看的太重要','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491840&amp;idx=4&amp;sn=aa15ba6e8678f236960d8e63a2205f59&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','031','修行受磨难能了三途业','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491840&amp;idx=3&amp;sn=0011375a6af56105493ec26a9fd3760c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','032','','佛法最厉害的是帮助我们超越生死相','，摆脱对身心的执着','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491840&amp;idx=2&amp;sn=510aef5113d989abcbfa4461efdaa1a2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','033','看清真相，保持正见','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=8&amp;sn=18f350482265f987956c8a6a98bcc65b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','034','物以类聚人以群分，生气感召众生干扰','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=7&amp;sn=52f3dba8a14ea9be2a9f5e0a79676ace&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','035','习气需要通过佛法熏习才能解决','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=6&amp;sn=4fa6d80f0e89615783d0baca7d8a6f70&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','036','境缘就是自己的镜子，一切都是修来的。','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=5&amp;sn=e98bc6a63ccd6f73fa4a2e36e94a1767&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','037','体悟缘的重要性','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=4&amp;sn=34aa2d5ae6dc06041689f479e6557a78&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','038','没有吃亏占便宜，一切都会平衡掉','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=3&amp;sn=20314a977c2d279933a682d6b1b2ef50&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','039','果报是自己过去修来的','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=2&amp;sn=4a67b80a5ccf020887666b12a2df1415&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','040','深信因果，心就安定了','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247491977&amp;idx=1&amp;sn=69808efeb941b7f857a04287006206ac&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','041','所谓得失不过是因缘假相而已','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492431&amp;idx=2&amp;sn=460f9a7afb17a8c02dfdb49c03088a05&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','042','修学就是不断沉淀累积的过程','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492375&amp;idx=5&amp;sn=38ae8f53a80ca8a728470a6fb803a290&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','043','居士父母身体不好，师父开示怎样心应对','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492375&amp;idx=3&amp;sn=de0a6d8e03eb179c932bfdb4afb2d59d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','044','因上努力，果上随缘.','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492731&amp;idx=1&amp;sn=67ee69067850d1f67affeac179dfe8f0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','045','每件事的形成都是无量因缘的促成','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492750&amp;idx=1&amp;sn=66815278ebaf6dc1e6656d4338957cda&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','046','要相信因果，用事实看问题','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492750&amp;idx=2&amp;sn=b4c083374cc71d93435e04e4071bfa01&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','因缘果汇集','','','047','每个人都有度化的缘','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492750&amp;idx=3&amp;sn=557e2b4866e973f26724d81111b7aa29&amp;scene=21#wechat_redirect','有','无','文章','原始'],

//随缘开示 QQ群开示汇集
['随缘开示','QQ群开示汇集','','','001','榜样实例篇','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488131&amp;idx=1&amp;sn=9c37025d82cdc8e24b27e2020c99fde0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','002','信愿篇之一','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488131&amp;idx=2&amp;sn=d05d01613fb001cfe29d246d21e757da&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','003','信愿篇之二','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488131&amp;idx=3&amp;sn=df581e3c1855e461caf093409f025cee&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','004','次第篇','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494584&amp;idx=1&amp;sn=75374c900021eb4deb511621419861f9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','005','实修之观念心态篇','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488131&amp;idx=4&amp;sn=df1d5ab09ab93ee61ba519809ef06496&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','006','实修学习方法和诀窍','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488131&amp;idx=5&amp;sn=96a741fdf33faf3bd2d6e1e2a191216c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','007','理念方法与功课落实细节之一','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488131&amp;idx=6&amp;sn=7acd90f2de28afe1dfceb64501d4d05a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','008','理念方法与功课落实细节之二','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488131&amp;idx=7&amp;sn=f68678bd49763d93831cc9c0cc3c9e22&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','009','理念方法与功课落实细节之三','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494514&amp;idx=2&amp;sn=29a7bc265c61340d7dba5ef518473684&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','0010','反思总结篇','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494584&amp;idx=2&amp;sn=526a2006e8fb9cbe52809d78a0acc4d2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','011','纠偏之一','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494514&amp;idx=4&amp;sn=d8fe7d7caa388ab1e66d997fac9b3bf8&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','012','纠偏之二','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494514&amp;idx=5&amp;sn=ae2cb8be118f3ff59d2063365f670ff9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','013','弱化执着篇','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494514&amp;idx=6&amp;sn=3fbd8d05ec8f870eab36fb99bea0c0c3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['随缘开示','QQ群开示汇集','','','014','缘起','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494514&amp;idx=7&amp;sn=7d47f7314c94d1b5122f942d30daf085&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//随缘开示 小组开示汇集
['随缘开示','小组开示汇集','','','001','往生要有平时的训练','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=8&amp;sn=f94e971a137fcee235d48c51f7ec2250&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','002','菩提心的邪正','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=2&amp;sn=7e2e77dcb78687ae598bb46766302e9e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','003','不断悟入法理才能不断增强修行信心','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=1&amp;sn=39f65cc5a6fb64649376f4248f103a57&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','004','督导修学为什么要求反复闻思修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=2&amp;sn=3636db381ddcaae5df789e2fd6a0222f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','005','世间法与出世间法相辅相成','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=5&amp;sn=5bc8896fac51494b131127059bdd5572&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','006','通过次第项目层层的进步','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=6&amp;sn=b85b711e24ff8f581e3dbb1307f80f62&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','007','歇妄和积极运用正见','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490895&amp;idx=5&amp;sn=a7fbb913591211faab4f57a35f4df9a5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','008','通过般若悲心愿力强化菩提心','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491075&amp;idx=7&amp;sn=74fbbf1d64cac40285352c04681e36bf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','009','针对汤居士问题开示读经','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=6&amp;sn=ea95a3e365bd2997ac2a8200e7655b9e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','0010','修学出现障碍需要功课解决','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=8&amp;sn=673af58459bc809033d52b862c238c28&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','011','每日四项功课的落实不难','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490939&amp;idx=6&amp;sn=4f7a3f0df900eada3f7672fee711cbdb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','012','通过每日四项去完善建立好的整体性框架东西','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490939&amp;idx=8&amp;sn=79101c96e195acb8640e4f4583d9ac4f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','013','事多但方法也比困难多','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497724&amp;idx=3&amp;sn=0651dbbdabd65bab36e39aec91874e65&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','014','功课上出现问题要重点性一一突破','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497724&amp;idx=4&amp;sn=413032c0d5fc399fce6978fba55b4f54&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','015','运用流程图做好自觉自修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490895&amp;idx=2&amp;sn=1b3685f5e41b5d82ab9cc2ba534b7c85&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','016','为什么要放松训练','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=3&amp;sn=d2f698bf018a56717db614ac6eafb2a9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','017','反思总结能避免状态持续下滑','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497612&amp;idx=1&amp;sn=d28c7f0b6267323cf4a05d46961ea5b3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','018','心调中道','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=5&amp;sn=e2e8627cffc56b1e64f6134f304c3cee&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','019','查找问题的方法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491075&amp;idx=4&amp;sn=c32c57c36dd24ac190b46bb36fab2803&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','020','怎样找问题并给出具体解决方案','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497888&amp;idx=8&amp;sn=abdaf3aa2b8397f86b8e7d3cca6092d7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','021','对治习气的方法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=3&amp;sn=10a2624971803ee3097abaa22a182b4d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','022','活多事多，功课要灵活修','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497612&amp;idx=2&amp;sn=8c266dfe35e4f0d680f65c858698b68a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','023','农忙时妄念多怎么解决','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497612&amp;idx=3&amp;sn=46cabcb412575d9ea6cc8dc88b6fa1b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','024','数数修-要有针对性并把握好当下质量','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497612&amp;idx=4&amp;sn=ecf03cec57fafaf2b24fee682ae91bff&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','025','修行人要分清主次','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490895&amp;idx=1&amp;sn=9527ee5ce324df78bea0e71273ef7ca2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','026','有针对性的反思改进','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490895&amp;idx=6&amp;sn=883b9d8026157ad28e6328c5bf71229f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','027','解决实质性问题','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=1&amp;sn=1ca68ee92433755a428ab494d3c42691&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','028','通过愿力决心耐心去突破','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=3&amp;sn=95c427b1ec6a1e2a5faaa651cf133914&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','029','安住修要结合思维修效果才好','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=8&amp;sn=030068664fdd39bdef67ec947b4aa3cb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','030','将修行打成一片','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=4&amp;sn=b97525810e425e9a3143c64040633d94&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','031','通过两个方面提升觉照力','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=7&amp;sn=9bcd1d9663374dd1ceadf118d969b647&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','032','当下要在正念上','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=8&amp;sn=1290bcb32409bb3655b39da8a30af840&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','033','把握好当下','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491075&amp;idx=3&amp;sn=20d215a2e0a9a6d51735564cc6aad843&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','034','关于对境的运用	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=7&amp;sn=1b80b40acc0526433fc50aac27ba2533&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','035','频繁出现的问题要重点解决','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490895&amp;idx=7&amp;sn=83efa33ab3f6be459043eb43bd0f3da9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','036','忙时以稳定自己状态为主	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=6&amp;sn=b2068f518cc4aeb3203a17c507841633&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','037','念起不随-修行就是当下的觉照','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=8&amp;sn=14f2c0e1791819b97e9d9f9c91e60057&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','038','面对具体人事，怎么更好提起觉照力	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491075&amp;idx=1&amp;sn=6c0d4cd53dc62e622b9cab8532f57747&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','039','没有提起正确就是问题','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=2&amp;sn=a04126ed7fd4442231cb6ad58f7021a0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','040','面对人事先通过法去看淡-再随缘正确处理	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=4&amp;sn=716c2090f146e262b7ab698f50bd26e4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','041','跟自己较真','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=6&amp;sn=a50ebcb223a90fb65a192f1816d2ac71&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','042','没功夫时断外缘少说话	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=1&amp;sn=ebf6ea4f5a5c5593e95f3040145df2fe&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','043','加强个人修为-培养孩子素养就能得到人间幸福','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=4&amp;sn=5ad11b2ee68d82ccf89e1e93d8b8bc6c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','044','师父开示修学	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=5&amp;sn=952fcf656ff85afa354a2276e623071a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','045','运用流程图做好功课','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=6&amp;sn=33cd85bfe0b3ca4fd21e93c438d62ddd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','046','无记业是愚痴报	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=1&amp;sn=7968fe1ef9ae91071305967becf1f55a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','047','每日四项流程图如何查看','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=2&amp;sn=840fba60d5e2f360b47069732990a30a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','048','第二遍学习注意事项	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=6&amp;sn=8e748ddd8b68c63035868b01ec52f811&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','049','戴居士交流功课安排','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=2&amp;sn=ca879695e87f84bec9856ae80f621313&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','050','看破放下靠正知正见	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=7&amp;sn=ff5563905f745ecf5501cc7dc9145a34&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','051','拜忏针对性问题要提前列出来	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497724&amp;idx=1&amp;sn=aa580dbc81db26c900d29a20c56251dc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','052','面对无量劫罪业要生起真切感受','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497888&amp;idx=6&amp;sn=b8d3e9ae3981d009b89993bf54646682&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','053','关于拜忏	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490939&amp;idx=4&amp;sn=92872b054cb2ef3d639bc08ddbfc0326&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','054','修学初始要少人少事	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=5&amp;sn=eb7172dd4c05aa56d707b2a24f0c62f5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','055','修学要有紧迫感','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497933&amp;idx=3&amp;sn=3d37583ac5447eed6b0bb10c2b09af9a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','056','修学要专一-首先学会复制	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491075&amp;idx=6&amp;sn=4d27932d76deba6c1647b828cc7b6be0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','057','认清无趣无聊-让心歇下来','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491075&amp;idx=8&amp;sn=557bc71c3f3ff414c522c3e35abdaaeb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','058','彻悟大师的十种信心	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=3&amp;sn=dc66dea5da644ec2eb92f615e6326a99&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','059','针对汤居士情况开示放松训练	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490939&amp;idx=7&amp;sn=67fb94a95e6e592265036d2589089830&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','060','功课的投入和状态成正比','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490981&amp;idx=1&amp;sn=77a8b1cbbd09028246250f2811766f03&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','061','师父纠正老菩萨思维修    	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490981&amp;idx=4&amp;sn=b32c046c169afc97be6e1240dbb1a74f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','062','强顺人情世故-误却一生大事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=3&amp;sn=e21f46c7cb53f4676ddf35c304575c46&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','063','有愿力有魄力提升快	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490895&amp;idx=3&amp;sn=b011ab245e5d85dc9ce373af3bef2003&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','064','法化于心行','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490895&amp;idx=4&amp;sn=0106d1cfbdb5432fb3e14212e990f5d6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','065','修学要按次第进行	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=4&amp;sn=64a08674e7428ed60a5a5713966f8ebe&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','066','随喜心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=3&amp;sn=60426ee1ea513363199bfc2be7afe15d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','067','用法而不执着于法	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=4&amp;sn=7a3d28e48969acc62510e0491e4e579f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','068','虚荣心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=5&amp;sn=96d71537f030e25c7e92a6767a381192&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','069','弱化贪欲	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=4&amp;sn=baa3a758fdeff84bd85bf9a8ee79eb01&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','070','法理和愿力要紧密结合一起','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497933&amp;idx=2&amp;sn=a39a35a5c4aad3a1e244e7ccf6295fc8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','071','世间事儿恰当安排	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497933&amp;idx=1&amp;sn=c3d59a5bfdac2a924d090fc784a3518e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','072','修行是自己的事','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490981&amp;idx=8&amp;sn=baf6a9aa93393841aaaec524a48cb73e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','073','简捷修不妨每个小时熏习一次	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497724&amp;idx=2&amp;sn=5b99befc2fd224b098a09165f8f06f63&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','074','修项目多悟入法理','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=7&amp;sn=dc950f5e06f6359eda84f2e5f7dffceb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','075','对法改造力要有信心	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497933&amp;idx=4&amp;sn=ed6ecdb4aa25b1bc1b9e39caf15c0ad8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','076','以修学为核心','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=1&amp;sn=1487cc8185df6d0197ed759aaa523883&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','077','佛法帮助我们超越生死	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497933&amp;idx=6&amp;sn=325b14e26248e63b1778df3207e86768&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','078','出口就是愿','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497888&amp;idx=2&amp;sn=4b74f89d62cd4359a9e2c8c4f9be109e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','079','病得越严重越要投入修学	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497888&amp;idx=3&amp;sn=78f1ac58869a27b670adff454ca8eb3e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','080','把问题融入到当下的项目','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497888&amp;idx=4&amp;sn=82a52ae10a204fe821ce5f9cc4d9c2fa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','081','做真正的道人	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497888&amp;idx=5&amp;sn=504fa01a9260166e349725dba0664d6a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','082','唯有觉悟才能真正离苦得乐','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497888&amp;idx=7&amp;sn=bb0b90e99006c60aff1b073d55e00002&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','083','比较忙功课精要做	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=5&amp;sn=66574007e896985b783daa1bd375fb6f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','084','因上努力果上随缘需灵活善巧','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=3&amp;sn=91ef6159d8bb9bcceac89a7e226dcb36&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','085','座上观想消融一定要充分	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497854&amp;idx=4&amp;sn=97d32a268cc45d4f8456584bec6bda2d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','086','要以修行为核心做事为辅','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=8&amp;sn=6c481e3e81cb267e331cedec79b8f1bf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','087','修行定位也是需要智慧和魄力	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=2&amp;sn=1c31009ab5d56d98264ef504473da815&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','088','应对好世间问题让心解脱出来','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491113&amp;idx=6&amp;sn=93078faa16144fe678d8fd15b1270ed6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','089','前期能背诵心经就可	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497766&amp;idx=7&amp;sn=32ac3243a3ab2299971a3baeaac3c792&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','090','佛号清清楚楚','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=1&amp;sn=cf06475782fc20cd2ef6d9f55921ee1c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','091','关于念佛随缘开示	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497671&amp;idx=7&amp;sn=08d1846fdc5b06248d9a261c85fb69fd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','092','百不管念佛求往生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497612&amp;idx=5&amp;sn=41f2f187d431ba1c52d8fa4ac9116869&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','093','念佛打妄念不理，拉锯战	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497612&amp;idx=7&amp;sn=b5e105bbe09854e4854c92b99f2d341e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','094','念佛不能着急-结合听经','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497612&amp;idx=6&amp;sn=3cf1750fc65e0b0a69b2a4993739d34e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','095','念佛号与听佛号	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=1&amp;sn=f9c99031cf444ba09a406e5927113ded&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','096','忆佛念佛','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490851&amp;idx=2&amp;sn=05c8777ab24a63f80f77d5799324e12c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','097','曾经错发誓愿怎么办	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497698&amp;idx=7&amp;sn=2dbea332460bf93fd8ce54a415b46a3c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','098','关于回向','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497933&amp;idx=7&amp;sn=4e2253baf60baa0836acc094bf620ceb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','099','有形无形有情无情众生区别	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490939&amp;idx=2&amp;sn=2c294212bad44683035f691c561de150&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','0100','不要听附体众生的话去修行','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490939&amp;idx=3&amp;sn=2e692e38e9e5562234a99dce1d08828f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','101','尽量不要躺着听经	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490939&amp;idx=5&amp;sn=6678e86d79a371721563dd683685af23&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','102','受到惊吓时要训练提起正念','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490981&amp;idx=2&amp;sn=7175635d6a718a7b8534050a36cba173&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','103','受到惊吓后如何调整不良状态	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490981&amp;idx=3&amp;sn=0fae4a9ecc062975b1d95cf332e5e464&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','104','悟静师父修学分享及师父开示反思总结','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490981&amp;idx=6&amp;sn=ba7f0f2ed1b89afce1f7bffa17436966&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','105','关于悟静师父的问题开示	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490981&amp;idx=7&amp;sn=dc1595b5627aa6273d2f5e9a73d2db53&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','106','师父讲袁琳前期对境失败的原因是修学不如法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=5&amp;sn=aa593b9f96f18dbc7580dfa57f52bd8f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','107','害怕是业力和正念不足导致	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491023&amp;idx=8&amp;sn=38cbb147e34decfcb14eca3b1c6724a3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['随缘开示','小组开示汇集','','','108','为什么越修习气越重','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247491075&amp;idx=2&amp;sn=90649ba2545afd2f7c4c60b975452029&amp;scene=21#wechat_redirect','有','无','文章','原始']
];


var contdatas7 = [
//其他专题 
['其他专题','破邪显正','','','001','关于扶乩','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485529&amp;idx=4&amp;sn=da0dd9e02a42da16c964cedf24516800&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','002','五个佛法非正法','https://mp.weixin.qq.com/s?__biz=MzI4MTU2NTY2Mg==&amp;mid=2247483781&amp;idx=1&amp;sn=937659c215d480e38d3435c921a39551&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','003','此真是魔人想灭我佛教','https://mp.weixin.qq.com/s?__biz=MzIxODI4OTYyNQ==&amp;mid=2247484802&amp;idx=2&amp;sn=9e406664d56da35a7203bd0eca80976e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','004','《楞严经》里辨别邪师的方法','https://mp.weixin.qq.com/s?__biz=MzA4NDQyOTgzNA==&amp;mid=2651887642&amp;idx=1&amp;sn=c67f8f199d8ae2e45ab18d9f4720dad9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','005','庐山东林寺方丈大安法师二破印广法师之所说','https://mp.weixin.qq.com/s?__biz=MjM5MjUyNzM2Mg==&amp;mid=207012662&amp;idx=8&amp;sn=4705f3e10e598df8383fe0a9759bec79&amp;scene=211#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','006','破邪显正之一','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485761&amp;idx=1&amp;sn=eeeb7ca6903ad9bd09064e0c51cd971f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','007','关于净土流派','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247484725&amp;idx=5&amp;sn=f5f1029a5dbab6837ba875ccfc2f9b91&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','008','专修净土【印祖开示】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485529&amp;idx=5&amp;sn=4062d3e1ecefcea94069e4d843927bbb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','009','关于净土菩提心和般若净土的问答','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485711&amp;idx=2&amp;sn=7245d48e38eb8812e632144e36ae1457&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','0010','印祖破斥求开悟不求往生','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485761&amp;idx=4&amp;sn=0f2eeae85d5f61c04db7f4a38cf48baf&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','011','与泰顺林枝芬居士书二【印祖开示】','https://mp.weixin.qq.com/s?__biz=MzA3NTAxMDYwNQ==&amp;mid=2669671333&amp;idx=1&amp;sn=9b2a7e58f6b73caf7e9f65ebc2edbfaf&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','012','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486039&amp;idx=3&amp;sn=ca5f9cc1229ecf6c53bad4f594946e99&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','013','吃肉就是度这些众生，这种说法对吗?','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494045&amp;idx=1&amp;sn=0d083b50a14d829d52007b7dd011a401&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','破邪显正','','','014','法义辨析20230819之一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=1&amp;sn=64dae3551184741c30cfc636f351ab21&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','破邪显正','','','015','法义辨析20230819之二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=2&amp;sn=47736031c0186420ee07dc783e241165&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','破邪显正','','','016','法义辨析20230819之三','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=3&amp;sn=350379153f1b3fcfd4c2692ef7a97ff7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','破邪显正','','','017','法义辨析20230819对于修学的几点提醒说明','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=4&amp;sn=41c334d832e1f04a3ba4081b8274424e&amp;scene=21#wechat_redirect','有','无','文章','原始'],

//其他专题 新年寄语
['其他专题','新年寄语','','','001','辞旧迎新【2017·恩师】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485323&amp;idx=7&amp;sn=a602934e835a5c9555655cf94e266229&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','新年寄语','','','002','新年贺卡【2018·恩师】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494637&amp;idx=5&amp;sn=1f8ec9b74a7fb7831234e8c4cd47b902&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','新年寄语','','','003','新春嘱语【2019·恩师】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488349&amp;idx=2&amp;sn=98f8370f7e9b04d82807e29057467883&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','新年寄语','','','004','新年共勉【2020·恩师】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494637&amp;idx=3&amp;sn=8001e893046f3a7adf6d6c94fde36bef&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['其他专题','新年寄语','','','005','新春嘱语-老实念佛【2021·恩师】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494637&amp;idx=2&amp;sn=2e56dab6445a0d6f9f7ccf350fd6ab3a&amp;scene=21&amp;token=1052206643&amp;lang=zh_CN#wechat_redirect','无','有','文章','原始']
];

var contdatas8 = [
//选学资料汇总 老年修学资料
['选学资料汇总','老年修学资料','','','001','忏悔发愿文【音频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=1&amp;sn=be05748cf2df531405bc859be20a1d86&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','002','忏悔发愿文【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=2&amp;sn=ea69509bc0cde3d18ef14698e69d47ca&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','003','慈父唤子归【音频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=3&amp;sn=dd35883486b6e426752864cc31730255&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','004','慈父唤子归【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=4&amp;sn=f400b43d10c7fbc783b178b1c1082a66&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','005','阿弥陀佛的一封家书【音频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=5&amp;sn=fbfec811e1da397c67397c71dd154249&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','006','阿弥陀佛的一封家书【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=6&amp;sn=2ae88068c3efd045abacc59fca7f961c&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','007','我要往生【音频】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=7&amp;sn=676b259c6fc27febdb1ee1d657fb1c43&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','008','我要往生【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=8&amp;sn=f53d97a426ecb79fbb791acb05a42dfa&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','009','中阴身境界的开示','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=6&amp;sn=a304a37473f33fb5d2e3bb5564e00ab5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','0010','请您必须听清楚','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=7&amp;sn=c62f83fcaa4b6dd68f237ffc400a9885&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','011','地大分离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=5&amp;sn=847bbc1d7454ed653e73214dbc04bb90&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','012','水大分离','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488671&amp;idx=2&amp;sn=b4720174bc7dcb5876433e5835797db3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','013','火大分离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=7&amp;sn=204259801a6a0d90d0128a409032b75b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','014','风大分离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=8&amp;sn=62daf9429a3db351ee6c075fbee98e3c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','015','佛在成佛时已向我们保证...','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=1&amp;sn=7c4f9534851dc8d96133c5e1f9f52db6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','016','轮回路险 一念之差','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=2&amp;sn=18d5e94cc9aeeb50c8dcd8e1661bbb71&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','017','你要知道阿弥陀佛名号具备无量功德','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=3&amp;sn=1bd4a72c6379452e7962186b070703b0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','018','你要知道做人是不可能永久做人的','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=4&amp;sn=ddae9cc3ceebd5507e68f4f0154e2fb6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','019','您一定要相信佛经上所说的六道生死轮回','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=5&amp;sn=88b6ae5058f6e36d01f404ed69f1a8fa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','020','你只要愿意升到极乐世界去','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=6&amp;sn=80cc64fd277f030a3ca3fe91904501b1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','021','人生无常 人命同样无常','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=7&amp;sn=357a9c20b3291ab1a069686dffab27ab&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','022','人生在世免不了病苦和世间的爱憎别离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=8&amp;sn=3e4717dfa67412b71e5280c1c7bcd792&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','023','世事无常 变幻莫测','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=1&amp;sn=f3c1c9d9eedc93500a8f866b32678067&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','024','这个世界太苦了','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=2&amp;sn=8d5d71923b4b46522cd0c88fb5f85f66&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','025','针对病苦，无常观，出离心，欣求心的开示','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=3&amp;sn=821b796abad4031addba72f1a08fc183&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','026','真的不忍心告诉你','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=4&amp;sn=c0bdf8135bfdb8e3987a2e8958f02350&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','027','在业力的推动下 没有人是故意的','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=5&amp;sn=79073dd04132f833a0ec8645c478e5c2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','028','陪助老伴往生的日子（上）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=1&amp;sn=086a3ba46f0fc1010a6ce7fbb1798ca5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','029','陪助老伴往生的日子（下）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=2&amp;sn=c1fb94f860a729ee13d510d67f626163&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','030','妈妈说 我看到好大一朵金色的莲花在我的被子上','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=3&amp;sn=496071369cdd318e5b0eaec2a0f24dca&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','031','主人念佛十年不如她','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=4&amp;sn=f9390f733b75b7cdddeb9b34354f9f6c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','032','70岁的监狱重犯，临终见佛来迎','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=5&amp;sn=780b6907679d361bad917e405bdeb77c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','033','彻底全放下 念佛求往生--甘肃甘谷县念佛居士安德往生记','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=6&amp;sn=100fe2c70eff2022d825851193d74bc1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','034','弟弟习气很重，除佛号外什么也不会 竟然预知时至 自在往生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=7&amp;sn=f73666c94b61e2c2fd3fed4f126dab9c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','035','发生在四川的一个极为感人的往生故事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=8&amp;sn=9a7c4b88348d36459fb7d1947942208e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','036','十二岁孩子临终念佛号往生极乐','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=1&amp;sn=fa9c775536f1efd2faef1d154eb57d93&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','037','陈进迟居士往生纪实','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=2&amp;sn=5398f6b16077267d6f21e3a7190dd856&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','038','陈妙元本愿念佛潇洒往生纪实','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=3&amp;sn=691251734e81afe000b0f0080dfb5f2e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','039','念珠放光双亲预知时至','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=4&amp;sn=8fdc8c4a291d3b83a2e06cb8502eecda&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','040','刘素云-姐夫的往生出乎我的意料之外','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=5&amp;sn=86dae312c7b0608b0979e8e6b14d3060&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','041','河东夫人念佛 临终身上发出一道强烈佛光','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=6&amp;sn=ac40ee388eb90083c993c378db6c2022&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','042','刘泽高老人临终遇法三日往生纪实','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=7&amp;sn=0b1ee76a676f86a5d6b27a7a41d33a44&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','043','死刑犯念佛往生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=1&amp;sn=938cacd39cab1d519c33e8c2ce3d13a8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','044','乳癌病人的往生故事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=2&amp;sn=60638935ff00aab0e26a3b38f67c67a4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','045','王维义居士往生实录','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=3&amp;sn=98f91036a0505bbc708d6768e229fb14&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','046','一句佛号念三年 从容站立往生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=4&amp;sn=2954e1b27f5dbde92894fdcc3f785c85&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','047','钟茂森博士讲的几个往生故事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=6&amp;sn=c57ac93dca4fa48dbe15488928cb2a76&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','048','往生要放下情执之一','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494714&amp;idx=1&amp;sn=7bf1a4e877fbfe97b576b7a227b71e26&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','049','往生要放下情执之二','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=4&amp;sn=8b4c7bd178e5713b41c01fe914e58938&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','050','挖掘消融问题 修菩提心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=1&amp;sn=af0a02c637b8cff549301a6c1cd4b4b1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','051','放下与提起双向努力','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=2&amp;sn=04b431556fedb09e85d7be8d04c409b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','052','发大心发大愿','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=3&amp;sn=23cf0b2c7b7d5232c07cd9170d4099de&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','053','学习百不管','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=4&amp;sn=38ad77d376c4b30347bc1d64c794a9e9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','054','培积福报','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=5&amp;sn=ab0ae1b891927ea956cca209b1e192d5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','055','把握当下，精进念佛','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=6&amp;sn=8c5598e89284b030172874fe323fcc71&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','056','皈依忏悔发愿','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=7&amp;sn=94ebe4f8e638957b90efe2b9611ef260&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','057','修往生的三项训练【百不管·接受境缘·随时往生】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=8&amp;sn=10bbb5cc7312ca6e3eff4dbe2eaaf410&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','058','往生的障碍','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=7&amp;sn=080a71f9b6621371301880f7d1b70858&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','059','往生不是自私','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=8&amp;sn=3ad8d217062874366092f4f3b09305ca&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','060','突破障难','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=1&amp;sn=0f522aff82c91bac5e1a85bb85524d78&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','061','修行之心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=2&amp;sn=cad14c0495ac86ec13e1b0ea5704cf36&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','062','自律','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=3&amp;sn=28d1bbb8ac8838e030124499f714845a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','063','包容心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=4&amp;sn=705ac8de75489604bc914f33e6b37bb8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','064','因缘果','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=5&amp;sn=f63f525c33550e6cdb510e312a154a87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','065','百不管','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=6&amp;sn=597172efbe9f21a899d18d4d71695911&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','066','放下','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=7&amp;sn=5254cc9c33a1559fefa3864890f79400&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','067','出离心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=8&amp;sn=3aa97031b4c1c6f9e2313d56d3258c95&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','068','观苦','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=1&amp;sn=b6f397f8d93a92f05672d05e5ceaeab2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','069','愿心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=2&amp;sn=c7f08a392f1bb585623fb9b8221f711a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','070','信心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=3&amp;sn=3be711f92d5a40a79ae393668274d84e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','071','当下','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=4&amp;sn=09a15516ce7dd8847f153daaf082e605&amp;scene=21#wechat_redirect','有','无','文章','原始']
];


var contdatas9 = [
//选学资料汇总 静修班资料
['选学资料汇总','静修班资料','','','001','往生训练1（三项训练）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487192&amp;idx=1&amp;sn=31d2bdf41fddba83523638ebbfc24792&amp;chksm=cff51fcaf88296dced8266f4ffb87c4b9a949f1265d34e9964fe4a6f86d55b38595cc0267bb4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['选学资料汇总','静修班资料','','','002','邬婆婆一心求往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487192&amp;idx=2&amp;sn=a7366e600b348af60a3fbd77ad567696&amp;chksm=cff51fcaf88296dc6b802d81a9aeb67382cc942d144f46bf2e9b67dbbe4d21a36bc14e1cde3f&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','静修班资料','','','003','定心去修就对了','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487192&amp;idx=3&amp;sn=b4107fc09b3cd7cde4b007433bc06f9c&amp;chksm=cff51fcaf88296dc65a803e08744834690af5f43f7d6ba37b88385ec49da68916c82f5679da8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','004','往生训练2（克服情执障碍）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487192&amp;idx=4&amp;sn=4c99f8d6c4fb74515fdf076423dc70ad&amp;chksm=cff51fcaf88296dc9e1b92d80ffeac6cfd996043a7924ad617e163c2df010013557480626e12&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','005','一位年轻的病重者','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487291&amp;idx=1&amp;sn=e9d39baa09aec249e8c20fbc9be314ca&amp;chksm=cff51e29f882973f28021ec0466aea2356449753b6531de8b5fb56b6b933c3451f6ba722d964&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','006','听佛号注意事项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487192&amp;idx=5&amp;sn=66ee826b2bb0901534fd7fa888080d5b&amp;chksm=cff51fcaf88296dcd7307be48ca1d603e3a7708908aea8919724c5cc7b674ab684eb165c68a2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','007','正确静修方法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487192&amp;idx=6&amp;sn=ab434ccafefa8457d553e87053cbac72&amp;chksm=cff51fcaf88296dc775f15d4b12de806d89eefa3aca998766f37c5bd33232873658d216dd818&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','008','帮助临终者提起正念','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487192&amp;idx=7&amp;sn=a645865ee5d2b6734d5e41887fe67b49&amp;chksm=cff51fcaf88296dc3e994644aea5d7ed6d6aac4c01c2121d66b7573bc7dd61bdbfac40406905&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','009','临终关怀开示','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=1&amp;sn=71c6cb5659f6fa5d4a5c2ab9e75bd964&amp;chksm=cff51f93f8829685c404fcef0671d1b52cb576c1922b6baa5e425cf9e82ced0e454c11509bac&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','0010','念佛时过去人事不断涌现怎么办？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=2&amp;sn=67dde409fc8249b8a8050e36242dea2d&amp;chksm=cff51f93f88296857b672bcddc2b01f25e71d74e04fee42d2195957e7aebbeb670d7e5cfda3d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','011','强顺人情，勉就世故，误却你一生大事','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=3&amp;sn=832c123034c34c6c9de025b0f08c5e2b&amp;chksm=cff51f93f882968547e30d153681b81fc792037cc16cb670b07a76213447273a06a3abc509e1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','012','念佛要常发愿，当下要念清楚听清楚','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=4&amp;sn=fb72cfbd4a102cc75640e4ecd8c91c07&amp;chksm=cff51f93f8829685b0c76e1210ecdab995518e08c60f4967fc794135de9a04eaa628fe470d45&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','013','真正的报恩是往生极乐世界','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=5&amp;sn=b2e91b3c4e4d5cc4f96d422ef0027434&amp;chksm=cff51f93f8829685b37bb2ec7722801b5dfd24bc3a0de4434ec672b2f10eb78b55dfc9dbe82f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','014','《阿弥陀经》动画','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=6&amp;sn=af9843a0f2f30fafc866afb0013f11b2&amp;chksm=cff51f93f88296857c50b20df8dbaa48eb77cea2355719f1421525e82d4b0178a8cf2b89cfb0&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','静修班资料','','','015','最不受干扰的念佛就是心念心听','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=7&amp;sn=0b6101683d77c841964732f942f58d6c&amp;chksm=cff51f93f882968520f451e6f1576cfefaf508967734ca8506da295bdec3e4afcacbc9fa4e8b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','016','念佛四种功夫','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487105&amp;idx=8&amp;sn=c7871770ffbfae538b891a79694b0fd4&amp;chksm=cff51f93f88296851ab63e66a089d7d93716f3c811b2bbe0e11415e7d710590e525d3c376f17&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','017','求往生要有魄力','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487183&amp;idx=1&amp;sn=bd3c16e839753762f729e0931493ee2d&amp;chksm=cff51fddf88296cbb5df1beb08aa34f42c188a91b53b5cf2e1600a50ae0761688e9aa91271c7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','018','往生见闻记和师父随缘开示',myaddr+'xxzlhz/jxbzl/wsjwjhsfsyks/','有','无','目录','原始'],
//选学资料 静修班资料 往生见闻记 添加目录下文章
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','001','出家法师案例','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487183&amp;idx=2&amp;sn=56b9144539e0a87924967a69ffcd017c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','002','居士案例(旧版)','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494301&amp;idx=2&amp;sn=1f6ae310e68ca3f85bd1dc89a021d126&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','003','居士案例(旧版)','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494301&amp;idx=3&amp;sn=976a77cfa4bdcbd6ceb2eb1cc9739b3a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','004','居士案例(旧版)','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494301&amp;idx=4&amp;sn=9343af67f8ce19f9388ee5be8625a616&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','005','居士案例(旧版)','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494301&amp;idx=5&amp;sn=38983e1db8a3cbeb60d7ff5af0092dda&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','006','居士案例和往生助念(旧版)','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494301&amp;idx=6&amp;sn=ec4c14bcbe2d64f9e7f2830fbae99496&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','007','其他祖师简介','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487183&amp;idx=3&amp;sn=9e6f03a7a840d89e919615037ef63a55&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','008','往生重要事项结合案例','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487232&amp;idx=1&amp;sn=441f067507959ec6f09685d82d4d4e50&amp;chksm=cff51e12f8829704b7aaae68c45e785c4b0a8ce0ef36bc406ae3f78b858fd2dc568c23e223f8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','009','临终时要克服干扰','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487120&amp;idx=2&amp;sn=74c27db5e63df3d888cb3cb22cf8933e&amp;chksm=cff51f82f8829694f1db2eab2c0afddbe7aee80247e588fc745f645755e2ab5c4b29787ba03d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','0010','临终助念重要环节','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487120&amp;idx=3&amp;sn=b11db1b91e5522b8e4c2788bc12bdbdc&amp;chksm=cff51f82f88296947d953aea5e85d1acefabac544e9f3d9d0e58166aa0237e6a93a04390f926&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','011','关于具体助念','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487120&amp;idx=4&amp;sn=52b61580323f53bdb9d8b6403b332b24&amp;chksm=cff51f82f882969448be45ae46c3b36fd3cfec46d9172b1cf0f07139e0fd1cf0fb94aa78bbda&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','012','助念为辅，实修为主','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487120&amp;idx=5&amp;sn=77d018545a03a24b6c716cc260306df3&amp;chksm=cff51f82f88296942476638ce396ee63c5ee21e9266bd8e169e55555ad92f7b62d0d0e4ea810&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','013','助念模拟训练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487120&amp;idx=6&amp;sn=cba4bf242a6689b62ede9978ffbe9ccf&amp;chksm=cff51f82f88296948aff703eb94b513b8be9bac6ccd12f558438413c4caa1c23c3deacb8b53a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','014','模拟助念总结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487120&amp;idx=7&amp;sn=453e0f257e9a488a7392ba8814d17473&amp;scene=21f51f82f88296948aff703eb94b513b8be9bac6ccd12f558438413c4caa1c23c3deacb8b53a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','015','佛号要听清要念熟','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487120&amp;idx=8&amp;sn=83d6b54a80dd2cbf65743c68657b44da&amp;chksm=cff51f82f88296943895a7c01866e5d3eda0e553188f4a174083d51a00f0b949932961191e42&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','016','回向是在做往生的转化','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487180&amp;idx=1&amp;sn=5a88c48479802df6f09a2de6aeff9794&amp;chksm=cff51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','017','临终念头决定去向','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487180&amp;idx=2&amp;sn=94f164305b77d7c99f162f329d10ffeb&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','018','往生见闻讲解前言','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487180&amp;idx=3&amp;sn=52983211f26a3132af66598d4c34ff2e&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','019','台中莲社和印祖简介','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487180&amp;idx=4&amp;sn=c85936c2cff247061b51f0fff5813d00&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','020','出家师父往生案例','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487180&amp;idx=5&amp;sn=550dab9261c9d50f2ab324935fa7531d&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','021','日常事务是不是修学的障碍？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487180&amp;idx=6&amp;sn=e998a7e45e649c186e161a753b214138&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','022','忏悔为辅，极力仰靠阿弥陀佛','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487180&amp;idx=7&amp;sn=f1d82d3072870c20e3b16a5e7ccc2487&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','023','居士往生案例讲解之一（旧版）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490857&amp;idx=8&amp;sn=f9d1036f0254ffe1c2dc4924b8a0af08&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','024','居士往生案例讲解之二（旧版）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=1&amp;sn=2319e80a6de95fb213cf5f58584ef891&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','025','居士往生案例讲解之三（旧版）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=2&amp;sn=589a21d0f6cbdebd21d00d7f06f0eac6&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','026','居士往生案例讲解之四（旧版）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=3&amp;sn=2f437a19ab3a8bd711a36f28d5257687&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','027','世间和出世间的结合','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487186&amp;idx=2&amp;sn=73caec3a7b20fb9919b1fb676c41efe1&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','028','李炳南老师','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487186&amp;idx=3&amp;sn=4b71973945eb15be602f4697d445b6c5&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','029','印光大师（旧版）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=6&amp;sn=af98518a248ab8fc703c1d7cb6d20255&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','往生见闻记和师父随缘开示','','030','其他祖师大德；纯正净土知见（旧版）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=7&amp;sn=998cc74db0e185b6f70f75deed0c5aac&amp;scene=21f51fdef88296c8d3a502474e16b54e63cf42e551e6ded41b41dba88e9bd85778c1d9148f87&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['选学资料汇总','静修班资料','','','019','家父往生极乐世界记实','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487295&amp;idx=1&amp;sn=0154f33fd838339324da04945578c44d&amp;chksm=cff51e2df882973b6038a5903f95217afa356076a7930abda7f4473af9b7c989c4e85659ee3c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['选学资料汇总','静修班资料','','','020','静修训练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487168&amp;idx=1&amp;sn=9205e6d4fbe71916305079750216be1f&amp;chksm=cff51fd2f88296c45e2574d83d356d4d7244de52d9adf675033ebc8363eb5bac036ab4804760&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','021','胡松年居士往生记','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487284&amp;idx=1&amp;sn=b687707e90fd658ae661e1370b93a835&amp;chksm=cff51e26f882973055b6b8f20472ceb22efcab6c3f59202a48d70b3fbbd391a4d9b07f78521e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['选学资料汇总','静修班资料','','','022','生死心切，专修净业','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487168&amp;idx=2&amp;sn=22c842a9e28c8ca92610d0761d647919&amp;chksm=cff51fd2f88296c4601d80db123d35251a994fad29bed8e70876e78b631688d1f001de0edb5d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','023','《佛说阿弥陀经》白话解释','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487233&amp;idx=4&amp;sn=c29c91d9d7510f272c8ef188a7e15da4&amp;chksm=cff51e13f8829705b61be4c47673299dcef997fd012ef01ee83b62038216b64e586000924040&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['选学资料汇总','静修班资料','','','024','《吊藤馋蜜图》的故事','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487233&amp;idx=3&amp;sn=b5c9bafc632ff3454d55b3873affb8a8&amp;chksm=cff51e13f8829705e3c17c2f5dfa3a979c05b12b4043c67fa256c51c03a754e8394d7c0fb6fa&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['选学资料汇总','静修班资料','','','025','《五母子经》原文、白话文','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487233&amp;idx=2&amp;sn=87e4a5c63b3072bada9ad4696857322c&amp;chksm=cff51e13f882970555c5305db722ae01398bcf63b8b0ac82a8604ae9136b67bd1a45c1cca7f2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','静修班资料','','','026','为什么五逆十恶的人临终能往生到极乐世界','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487247&amp;idx=1&amp;sn=61ed6ef9c5fcfe835401debea07bf4df&amp;chksm=cff51e1df882970b47f4c693a3a0c20702064ec77c0f9da269089fecd801d33cef37bab28c80&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['选学资料汇总','静修班资料','','','027','印光大师开示：一心求往生，不起别念','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487233&amp;idx=1&amp;sn=60fd8d1fb5fbe6e168b0e3598beb2e60&amp;chksm=cff51e13f88297056963ef382bb2ad0bf6e8de7974680a3a3a4aba2fd5d16169aa3bb3ffa9ca&amp;scene=21#wechat_redirect','无','无','文章','原始']
];


//选学资料汇总 印祖文钞选讲
var contdatas10 = [
['选学资料汇总','印祖文钞选讲','','','001','印祖简介	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=1&amp;sn=26b73dde7cdada244cc9d1e0f249880f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','002','真谛与俗谛','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=2&amp;sn=1afe537b0e1995fe42fd2ed97711c39c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','003','因果与心性	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=3&amp;sn=f7b3d505e30d03c0caf7c6c5d316b097&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','004','以苦为师，以病为药','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=4&amp;sn=84ced3d54ff4637456152dc4b9a2ddc1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','005','要生惭愧，要修忏悔！	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=5&amp;sn=4dcdbfb1e37e253af364b70ecb759a44&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','006','以身谤者其罪大','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=6&amp;sn=ab240cbb2c7604499fc6c2038247ef17&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','007','“信愿”最为要紧	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=7&amp;sn=54dc46aa30255108d6bd57f6bd6e5a01&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','008','平时预先提防','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496310&amp;idx=8&amp;sn=5bf3a9ed1af2c02669680060d305be9a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','009','空解脱病	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=1&amp;sn=bf55b0ff09a5fc8b79450f5cb290072b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','0010','华藏海众，咸求往生！','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=2&amp;sn=680fbe3f5adda756dc249af308c84135&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','011','经经偏赞	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=3&amp;sn=8b5fa374527d58e26198bd2ac6a8e058&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','012','对于净土宗要有坚定信心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=4&amp;sn=299214fae4b4d258605cb90ebf1a07c9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','013','未断惑 常须努力	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=5&amp;sn=bbc45cb9d6052d8dc81feecfc36ca0b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','014','不以其智自恃','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=6&amp;sn=d3a3f98a35f7834144e8761844d7d711&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','015','求感通 是修道大障	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=7&amp;sn=6beda4347f6ba87a74d11b7fc7ccf6fd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','016','烦恼习气，必使渐渐消灭','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496383&amp;idx=8&amp;sn=865604e36826cfefb343317b4e817cc9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','017','丹家皆在色身神识上作活计	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=1&amp;sn=fcf8ef0b7e6d785e72208c87c7bb0320&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','018','见性是悟 非是证','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=2&amp;sn=86632f447ad0aea4ead641cf70b1ee00&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','019','行事当依凡夫常理','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=3&amp;sn=e4822ad6817c5740430ace812d0d9cc5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','020','好高务胜 越分自命','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=4&amp;sn=b51956358d3a3954a255f5c86d61ed54&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','021','祈求三宝威神加持	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=5&amp;sn=79f6c15c496881c7d45facc7bdd5b3f9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','022','念佛往生 如风帆扬于顺水','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=6&amp;sn=891bae6de1b6389987f458891a6f612e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','023','佛身充满于法界 普现一切群生前	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=7&amp;sn=fb6137a45a16a2c3bca21e59ec0e284d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','024','十念记数法','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496633&amp;idx=8&amp;sn=12b06cc22b49a0c4bb25b72d113f342d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','025','追顶易受病	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=1&amp;sn=3d035ed82170d6a64cdd11cd8be796a4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','026','纵古佛示现 亦注重净土法门','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=2&amp;sn=ba98c89fb710ec73d55bc17d1522dcfc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','027','如是决定 方能感佛	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=3&amp;sn=1a330b1b168a6ce3b3d821ee9c440ad0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','028','心与佛合 心与道合','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=4&amp;sn=5e04e70125db9f0f57eaca042d27d5a2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','029','眼皮垂帘 及心向下想	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=5&amp;sn=47f06e038da99b48260f7ed1b16471e5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','030','大念见大佛 小念见小佛','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=6&amp;sn=5456879df3d3774a403bacce23033a3b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','031','将无价之宝珠	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=7&amp;sn=af19e3df144ea14bbc5f1fa3b0588956&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','032','不求而自得','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489980&amp;idx=8&amp;sn=1782f7c6ca860670b4debf423bbcfb7f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','033','念佛之法 何可执定	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496668&amp;idx=1&amp;sn=51e14826198dd486723ccb1d570cbc4c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','034','回向往生 回向法界众生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496668&amp;idx=2&amp;sn=e1ffdaef4aa7155c3e2fd4efd67bfd6c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','035','不当刻期定欲即生	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496668&amp;idx=3&amp;sn=a1a91bbc447bd6a678627f86b4114645&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','036','来生做人 比往生西方难','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496668&amp;idx=4&amp;sn=641d86ad10d76d1e32fc765b0c39725a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','037','此三力不可思议	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496668&amp;idx=5&amp;sn=228332f0f34190d41ba4da21aec37873&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','038','思地狱苦 发菩提心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496668&amp;idx=6&amp;sn=d656bc345b3eef539403cc604f69d9ba&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','039','念佛时 即作已死未往生想	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496668&amp;idx=7&amp;sn=a8d4e9b3caa138868c5298a84d2b3dcf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','040','四种念佛 唯持名最为契机','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=1&amp;sn=93736646f69bbe3d62bd00ff163083f3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','041','凡夫妄生此想 则易着魔发狂	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=2&amp;sn=04f28be80125f49b4dbe2c32848e1e72&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','042','倘或好奇厌常必致弄巧成拙','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=3&amp;sn=5dfd48ac067c76983213629a45691412&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','043','自己甘心在六道轮回中乎？	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=4&amp;sn=ab9b1bc6187843c1ce7531ff5b00315d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','044','求生西方者，不可怕死','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=5&amp;sn=0eef788b5b172edc33095525a8ccd017&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','045','贪恋好东西 不会生西方	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=6&amp;sn=e682a3dfbc96720a477575b457743ded&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','046','情爱一起 正念即失','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=7&amp;sn=665928318cc9b2e48444d97d76e94c4f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','047','临终三大要	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489971&amp;idx=8&amp;sn=0b06ccd76ecc1bee3f46e1295711c1a5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','048','往生之瑞相','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489886&amp;idx=1&amp;sn=1eb2c922f620f7673d19b8e247ef2759&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','049','极妙秘诀 印祖	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489886&amp;idx=2&amp;sn=145de56bfefd03244a07f614c66ee7e4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','050','念佛之人 当吃长素','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489886&amp;idx=3&amp;sn=35f932b7a48e045e00159a1e308eb92a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','051','何谓有禅 何谓有净土	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489886&amp;idx=4&amp;sn=6f355ab67897b2d34857ec4f536bb31a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','052','有禅有净土 犹如戴角虎','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497933&amp;idx=5&amp;sn=e96bbebdb8fa041b67e1f6fdf93e8858&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','053','无禅有净土 万修万人去	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489886&amp;idx=6&amp;sn=a8128c3a700896b97b6562ee8abacb66&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','054','有禅无净土 十人九蹉路','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489886&amp;idx=7&amp;sn=9dfd5878e5817ae375dd5f3098857cef&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','055','无禅无净土 铁床并铜柱	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489886&amp;idx=8&amp;sn=fe8f54a4470f686ba8465758992122cc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','056','以我具佛之心 念我心具之佛','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=1&amp;sn=23c985217025c215b9a99b8298c0885a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','057','《生无生论》之大旨	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=2&amp;sn=e71d599db300271cc9c5bfd23227fbf2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','058','持咒一法 但可作助行','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=3&amp;sn=d176b208192c13a19aaab367f7e04ca6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','059','极乐世界四土	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=4&amp;sn=00890302ed793e25de3d6232cfcd65bd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','060','培植福田 作往生之助行','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=5&amp;sn=1ef791c180fdbe02acf34b567a8f5b0d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','061','果能依我所说修行 决定可生西方极乐世界	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=6&amp;sn=6172edd36cf01d5569d5c6f260062e52&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','062','若人人善教儿女 世道自然太平矣','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=7&amp;sn=2dca5087ff1af994f389ab420097a523&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','063','治国平天下之权 女人家操得一大半	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247489895&amp;idx=8&amp;sn=95756f2b5e30f1cd057d03ce93450837&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','064','毒乳杀子','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496486&amp;idx=1&amp;sn=c3ace6b198f60596bb7a334d399d5280&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','065','作不净观	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496486&amp;idx=2&amp;sn=41a1834d240be9393c4556332937551f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','066','鸡蛋不可食','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496486&amp;idx=3&amp;sn=346bb26211434f8f95eb1294eebbe1b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','067','牛奶不宜食	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496486&amp;idx=4&amp;sn=fcab85776e769f0f2090027a2697494f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','068','不可以轻慢心求皈依','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496486&amp;idx=5&amp;sn=025a7dcb92d73045cc5cf98616dd5ebc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','069','扶乩一事 多是灵鬼假冒仙佛之名	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496486&amp;idx=6&amp;sn=3021509be17ae0957cc071bffb17f836&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','070','相信扶乩者 不可令皈依','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496574&amp;idx=1&amp;sn=136d4ad3fa67d9f8cfe14565779b0de3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','071','向鬼神祈祷，即为邪见	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496574&amp;idx=2&amp;sn=cd51c4ddd44f0c12560df9ae2883f6d7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','072','二法相辅而行 但专主于自利一边','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496574&amp;idx=3&amp;sn=7a0967fb73cf68ccfc2161d876a0292b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','073','不可专在外面事迹上做	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496574&amp;idx=4&amp;sn=1b62e059cff7b15d0fcbb010eabb8ab6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','074','不可偏执一法 亦不可漫无统绪','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496574&amp;idx=5&amp;sn=9d85fb24f20cf64810dbc31e027bf957&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','075','事情成败 因在自己	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496574&amp;idx=6&amp;sn=e4b280f5c041476e0255cdd14262fd0d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','076','学佛一事 须克尽人道方可趣向','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496574&amp;idx=7&amp;sn=25bd3734af9ccbbdcc57c07b186a4df9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','077','因果一法 标本统治	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490725&amp;idx=6&amp;sn=2a3c6be9f531372a56239c6cd4e9d6e0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','078','交游广泛 为修行大障','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=1&amp;sn=14cb19e12b109bb43f7ba10da922a37c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','079','事持与理持	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=2&amp;sn=7f8bf5daed560d3d0031bf45a0d5cf60&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','080','光之教人 多在尽分上指挥','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=3&amp;sn=810b490a1562ec467b6f886f0d027b02&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','081','如不能随 但令摄心谛听	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=4&amp;sn=6e23608381e9281715e310767e38a998&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','082','大妄语 其罪甚于杀盗淫百千万亿倍','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=5&amp;sn=86ae76e031cc40e7df56f24e5e6f5937&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','083','见诸境界 直同未见	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=6&amp;sn=ad604665baa762f62916443c10e6d862&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','084','魔境胜境之分别','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=7&amp;sn=e1952d628937e490b01d0c75996e3e0a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','085','勿以横超法 作竖出用	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490048&amp;idx=8&amp;sn=b4493049ee6e1a03a9699c1f2da77283&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','086','纵能悟到极处 亦难超出生死轮回','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=1&amp;sn=bf0a43218dffd700ae344de29e72367f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','087','关于五逆往生的平时说与临终说	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=2&amp;sn=eb0df930f75a9a6d5b62fe45b3d68a39&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','088','念佛人有病该怎么办','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=3&amp;sn=daa3894fa149660ca4db6a9f5970e62d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','089','为一切众生回向	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=4&amp;sn=28f1c1ee87c98483aad8dd205e33067e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','090','孔子见尧舜周公','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=5&amp;sn=21675a1e891e7d1dc83c08ca0b3170e4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','091','一颗沙子 入水即沉	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=6&amp;sn=b960be9b9393390f3e3a913bdd7e1475&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','092',' 作我已死想','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=7&amp;sn=e017e340eb297b2713513f7eeb40ec56&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','093','断见惑如断四十里流	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490114&amp;idx=8&amp;sn=bf5fec2776a9cba5c0f8e5474d41b69b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','094','于得益者 皆若罔闻','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496734&amp;idx=1&amp;sn=1dd08bc41214123b2e52327bfaec81d0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','095','如切事系心	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496734&amp;idx=2&amp;sn=bd585d7ad395ed558c4c1c5e5fab657a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','096','自利利人 方合佛意','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490725&amp;idx=7&amp;sn=ec59ab34013f3750ec7df0c4b2fb0157&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','097','宗与教相合而不相离	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496734&amp;idx=4&amp;sn=73b9eb75f57f3b9c7b1b64f8a6b6414f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','098','三因佛性','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496734&amp;idx=5&amp;sn=0317969f42938c538c10f5e86c0b80e8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','099','舍利	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496734&amp;idx=6&amp;sn=1cf9df18af9d15a66c04487772da0c2d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','0100','修行之要 在于对治烦恼习气','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496734&amp;idx=7&amp;sn=7857e0049f33afe6a144e6f5620dc7a5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','101','戒贤论师 身婴恶病	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496734&amp;idx=8&amp;sn=f83b1be77eed337308402976232f2f58&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','102','可兼念观音','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=1&amp;sn=f6855ce76a569eaedd31fb3161bd6c36&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','103','念佛与念观音	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=2&amp;sn=ebceee1e1004b636e8a2908c28c1a4c0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','104','楞严经对于净土者的破与助','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=3&amp;sn=0858c67c1c167cc0c8021bfebfbedef0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','105','我法二空	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=4&amp;sn=ddab635bdb641dea8eb2d9549fe9491f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','106','三世诸佛净业正因','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=5&amp;sn=637858f2ca67d8b67ca3a7b1c93c6e43&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','107','设有恶人 欲来害己	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=6&amp;sn=45e3d4a4ba4bcfe57daa2e9a4ef0b036&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','108','不敢妄生意见以误人','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=7&amp;sn=fd30ed618771289bd255613681e5e936&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','109','彻悟禅师十种信心	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496811&amp;idx=8&amp;sn=ef6c5c9181e6762288f3f976edca39b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','110','未成佛前 皆须仗佛威力','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=1&amp;sn=93c80fde373c6523878e4c31afa9714c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','111','悲魔与欢喜魔	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=2&amp;sn=cc4b2bec1957b048bb6e5aa8cad9a713&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','112','不可一向专在事相上用功','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=3&amp;sn=c28bb7249a13522ec57845ee5965fefb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','113','唯此一法 佛也说不出第二个	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=4&amp;sn=5db87869d4f4f48c369027867b99679c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','114','不可自杀而求往生','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=5&amp;sn=fb69e3a66502ca3037a2f30f1da29031&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','115','佛所说法门无量 法法皆真	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=6&amp;sn=741e3305e163f75aea0b1cb66d8ee029&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','116','如子忆母','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=7&amp;sn=10285edfcf34d101f58a701533ad9f73&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','117',' 代母忏悔	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490192&amp;idx=8&amp;sn=86acc9e5e41fd6154047ab9f14e92bdf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','118',' 真佛弟子','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=1&amp;sn=d22c3d6a9ccead23172b6574eb6615c7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','119',' 奋发大志	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=2&amp;sn=f1b20247432ead1f93e34d3f50cac2c4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','120','焚化箔锭 亦不宜废','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=3&amp;sn=232978d1d5f428d573a9f18fd34ec4d9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','121',' 四勿	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=4&amp;sn=8b25c1ffc88ee9bac84676c695c994e3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','122',' 悟是悟 生死是生死','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=5&amp;sn=08bc11b7b1558e81f6d3a04d10561e93&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','123','在家人念蒙山 有何不可	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=6&amp;sn=56b37e75b8096b69ce9f21749b3813da&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','124',' 且莫只以一心不乱及得念佛三昧为志事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=7&amp;sn=8c07722ee81e6a50465513d79e13d956&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','125',' 不戒房事 决难即愈	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496909&amp;idx=8&amp;sn=a528ce24cabaec6ee477bc563efe9d33&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','126',' 但尽我心以修 不问现境逆顺','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=1&amp;sn=4fdfc4bdbcdd0d9118437a3076bc7df9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','127','与真信切愿相反	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=2&amp;sn=3100e36851dbddce00945d1ca9deda63&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','128','凡丧中作佛事 均当以念佛为事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=3&amp;sn=c09d9eb52f372ad9b154a54d8fb60b63&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','129',' 学道之人 断习须具勇力	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=4&amp;sn=f0860a110e96d437cf745d6538baffbe&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','130',' 除念佛之外 不使起第二念','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=5&amp;sn=0eb9dbb2c3b5903da18d30e65729afb6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','131','参禅求悟 殊失净土宗旨	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=6&amp;sn=a1026b0be580621cc7741ff484a8ff53&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','132','何如安住不动 受炸而死之安乐乎','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=7&amp;sn=390f9f29333555795f237c9df49e9589&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','133','唯论理性法 非凡僧所可行	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247496986&amp;idx=8&amp;sn=4da797ed7b96d3a971f55fa269f9b39e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','134','寡过一事 虽圣人尚须努力','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490278&amp;idx=1&amp;sn=b7a0630dd49273df70f2d2f0b125a161&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','135',' 圣境现前 乃得我固有	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490278&amp;idx=2&amp;sn=78595e1ef5de9bd3e2247f485c2308d0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','136',' 随缘买放 生得实益','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490278&amp;idx=3&amp;sn=b212973813e1ed73a62ec3641160306a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','137',' 且莫学说大话 不认真用心于小事	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490278&amp;idx=4&amp;sn=be188aacb4c77c70394d9aa30aa8c458&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','138','参禅一事 非小根行人所做得到','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490278&amp;idx=5&amp;sn=363420b8d29b23de0688153006470943&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','139','两重工夫 融于一心	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=1&amp;sn=569ce33ffb1847027de675ee6601ab42&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','140','念自佛与念他佛','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=2&amp;sn=a038ac6e2a2bdab04ecc90a14fa033b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','141','生死大事 当为预计	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=3&amp;sn=4d76ec1b3306edaaa7febe4a0718c25d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','142','、不敢承当与不屑修习','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490725&amp;idx=1&amp;sn=9154e420a70ec7d1d7403301d9449c2d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','143','侈谈自力 藐视佛力	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=4&amp;sn=578dff900ed90b13e80a4b1a89814aa7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','144','若自恃者 纵有修持皆属魔业','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=5&amp;sn=dd12e31c9f23ef499c70206cb621b4e8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','145','犹如蛆在粪坑里 囚在监牢里	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=6&amp;sn=b155e6ef711b50ac3c3ce3ca297ae4f0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','146','我偏不随他转','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490725&amp;idx=2&amp;sn=a304e4a9724fd7857b33d9ec3e36ec1b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','147',' 所有罪业 不必以此为虑	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=1&amp;sn=1db0cfdf73d08f88958b0745417123a8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','148',' 以诚为本','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=2&amp;sn=347b62d4f8758b96b1a70b61482735f4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','149','欲生净土 先治染习	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=3&amp;sn=b03c1f0425d8b2b8845a93a2dc1f2ac2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','150','任何名胜 均不往游','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=4&amp;sn=fe1a9b0bcbb74a50d55657fbdd64dadf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','151','敛些大粪堆在头上以为荣	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=5&amp;sn=a9d562828a8dbc681ae746351069ddbd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','152',' 关于寮房供佛','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=6&amp;sn=c657f064082b791fe35e411ba32ff328&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','153','旧经像该如何办	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=7&amp;sn=bc333b486ac1d7f993b858f179c780b4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','154',' 志尚浮夸 不务真修','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497051&amp;idx=8&amp;sn=a0a4cc3c55ba1f65fa43ae9a544a42af&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','155','佛法要义 在无执著心	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=7&amp;sn=155536509fa86233ce59d079aaab3be4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','156','不达如来权实法门','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490506&amp;idx=8&amp;sn=6caf1fbf4e6747ce4a8472e2ea0a8c85&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','157','自陷陷人	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=1&amp;sn=68d42720f98ee99b41089ada540cb38b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','158','以凡情而测圣智 即醍醐而成砒霜','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=2&amp;sn=89ec18986b056e095d11b84238037256&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','159','过分之狂妄心	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=3&amp;sn=8620e5fceb73720607733dff28fc5a0b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','160','不遭瘟疫','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=4&amp;sn=faa5919f70bb4d12178c7b4768643ee6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','161','岂杀之而能为民除害乎	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=5&amp;sn=be73e11b7d2c4566b8a8f483f06d7473&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','162','为学日益 为道日损','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=6&amp;sn=1003c9acf21d263f9e0e511aeb629130&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','163','悟道容易 证道甚难	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=7&amp;sn=1243638ca07e480e98ca40e8ed4e88e0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','164','无论何等女人 皆作此想','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497158&amp;idx=8&amp;sn=868b3b54cf175b34ec18f7f14768f352&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','165','不可发来生及生生世世之愿	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=1&amp;sn=c241e8e1aa381a9e74f35464e15bbaf0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','166','不必过为提神','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=2&amp;sn=90e7c739f3f49302f3eeeb52a5bfc85a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','167','打七用斋	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=3&amp;sn=6c631f7c5d5dad3fd15591435722d46b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','168','不能自利 断不能大利于他','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=4&amp;sn=a71d373252bda3f23c9253538dfff012&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','169','弥陀经 为净土法门之根本法门	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=5&amp;sn=87fb9783a18a2740b50a0bd437eae7d2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','170','即生成佛','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=6&amp;sn=8dbb94cda0de348b459f6418f1349196&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','171','白鹅往生	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=7&amp;sn=a85ce8b4255f62caa57c8ea39ed43cda&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','172','终日为人忙 必致误自己生西大事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497183&amp;idx=8&amp;sn=f1b713399f337c9ef545f29014eb9afc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','173','此八句 依而行之	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=1&amp;sn=824ecd27710fb024068345bf20ae6870&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','174','不主寺庙 不收徒众','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=2&amp;sn=5be1210460118de60be9a9b7876ce8d1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','175','大通家	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=3&amp;sn=8f8eceae71bf31055115c71384a18703&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','176','文人习气','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=4&amp;sn=38ac2586ae2307446a5ec0a9bf94851b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','177','若有此念 便不得往生	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=5&amp;sn=d51fa8978a1c43fedd3786297321f66f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','178','行不到者常说 久则著狂魔','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=6&amp;sn=22571fd61b815ea901c884a951aad7b7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','179','格物致知	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=7&amp;sn=eb3ed64398d3a6df2af81adc2eb21eac&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','180','生兜率天难','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490568&amp;idx=8&amp;sn=620f4a804991d634b5ad52ef4c39f1b5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','181','己在苦海中未出，何能遍救苦海之人','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490633&amp;idx=1&amp;sn=d88861e50363769fc270d363ce3cef40&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','182','骨作面丸','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490633&amp;idx=2&amp;sn=3b61c13958255acfd4fd949f28a59daa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','183','吃了就度脱了，则成魔说矣	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490633&amp;idx=3&amp;sn=85b6c394288f0a7f600a7461ef4573f7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','184','妄想起时，只一个不理','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490633&amp;idx=4&amp;sn=9df8984475427904afc473ddb3fc853a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','185','汝若常怕,则著怕魔	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490633&amp;idx=5&amp;sn=728e57d859e2f8d7047300d6082eb265&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','186','一切凡夫，具有二病','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490633&amp;idx=6&amp;sn=1161af7ac36937be09cc86582bcfb5e2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','187','其作障碍者,乃汝邪心所	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490725&amp;idx=4&amp;sn=41e4dde8fcc3acfe1d3954527d8faee7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','188','怨业病','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490725&amp;idx=5&amp;sn=c0de842b2a9c02fa4fedbaa84ef5ef78&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','189','汝欲开悟，岂须用参究工夫	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=1&amp;sn=90960964bbb77adcc07f843a3ebaf38d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','190','愿我多受点，总愿世间人勿得此病','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=2&amp;sn=d41fedc1d59a750c6ace129c90a562e4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','191','日课十万弥陀	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=3&amp;sn=9f3471f0168a494352aedebd6d0d93fe&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','192','切不可谓修持无功','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=4&amp;sn=a838dfe7ad0475bc37a44bf04ac72923&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','193','转重报后报，为现报轻报	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=5&amp;sn=f8cefbcb19069b517f95e5853af299de&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','194','闽侯罗梓生居士生西记','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=6&amp;sn=8387071e2d84763c793d83497967ffcf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','195','善女人何王氏圣缘生西记	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=7&amp;sn=ff735a13c0e97f243401261b3bd4864d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','196','乐慧静优婆夷生西记','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497284&amp;idx=8&amp;sn=1aeb0d8eaae83205e73d32c7508cca5a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','197','读法十条	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=1&amp;sn=e76fb6e6082f831a5017ab01dd7373cc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','198','答念佛居士问','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=2&amp;sn=ef9140b251fce94339a5d453cee35024&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','199','答幻修学人问	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=3&amp;sn=29c057e6c86ef8c597dcb2a66cd3068c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','200','答俞大锡居士问','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=4&amp;sn=e8518858ee820f8671a508b44ce93a53&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','201','六即佛	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=5&amp;sn=1f2b74aaa4352f371d0a97e1c17e829e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','202','理即佛','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=6&amp;sn=33773e98a877801527157d4d41418b65&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','203','名字即佛	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=7&amp;sn=755f87eac25efe229794bd585138e4f1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','204','观行即佛','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247497317&amp;idx=8&amp;sn=b178c9b2b3766c62828c437e0997350c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','205','相似即佛	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490665&amp;idx=1&amp;sn=24f77c5f7425911124b90f69807f79bc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','206','分证即佛','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490665&amp;idx=2&amp;sn=4db8efdb2afb5aec2966b5ceba3f828c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','207','究竟即佛	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490665&amp;idx=3&amp;sn=5796df1c0ac111d85f2a1b0aa914318c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','208','夹杂私意,难得好结果','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490665&amp;idx=4&amp;sn=f1b5c53c5c023638a8ce9be654f6737d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','209','鬼神享余	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490665&amp;idx=5&amp;sn=69e44da956560999cefb669521460dd9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','210','沈荷生生西决疑','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490738&amp;idx=1&amp;sn=a2c2bbb9b403dd6abdc0519159cc9cf9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','211','九江查六庆童女往生记	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490665&amp;idx=7&amp;sn=5064436d5a3437fb1e2f7507f1ae8009&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','212','蔚州僧莲某','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490665&amp;idx=8&amp;sn=25c90af241c5673f515197c04dbd8d3f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','印祖文钞选讲','','','213','风水师的话	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490725&amp;idx=3&amp;sn=c5869f0bef5291e41c56beea32a92346&amp;scene=21#wechat_redirect','有','无','文章','原始']
];

//选学资料汇总 二级修学资料
var contdatas11 = [['类别一','类别二','类别三','类别四','在分类中的序号','标题','地址','','有无视频','文章目录','原始引用']];//数组结尾


/*
p1: 类别一
p2: 类别二
p3: 类别三
p4: 类别四
p5: 关键词
p6: 是否查询关键词 是/不
p7: 比较第几层
*/


var contdatas = [[]];
 //let copy = original.map(innerArray => innerArray.slice());


switch(p1){
	case '概览说明':
		contdatas = contdatas1.map(innerArray => innerArray.slice());
	break;
	case '基础班资料':
		contdatas = contdatas2.map(innerArray => innerArray.slice());
	break;
	case '每日四项讲解':
		contdatas = contdatas3.map(innerArray => innerArray.slice());
	break;
	case '净土次第修':
		contdatas = contdatas4.map(innerArray => innerArray.slice());
	break;
	case '学员分享摘选':
		contdatas = contdatas5.map(innerArray => innerArray.slice());
	break;
	case '随缘开示':
		contdatas = contdatas6.map(innerArray => innerArray.slice());
	break;
	case '其他专题':
		contdatas = contdatas7.map(innerArray => innerArray.slice());
	break;
	case '选学资料汇总':
		
		switch(p2)
		{
			case '老年修学资料':
				contdatas = contdatas8.map(innerArray => innerArray.slice());
				
			break;
			case '静修班资料':
				contdatas = contdatas9.map(innerArray => innerArray.slice());
			break;
			case '印祖文钞选讲':
				contdatas = contdatas10.map(innerArray => innerArray.slice());
			break;
			case '二级修学资料':
				contdatas = contdatas11.map(innerArray => innerArray.slice());
			break;
			default:
				alert('未知类型，在选学资料汇总');
    		break;
		}
	break;
	case '不选择':
		//查询用,先复制1
		//contdatas = contdatas1.map(innerArray => innerArray.slice());
	break;
	
	default:
		alert('未知 类别一');
    	// 如果 expression 与上面的 value 值都不匹配，执行此处语句
    break;
}
 //alert(contdatas.length);
/*if( contdatas.length == 1 )
{
	alert('数据为空');
	return datas;
}*/


var sLen = contdatas.length;
var str1="";
var index;
//var datas =[ ['标题0','https://www.baidu.com']];
var datas = [];


	//是否查询
	if (p6=='是'){
	if ( p1=='不选择' )
	{
		if ( p5=='' )
		return datas;
		else
		{
			//依次查询所有文章
			pushDatas(datas,contdatas1,p5);//概览说明
			pushDatas(datas,contdatas2,p5);//基础班资料
			//pushDatas(datas,contdatas3,p5);//每日四项
			//pushDatas(datas,contdatas4,p5);//净土次第修
			pushDatas(datas,contdatas5,p5);//学员分享摘选
			pushDatas(datas,contdatas6,p5);//随缘开示
			pushDatas(datas,contdatas7,p5);//其他专题
			pushDatas(datas,contdatas8,p5);//选学资料汇总 老年修学资料
			pushDatas(datas,contdatas9,p5);//选学资料汇总 静修班资料
			pushDatas(datas,contdatas10,p5);//选学资料汇总 印祖文钞选讲
			//pushDatas(datas,contdatas11,p5);//二级修学
			//pushDatas(datas,contdatas12,p5);
			
		}
	}
	else
	{
		//不需要查询p5
		if ( p5=='' )
		{
			for(var i=0;i<sLen;i++){
           	 
				//if  ( p1 === contdatas[i][0] )
				//{
				    if ( contdatas[i][10]  !== "引用")
				    {
						//alert(contdatas[i][5]);
						str1 = '【' + contdatas[i][0] + '-';  
						if (contdatas[i][1] !== '')
							str1 = str1 + contdatas[i][1] + '-'; 
						if (contdatas[i][2] !== '')
							str1 = str1 + contdatas[i][2] + '-'; 
						if (contdatas[i][3] !== '')
							str1 = str1 + contdatas[i][3] + '-'; 
						str1 = str1 + '】' + contdatas[i][5];
						datas.push(str1);
						datas.push(contdatas[i][6]);
						datas.push(contdatas[i][9]);
				     }
				//} 
		
       		}
		}
		else
		{
			//需要查询p5
			for(var i=0;i<sLen;i++){
           	 
				if  ( p1 === contdatas[i][0] )
				{
				    if ( contdatas[i][10] !== "引用")
				    {
					str1 = contdatas[i][5];
					index =  str1.indexOf(p5);  
					if (index !== -1) {  
  						//alert(contdatas[i][5]);
						str1 = '【' + contdatas[i][0] + '-';  
						if (contdatas[i][1] !== '')
							str1 = str1 + contdatas[i][1] + '-'; 
						if (contdatas[i][2] !== '')
							str1 = str1 + contdatas[i][2] + '-'; 
						if (contdatas[i][3] !== '')
							str1 = str1 + contdatas[i][3] + '-'; 
						str1 = str1 + '】' + contdatas[i][5];
						datas.push(str1);
						datas.push(contdatas[i][6]);
						datas.push(contdatas[i][9]);
					//datas.push('dfsfs');
					} 
		            }
       			 }
			 }
		}
	}
	}
	else{
		//不是查询关键词的情形，只是按照类别列出文章。
		switch (p7) {
 		case '1':
   		 // 匹配类别一
			for(var i=0;i<sLen;i++){
           	 
				if  ( p1 === contdatas[i][0] && contdatas[i][1] === '' && contdatas[i][2] === '' && contdatas[i][3] === '')
				{
				    
					datas.push(contdatas[i][5]);
					datas.push(contdatas[i][6]);
					datas.push(contdatas[i][9]);
					//datas.push('dfsfs');
				     
				} 
		
       		}
    	break;
  		case '2':
    	// 匹配类别一、类别二
			for(var i=0;i<sLen;i++){
           	 
				if  ( p1 === contdatas[i][0] && p2 === contdatas[i][1] && contdatas[i][2] === '' && contdatas[i][3] === '')
				{
				    
					datas.push(contdatas[i][5]);
					datas.push(contdatas[i][6]);
					datas.push(contdatas[i][9]);
					//datas.push('dfsfs');
				     
				} 
		
       		}
   	 	break;
		case '3':
    	// 匹配类别一、类别二、类别三
			for(var i=0;i<sLen;i++){
           	 
				if  ( p1 === contdatas[i][0] && p2 === contdatas[i][1] && p3 === contdatas[i][2] && contdatas[i][3] === '')
				{
				    
					datas.push(contdatas[i][5]);
					datas.push(contdatas[i][6]);
					datas.push(contdatas[i][9]);
					//datas.push('dfsfs');
				     
				} 
		
       		}
   	 	break;
		case '4':
    	// 匹配类别一、类别二、类别三、类别四
			for(var i=0;i<sLen;i++){
           	 
				if  ( p1 === contdatas[i][0] && p2 === contdatas[i][1] && p3 === contdatas[i][2] && p4 === contdatas[i][3])
				{
				    
					datas.push(contdatas[i][5]);
					datas.push(contdatas[i][6]);
					datas.push(contdatas[i][9]);
					//datas.push('dfsfs');
				     
				} 
		
       		}
   	 	break;
  		default:
    	// 如果 expression 与上面的 value 值都不匹配，执行此处语句
    	break;
		}

	}
//datas.push(contdatas[1][5],contdatas[1][6]);

/*sLen = datas.length;

for(var i=0;i<sLen;i++){
           	 alert(datas[i]);
       		 }
*/
//
		
 return datas;
 }
