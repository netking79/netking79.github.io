
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

var myaddr = 'https://www.zhigui48.cn/';
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



var contdatas = [

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

['概览说明','次第修学概览','','','011','学员修学效果分享','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247488268&idx=2&sn=158756a50e2c248548c53eb6cf9b4cd3&scene=21#wechat_redirect','无','有','文章','引用'], //引用 基础班资料


/* 举例：净土次第修-分类导读-思维修-思维修经论依据 */ 

['净土次第修','分类导读','思维修','思维修经论依据','001','陌生又熟悉资料','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247484821&idx=4&sn=2597ebb801fba72c7d339022615934ca&scene=21#wechat_redirect','无','无','文章','原始'],  
['净土次第修','分类导读','思维修','思维修经论依据','002','无量寿经中的思维修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247485061&idx=2&sn=4d503b182ba78f8482a3b11526d4fd44&scene=21#wechat_redirect','无','无','文章','原始']
	];

/*
p1: 类别一
p2: 类别二
p3: 类别三
p4: 类别四
p5: 关键词
p6: 是否查询关键词 是/不
p7: 比较第几层
*/
var sLen = contdatas.length;
var str1="";
var index;
//var datas =[ ['标题0','https://www.baidu.com']];
var datas = [];
	
	if (p6=='是'){
	if ( p1=='不选择' )
	{
		if ( p5=='' )
		return datas;
		else
		{
			//不需要比较p1
			for(var i=0;i<sLen;i++){
			   //查询原始资料，引用的不查
           	 	   if ( contdatas[i][10]  !== "引用")
			   {
				str1 = contdatas[i][5];
				index =  str1.indexOf(p5);  //查关键词
				if (index !== -1) {  
  				//alert(contdatas[i][5]);
				//三项：标题，地址，文章/目录。
				datas.push(contdatas[i][5]);
				datas.push(contdatas[i][6]);
				datas.push(contdatas[i][9]);
				//datas.push('dfsfs');
				} 
			   }
       		     }
		}
	}
	else
	{
		//不需要查询p5
		if ( p5=='' )
		{
			for(var i=0;i<sLen;i++){
           	 
				if  ( p1 === contdatas[i][0] )
				{
				    if ( contdatas[i][10]  !== "引用")
				    {
					datas.push(contdatas[i][5]);
					datas.push(contdatas[i][6]);
					datas.push(contdatas[i][9]);
					//datas.push('dfsfs');
				     }
				} 
		
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
						datas.push(contdatas[i][5]);
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
