
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
['基础班资料','辅助资料','礼节概讲','','020','重视基础次第修学','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247483807&amp;idx=3&amp;sn=d58056c2fc386af28d6b69509c329ca7&amp;scene=21#wechat_redirect','有','无','文章','原始'],



//每日四项

//净土次第修

/* 举例：净土次第修-分类导读-思维修-思维修经论依据 */ 

['净土次第修','分类导读','思维修','思维修经论依据','001','陌生又熟悉资料','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247484821&idx=4&sn=2597ebb801fba72c7d339022615934ca&scene=21#wechat_redirect','无','无','文章','原始'],  
['净土次第修','分类导读','思维修','思维修经论依据','002','无量寿经中的思维修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&mid=2247485061&idx=2&sn=4d503b182ba78f8482a3b11526d4fd44&scene=21#wechat_redirect','无','无','文章','原始'],


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
['学员分享摘选','欣求心','','','002','推荐260号全篇:侧重欣求心、修学针对性与总结误区避免提醒','http://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493739&amp;idx=8&amp;sn=dc7cc185a6970d3d0e30017ff0edad95&amp;chksm=fde249cdca95c0db8fbbe18b3a67cfc0ddda7cef6045e4f5da215799c20e84c3c3f184b735bb&amp;scene=21#wechat_redirect','无','无','文章','原始'],



//辅助资料

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
['随缘开示','因缘果汇集','','','047','每个人都有度化的缘','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247492750&amp;idx=3&amp;sn=557e2b4866e973f26724d81111b7aa29&amp;scene=21#wechat_redirect','有','无','文章','原始']



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
