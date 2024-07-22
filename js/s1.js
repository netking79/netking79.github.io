
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

//var myaddr = 'http://www.zhigui.site/';
var myaddr = 'http://www.zhigui48.cn/';
//var myaddr = 'http://localhost:4000/';

//督导修学模式 原资料 地址
var ddxxms_ys = [];
ddxxms_ys[0] = '';//空置

//01督导修学缘起
ddxxms_ys[1] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491773&idx=8&sn=84ea61d088f7dab7aeb919679326fab8&chksm=cff6f1aff88178b987bb3e52e23c68e5d481bf84d9936a2c085e2474006131a115fd6cc501c8#rd';
//02何谓“督导修学模式”
ddxxms_ys[2] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=1&sn=c74531da140d886c20f2d8270c1e8a2c&chksm=cff6f1acf88178ba73bf262caeac233a1314e3337b66dbda731c861b41d03270fe5a9aeec8bd#rd';
//03督导修学模式有什么优势？
ddxxms_ys[3] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=2&sn=5355d461be02510c7a8ae51b2f9c2c88&chksm=cff6f1acf88178ba1afa40d993deeff90695a2dd0dc83cc3bb2485d9673a31152ea410996b12#rd';
//04督导修学模式分几种？
ddxxms_ys[4] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=3&sn=5a149fbd8cf5f02a773091b87fb24bd4&chksm=cff6f1acf88178ba0ef94f6a438a7789e4782572e8baccd40b864e4b9f03e13e5d9cfd75146a#rd';
//05何谓五级修心次第？
ddxxms_ys[5] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=4&sn=a9d02c7575731515e13cf255a51d628e&chksm=cff6f1acf88178ba75409db2a07c48bb2ec8cf00eaea3ea3ee1b4a4a2958bccda4d803fb70f1#rd';
//06为什么要重视基础心态的建立？
ddxxms_ys[6] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=5&sn=0176ab54ad2b6c0f66be31e25323d199&chksm=cff6f1acf88178ba8b41d824c11f2787cd571a50b2dfee67f07fb348de03c21d572cdcf87bf3#rd';
//07为什么不能轻视基础理论？
ddxxms_ys[7] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=6&sn=fcf7489426963b87d2de6ddca95dc4d9&chksm=cff6f1acf88178bacc81e7d633ae83954424b408e5bfa3c690331cf76a7cf4c1f51beb13e149#rd';
//08修心方法主要是什么？
ddxxms_ys[8]= 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=7&sn=d98c98fa61ff4bdf6444affbac6fec36&chksm=cff6f1acf88178ba8272337aa7ead1a592a0ccf6b5730aa77ff7b9a9c0c0d00d7415d3741a5c#rd';
//09修心的理论依据是什么？
ddxxms_ys[9] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491774&idx=8&sn=5c381742a434851420833e23f264eae2&chksm=cff6f1acf88178ba8b75783bc0b021a0e900b97238d934a3f8661039fd08beda88ac273ebdee#rd';
//10督导修学模式具体实施细节是什么？
ddxxms_ys[10] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491777&idx=1&sn=2daaa002d21871b014d300bc254b6094&chksm=cff6f1d3f88178c5d89a7793a56ebcc229361c6c0ec7dff744cf3d475cf0f69d19a7bdfe991e#rd';
//11参与督导修学的条件是什么
ddxxms_ys[11] = 'https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247491777&idx=2&sn=caadce1b1297e009e6f40b56b9c36313&chksm=cff6f1d3f88178c58cd714b18f34944125f0b56b456f67b3531a7078074601fe540a412286ac#rd';

//净土次第修 原始资料 地址
//var jtcdx_ys = [];

/*
概览说明 contdatas1
基础班资料 contdatas2
每日四项讲解 contdatas3
净土次第修 contdatas4
学员分享摘选 contdatas5
随缘开示 因缘果汇集 contdatas60
随缘开示 QQ群开示汇集 contdatas61
随缘开示 小组开示汇集 contdatas62
其他专题 破邪显正 contdatas70
其他专题 新年寄语 contdatas71
其他专题 辅导员资料汇集 contdatas72

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
['概览说明','次第修学概览','','','001','前言','https://mp.weixin.qq.com/s/1nGwo4wZh9Qsaaz7i8tHtg','无','无','文章','引用'],//引用 净土次第修

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
['概览说明','次第修学概览','为何要次第修学','','005','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=3&amp;sn=1c52cdb9868d2b36bc1037efeb6e8e1e&amp;chksm=cff6f162f8817874eab76e5304c98727a5888812f0c9950ca0605708942cc23f0caa507b4f38#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要次第修学','','006','佛陀渐次成熟罗睺罗心解脱智','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=6&amp;sn=85e88aca70a755a57e730b666e129cb0&amp;chksm=cff6f160f8817876029615650cf423410418a740ba7afc813e2feb1e38df6c8d9691b3952474#rd','无','无','文章','引用'],//引用 净土次第修

//添加一个目录 glsm/cdxxgl/whyzgsy/
['概览说明','次第修学概览','','','005','为何要止观双运',myaddr+'glsm/cdxxgl/whyzgsy/','无','无','目录',''],
//添加"为何要止观双运"里的单篇
['概览说明','次第修学概览','为何要止观双运','','001','思维修安住修','https://mp.weixin.qq.com/s/bQYTEj0yMS_bYIOh5BgwMg','无','无','文章','引用'],//引用 净土次第修
//['概览说明','次第修学概览','为何要止观双运','','002','阶段小结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=6&amp;sn=4c057981ee4eb04f8352d926261f3cb5&amp;chksm=cff50278f8828b6e4f8df6a0be175c61f5b06ae9c70858b347a588ea0145a5f730e8171c258d#rd','无','无','文章','引用'],//引用 净土次第修
//['概览说明','次第修学概览','为何要止观双运','','003','阶段小结二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=2&amp;sn=18daca59455f23662df76f2bd219a5e8&amp;chksm=cff50464f8828d72d55552613df349f5a24850ab9836b1eb2750d1e53a181d3629e9ba408e75#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','','004','定慧等持','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=6&amp;sn=9df83326aafdf66dce8f5712c504a505&amp;chksm=cff6f00bf881791d3f570c63ac1c5c09b05d204944b17c0affb583caa81c34f3c82096e11d06#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','','005','止观“专题”【小段资料整理】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&mid=2247494593&idx=2&sn=be88d5951c33ea198719c6ae0379aa37&scene=21#wechat_redirect','无','无','文章','原始'],
//添加一个目录 glsm/cdxxgl/whyzgsy/swxjlyj/
['概览说明','次第修学概览','为何要止观双运','','006','思维修经论依据',myaddr+'glsm/cdxxgl/whyzgsy/swxjlyj/','无','无','目录',''],
//添加"思维修经论依据"里的单篇
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','001','陌生又熟悉','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=3&amp;sn=d4d6e30a88e8bbef648fbb22f110d541&amp;chksm=cff6f00bf881791d0f99faa87eb01dac803a8121d395012751f2170eaf571c71cd372bb1344c#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','002','无量寿经中的思维修',myaddr+'jtcdx/yszl/079.html','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','003','劝发菩提心（前言）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491847&amp;idx=3&amp;sn=7a4fee91cce96445e70b781d0395f819&amp;chksm=cff6f015f8817903b2f7c9633bad6e3c1ad1aae034e7ec50b40d1e4200e254846e02d50c7cf9#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','004','学佛四部曲','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=1&amp;sn=fd075a51731cb06e342484e6adf02b27&amp;chksm=cff50fa4f88286b2668d2228bdbe1bce863f613e49818d2cc7307f45774f5dc8cf13dd2a8dbf#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','005','关于正思维','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=8&amp;sn=c25661cfe5917741015fc97e6668d9b3&amp;chksm=cff50fa4f88286b222a2b26946869b06f415152d0d676f58a082f2141e8ad89820b52b471cbb#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','006','思维修之运用【印祖】','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=3&amp;sn=cad8c6f2d5db705b732c5e23c56cf0d4&amp;chksm=cff50e11f882870721022cd1e6743e1c0e0570baade219915ca4b636a5d1107998a2bc49af8c#rd','无','无','文章','引用'],//引用 净土次第修
['概览说明','次第修学概览','为何要止观双运','思维修经论依据','007','关于无记业','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=1&amp;sn=19491abad4676751584885102a870922&amp;chksm=cff6f192f8817884d4311963e36c8fe3077cfc714e815c79fe2d71679e9b6d8114b9f926f447#rd','无','无','文章','引用'],//引用 净土次第修

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
['基础班资料','原始资料','','','033','督导修学缘起','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=5&amp;sn=09de540e172f809fdcad04c855596ed0&amp;chksm=cff51d88f882949e56fed7909e0ee4af3bca34856621d2b44eccb11a186287f4819712354c89&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','034','什么是督导修学模式','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=6&amp;sn=d0669423075766dd9a342a311abc04a0&amp;chksm=cff51d88f882949e9f9f9950238adf1379a56d25cb9ee3aaa23f4240ccf523005d5cbdfe47ee&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','原始资料','','','035','督导修学有什么优势','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486618&amp;idx=7&amp;sn=82ad449969556bca46992d234bfc1397&amp;chksm=cff51d88f882949e160977d397d53d28eb65048bbf77ad6303dcbc1a7230df8ead5d86a960de&amp;scene=21#wechat_redirect','有','无','文章','原始'],
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
['基础班资料','辅助资料','','','001','佛堂设置及供养礼拜','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493018&amp;idx=1&amp;sn=4b630d31d78b820b0fd971f0a1a526ca&amp;chksm=cff6f488f8817d9e7c31eb856b8b0e48e8ce53677917b5c980f0964a8503e4daf1a380848a1e&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['基础班资料','辅助资料','','','002','佛前大供仪轨、功德及注意事项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=1&amp;sn=ba48da4594bab3c5b2d0c168c5e4fe95&amp;chksm=cff6f7d2f8817ec421ce3d72bfc400ad7142bcf3d3040437abea497b7e01a04297a0d5f5141b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','003','关于“佩戴佛菩萨像”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=2&amp;sn=d2b69f3f6840b94fdb2d6ecc068c32ee&amp;chksm=cff6f7d2f8817ec4d3fc0161de12220146fb19ecd7a160b79cf45d34685d102b499c95377d0d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','004','浴佛的本意是要法化于心行','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=3&amp;sn=aeb740194146bd2ce94db8eb5aee0734&amp;chksm=cff6f7d2f8817ec411dbff0b5b16f9a310ca9c1d41af96b00451b1d7b49c8135ea6a8704313c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','005','没有皈依（仪式）的话，是不是就没有机会脱离苦海？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=4&amp;sn=bbbc45a8b5c862c9418a4a15b4273b99&amp;chksm=cff6f7d2f8817ec45a2a1e36c50f81aa34e746c178a31867128b160d0fcc6c8ad00c9729136c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','006','关于四皈依','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=5&amp;sn=7c9643b464093bb5578a664c901a9e4d&amp;chksm=cff6f7d2f8817ec449f22122bff73daadb15b38bc78cf795bc1134dff36568bdca73cf23d479&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','007','不要随便就劝人受戒','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=6&amp;sn=bc377bb6056930b5731e505c9476dfe8&amp;chksm=cff6f7d2f8817ec4bb1447cc4f1b2e4c6c9d7440b4eedf54699e9f51c6a8aefbca14e1e52d46&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','008','对出家人的称呼','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=7&amp;sn=f7202ff6da6888cf1d3be9b1aa3201bc&amp;chksm=cff6f7d2f8817ec40bd55d1d384a178e47e95e4cbf05981e6d7f17fb9b4a707a0ff0a642d709&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','009','许多人把传统文化等同于佛法，这是不对的','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493312&amp;idx=8&amp;sn=6410d5883c5aeb5aae6fcf0e58b41c4a&amp;chksm=cff6f7d2f8817ec4238c4056378b975594a40be4eaf486025be3a167a333f6cf90b68ebba34b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','0010','拜太岁、送灾星、迎财神，还有去小人等，都是外道法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493351&amp;idx=1&amp;sn=c4f3b382ee7b9b25542ec789ab78d615&amp;chksm=cff6f7f5f8817ee3abd3814cf3e37f73d3160b12bcabe2cbde92c4a2d15ccf6ff0657ae4d992&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','011','作为佛弟子，可不可以拜财神？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247484857&amp;idx=3&amp;sn=e3bc48207436b2c2c27100056e6dbbef&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','012','关于烟供、立牌位、烧纸钱','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247484371&amp;idx=1&amp;sn=e6549d5daa2493c4d56e6f4e9e0c4bd1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','013','修行人应把五辛戒掉','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493351&amp;idx=2&amp;sn=4b8da2cf18d8b1865aac98d2db83714c&amp;chksm=cff6f7f5f8817ee3c28f43a05c32975a081d49459f4f0a3b3c273c161dc00bb6af9616c134ee&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','014','切不可在一些感应、神通、特异功能上去追求','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493369&amp;idx=1&amp;sn=f742128ff650a8b13ffd97a8504b1939&amp;chksm=cff6f7ebf8817efde5cb0458d31fd4daa337af99fe5d7b4ae250e8448fdffe2a04f8c42969e3&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['基础班资料','辅助资料','','','015','那些妖魔鬼怪可以显现诸多神通，可是他们讲不了纯正的法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493351&amp;idx=3&amp;sn=7449e52d06345f896199ca3bce7d02fc&amp;chksm=cff6f7f5f8817ee3a42a158d79edc0cbce03684168243ec31c1e04ccad96a029160f6e95134b&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['基础班资料','辅助资料','','','016','这些游戏给人造成的负面影响太大了，杀盗淫妄在意地里的串习很严重','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493351&amp;idx=5&amp;sn=0d7dd6d2160d68bc380c740652ad0c8e&amp;chksm=cff6f7f5f8817ee36dc80dd38db67fc0ce81c4c395ee76864a567d45335056ee3d549901e1bd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','','','017','孝顺母亲没有智慧','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493351&amp;idx=6&amp;sn=8bf65a3254573b0faee76ca40829ec02&amp;chksm=cff6f7f5f8817ee3301347a33f7eb91c4278451707cdfda28004fb1ba65d1c2cba04c1d039da&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['基础班资料','辅助资料','','','018','关于时间管理','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494553&amp;idx=1&amp;sn=1b0d93f1d789d2140d4a50ae62f5a375&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['基础班资料','辅助资料','','','019','放松训练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=5&amp;sn=c5c9e8b5bd3891e94293d651655d778a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','020','关于诚信和誓愿','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=7&amp;sn=7f6a754e1a8966dacef6a6ee7154ba59&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','021','八退八进之训','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=4&amp;sn=5912392cffe638c1297523d0016234f7&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','022','关于“无记业”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=1&amp;sn=19491abad4676751584885102a870922&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','023','民国第一术士','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=8&amp;sn=a515cbe191178ff327917933ab6a1727&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','024','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492845&amp;idx=4&amp;sn=0e9535349c15e8b23e901b35ed30d45a&amp;chksm=cff6f5fff8817ce9b29b2c4d2d39cebad4506a49c0942b2544e405e13c6c99f5673236348245&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','025','师父在教师节给予同修的开示','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=4&amp;sn=10d3345c4e456e6a21cf47ce5edc762d&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','026','快速提升','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=1&amp;sn=68ea9bef6f120131901e2398dd798975&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','027','新春嘱语','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=6&amp;sn=72da98722e9a1f515bb868aaa260c4f9&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['基础班资料','辅助资料','','','028','爱惜字纸原来竟有如此大的功德','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495235&amp;idx=1&amp;sn=6afe5b22a3366a11b7c72a80d7901697&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','029','关于字纸的处理','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493351&amp;idx=7&amp;sn=d96eae35f48f8880863270c5defbeb7f&amp;chksm=cff6f7f5f8817ee3d62d727710a2bd96d1ab92021d92bb301f94d7cf4cf65e2afc1e91e0c81d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','030','曾国藩30岁起脱胎换骨带来的人生启示','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495235&amp;idx=3&amp;sn=f1cfef5be8deafab70fc7b79d988c3b3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//
['基础班资料','辅助资料','','','031','《礼节》概讲',myaddr+'jcbzl/fzzl/ljgj/','有','无','目录','原始'],
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

//
['基础班资料','辅助资料','','','032','老法师开示，如何超度冤亲眷属','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493351&amp;idx=8&amp;sn=47290f176b87cb165a2fa635b866331a&amp;chksm=cff6f7f5f8817ee36b17bb95a06a207daa70080f17e63d9a45117910e885d3bcd0d609b497f6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['基础班资料','辅助资料','','','033','梦参老和尚关于清明节的开示','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493355&amp;idx=1&amp;sn=5023cfa4ae4a1ed12d531c672bdfd6db&amp;chksm=cff6f7f9f8817eef749c507ba1d302c2802c83c43c656df9c62ff90b2dc076fabf651094598c&amp;scene=21#wechat_redirect','无','无','文章','原始']

];


//每日四项讲解
var contdatas3 = [
//每日四项讲解 原始资料
['每日四项讲解','原始资料','','','001','关于禁止杂学杂修的规定','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486171&amp;idx=2&amp;sn=6ed22a76144d558103f60b2a6e18d590&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','002','修学要具备的正确心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489211&amp;idx=1&amp;sn=47637f231e251a8578fcd70700d4255c&amp;chksm=cff507a9f8828ebfe091d8b1bfed55330136fc80c3c18f569bb57aefa4d29f16a6e64e8ccc7a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','003','学习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489211&amp;idx=2&amp;sn=69625b2a0414a151aa6b36b516527fbd&amp;chksm=cff507a9f8828ebfe1216ec7e15304a04e3cc6c4cc76f840814fa4b4c5391341e343423903fd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','004','督导修学框架和主体脉络','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489211&amp;idx=3&amp;sn=f9d976e717831f4f5bb2f9fbdcfbdb12&amp;chksm=cff507a9f8828ebf85eb7cb962a21e3a361f1763b17f829cf95bb8c8b43484b0187c1082f4a8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','005','拜忏','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489229&amp;idx=1&amp;sn=7dcdee3203f912fd820c1768002e005a&amp;chksm=cff507dff8828ec9eec7630665ed921ef130a92efab324314cc11ca5dcc5d6a55245d5d18a6e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','006','思维修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489211&amp;idx=4&amp;sn=dd91f3106dd34cc5c978148c1a6e2803&amp;chksm=cff507a9f8828ebf3bea63a2d6b5a7d8c57b2e254c4dc828b853430316d4771fbfa02227fb17&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','007','为什么修行和自律性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489211&amp;idx=5&amp;sn=1c0d3b1dc6951339eac85fac3007746b&amp;chksm=cff507a9f8828ebf867490e9f6b43e640ea5a5a83291ce0146ccc0c20e6ac78de88f8dda2501&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','008','包容心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489211&amp;idx=6&amp;sn=1bd7d405145b9e4db6e163c2c19b4a0c&amp;chksm=cff507a9f8828ebf67d00fcaa1ef1400be5e7dba630ac9e7838b779083ef71d19d2838306acc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','009','因缘果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489211&amp;idx=7&amp;sn=834687f69bc39df8c036912023929db5&amp;chksm=cff507a9f8828ebfb4993ecb6171171ce2bc0cff35f2d0f551e0a58d54655f5f5d5598a4b68f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','0010','安住修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489269&amp;idx=1&amp;sn=d5a3ada88f1ee7472779124ba8efcde5&amp;chksm=cff507e7f8828ef1a56db52b8165d97aa27bc8a06c5750b19b1ab4bcca7b27d5d7821fdb4bf5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','011','观修和反思总结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489222&amp;idx=1&amp;sn=fcd6e50859c6c32ee5a7961815e6f3b9&amp;chksm=cff507d4f8828ec2bc14b6a45f37677c687b70c18c788bf8898bd8e483cc85c675afb72197fc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','原始资料','','','012','修习包容心第一条（例）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488556&amp;idx=1&amp;sn=06e09725a9dd2f455bbd22eb2014fdc9&amp;scene=21f507d4f8828ec2bc14b6a45f37677c687b70c18c788bf8898bd8e483cc85c675afb72197fc&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','原始资料','','','013','次第修学导图（框架脉络）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490133&amp;idx=2&amp;sn=cfd5097f158bb31ab1b1d1d382e537bc&amp;chksm=cff50b47f88282516d94e515c8692aa7810e4b1aec9f8aaa359583a7cc57292d240acb40aa63&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['每日四项讲解','原始资料','','','014','每日四项流程图','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490133&amp;idx=1&amp;sn=5c5b4e9ddb7946ec1a143d20a5623459&amp;chksm=cff50b47f88282516f6f3a39ebf882d6e082a08f107017043aa70bd911fc57c1318aa1db1672&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['每日四项讲解','原始资料','','','015','从内心状态对修行作演示说明','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489222&amp;idx=4&amp;sn=dbae595bdb6d8b6bf263d357f82269ec&amp;chksm=cff507d4f8828ec25e41a8bf5c91647792cf7fcd5b5f13467eeb61b41a40c3d3fdb7a5400e9a&amp;scene=21#wechat_redirect','无','有','文章','原始'],

//每日四项讲解 小组开示

//每日四项讲解 小组开示 目录
['每日四项讲解','小组开示','','','001','一、学习，放松训练，每日四项',myaddr+'mrsxjj/xzks_fxlj/01.html','无','无','目录',''],
['每日四项讲解','小组开示','','','002','二、拜忏',myaddr+'mrsxjj/xzks_fxlj/02.html','无','无','目录',''],
['每日四项讲解','小组开示','','','003','三、思维修',myaddr+'mrsxjj/xzks_fxlj/03.html','无','无','目录',''],
['每日四项讲解','小组开示','','','004','四、修行意愿',myaddr+'mrsxjj/xzks_fxlj/04.html','无','无','目录',''],
['每日四项讲解','小组开示','','','005','五、自律性',myaddr+'mrsxjj/xzks_fxlj/05.html','无','无','目录',''],
['每日四项讲解','小组开示','','','006','六、包容心',myaddr+'mrsxjj/xzks_fxlj/06.html','无','无','目录',''],
['每日四项讲解','小组开示','','','007','七、安住修',myaddr+'mrsxjj/xzks_fxlj/07.html','无','无','目录',''],
['每日四项讲解','小组开示','','','008','八、观修',myaddr+'mrsxjj/xzks_fxlj/08.html','无','无','目录',''],
['每日四项讲解','小组开示','','','009','九、反思总结',myaddr+'mrsxjj/xzks_fxlj/09.html','无','无','目录',''],
['每日四项讲解','小组开示','','','010','十、因缘果',myaddr+'mrsxjj/xzks_fxlj/10.html','无','无','目录',''],
['每日四项讲解','小组开示','','','011','十一、学期总结开示',myaddr+'mrsxjj/xzks_fxlj/11.html','无','无','目录',''],

['每日四项讲解','小组开示','学习放松每日四项','','001','净土菩提心和般若净土','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490310&amp;idx=1&amp;sn=61347ee9a6ffff85d2ce8b7a15687a7c&amp;chksm=cff50a14f8828302d67c591ab7bc3ca5a8496c3cdb129c638da99827afa5a82dd812233d5fe0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学习放松每日四项','','002','怎样才能万修万人去','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490998&amp;idx=3&amp;sn=7a80e7bde6145f9c13a6de4f6891a34f&amp;chksm=cff50ca4f88285b2a3328beee322fa11d3c47c179ada79425ca1fc2e65e35b0d435a0507bd89&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学习放松每日四项','','003','拜忏注意事项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490310&amp;idx=3&amp;sn=ef3409cfb7e513a483b12a25963eea30&amp;chksm=cff50a14f88283024bf0bd5c49b4094613e326a80b82b341e4c637f156c10a84a58615ff4fb2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学习放松每日四项','','004','正确常规的修法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490310&amp;idx=4&amp;sn=78c9bb136084b7f73ccbc79532867a9a&amp;chksm=cff50a14f88283027c58868aa09cdd99108cbdeb2923062bc90274ab1f7ce00aa47eb9fd10c7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学习放松每日四项','','005','果上的标准和因上的标准','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490310&amp;idx=5&amp;sn=bd0f1d9856808661e9b2b49b816ec59c&amp;chksm=cff50a14f882830234dd6766acfea97ac146ee418f02d2df6a5e6eef4bd3e20e05f44134d430&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学习放松每日四项','','006','专注重复的闻思','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490310&amp;idx=6&amp;sn=24f745b214076cd23785b3fd48eaf929&amp;chksm=cff50a14f88283023c72aa25a7422c054a024ce1321f83f7f7237bce970d0f767d4b8917dad5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学习放松每日四项','','007','通过学习要能讲清楚','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490310&amp;idx=7&amp;sn=bae16325470d5a10c1ec86853d3037df&amp;chksm=cff50a14f882830239bb079930e77e298229a729f0667db88aebec963e4153d5e5c1a5b1f4e9&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','拜忏','','001','如何生起忏悔心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=1&amp;sn=a5dee3fba340271379f5815b1ef133b6&amp;chksm=cff50a35f8828323f9113f6d76ac9a3fa99ae3bd6261c4a4863afd6a435c7a203a62cd08143a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','拜忏','','002','致他人婚姻破裂如何忏悔','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=2&amp;sn=7f8cfd2755fb4a66a55baffaa3c32f67&amp;chksm=cff50a35f8828323ae540fbc3f334a6c5e66c5294845eb0dc31e1c56ba9057cd8bbb9ca3683a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','拜忏','','003','初期拜忏每天先保证三次','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=3&amp;sn=3d6ddade9a6343586817438a103484ec&amp;chksm=cff50a35f88283238052a0e8123d01da7c61c87aececfd8e97357a6188c5a53c4173d297e361&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','拜忏','','004','业障的表现','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=4&amp;sn=f509575b955621483202790148d5e743&amp;chksm=cff50a35f88283236ad181f811e5d7110fc88801bef07edf9b969b8bef53a484aa26fcd68bfa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','拜忏','','005','通过回光返照认识自己忏悔业障','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=5&amp;sn=1b15def5c3bf9853a16b92a0785f01c1&amp;chksm=cff50a35f882832319332038b15c3578c37bc671f41996474a4aec69476e5bc8599d46752c18&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','拜忏','','006','不要瞧不起自己','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=6&amp;sn=831f202569e9042fd7a7585e37287d03&amp;chksm=cff50a35f882832333498f3bf14c29bcd8e3af4ab086c331a01b600e9e1fad3dad289609dff6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','拜忏','','007','修学过程中会有身体上的变化','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=7&amp;sn=df95deb34194302e085744008a96e007&amp;chksm=cff50a35f88283236666fcd9c7cb49a4a4cd32ae90f94d072b81b886e5e965f7550c930806dd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','拜忏','','008','恢复本来的清净','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490343&amp;idx=8&amp;sn=8e53c832503e326905361c4a14873c83&amp;chksm=cff50a35f8828323dbb3e4aa8a8fee952e35f6abf0a26b3079d87bc0862576871487e0262db9&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','思维修','','001','事上随缘去突破','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=1&amp;sn=a81e1bf2f9086b83a1b6288d66f17e4f&amp;chksm=cff50a46f882835041b8c58e767319fcf9fb8d106e0bfa8eee95db6c6ed30cdeca33140aab77&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','002','思维修的必要性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=2&amp;sn=4aa568b99b8b3caed46358ae9f76611a&amp;chksm=cff50a46f882835038d92be4747d1f2b5bef212c745424a114f8932d6f0e72e50fcefc2b1655&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','003','染缘要远离	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=3&amp;sn=22710258e0020233fb2671a0455e0e1b&amp;chksm=cff50a46f88283501accc869500295b1496a60885ca93e7680e2cee2ef80bfa00932588e0cfa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','004','每日四项与拜忏相辅相成','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=4&amp;sn=aac31cf2abf507c3b8e370148d39191c&amp;chksm=cff50a46f882835016051781f8296fbd3b5f2f5335bdc4a0738189b8ffd5d341ff97a8789a1a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','005','心态不稳是修学不够','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=5&amp;sn=e03d06bb62e7f8dd19ee15047e94c3e9&amp;chksm=cff50a46f882835056ea31852c277a0a6c9671e56f8771e3aee00913ffb78f1a039b241dfa7a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','006','观念和心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=6&amp;sn=afdc7113cbdd42b47660e7dd4500cc41&amp;chksm=cff50a46f88283506b2b130d003ca87fd6d6931220ffd1221e17cbc9998dfc0e061e9cd7d17a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','007','正思维是很宽泛的','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=7&amp;sn=77f8ddb2d4915db5b7ceca189d26b1d7&amp;chksm=cff50a46f88283503f3ed4cdce47268e78c14a59b1915cb779dd5f7a6057dd4c6ff939f094f1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','008','有次第有针对性去突破','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490388&amp;idx=8&amp;sn=61da2697cf299487c2a5ada916b9211f&amp;chksm=cff50a46f88283504961b3b403dfd0f2dedcedfec6688bf4a00917ef0863f372e6ea72634ed8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','009','要耐心培养正的','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490393&amp;idx=1&amp;sn=6e3c6031616f0e846ea97048d205d6b1&amp;chksm=cff50a4bf882835d1bd44542d1005966271172c2044ad7369df9c1c01208b25d98e3b38d75e5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','0010','对佛法的理解是渐次深入','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490393&amp;idx=2&amp;sn=6a1a0bd76efd3ff51d1c7b376625a42f&amp;chksm=cff50a4bf882835dfab6207901e9a97ad799ed80d349a996750b8ca31026f01ef61b01eb9745&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','011','有的项目只要生起感觉就行','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490393&amp;idx=3&amp;sn=da6a3e1a199ad03773eefbb8e94f9c84&amp;chksm=cff50a4bf882835d5c8b9d144e61729b8839a195a6afcd3c687fcb6308a2f5e2671155f33e61&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','思维修','','012','项目修习标准','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490393&amp;idx=4&amp;sn=4f7ae5f154fab2db2210dacf83fe6ff7&amp;chksm=cff50a4bf882835d88caaf9d17985703387e67a9b2c71e6d4072a90d53009e148b6bed27abe0&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','修行意愿','','001','因上修对，果上自然改变','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490478&amp;idx=1&amp;sn=0723443b15fb5798185505bfbb239d24&amp;chksm=cff50abcf88283aaf206cdc732b612b5649df47a50d1a999807acdd46fe876922b38ef4c7145&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','修行意愿','','002','视自己为病患','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490478&amp;idx=2&amp;sn=6ac132491105626b39969ad1e20b019e&amp;chksm=cff50abcf88283aad43e23b561ceb8b90f06d7fd12721abfccf6a0c86f1b9a4ffbdc8599ce6e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','修行意愿','','003','人生核心的转变','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490478&amp;idx=3&amp;sn=9a6f2116a76377dc01e39de00802177e&amp;chksm=cff50abcf88283aac90e8c06044b92523b7930f0fef718a1564461b56b58926c508a55e66bac&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','修行意愿','','004','项目内容要品读和揣摩','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490673&amp;idx=1&amp;sn=b2df7cd1606de0d736b949b298c5f22d&amp;chksm=cff50d63f88284757725bb20cf6280ed2bac97a6470f1df4d266cd42528ab7d38d29c0b657a0&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','自律性','','001','悟入佛知见自然放下','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490673&amp;idx=2&amp;sn=a6e6bf7ae8fc2782da480e3b8d40f4f0&amp;chksm=cff50d63f882847574a1c712b610721e8542fef0a58c82c539cbcf52b7a76dd62b3718bf3123&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','自律性','','002','依法看待众生的问题','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490478&amp;idx=5&amp;sn=d03f5169fe5cd84bb04afab8c82c5528&amp;chksm=cff50abcf88283aaee5354d0d9f8438077f5f9e889b99a0f8285499740d65a554344ba245c0a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','自律性','','003','除草为辅种花为主	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490478&amp;idx=6&amp;sn=c5d9f67aec1a91888e1213c6af18f23a&amp;chksm=cff50abcf88283aac3c8698d4a547cd121d559e0170337c6545e351fe7662d858e00fd8d7193&amp;scene=21#wechat_redirect','有','无','文章','原始'],


['每日四项讲解','小组开示','包容心','','001','将项目无限的扩修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490673&amp;idx=3&amp;sn=e97ce25fca19de748cd6880e6beac330&amp;chksm=cff50d63f8828475241a5564d252b0d29867c550d937e71cfe24da56355916fce2ee56e70267&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','002','包容而不认同','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490478&amp;idx=8&amp;sn=81c4bf819f661a0e7caa849fab699c05&amp;chksm=cff50abcf88283aa35a5ad72da37d5b781847ea129641387a866011ca90713b4d5ea9dafb25f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','003','明白真相，自然放下','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490998&amp;idx=1&amp;sn=57fff21655f41adf1439e7397b8532c1&amp;chksm=cff50ca4f88285b2cb1a0aa6e9eec93870404b0fef13dcdd81b7a58c304f5813dadee221d6fa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','004','有自度才有化他','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490487&amp;idx=2&amp;sn=178f8014632a7fe987dad1b57da56ad7&amp;chksm=cff50aa5f88283b39d27a9235e15e39a56413dbb5b300785ec543287192ce928f36e74e76f24&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','005','薄弱处多修习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490487&amp;idx=3&amp;sn=34b2368985e14772a5c127708ca30abe&amp;chksm=cff50aa5f88283b37954bd4dbad39eebfb24d96cee6e5ab94a3af49b38e1f2eac92add558b51&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','006','座上到座下','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490487&amp;idx=4&amp;sn=c4d133adef412531ac7c532c5e1f5704&amp;chksm=cff50aa5f88283b355754f71075069498bfc017d3f0dfdc82b30da3b518f580b5767f1bf3730&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','007','少讲话','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490487&amp;idx=5&amp;sn=15261887a0b15bde606e4cc1964ca539&amp;chksm=cff50aa5f88283b30cb21fad486865d6122dc69d727358c8f348decc4c57397c6aa419b98b53&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','008','对学习的建议','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490487&amp;idx=6&amp;sn=542686a4a032a184068f7477065e7a7c&amp;chksm=cff50aa5f88283b3841fe23714ce0edb59fc92900ce251e65474f88cada7c0787bc022b39239&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','包容心','','009','知见包括哪些	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490487&amp;idx=7&amp;sn=d2214d96bdaefe377b7ef7c0594fb993&amp;chksm=cff50aa5f88283b39aa86a1961fdb5b7af8fe308ce7f0f87b0e81d98451e5e1e58427f2121bd&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','安住修','','001','挖掘问题解决问题','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490998&amp;idx=2&amp;sn=3eaa6eecc93892000b497093aa0d0804&amp;chksm=cff50ca4f88285b2b945555fbb932319557c772a70479568912fd4fffeb7ff6279e46f66e1f4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','安住修','','002','逐渐提升觉照力','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490571&amp;idx=2&amp;sn=22a7485c352029206389541b3392a164&amp;chksm=cff50d19f882840f8213687f0976ba3c38ba74255efd827dc750cbab07add465341046b01af7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','安住修','','003','往生要在两个方面去努力','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490571&amp;idx=3&amp;sn=d7193cd496c7ff24f671165c23fdf784&amp;chksm=cff50d19f882840f38d28cd7725ffdf348683e78bd21b04616d5115f9774a0830669c2a4a121&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','安住修','','004','持大光明咒的利益','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490571&amp;idx=4&amp;sn=1c034b0a2607b25686228fba2b19f550&amp;chksm=cff50d19f882840f1f49c14537b1fb0aa5bf1e77ec684e79b3829d242483a22be2a4ef8e46c8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','安住修','','005','一定要实修	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490571&amp;idx=5&amp;sn=67989b3110d739059bd37d0cfa7fa0f8&amp;chksm=cff50d19f882840fba666a83bfd1845b8b43e136514451b029b3361b2d71a537ce7cbda3f76b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','安住修','','006','当下正念来源于累积','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490571&amp;idx=6&amp;sn=fec783b007f973ef209ea6556e0aa00d&amp;chksm=cff50d19f882840f5ef4514a3a907c1c50768bac188528200ccc09f1592d12f78b1837b1275c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','安住修','','007','清净心跟愿力的关系','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490571&amp;idx=7&amp;sn=b4e42d7bccb975caa39c1ed3a0fe517f&amp;chksm=cff50d19f882840fe29840b81f742b9343197052cfcb8c160d1f130894a70c182c9e99f724b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','观修','','001','从座上到座下','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490599&amp;idx=1&amp;sn=eef4a82be564dca7d08a0aab55e2303b&amp;chksm=cff50d35f8828423b9dc848434b0f172a9c2a41327b45bd1e801eb3d9f721f101e6ef32c681f&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','观修','','002','将项目积极运用','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490599&amp;idx=2&amp;sn=821e21f891c1eb132934ff0965c816ba&amp;chksm=cff50d35f882842317f47a64aa55672c060f7cca626a23adc4fed76c576cd894ab6255eb10ab&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','观修','','003','如理观察对方','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490599&amp;idx=3&amp;sn=09228f5c4948fb5bf9a853dccb7e6858&amp;chksm=cff50d35f8828423728cb2d0d3b8697375773e325ff60f1fcc562bfa900f1192c711beb6e833&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','观修','','004','思维修不要夹杂','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490599&amp;idx=4&amp;sn=76239bd0537f06f19557e34892a0ac5c&amp;chksm=cff50d35f8828423399e4053ae7c621bb7558eada7a3472b2da2166035e3ce911ab3754fa2c2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','观修','','005','修学有重点和掌握窍门','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490599&amp;idx=5&amp;sn=0316304130413fc719855be23277a03b&amp;chksm=cff50d35f8828423468adebf6fdbd0d3aa0f726e71ec07df84cc1471612150c1a8498da8dd28&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','观修','','006','包容自己，包容别人','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490599&amp;idx=6&amp;sn=22566b49df332ddeb21ff1ee1ee8c2c7&amp;chksm=cff50d35f8828423176c23654395a0a04683dd3a161ebbce2f5746ff58b93f8e3f8b4fc4bee0&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','反思总结','','001','有针对性的学和修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490634&amp;idx=1&amp;sn=234f92b78f36a92d0e96ff147973df98&amp;chksm=cff50d58f882844e10960c7a8a90f86dadd8a30eb541610e9dc3d37779ffe7ba09455d39f6af&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','反思总结','','002','训练解决问题的能力','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490673&amp;idx=4&amp;sn=d22c83d5613b84c438d8cf0bc1439d90&amp;chksm=cff50d63f8828475e0768b8d7ab9742382b5e4a92e4bb704e7bb6e9ab728d52bfc8d9ab2b9b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','反思总结','','003','要纯正自己的知见','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490634&amp;idx=3&amp;sn=2b9f6d6410070ad19aff65ec294c0573&amp;chksm=cff50d58f882844e3232ce9cec9829948fd7059c01ece9fc4860201cb70bd5f2b703d1f993a6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','反思总结','','004','修学前期状态会不稳定','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490634&amp;idx=4&amp;sn=34c9456623735930c2c79ccfff6e22c8&amp;chksm=cff50d58f882844e2f6af0b7c22eadb0707ec85630121894d91c0b4c3183882ff5c852ee24e3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','反思总结','','005','正确地认识修行过程','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490634&amp;idx=5&amp;sn=64b4e556c28eda07ac5a818f294c7aaa&amp;chksm=cff50d58f882844e8fc6c33b3a4c95ae5fed5c5d2c61c6448d9be52d88aee24a1ac57dead6f9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','反思总结','','006','觉知错误提起正确','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490634&amp;idx=6&amp;sn=f76b583b9ce8bd67b2b06516947478a7&amp;chksm=cff50d58f882844ed11170228d05e86859175efac930ea0836dd67f5d69029fccaa9657cce01&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','反思总结','','007','怎样加快座上到座下的运用','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490634&amp;idx=7&amp;sn=48afdab7872cba7c117c47350dfc0eb2&amp;chksm=cff50d58f882844ee8b9d705df7ee5bdd67ee3f9da2606f226df007c4b329bef3900327eb861&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','反思总结','','008','修项目要简捷高效，不要相互夹杂','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490634&amp;idx=8&amp;sn=04ed7541b4b1807e58f75551eb370ab2&amp;chksm=cff50d58f882844e063aee05ea15fcdb47da244eb8e38b979eb2adf5bc905573ea9adeb43cc9&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','因缘果','','001','苦集灭道','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490657&amp;idx=1&amp;sn=76a90ca9627ce05bccd97a3c2732b57d&amp;chksm=cff50d73f8828465fa6fec51951b0a6723402c73ce2e55f78df4cb953180420451e5053cdafa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','因缘果','','002','观想要细致些，重视戒律规矩','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490657&amp;idx=2&amp;sn=14df8dac9c5221021ddac561ed6e9cea&amp;chksm=cff50d73f88284654ccfa07e080125ea13b508282eefd526123b6754b080d477489399de85dc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','因缘果','','003','不断累积，次第提升','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490657&amp;idx=3&amp;sn=6f4b952989428a15864d2219e77d71e2&amp;chksm=cff50d73f8828465366038860c419101ff9d312af88e4ba2be6093ef79015c035fedf76eeae8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','因缘果','','004','通过转变心行摆脱无形众生的干扰','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490657&amp;idx=4&amp;sn=a3a4f9cd5e16dacdb4fda01ea807652a&amp;chksm=cff50d73f882846571914f0d56851ba5382390a8bdf8161639dc9facf884620c9e24becca495&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','因缘果','','005','因缘果四条的简要概括	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490657&amp;idx=5&amp;sn=08fdecad83314bc70df410cb59a0a59e&amp;chksm=cff50d73f882846519bef8a19127f4481c8c5ff766bf4a73783c96c5f3e472e579d675137d23&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','因缘果','','006','当下的心行既是种因又是助缘','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490657&amp;idx=6&amp;sn=a2ee0a9d57c3ebed9c55b0a6aa26fe28&amp;chksm=cff50d73f8828465a9ed0f48295a1434e509e370e10b8a0a5a50f6ce4f0b8becf4cad90c368c&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['每日四项讲解','小组开示','学期总结开示','','001','关于什么叫知见','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=1&amp;sn=2a2c0fa9733acceb9f5f295599a263da&amp;chksm=cff50c25f8828533659794f201763c6a1fd01c6f78b03a8295b420c6940b4f1eefd9858819eb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','002','放松训练对于实修很重要','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=2&amp;sn=0aafc4ae0cce88be3fb8d466c56768a4&amp;chksm=cff50c25f882853375b40b2bc4c0fc1c3e94dc9015fe6a0f6514e9ee6fe12db4964214022ba2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','003','如何修好当下','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=3&amp;sn=0517b0fe6e2da42ee6e3c0218d0e4a60&amp;chksm=cff50c25f882853360675c09ecd8f318857d8403d80677ca9ae0fcf5e8eaf729fc00dc00fde7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','004','昏沉的原因和对治办法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=4&amp;sn=40de1b1da921720f9f054a4dcb158c11&amp;chksm=cff50c25f8828533f7cc83fba86aecd83221dc6044ceecb29b42440e52b691dc4d915a296e03&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','005','五戒成犯是在事相上','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=5&amp;sn=1af2864504843658ba36759640c8044d&amp;chksm=cff50c25f88285332cee24ce3fb2513140a1b2a2b346126f97024d3b9f426685e698674b5ecf&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','006','采蘑菇还杀虫怎么办？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=6&amp;sn=390935313ec41eb926a23efdd8fffa8d&amp;chksm=cff50c25f88285333c260611beb992ef126b828e8bfbf42c7924915c7c1f9a75390e2fdcf4bb&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','007','不昧因果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=7&amp;sn=fd97b06773e8eaa6e859a6b4a099755e&amp;chksm=cff50c25f8828533c8330a36d6cc39ca9f8b1034aa94fb652f4ed3e46bcda83d70acf68fcea1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','008','感受是从无明而来','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490871&amp;idx=8&amp;sn=8954077a3208415ae81050e1938e374a&amp;chksm=cff50c25f8828533713388f52c08ae7a23ca429c1866e3b4e7ca02c275be28fe78090565aa61&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','009','法界众生同圆种智','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=1&amp;sn=86d6ce28ec88d52a5dba79ae6f476539&amp;chksm=cff50c09f882851fcdb240040263fa5972befbdbb39ebe5318d738735e9ba51d71472a35e082&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','0010','放松训练与思维修的结合','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=2&amp;sn=419dae2f2627bf24e676c3761f7a8c2b&amp;chksm=cff50c09f882851fe872d829860b1935d59cea9208cacb6d2b4696fae36505e9fd7aae4bed38&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','011','关于施食的几项问答','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=3&amp;sn=2655a13a11493546d271dc4e169d7a1d&amp;chksm=cff50c09f882851fb3cdfa4dff3111c8a77732e6d494407b608210a97c85418f8d0cdfdce25b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','012','好的修学状态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=4&amp;sn=60d26490f6d93a1f00139fd24ede174b&amp;chksm=cff50c09f882851f790dd5e80775b9eb6021627e6239408abd29d558dc7a0dc492122f00b58b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','013','往生靠信愿	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=5&amp;sn=aa038ec48ab237a735b5f5e14af66f3e&amp;chksm=cff50c09f882851fcb321e4aa6c266ae28d3dae71f3e67747eb9b931d2ffed589203ca8c4e24&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','014','修学的刻板与灵活','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=6&amp;sn=7eb6a6058954b878a9e63b26d6833189&amp;chksm=cff50c09f882851f1198dbe9aba25b39bf2db8e0540d4fb095b5e45efaba7c2059616612e090&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','015','思维修时可不可以只总观想','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=7&amp;sn=90f286d08d1806830a36c6f63d40f4b2&amp;chksm=cff50c09f882851fdf7e1c63a8daec8d1c9041f1fccb255abc4042a992e2228becf624f7d130&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','016','如何深入观察修正自己','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490843&amp;idx=8&amp;sn=1ced7f54553347fd39fdf9fef8f061d0&amp;chksm=cff50c09f882851f1a97d2c9a3155cccb86f6224d724c89365dab9f8f22f20f3c0f4c7ab84b1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','017','业力与往生	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490926&amp;idx=1&amp;sn=bcb1c2f824739218ff2b951f69189b09&amp;chksm=cff50c7cf882856a2244d0a8797c3be0eac926251b333e43eb59a9cd40a093743d544e5a7f35&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','018','拜忏要列出重大罪业','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490926&amp;idx=2&amp;sn=e7c875dcf0b4788a6c8c53f1466b983f&amp;chksm=cff50c7cf882856aade8f89ef1ccf2f6e6253fd9c8c155f50d5719d5439c7093931b0520f5b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','019','先学会止语 ','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490926&amp;idx=3&amp;sn=2b718d71e155e4d2bd77ccdabb8c448f&amp;chksm=cff50c7cf882856a0ff6dd87c0dbc93ae82ada85157e61643cdad5c73388591031ef67eb190e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','020','障难多，要如何突破','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490926&amp;idx=4&amp;sn=d4ee5c78131d35d32a39f605f68698d4&amp;chksm=cff50c7cf882856a599efe193d812f9921823cf629038546eca50530481ec4ef4d41e016eefd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','021','善用方法提醒自己','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490926&amp;idx=5&amp;sn=2c15dcfac42af802203a0d448467613d&amp;chksm=cff50c7cf882856a6b457864946264b8aa7dd56473ed5daf06b3669aac7d9bd71fa0bbae4f15&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','022','方法总比困难多，要多修习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490926&amp;idx=6&amp;sn=59161226598fbdd4a8758aad9f2b957d&amp;chksm=cff50c7cf882856a30422d1ffeb6f94d4ed2d62d82d67a986f4c4125237743297714310009d7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','023','修行人对待疾病','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490961&amp;idx=1&amp;sn=789941b109516295b52a28a899d7d888&amp;chksm=cff50c83f88285952ad34da2e7f5062bafd7f822a87ad0be5d9da06527e729d01d6cb18fbcdd&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','024','如理如法的辨析','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490926&amp;idx=7&amp;sn=e1afb5a57de37c9b51f2b3267d7808f3&amp;chksm=cff50c7cf882856aee366f5b2f16650401f62bf387f88bce7ea2c9a6b9271d665968536c5932&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','025','不要执着于让人满意','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=1&amp;sn=33f4d9f61b1b8ddd8b822cc9bee20b59&amp;chksm=cff50c65f88285732f795186279d5567b104ba84f7324ba3582ef2476fa35cc3630bb392bf99&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','026','修行开始需要一定的强制','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=2&amp;sn=d8af9e115eba8baee03880973646140d&amp;chksm=cff50c65f882857331a01a7d7d23cd5bc1e9a0de016c4a830740433b476545a8fd9a051f720c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','027','贪嗔痴慢会堵自己气脉 ','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=3&amp;sn=fbeae34b1eb7a15a6d63d27238db39e4&amp;chksm=cff50c65f8828573baf0216c31595a9e7ad9df9433e1a1d6766216ecbf3b883ca55b75acc42e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','028','放下比改变更重要，以修往生为要务','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=4&amp;sn=3ee199ae3f11c33c52ea3fc9370223db&amp;chksm=cff50c65f882857325e34225b678e75e156634557f482e700cdebab05076e38fb73f61178ce6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','029','往生的助缘也是修来的	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=5&amp;sn=b23fffadbca9909c0c8fbad95cbbf3e2&amp;chksm=cff50c65f88285737800f1d38ff914e6027d56b3a2d8f204fa97229c8d799e83c62ce12d12fc&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','030','功夫是靠平日累积','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=6&amp;sn=7e424b57eac291f04d5729da2161db91&amp;chksm=cff50c65f8828573bcde346e3f25e858bbf7b82be841afb2dcdfd586d8fca077dd4110b81271&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','031','心无挂碍，随时跟佛走	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=7&amp;sn=e2de44b0890ac222bf581d36f7cef1a8&amp;chksm=cff50c65f88285736c630bd4ad3f37476665bee74ad66def16e5d0598d463acc0af901feb459&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','032','对待世情不要偏激','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490935&amp;idx=8&amp;sn=af40bb89c3e7362e57dc8d8103b72919&amp;chksm=cff50c65f882857316ab4877fd6d86ffd53fd11c8ba4dc7d211457af46979045c0badb392ee6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','033','修行中身体的突然反应	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=1&amp;sn=d3cf976755dc482aa17606e290c43333&amp;chksm=cff50c92f882858496a809ccadc34edaba71fe80fccafe5dc715804116d8790e9112a4a10392&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','034','让位附体和冤业病附体不同','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=2&amp;sn=148a650589b8bb249b46394439fdb7e7&amp;chksm=cff50c92f8828584fdb5c19b8e041d08c0d44e5aeba1c1d5602f64930c73fe27248b40360ca9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','035','功课安排要有针对性和灵活性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=3&amp;sn=bb572b6c0160d0e39a267c949e17addb&amp;chksm=cff50c92f8828584b658368706a6e873846c1b6fadb9c102215c25a7efe907760ebf431490e5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','036','遇到突发事情首先要反思自己心行','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=4&amp;sn=3e5002c6adf4d0832230c0c316a95e79&amp;chksm=cff50c92f8828584c4876bc252eae9dba5afdc3ae1dbb5c53a81decaf9feb8faba4d4f371561&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','037','入定与解脱的关系','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=5&amp;sn=519b28128baf9ec8a77c1b6608478f6b&amp;chksm=cff50c92f8828584618f81817453640422732d4297244173c344461c554464231161b7c56192&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','038','修学要把握当下的质量','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=6&amp;sn=aabefbae48a1758a2db836a8ba17e4a7&amp;chksm=cff50c92f8828584e8becfcac3cdb0f1d3f9a906a946aa350daa46a83ee7f3264bf119736b77&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','039','对境运用时要简捷高效	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=7&amp;sn=0a982d7d172a54bbde747aff4db0205c&amp;chksm=cff50c92f88285845d37a1dd1a887b4cacc4ae43a0ee0a2aa64c84f186c570dd2bae9dc04f81&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','040','修行须以见地为先导','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490944&amp;idx=8&amp;sn=b4b3a6575bd5585a5077ea47876b7e7a&amp;chksm=cff50c92f882858474310efc338a65a759499888105dd850b9f55e1408e50e34b37752e51a77&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','041','实修需要正确的方法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490909&amp;idx=1&amp;sn=fbc5e0594078ee081e0e329bd9f73dac&amp;chksm=cff50c4ff8828559679b5e21f48a73b6716cda04cc065d0005376e3e8730d39c04e5d358337a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','042','修学的系统性和次第性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490909&amp;idx=2&amp;sn=f13c295de1e2f33e500fc0bfdde484fa&amp;chksm=cff50c4ff882855926afbac441ddf8a43aacf10cd7a5be7d87ec82b905cb82b5ed10b308d801&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','043','从根本处修才能简捷高效','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490909&amp;idx=3&amp;sn=380e1b2eb485de1f3f7f96c1a5f6dd7b&amp;chksm=cff50c4ff882855947e735ce2aaa60d770f58b84ec159d8d961a559d671d594c18803e3185f2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','044','现代人学佛为什么难','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490909&amp;idx=4&amp;sn=31263e63808d0629b32f1a98d8d1127f&amp;chksm=cff50c4ff8828559eb8fc9ef98e182a0adc70ae32d7618e9437615207dd2880530458129c51d&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','045','实修要把握好细节','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490909&amp;idx=5&amp;sn=a5aeaf016b8e772fefc38b90175c2bc9&amp;chksm=cff50c4ff882855948823d1d0ca07332c5db36382c1abfb16106e9ef203ee2055011ba98f7fe&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['每日四项讲解','小组开示','学期总结开示','','046','佛法的修学为什么走样','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490909&amp;idx=6&amp;sn=561e6b1c5c77b6a4b5a32f06f11bad87&amp;chksm=cff50c4ff8828559041b5e9beb1e12fce5e9157ab4f854cd89f4d073fbef5c5765b01b6d337b&amp;scene=21#wechat_redirect','有','无','文章','原始'],

//每日四项讲解 小组开示 分项链接

//每日四项讲解 问题列表_全部
['每日四项讲解','问题列表_全部','','','001','修学应有的正确心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=1&amp;sn=f8bb9bc206bf578344f4d1526c64bf3e&amp;chksm=cff50b82f88282946e6e73b8a50801f9c93878a1412d7e81ffeff388a234e0f5513a83316b8c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','002','学习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=2&amp;sn=9be06113904007d745f70ce83b4da8b4&amp;chksm=cff50b82f8828294c114e35585517b61e92789167a793205ae000cc0dc6cf2346894d964bdf9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','003','修学框架和主体脉络','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=3&amp;sn=7687c3a866af195ca945b2fe72f4c2b3&amp;chksm=cff50b82f8828294c79ddcc4743cd1664f1f8d1789f4349d550cefc62570bedef4abba4870f2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','004','拜忏','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=4&amp;sn=71473b9ae00f12586587f1a96b3e8fcc&amp;chksm=cff50b82f8828294f40be5d4fa6e18bfcecde30cebda86da3969590398de22d21261757a6431&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','005','思维修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=5&amp;sn=b278a4473daf1bc5b4f75b908dc60736&amp;chksm=cff50b82f8828294e593d2598b9cb65c23356d8efef1e60a1e0c3e38fd2b3522871b43095d29&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','006','为什么修行和自律性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=6&amp;sn=33916146c68608e7537c01cc3e7dc996&amp;chksm=cff50b82f8828294d8bcde2245f1dce37c7294c53e09cc193335fd5915981b7c7f99e8cc94d3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','007','包容心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=7&amp;sn=5824b06c37f7ce0716537d2646c3c8ea&amp;chksm=cff50b82f88282940a6c38eeb145eab24a7c1495832e1ea6687ff3af49cf7b1c38a18a7479ef&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','008','因缘果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490192&amp;idx=8&amp;sn=737c6a03f20f7b252db459604c2c7e98&amp;chksm=cff50b82f8828294ad8e04ab2252173fdc9ed2f33e211391d656ec6e407d0e07b79b004ae10c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','009','安住修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490193&amp;idx=1&amp;sn=b9d9867211667664fa3efca1e7f9206e&amp;chksm=cff50b83f88282952d3c9b7eb7e255fedda4f1994861c8a304a5703206950b2050d0b7485108&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_全部','','','0010','观修和反思总结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490193&amp;idx=2&amp;sn=8a3b2c99d49f55997f6ce15e8d65870a&amp;chksm=cff50b83f8828295283b43b7eeb4853b5de080bcecff05a5599acd3e02107eb3f71f590310c6&amp;scene=21#wechat_redirect','无','无','文章','原始'],


//每日四项讲解 问题列表_部分
['每日四项讲解','问题列表_部分','','','001','修学应有的正确心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=1&amp;sn=a61f7a3308dcca355b0ad1c7d28a34f3&amp;chksm=cff5072ff8828e39d38dfac3e06d7a9e93add1fb472e8076aa5f29b09c503fcbf60979540590&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','002','学习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=2&amp;sn=bc4e2e46a1977d88b10edf354991415e&amp;chksm=cff5072ff8828e3960eb56ec63c4efecec0b4f73542cd0e9b1c0d2d6fbae06eab771ab9bb34f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','003','修学框架和主体脉络','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=3&amp;sn=256af69f1a84540e9ece9432320723c4&amp;chksm=cff5072ff8828e3990878266973a509ca450579bbe629287b40534a36c9bd946cbf48a6ecb4b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','004','拜忏','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=4&amp;sn=78b159eb503b92df9b3a130ecc141078&amp;chksm=cff5072ff8828e3919fbe43fe7ea81deede319bb15e06026c4ce0950679da1a1acb921c0c70d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','005','思维修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=5&amp;sn=3bbc9450cc13fc0c780ad43fe2badc9a&amp;chksm=cff5072ff8828e39d31228aaba7b1df7f7b741a2dc1a38e5c20bece6f9fb8350e3dfdca87fa3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','006','为什么修行和自律性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=6&amp;sn=cbbfc8b863241c252a9798d48db10bea&amp;chksm=cff5072ff8828e3930ab1791f3608974431c34a9cab150433893c09c185baf1da06427054962&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','007','包容心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=7&amp;sn=7aeb3955001d48f1b092f14912dcf23f&amp;chksm=cff5072ff8828e393875973404c6d472e8b7457b2f3243b6d7f3142f4fbeedbb071790f4fced&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','008','因缘果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489085&amp;idx=8&amp;sn=e2980777314499acd39e268cc0e05156&amp;chksm=cff5072ff8828e39cb9da5c92b3821a2c415896c20c9c109743ad8192f9542fcc363c1cee133&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','009','安住修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489104&amp;idx=1&amp;sn=e58239086fb2f9d11049022ab54607bf&amp;chksm=cff50742f8828e542c71308457f1c29ccb5c831fa859ac674804044f13641929184a3af14df6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题列表_部分','','','0010','观修和反思总结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489104&amp;idx=2&amp;sn=14ca15cb6153c6cd4b84d09dd5b2172f&amp;chksm=cff50742f8828e5408038428404d5156339471ed17937ceded2a46e9e88accdca42d64cf48d7&amp;scene=21#wechat_redirect','无','无','文章','原始'],


//每日四项讲解 问题和答案列表_全部
['每日四项讲解','问题和答案列表_全部','','','001','修学应有的正确心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247490216&amp;idx=1&amp;sn=19dfb6e41570222c8b9d0e86c84373dc&amp;chksm=cff50bbaf88282acb56c2f8b3914463d2778f151c012b09775251d211f01c1ff62003e18a182&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','002','学习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489043&amp;idx=4&amp;sn=ff11c120d0e0a1ae86564fce0850f366&amp;chksm=cff50701f8828e177fb8cdb2bfb3ff96947839b2329a93dc358c90d65813c18bef1fc8e58907&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','003','修学框架和主体脉络','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489043&amp;idx=5&amp;sn=0e147a721d3d3a9da66170605f5ef185&amp;chksm=cff50701f8828e171c4352371c9ff06459c2ec2b55de17101f511d1cb93fdc03214dd54b2444&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','004','拜忏','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489043&amp;idx=6&amp;sn=04750f9d33b244c2408df5c8f9c3c7e2&amp;chksm=cff50701f8828e17c3eb930240d8f2039de02a53056383da527ffbe17e2a56e538a669da0955&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','005','思维修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489043&amp;idx=7&amp;sn=683cc92e38c8452b30c79aa5eecf4056&amp;chksm=cff50701f8828e1722e80d42a7c0c0be89957c0f83e6b9b1aba0188e2a17ade536c4808f4988&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','006','为什么修行和自律性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489043&amp;idx=8&amp;sn=b319fb8fb230b6ebb7c361d3b802ea5f&amp;chksm=cff50701f8828e17dd899b4aa5e42ac45effd47a02df2b781a4e49433c0914e687f74f06b8b4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','007','包容心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489060&amp;idx=1&amp;sn=705602a4a3aeff73cb1e1d88830a9032&amp;chksm=cff50736f8828e20a67e332691b4730dc20b4672b3a6937e9f6e528bfffe0ad365b5af0ab83c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','008','因缘果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489060&amp;idx=2&amp;sn=b1859d73b5f926d9bd66f6845286a43f&amp;chksm=cff50736f8828e202bc68d2c8a6076082e9e118a96a06fad55678b50c58456f58114ca84f380&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','009','安住修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489061&amp;idx=1&amp;sn=c02d736138b415041d5476a380c6840c&amp;chksm=cff50737f8828e218fcea32e45eb45039d593eee1b8f9fb6d296fe73e44ca7273a1b479b2684&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_全部','','','0010','观修和反思总结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489060&amp;idx=3&amp;sn=dc906275319c8f7b091114271550faa0&amp;chksm=cff50736f8828e2024e42fdc0ccbd4851bb860bc46ba4c1ddbd01409501aadf6d89e798f13e8&amp;scene=21#wechat_redirect','无','无','文章','原始'],


//每日四项讲解 问题和答案列表_部分
['每日四项讲解','问题和答案列表_部分','','','001','修学应有的正确心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=1&amp;sn=b73b51f25f77645a0746a758dd436465&amp;chksm=cff5071ef8828e087ed267b9bcdfea87931a735cea6cf510e756bdbe75d317d8b40e0355ee88&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','002','学习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=2&amp;sn=bfc082fb5a2701306cc0abc801180d0c&amp;chksm=cff5071ef8828e0876fece24bcda948377d0182eacb1f8336d085be8153763f9da7fdae674e2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','003','修学框架和主体脉络','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=3&amp;sn=3184856a3d1b08b998e3ddc36b5edd69&amp;chksm=cff5071ef8828e0884fab601795943f12a56a0464d405d676948fada4d5fa55605fbc0b2db1e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','004','拜忏','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=4&amp;sn=6fc8ebdad87d7484011f3c0852d579e1&amp;chksm=cff5071ef8828e08c8517c8ce39e5efd66616db5aca51f34e21aad3659fb05ada82589e73a8e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','005','思维修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=5&amp;sn=97e84a6de75dd9840f9b0558477297b8&amp;chksm=cff5071ef8828e083807909018bf2105c94c72433338d0a05e2553e130543287fd1b572978e2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','006','为什么修行和自律性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=6&amp;sn=0aaa819787c50149ff0ccb83466796a6&amp;chksm=cff5071ef8828e08aad2183f2ff31068c8f4593c1338d173ae1ac9243bc61400190aae4336bc&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','007','包容心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=7&amp;sn=0cb805430b881e8e51462682650690d7&amp;chksm=cff5071ef8828e08fc570e3681dce69f0c1f74a6d9724f8542e9dbdd367fadfd7493139740b1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','008','因缘果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489036&amp;idx=8&amp;sn=b29eda0bd40ac67d17eb7a77393c01a9&amp;chksm=cff5071ef8828e08cf3b122870700589eafe1d00b236215d11eae0a5260d8403957a6186d084&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','009','安住修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489060&amp;idx=4&amp;sn=48bc01d5779e330ec60eba8ca9ff3585&amp;chksm=cff50736f8828e20bc35f3e75a6bb04470989c2e63bacd8aff4e1460ddbf105a19f0175c509d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['每日四项讲解','问题和答案列表_部分','','','0010','观修和反思总结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247489043&amp;idx=2&amp;sn=72ef468bdbdce9373454a196de9df6ce&amp;chksm=cff50701f8828e1722dfd05da71377bc9b7f58e49ffad72c657cc30125af2f425b1c50231bc4&amp;scene=21#wechat_redirect','无','无','文章','原始']




];


//净土次第修


/* 举例：净土次第修-分类导读-思维修-思维修经论依据 */ 
var contdatas4 = [
['净土次第修','原始资料','','','001','前言	','https://mp.weixin.qq.com/s/1nGwo4wZh9Qsaaz7i8tHtg','无','无','文章','原始'],
['净土次第修','原始资料','','','002','修学纲领	','https://mp.weixin.qq.com/s/ZRvEKnCgRz1g9QqWDBDAFg','无','无','文章','原始'],
//['净土次第修','原始资料','','','003','修学次第','https://mp.weixin.qq.com/s/N0nXWZzTUa-5r5x3bnTQTw','无','无','文章','原始'],
['净土次第修','原始资料','','','004','思维修安住修','https://mp.weixin.qq.com/s/bQYTEj0yMS_bYIOh5BgwMg','无','无','文章','原始'],
['净土次第修','原始资料','','','005','形式佛法','https://mp.weixin.qq.com/s/SZ29oUcNfmQEoLZRrX68ZA','无','无','文章','原始'],
['净土次第修','原始资料','','','006','每天四项','https://mp.weixin.qq.com/s/0VyAoZmMxpMZW1IHAMnGtw','无','无','文章','原始'],
['净土次第修','原始资料','','','007','修行之心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=1&amp;sn=2688a9f6fac67658fb2f14583a356768&amp;chksm=cff5024cf8828b5a4cd68ff03b16891d670a55aecd965d094036e9fbad56b372c19d2c5b1769#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','008','出离心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=2&amp;sn=4b247828d0000c2a8ccfbde9292c1806&amp;chksm=cff5024cf8828b5a22ce0df5b5eebcb97134052191b743296a5a30a164f95357d3563e2454b8#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','009','怎能不求生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=3&amp;sn=11ed4be1a83440e393bd64e9d5688162&amp;chksm=cff5024cf8828b5a4e5dafa0c263ee200b2f258c55515f36b9d7da9a72a087b0da69c00291bb#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','0010','自律','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=4&amp;sn=1d6acd7d2b6325db9b6f4a93c7a6d3b7&amp;chksm=cff5024cf8828b5aedeee0596f4a1911cfbcd013c4144ec10391e231c3efd453ac42260d608a#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','011','迅速转变','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=5&amp;sn=d097ed2e8235cf49c9c596562e4f79ec&amp;chksm=cff5024cf8828b5a2e5ee0143b232c75e6310296f1579262f083639ecb1eb1deee53a30004f8#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','012','不可以任何理由生气','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=6&amp;sn=33c6c4bd544dbde1ed1bf218eede2e32&amp;chksm=cff5024cf8828b5a744321015544770f4198bf2964491d5c06db1920634a4dc9c7558d44acbd#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','013','静处养动处练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491961&amp;idx=1&amp;sn=e4abd5eba9868c1163e24aeedca401cf&amp;chksm=cff6f06bf881797da87b5375cb79450e1d7d21cef006058e417dad681cf5643b08ba62087778#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','014','因果无情','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=8&amp;sn=413def253f8fff1be59b44a4d589299d&amp;chksm=cff5024cf8828b5a7d5ec84a7b3e2734de769ee885cb75a65817c53258eb669d1391f436c093#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','015','一心皈命','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=1&amp;sn=a72cd9d57c752637ca62784b18dd2ddb&amp;chksm=cff5024df8828b5bc307661cac75974c48b786b8f11ea91d38a679864cf1834a49e24461487c#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','016','问题出在哪里','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=2&amp;sn=a54dc47748e6a624b74e8b4464c7d06b&amp;chksm=cff5024df8828b5b07fedb223e56d7b9dcc9c46376bcd7be85ce3390da822b830b9d536355ce#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','017','思维修的说明','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=3&amp;sn=7d198515e3b12f3817c6f783785b80f9&amp;chksm=cff5024df8828b5b0ad43870ad6bde90c89d33438788ba6c90a3a9a2f3318b340211d7de050d#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','018','改过要有重点','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=4&amp;sn=679e9bc9de558404d3d48fca16ea09fa&amp;chksm=cff5024df8828b5ba928a3e0f9c38c541870a9d3f24f228ecd5215b01ebe2ec0ca196a1026eb#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','019','忏悔改过次第','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=5&amp;sn=6b6e6027e9da4a1001a82df8a4fe5f96&amp;chksm=cff5024df8828b5bdee3a498ec99ea16ce7d9c736a2cebccc17ec5bf7a0e0c43041b989f94e7#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','020','莫跟着感觉走','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491961&amp;idx=2&amp;sn=25a8257af22a304bc6ce2794393eb391&amp;chksm=cff6f06bf881797d5b64b2e2d0254264925c5a6eb369221c5995e42dd37da8f2897a5a7bedbc#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','021','思维因缘果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=7&amp;sn=d84ad2a3fcdfc064eafd695a50a1d951&amp;chksm=cff5024df8828b5b35677955927e14a0e50a77b8c79fee180118f87dcac3f6dd27f0fe9121d3#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','022','法，用对否','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=8&amp;sn=7607c5bf690ee5c6b2c65a30c83405b9&amp;chksm=cff5024df8828b5b87fd5884910bb75332eb046a562a505856cc2b611e434ec3551630a62469#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','023','平凡','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=1&amp;sn=5613ea6343fa91b5d1d180c364f118a3&amp;chksm=cff50278f8828b6e984c414040a24b7a7c36354828292ae4e652faa4a41279fb67dc62d77863#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','024','靠什么往生',myaddr+'jtcdx/yszl/024.html','无','无','文章','原始'],
['净土次第修','原始资料','','','025','热衷于福报','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=2&amp;sn=c6d7f99f89861ba468902576324722e4&amp;chksm=cff50278f8828b6eb4403df2434d0a3f1197a7dfbd3f82b7e22a5cf8fc455a970e5fb9dca413#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','026','补充说明一	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488368&amp;idx=1&amp;sn=f530d76471a4d5afe7c7aa2adab471e0&amp;chksm=cff50262f8828b745fa8176e60ee6b7615989dedde6f2b1d28a58f5b3166aa230b7c6e82c3aa#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','027','念佛方法（印祖）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=3&amp;sn=c426724e77acefa2bdb6a65db7ef4ab4&amp;chksm=cff50278f8828b6e9b3d5417a0eaee8058fc101d27317bdd95f50ad5872311c5718e2dc1bdca#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','028','读经方法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=4&amp;sn=5072a77b0bc162ec1c5cbf458a878846&amp;chksm=cff50278f8828b6e55292e2d288a7687bb0090400dfb61e669c575bdbc991628df271f5d37f1#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','029','如何起精进心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=5&amp;sn=ea10f432cc8cfef5b522b59862267de2&amp;chksm=cff50278f8828b6e5142232e5b2f36c9b6cc8f67c1bfd097d9866902db47e46713e34de9b016#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','030','阶段小结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=6&amp;sn=4c057981ee4eb04f8352d926261f3cb5&amp;chksm=cff50278f8828b6e4f8df6a0be175c61f5b06ae9c70858b347a588ea0145a5f730e8171c258d#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','031','静心入手处','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=1&amp;sn=0e58bc1a6f7bad7fa43fc1c36cdcd5e8&amp;chksm=cff502dcf8828bcaad554efeee6f8294127dff7503635065ff2faeb92ea7c1d42250687efe93#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','032','突破障难','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=2&amp;sn=8ab55ae9b405c9db50be4acc5a5ac5c6&amp;chksm=cff502dcf8828bcaeba2c9e3abd48597f85fe6ab77a2e3f897915054dc2a1340673886873d50#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','033','包容心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=3&amp;sn=2182da9219d8e2c9242b32fd8ccc3d3f&amp;chksm=cff502dcf8828bcac3d4e471ab2291a70d9e6ee0883b3f91789b8cf01bc019061d5eac62a1d2#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','034','深入改变','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=4&amp;sn=85359f5a83496138217db26c60ae8808&amp;chksm=cff502dcf8828bcaa51ec2171ddfc1d5a4b2fb971c0f7f78d0807ee48906d01fe590a2acab27#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','035','质量与数量	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=5&amp;sn=f03ffbf5fed85ade8c1afa0a93287d04&amp;chksm=cff502dcf8828bca68676178ec806cc9bd10021b659a94e8e8c7055922b459f10522a418073e#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','036','一向专念','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=6&amp;sn=b6748ee26a4c0a35c729356461752e1d&amp;chksm=cff502dcf8828bcaee49b049a9cf961ae36a95aee7106d52f577913fb6c63e20904f0d5e1794#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','037','讲理','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=7&amp;sn=8dae4dcc9e35ead52f7bdcb879aaec17&amp;chksm=cff502dcf8828bca75b24fc1b822e7d23fb7f5576d2e22056e50b2813d2c1285a50a3a03dcbc#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','038','极妙秘诀（印祖）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=8&amp;sn=d6faa31af962031fa2a78c4a0d276f0e&amp;chksm=cff502dcf8828bca744f91e0d7a22d3f407d70701775323a4b67d56f22f964f419ebe16e7689#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','039','净土法门的核心',myaddr+'jtcdx/yszl/039.html','无','无','文章','原始'],
['净土次第修','原始资料','','','040','对法麻木','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=1&amp;sn=25de909a5ae3f7ab883f5aa41f7ee56a&amp;chksm=cff50444f8828d52ce044c446837743e61347a203fd524ea9f16a0398e7efd09f0a8d5ffa75b#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','041','七笔勾（莲池大师）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=2&amp;sn=c1d868407c9f10f2155c5cc92f422396&amp;chksm=cff50444f8828d52d245eaec2e3d5eb1efe66a45b8905ae759f4710cac8c9815bb0e86e3d854#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','042','百不管','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=3&amp;sn=5628a2cf7d8e79ddb16fbc1277f90f7f&amp;chksm=cff50444f8828d526fbf9c1244f809364fe8b362868712661fbbcf12e5e584022e65350fe057#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','043','有针对性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=4&amp;sn=00cde288164a56979f853d643c6ad5ab&amp;chksm=cff50444f8828d52a4f6d7e024aadec0cc578b43012da368a9a821b0588fc297c97266e7af72#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','044','重复的力量	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=5&amp;sn=4bc672ddf0902255972f192368c22624&amp;chksm=cff50444f8828d5240d4a487afdd4abeeb609a08d8eac12f8529055ef7426b2c80a25036a65f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','045','欲望的本质','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=6&amp;sn=c40d0943be13c6f2a5990bf0adfaefd7&amp;chksm=cff50444f8828d52b08a6f6d44ca9a07d6529bf71ba6b5189feda586ff0b9ef419784ab0e312#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','046','往生不是自私	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=7&amp;sn=8cf5e09b04ea43a42c59360594e15b2c&amp;chksm=cff50444f8828d52947e81ff111c00cbf2d805e080c32c97a2461791c9298a3012626f65c723#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','047','自警（莲池大师）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=8&amp;sn=355d8a980e79b4d972cbbd8e65c548cb&amp;chksm=cff50444f8828d5206ebae77a805498775667aa540ca71b9e118b6dccdf88efae1d803871a71#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','048','心田种子','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=1&amp;sn=ec90d44dd1fd183750b1f61b9c576cb4&amp;chksm=cff50470f8828d66f6fab0bb0afe504ea6b2f14fbdbfc85ab975b4efcc3c4d65372622a0fe84#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','049','六度何成障碍法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=2&amp;sn=133afd6e7e0138ca1b7dc129732e2dbf&amp;chksm=cff50470f8828d66f5f75759c1c4f440e0366cc499a880801737319b7246525f9684992b3dfc#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','050','关于净土流派','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=3&amp;sn=4caee92ba7e0b32fb7e277db7b868fb6&amp;chksm=cff50470f8828d66b05566e7a5f816540e310c02d41ed9046d69153d31701b02b7d9d8ee5e3a#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','051','怎样对待病苦','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=4&amp;sn=995af457532a16b63313dd6d4b8d2776&amp;chksm=cff50470f8828d66aaba052555e4e15ecc96a09f2aa099c1172b8b32ef5611992d88677ce494#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','052','善调心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=5&amp;sn=ff87bb8dd6d71b6e0c4f93b77c560686&amp;chksm=cff50470f8828d666e6e2e6d0246f517ec3974c1c865d2f0a90432e114da4952587b35d0c046#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','053','念佛功夫（江味农）',myaddr+'jtcdx/yszl/053.html','无','无','文章','原始'],
['净土次第修','原始资料','','','054','三力与往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=6&amp;sn=b6fdf914841aa704f76bfdccbad5bfea&amp;chksm=cff50470f8828d668722b0c709562fbb7d8665a3a03fe2cd929707d88f474c902d67f31f7ad0#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','055','标准检验','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=7&amp;sn=77748bfcbe92bbe598b2bc6b15067bbd&amp;chksm=cff50470f8828d66d5ade9e425b8b86c648db275cf6771ca54d37d0cc8f8a380cb56454a5986#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','056','世事浮华','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=1&amp;sn=c0679cbea8506ebd66fc196cbf2a5334&amp;chksm=cff50464f8828d72a7bf8363c32e4077d666f02275bead27cbc9cad03145b66bf4456eb8cf09#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','057','往生的障碍',myaddr+'jtcdx/yszl/057.html','无','无','文章','原始'],
//['净土次第修','原始资料','','','058','助念流程',myaddr+'jtcdx/yszl/058.html','无','无','文章','原始'],
//['净土次第修','原始资料','','','059','阶段小结二	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=2&amp;sn=18daca59455f23662df76f2bd219a5e8&amp;chksm=cff50464f8828d72d55552613df349f5a24850ab9836b1eb2750d1e53a181d3629e9ba408e75#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','060','思维修补充一	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=3&amp;sn=f20a1d5313eba54e82dc36e4f292ac6f&amp;chksm=cff50464f8828d7242fb4d3974156b50d52bbfa5fa02b7c68886de8bbb5e4524bd57f9c8aa55#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','061','思维修补充二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247494903&idx=6&sn=dcdf70a5184dc5c4fc4b1a380e3eba26&chksm=cff6fde5f88174f3c40aa935f77cd11cf1ed483a48a3824a7bdf63ae347901ef3554d4a7acf1#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','062','思维修补充三','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=1&amp;sn=912886f6bd6e0acfc142bc817a60321f&amp;chksm=cff6f00bf881791da7acbf469e9cae09f9a642d1f09f5891c4fe838344baa03cdf0d5f56152d#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','063','关于孩子的问题',myaddr+'jtcdx/yszl/063.html','无','无','文章','原始'],
['净土次第修','原始资料','','','064','思维修补充四','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=2&amp;sn=f1295b4a0922846c0acab4ebd0e19781&amp;chksm=cff6f00bf881791dced6b256943ce17393037e42336aa916bfa1c955f62d4f3494b0f3b23680#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','065','陌生又熟悉','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=3&amp;sn=d4d6e30a88e8bbef648fbb22f110d541&amp;chksm=cff6f00bf881791d0f99faa87eb01dac803a8121d395012751f2170eaf571c71cd372bb1344c#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','066','思维修补充五','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=4&amp;sn=e9ad1f2889171cc2c6ccb694228c3bd6&amp;chksm=cff6f00bf881791d2434a70b8e66b6ae97fe4c078509705b1d9e3f925e6df24830e85f5fc9a1#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','067','放松训练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=5&amp;sn=c5c9e8b5bd3891e94293d651655d778a&amp;chksm=cff6f00bf881791d876056303a76aaad20df452f0b1258de3c4a0b2e3f5d05a26b3cce95c91c#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','068','定慧等持','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=6&amp;sn=9df83326aafdf66dce8f5712c504a505&amp;chksm=cff6f00bf881791d3f570c63ac1c5c09b05d204944b17c0affb583caa81c34f3c82096e11d06#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','069','修学内容的选择','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=7&amp;sn=e171f199ffc298d79024c7717db1f305&amp;chksm=cff6f00bf881791dd342524ed7042c07ee05d830dd6a734d4565544cbe69c5fab72dea9a1f7c#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','070','思维修补充六','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491847&amp;idx=1&amp;sn=d595298ce014192ae2d884dc1aa19d9e&amp;chksm=cff6f015f88179039cd62d31b6fd251c3cb1b1d6959769bb92b3e0a854e87689e4796e9ef98e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','071','修学点滴之一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491847&amp;idx=2&amp;sn=0e146eda97cf59d19a4cbca709b5fb77&amp;chksm=cff6f015f8817903fb8bd78d1d5968d233785f3fcb8e906d4112095ff2a09af7c751ee44e55d#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','072','关于皈依','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=1&amp;sn=2418b2da2401132f11ad2e62997936b0&amp;chksm=cff50fb0f88286a6cb0d0b194319ec1985c34bb905651cba97dba3516be07a61ea950c2da6d1#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','073','修学点滴之二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=2&amp;sn=4b3678fb3fc3a356094b85b553bee2c2&amp;chksm=cff50fb0f88286a6318ccb1d3746509d49376298bae6f9226ebd0d6bddb149bee274cadc71fa#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','074','关于戒律','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=3&amp;sn=c40b3e4e9fd3aaa63e8de5e9a00d0064&amp;chksm=cff50fb0f88286a6789a32d0e69c06fa089bb607decb819717afa1ce24638c229ddb31bd5569#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','075','思维修补充七','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=4&amp;sn=48b4a691ad8a39e3b88811852b85068e&amp;chksm=cff50fb0f88286a605f8fb5aec6b35b2317e974880821762c9f55f8523098e22e288c41fdad2#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','076','修学点滴之三','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=5&amp;sn=28d23b850760b058dc97aa727187986f&amp;chksm=cff50fb0f88286a6f423e589e3cdc15b9f742fb9f412ee5a4e84e8c593c7d60c9d3611828dd4#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','077','降化烦恼','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=6&amp;sn=348f5b61efdde8628d6973871a77eca0&amp;chksm=cff50fb0f88286a6865a3082ab1f9050f78b74452cab97de88212261549eb7aab9722d79e7c5#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','078','修学点滴之四','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=7&amp;sn=56233172664f17cd9ecbe5ec085d4c7c&amp;chksm=cff50fb0f88286a683e101d7f08bd9e350adcca8737f7ca3a835d2b77e8889f81fd16395a9ec#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','079','《无量寿经》中的思维修',myaddr+'jtcdx/yszl/079.html','无','无','文章','原始'],
['净土次第修','原始资料','','','080','修学点滴五','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=1&amp;sn=6aa37881368cb77127e92b5771f87f4e&amp;chksm=cff50fbef88286a85701252c5d8cf68d96ab1bed1ac232e524f1e09105b905e811a6479c7a8e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','081','思维修补充八','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=2&amp;sn=fe4893d26935b907eea1969f5ec34f40&amp;chksm=cff50fbef88286a8c8399c621752a6c226647042aafedfb03564e6a3f4fcb30a72b2a35df730#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','082','修学点滴六','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=3&amp;sn=c312062e61be73a72b4513bccc49ab89&amp;chksm=cff50fbef88286a8bc70cadb7f3a61023667179a5ff73cb0a448079966e9802e77dac3e1b79b#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','083','拓开心量','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=4&amp;sn=51f0ad041f9bc3d3e82eee49fcb38e38&amp;chksm=cff50fbef88286a8020fc47b450bcd82a69d8ba675d7ce5210fd7968e3eef5964480c9e2aeec#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','084','修学点滴七','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=5&amp;sn=bc409512ecf24453c0292e5c41e65ff8&amp;chksm=cff50fbef88286a8c89d4466241bf3bb03b166d64995a71f7f8e6cd729e22c1fff4529a2921d#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','085','修学点滴八','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=6&amp;sn=6e370db24c0f2fed849abd988e00de02&amp;chksm=cff50fbef88286a8ea6bf7b5f199dcf52f6a14d2ce03d74db22f20e91c0199635662add54deb#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','086','烦恼种类','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=7&amp;sn=0ccfc9a1b5d240ea9a3f82d37e10c5d5&amp;chksm=cff50fbef88286a8ffb2da9ef635f0816e93dea230590de499dc14efcdca3eeac2a96d079ab1#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','087','修学点滴九','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=8&amp;sn=16da7dbc4048b1012a32829a103f656f&amp;chksm=cff50fbef88286a8d3a801b6869a57c2d448c239965f46cb58857ba754e7fcc01759bb2e1723#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','088','快速提升','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=1&amp;sn=68ea9bef6f120131901e2398dd798975&amp;chksm=cff50fbff88286a90d4c10370665d1e5568bcaedf0486370c2e59a55b276ed0a2de752af4292#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','089','再谈因果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=2&amp;sn=cc350c0f414df514c1ed0dc24dd6f18d&amp;chksm=cff50fbff88286a92342a8af00151dc647ade008b2bcf551ef8e01ef0b468c243222cbf1dc70#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','090','修学点滴十','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=3&amp;sn=a648874926bdd0e28ddbd2a4a624020f&amp;chksm=cff50fbff88286a9fa96bfe7b1fd7c95b1848c17fb2fb1ceb4b9548fe2eebe402da818c0df39#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','091','国王与大臣	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=4&amp;sn=fc1b3783c31e9c4152d6cdb06cd01c05&amp;chksm=cff50fbff88286a9eeebf484961b7bb79730c80801815caf2f51feee5ab0109bdbdaa29f4046#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','092','修学点滴十一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=5&amp;sn=12b38b5ed1c78a6bfd0b0462af7acb31&amp;chksm=cff50fbff88286a91773ca988e07dfbe6a2f6b497de4ad642cf4855a3ec71734aa64d032cf80#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','093','劝发菩提心前言','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491847&amp;idx=3&amp;sn=7a4fee91cce96445e70b781d0395f819&amp;chksm=cff6f015f8817903b2f7c9633bad6e3c1ad1aae034e7ec50b40d1e4200e254846e02d50c7cf9#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','094','劝发菩提心2','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=6&amp;sn=eef79360ccaaeff1669457478e7eff42&amp;chksm=cff50fbff88286a960f90074522a8d8ffb923bc9f746343d1d635642ab883814673e1b4b090f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','095','劝发菩提心3','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=7&amp;sn=fa4646635d0771d49075848b35d6cd32&amp;chksm=cff50fbff88286a9dabfad9435e2e83f9b14f9a7b39a81765fe3e1ffff2ce6580e8956c33f54#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','096','劝发菩提心4	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=8&amp;sn=7a8b3ff38db8c99908c97168e80ebdfb&amp;chksm=cff50fbff88286a929728286576536d943b3949101a83236101d77cf05d984c833b938d0b3c2#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','097','学佛四部曲	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=1&amp;sn=fd075a51731cb06e342484e6adf02b27&amp;chksm=cff50fa4f88286b2668d2228bdbe1bce863f613e49818d2cc7307f45774f5dc8cf13dd2a8dbf#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','098','修学点滴十二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=2&amp;sn=331ef602da1710f5a531f2621b4a1485&amp;chksm=cff50fa4f88286b21481d0a379f2e142497a8dde2f8e32cf941c4a87740f9200b5ad93bb79b5#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','099','思维修补充九','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=3&amp;sn=3ef96783ad57468d0649616da956e7fd&amp;chksm=cff50fa4f88286b27b52d3918e0bd9731d2c5626f4a2811f405aeba656bffbebac15fa04ee3f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','0100','修学点滴十三','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=4&amp;sn=91b7ae55728a4e5de11d11c588741417&amp;chksm=cff50fa4f88286b24af63b3af3f7c12a970bde6e8692216ccc3785e66a83cb97fed32e778e80#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','101','善护口业','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=5&amp;sn=0d2c6aebe1459c260f12afd3b29e0213&amp;chksm=cff50fa4f88286b2e473e76946031059c3dd5ee8709b7091943e33c4a766b1ade14a1e361ef5#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','102','不见世间过','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=6&amp;sn=b626845be5153228cb7e02c8eee74bff&amp;chksm=cff50fa4f88286b2b1543781d9bcdad81f417e43ac182871035353cd8fb44a4a275bf3ecfb8f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','103','修学点滴十四','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=7&amp;sn=b3bcb2c7c68fed8430a88ce08c52ecc4&amp;chksm=cff50fa4f88286b2de35f6e66186d59a4021f40d65402b2aba2bccd9255b8edafcc1a1b9a402#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','104','关于“正思维”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=8&amp;sn=c25661cfe5917741015fc97e6668d9b3&amp;chksm=cff50fa4f88286b222a2b26946869b06f415152d0d676f58a082f2141e8ad89820b52b471cbb#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','105','居士礼仪戒规','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=1&amp;sn=91a3069ed9c71057e45dd82159e0307b&amp;chksm=cff50e11f8828707144297710e5a35295b718a02b25b5e14df14468dbfb0a44dd5bbbbdc600f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','106','正确和完整	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=2&amp;sn=e130cdaa49b2efd97ee9046b58897a55&amp;chksm=cff50e11f88287073122828fc708ffea9ccba3b270d2a489e2d7181134d34b0481f67953418a#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','107','思维修之运用（印祖）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=3&amp;sn=cad8c6f2d5db705b732c5e23c56cf0d4&amp;chksm=cff50e11f882870721022cd1e6743e1c0e0570baade219915ca4b636a5d1107998a2bc49af8c#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','108','辞旧迎新','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=4&amp;sn=42afb40c730e2c1dca5a7b9773bbfc08&amp;chksm=cff50e11f882870782fd828cbe3a2a87bca2002ad60228cce98810c4685f25d9522f1f01bee0#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','109','修学点滴十五','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=5&amp;sn=d23318e06056878b828ec5d70e788b35&amp;chksm=cff50e11f882870710d35cea338a2b6e6d1e31f4b8d859f139e28a871a5e4fd9f4e0f9d883ac#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','110','关于“我”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=6&amp;sn=c4ac2d7098dacc353bd1ab828fad329e&amp;chksm=cff50e11f88287074dcc685b3188c8f2f88d9620b8754fec555d6d4ceae1399867a9b50f1ded#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','111','当下','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=7&amp;sn=9c2d8de373a025bea1a20bf22046f5c4&amp;chksm=cff50e11f8828707179f711a9b0d8e74e99a9402f7297ced9a82f8457b4a64b4c4824cfad45f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','112','缘起浅谈','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=8&amp;sn=bf267f32028e5803c02411afcce1652d&amp;chksm=cff50e11f88287078e5dbb8b2fb41e979aab5bc3dd9f9f2e520414e719794dede7fae09e10a0#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','113','佛法助人','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=1&amp;sn=6958d24d296bf56456ac293680376bbb&amp;chksm=cff50e2cf882873a628d09ac19158da3e08972a54f9bdae3f9b7d4ddec1bf769524cb4c7683e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','114','点评摘录之一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=2&amp;sn=7add729d020e3962ee41454d49f6568b&amp;chksm=cff50e2cf882873a35a472d334a5a411262b3b2ec857ee30b1fcb83904e05f523b737222a78e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','115','点评摘录之二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=3&amp;sn=717933ebaee1b6bf16f056ec85bfda4e&amp;chksm=cff50e2cf882873a4e22f3323ae47f6dcdc8ebbd7f08094e0f7eaa73efb26d02b22709aaefd3#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','116','点评摘录之三','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=4&amp;sn=9c50dcec6d93979ead380bc6a5842fef&amp;chksm=cff50e2cf882873a93114df9b79a6cd031ec7d69f703f6a9cc0ca3fa9d42aa0d555e010d16d7#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','117','点评摘录之四','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=5&amp;sn=dd7e98af7fbd8a7d0d1139617fd70b2a&amp;chksm=cff50e2cf882873a86c51fb4242ab41f2cc13dcaf5adc44a5ae4e5fc48665fa66fb601d54993#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','118','点评摘录之五	',myaddr+'jtcdx/yszl/115.html','无','无','文章','原始'],
['净土次第修','原始资料','','','119','点评摘录之六','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=6&amp;sn=d0d35b95700068609b5d70be4c33f766&amp;chksm=cff50e2cf882873a7a438f7da531bb7af09d5945f2a90dd77672e179cd5344d80320afdbde2e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','120','点评摘录之七','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=7&amp;sn=653b95c11f8368de8cdc6f2cef746c03&amp;chksm=cff50e2cf882873aab625980ddf4ad868c0fded8ac9a6cb3b249ee8c7c76d3bfb3deb1b2af0b#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','121','点评摘录之八','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=1&amp;sn=3cf8f4d84d02861272b13b9a2c330bfc&amp;chksm=cff50e53f8828745e5b1eafde2023c6c3c276eb73fca74916d336109030bd75e85bced5cd041#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','122','点评摘录之九','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=2&amp;sn=a3ca017800d61c3e6b7cf375a29e52a5&amp;chksm=cff50e53f8828745610f9cfb0f7167b915f5f3214fb58bbe2a7b7f5129667f2d32564597b872#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','123','点评摘录之十','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=3&amp;sn=0dec4afe362bb09fe061d73638aed27c&amp;chksm=cff50e53f8828745c392517e5cbd89f98a17dae74c200c522addcdcabcbbb95259224e708ba1#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','124','点评摘录十一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=4&amp;sn=0e3a8ac8fc133c215ff396b22f3d4521&amp;chksm=cff50e53f88287457b86a91fd561f17b85067aac62c18bca1d66030e4615955ca7ab5a902c5d#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','125','点评摘录十二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=5&amp;sn=e31bf08e002f07baaab72f0bb412f7f2&amp;chksm=cff50e53f8828745b7430cab1db655f8564a6f5886bebaed3495e7b72b6b4e67db659785077d#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','126','新春嘱语','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=6&amp;sn=72da98722e9a1f515bb868aaa260c4f9&amp;chksm=cff50e53f8828745430ece00857e867d85949a51503bfc9048777267981b2dbf59a6ef79e52c#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','127','从内心状态作演示说明','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491399&amp;idx=3&amp;sn=11a4afda071a8e0e595281dc4482a839&amp;chksm=cff50e55f882874304560635abc528c51386b25a5269d6f13e0bf9854fd3a087006b41083419#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','128','学员心得提炼','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491393&amp;idx=8&amp;sn=1f800a68ca46512e3916694a6b8664b9&amp;chksm=cff50e53f88287458749e46f126ee14855a9dc802722a60ba7d28c350b416a0ef51acb54a9a0#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','129','点评摘录十三',myaddr+'jtcdx/yszl/126.html','无','无','文章','原始'],
['净土次第修','原始资料','','','130','施食	',myaddr+'jtcdx/yszl/127.html','无','无','文章','原始'],
['净土次第修','原始资料','','','131','大光明真言',myaddr+'jtcdx/yszl/128.html','无','无','文章','原始'],
//['净土次第修','原始资料','','','132','次第修学导图（框架脉络）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491399&amp;idx=1&amp;sn=b131acecd13e687fec5d93ab1ef4b000&amp;chksm=cff50e55f8828743b7a770525879160240e59183bb95b336fe4b5d40f8842a4cb7df4f246ddc#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','133','每日四项流程图','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491399&amp;idx=2&amp;sn=6f22102ea4f77b6378d1a82c59396f53&amp;chksm=cff50e55f88287439012cd7eb2bdccb826e738612049195958ca271b2be076ff0305dfbdebc7#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','134','师父开示：苦苦、行苦、坏苦','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=1&amp;sn=98beec0192c406f0d5059f6127382746&amp;chksm=cff50ee7f88287f1e43024d61fb84d877cb13cb79c716450b96a25a9d4b2c0208db70797635b#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','135','布施注意事项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=2&amp;sn=d1f79b29f1a687f2b2a92220b59422aa&amp;chksm=cff50ee7f88287f189bbc7d9ab141e1bdca1df57515eccd1257886a28413822b1f9257e1eb3a#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','136','女居士与出家师父的相关礼仪','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=3&amp;sn=d937aff81e77e63f36f7d75a3c1da9a9&amp;chksm=cff50ee7f88287f1b0f47c9725c83771559851fe49067e1c1ef690c8224b82966a3bfe7a622d#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','137','八退八进之训','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=4&amp;sn=5912392cffe638c1297523d0016234f7&amp;chksm=cff50ee7f88287f1bfe2919c9cddfa7dd4bd092a5d778f946f9d0632b6812c687c537c80a987#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','138','关于扶乩',myaddr+'jtcdx/yszl/135.html','无','无','文章','原始'],
//['净土次第修','原始资料','','','139','专修净土（印祖）',myaddr+'jtcdx/yszl/136.html','无','无','文章','原始'],
//['净土次第修','原始资料','','','140','破邪显正之一',myaddr+'jtcdx/yszl/137.html','无','无','文章','原始'],
//['净土次第修','原始资料','','','141','佛堂设置及供养礼拜','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=5&amp;sn=b05029e59001e5fce2177d5e7282d3c7&amp;chksm=cff50ee7f88287f1809b68634ac0b59770d5def1f8e084a1dfb6ffa25d7042231a71a79f96d7#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','142','榜样的力量	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=6&amp;sn=6fde2171d3f7c9cc53af1ba25e678896&amp;chksm=cff50ee7f88287f151f3ee8c6c140543b140d6a09142a9fd3cf56203f3adcd94f916cfc5c19f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','143','小组批语摘录','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=1&amp;sn=495f9905558e07aba45de4b1b843d349&amp;chksm=cff6f14df881785b00d83ebca8194200115a19430a79f9f7edb0a17ae057d2e7c60d5f0d5463#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','144','反思总结具体化','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=2&amp;sn=3d69514c5b428f57e99fba9b8bdd3082&amp;chksm=cff6f14df881785b58b774c3952374e053cc63d6003f00561a5272d602caa540e68c5cd955f0#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','145','关于净土菩提心和般若净土的问答	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=3&amp;sn=3252182199fc4403adaf3eaca22ed8c8&amp;chksm=cff6f14df881785b4b858268a67425ae6e58b2d44c145b241770f746bbcf0bd0105d922497b8#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','146','四种决定清净明诲','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=4&amp;sn=71b93abf3770ee13d80f45f05232d175&amp;chksm=cff6f14df881785b4fd30637739f3dee3fa92f15fe3cd4f09e41781f12bd2006799a21c36745#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','147','思维修要简捷高效	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=5&amp;sn=ae7b60563bb118a3c720c82a3f7f52e7&amp;chksm=cff6f14df881785b1f7dea39d9c6d5db2f1db4c038b24b5d51dea1a3de7d207e94c0c62dfa03#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','148','因缘果四条的简要','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=6&amp;sn=0a0492ae508d2a336bb98ff2291bc947&amp;chksm=cff6f14df881785b25330359effc05ede073508494f21430229cff508b1603e0486f6a634120#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','149','当下的心行既是种因又是助缘','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=7&amp;sn=acb50bf733b80709c76c8c1060a3401c&amp;chksm=cff6f14df881785b51254a73259bedc8e485e804ed09c2d72dcf92014956cc934345df61b13a#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','150','每日四项流程图四大要项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=8&amp;sn=b0cca4aed0c2e55554d0a27fd16a7038&amp;chksm=cff6f14df881785bb3bb3386800233b77251ea5612337e11baf906d8b138d9067128efb98f7c#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','151','西方发愿文（莲池大师）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=1&amp;sn=9ed115d7fa854689e9072626502bb63b&amp;chksm=cff6f162f8817874f508100b402a081b55c27ab6a8dae078e7f547cf63c8ead8f681a3637a88#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','152','真正的道人','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=2&amp;sn=c74dddf57312101ea5bc854020983171&amp;chksm=cff6f162f8817874cb713c7ebc135f2ddacbf3e1a1ec6613c55eb7bd449802af88013201cc7f#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','153','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=3&amp;sn=1c52cdb9868d2b36bc1037efeb6e8e1e&amp;chksm=cff6f162f8817874eab76e5304c98727a5888812f0c9950ca0605708942cc23f0caa507b4f38#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','154','反思总结的总标准和具体标准','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=4&amp;sn=ef46ed3f9b4326e77ce79013b07079d8&amp;chksm=cff6f162f8817874d58ea9180ebaf134f2349441767243d6138dca1500e3122d6629ad8b71c1#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','155','印祖破斥求开悟不求往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=5&amp;sn=86578e21b04ced04c0393276f48eb538&amp;chksm=cff6f162f881787468faf3c72b83509ada27de4b75b1da4c7c15949433f4b0a761c40a5f7487#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','156','反思总结具体化示范','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491961&amp;idx=4&amp;sn=55d30d44bca40b89593d897e813b935f&amp;chksm=cff6f06bf881797d7dac71d6e36d32e2fc1271e6ac69a6f20820dbcc7e963e6f5eeddfbdf3cd#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','157','礼敬心开示之一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=6&amp;sn=90f65fff3f4676a41bd51d1fa6b74027&amp;chksm=cff6f162f8817874d9887dc1531f6065013f8bfed8c7fc2207aaca260b53115fa14009a11db7#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','158','礼敬心开示之二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=7&amp;sn=7e21a4c39d8e37fa3ef4b5b5736099b5&amp;chksm=cff6f162f881787483d7b545fafc07835c5bf04097e003282df29fd909f802f1f2e88ab5b4f7#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','159','每个项目修学所遵循的过程','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=1&amp;sn=8b83dd687fab312173560ebefe5dc9c9&amp;chksm=cff6f160f881787642ebadd2cbd6fdc2b2a9a1c0db78447f3e964b82a2439a1c04618967aaf0#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','160','对境时怎么灵活运用项目','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=2&amp;sn=50bdf2072d2da14f060f49ed980603b4&amp;chksm=cff6f160f881787653e07c0a7ff478aaa5b64d09c22a8c63eb9986c7583c547d64c7e7021766#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','161','对境时怎么更好的提起觉照','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=3&amp;sn=b39251c35e399f6ea76552fcef0fc288&amp;chksm=cff6f160f8817876bd46aff61cda31dd005d178508bea6d38dd583719fa4b19627a98303ac11#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','162','师父教师节开示','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=4&amp;sn=10d3345c4e456e6a21cf47ce5edc762d&amp;chksm=cff6f160f8817876e4303406f8db14a0fde3a183cc684ceb423ff651c34c122ecaaf92711d78#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','163','日行一善的神奇效果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=5&amp;sn=0f781044351f54f53cb60a008ce6b296&amp;chksm=cff6f160f8817876ad0c4c93dce8dcc5e99536ca3131b377eb4e7d1008f7e459425ba2b8f12e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','164','佛陀渐次成熟罗睺罗解脱智','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=6&amp;sn=85e88aca70a755a57e730b666e129cb0&amp;chksm=cff6f160f8817876029615650cf423410418a740ba7afc813e2feb1e38df6c8d9691b3952474#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','165','关于诚信和誓愿','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=7&amp;sn=7f6a754e1a8966dacef6a6ee7154ba59&amp;chksm=cff6f160f88178761c0c59b2688bdc5bb000a8c8ea97ad33a4d1547580c9b4805fa3be26097b#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','166','民国第一术士','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=8&amp;sn=a515cbe191178ff327917933ab6a1727&amp;chksm=cff6f160f88178764986cab9e5d0a43620bc6f000bfd338dcc17869c757fe8b5bb9010ee61a1#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','167','关于“无记业”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=1&amp;sn=19491abad4676751584885102a870922&amp;chksm=cff6f192f8817884d4311963e36c8fe3077cfc714e815c79fe2d71679e9b6d8114b9f926f447#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','168','无趣无聊','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=2&amp;sn=e433cba895117dee1103cbf8f18f7d74&amp;chksm=cff6f192f88178840b673d1591cc57c1ce77adfa3b887d6ed318b0b8f4889d055fdfcee54c37#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','169','以果决心做好自律','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=3&amp;sn=0dffc8ff65e0fd4b00c8081218b50b43&amp;chksm=cff6f192f8817884a2a802cc92cf759f12f18bb3f01d0be9493b380c3ef7c2acaef06791cf1a#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','170','念佛四层功夫','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=4&amp;sn=a9e424a3d4d74e73b2b4ff58a17e56de&amp;chksm=cff6f192f8817884670a016c16e98605fe76c61a5c24a8c9bae4399896ed339c5993a9946b62#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','171','关于每日功课的读经','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=5&amp;sn=a765e434c3d108ce2dd8a6c1768b1059&amp;chksm=cff6f192f8817884f6c80a49915a2c46036e878e0143d595abcd502e3718587f830553341cae#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','172','老实念佛（2021）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=6&amp;sn=16166d0ac9a2c3cc952d1eb4b6ad1a1c&amp;chksm=cff6f192f881788421ff837db6c4cf41332bd3f4637a39e1ca4de744ecd4a464c5d6831bc48f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','173','盲区与明区','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=7&amp;sn=043f598f47a2733b542997661e506987&amp;chksm=cff6f192f8817884b3ae43e87cd830c805c1e65f49bf9cf2ccfed12441d6758ee90b3ddaf189#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','174','往生极乐世界九品莲位图文详解','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=8&amp;sn=ef0a5c1e2ce6d72f7be887dfa3032dad&amp;chksm=cff6f192f8817884f576d395ef2e8f1337f96f4a1aa74e9b8e95adffbd24bd15d7844245cb4a#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','175','松静定才能专注','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=1&amp;sn=7b27892c665d4d3bb34a58f2123e2a0a&amp;chksm=cff6f1aff88178b9d7d1079c1eecb978b47d763da947915ae6f377fbe380cb7224c4d89c888e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','176','修学不要随习气、感受走','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=2&amp;sn=68eeb0b61ec6f9f45073be2a3ebaadda&amp;chksm=cff6f1aff88178b95147b3f4207b64e070372fb025b005ad9070eb72ce0e7727f3ff23a3355f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','177','《吊藤馋蜜图》的故事','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=3&amp;sn=6373a8ca92613be827a6b800ca938a15&amp;chksm=cff6f1aff88178b9f83d71e093e2f929e32d7dfc4f0b932e0e593d89c796a4f149bfccf7cec8#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','178','五母子经','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=4&amp;sn=cb73b44cb1139a41845034e00b2c63fc&amp;chksm=cff6f1aff88178b9e87d404db30bfaeacb10f2390738c00dabc41b8a51bdd8be75e8149f0c6f#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','179','业报差别经','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=5&amp;sn=728d8c0868325c1e92d5dcbeb5861856&amp;chksm=cff6f1aff88178b94031e041fba8b4429ea893ccb7ef3a64ecc8699d61d44a5ac4d6e788f791#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','180','这样念佛','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=6&amp;sn=0efe49c110665772c4b99a0031e44c8c&amp;chksm=cff6f1aff88178b9397cb07f2e0759f9f9c72090905b867b0e4e78e30b310fda6a2605fe928b#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','181','境随心转	','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=7&amp;sn=bd21e9b00412e73169a9e19c146c863b&amp;chksm=cff6f1aff88178b920d458545013d04a2e9a1e062281142fcb3688e67ab0b1ae20e47c6cf97a#rd','无','无','文章','原始'],

//新增加 20240709
['净土次第修','原始资料','','','182','本来是佛与次第修','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=1&amp;sn=8aa1d39a843a83b6f7391dd5d9e8b33d&amp;chksm=973cd736a04b5e2004cf4b0ec36c542175ac23410c3a67572721fa466e4669fd022bad653695&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','183','有没有将四级内容综合在一起的更为简捷高效的修法？','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=2&amp;sn=6dcec914ec751511601b38c54875799a&amp;chksm=973cd736a04b5e20f21deae7d0dd13f3d3164decde8b734999313dd14e4f572b5ad36811fb14&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','184','为何要遵循次第修','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=3&amp;sn=26065b0675ca2a7e5c16c930587d8899&amp;chksm=973cd736a04b5e20e66374ed1c6303e609adb3c2772139e870a42df79f771afdf55c211fc276&amp;token=1576720142&amp;lang=zh_CN#rd','有','无','文章','原始'],
['净土次第修','原始资料','','','185','如何打坐','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=4&amp;sn=4e419eab599ca742ab85baf5a818332a&amp;chksm=973cd736a04b5e205dee155c807e5d2f780265e8d99fec32cd521b8383a8f125031dd88d1727&amp;token=1576720142&amp;lang=zh_CN#rd','无','有','文章','原始'],
['净土次第修','原始资料','','','186','静坐时间长，腰一直疼','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=5&amp;sn=3e892d4ef657e3d18aa8c77205aec89b&amp;chksm=973cd736a04b5e20f6b78c8c31c556c2f3814b3ae963a82a2e78df1640f6163d412696f1da8d&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
//['净土次第修','原始资料','','','187','短期出家是不如法的','https://mp.weixin.qq.com/s/jRMWNwOgnUbkM82Xab0vqQ','无','无','文章','原始'],
['净土次第修','原始资料','','','188','咱们所修项目，跟佛讲的十种心紧密相关','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=6&amp;sn=79ff0be602a05b61fc8925e299cb0b79&amp;chksm=973cd736a04b5e20cc402e8beef18df2c13e691876a8cdd1ba67abc32ec93a3f6640cc070360&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','189','平等具体体现在什么地方？','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=7&amp;sn=a704e4a2a268108c512c3fc21844ac25&amp;chksm=973cd736a04b5e2014cd2cbcd075619c6346a5ddbec19e348c9882f44ad8aeedd9f9ade060f5&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','190','师父开示平等心','https://mp.weixin.qq.com/s/QKV5nqSEZ7cl9byLNGRbeQ','有','无','文章','原始'],
['净土次第修','原始资料','','','191','思维修项目“感恩心”里加一条内容','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=1&amp;sn=f78cd5808348ce5e0bae9bbcd6b80bd0&amp;chksm=973cd74da04b5e5bd32ebf5dfd80f6b345aaa325066dc7d73afbd41cc3ec0b3e7dbd5233d3b7&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','192','师父开示感恩心','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=2&amp;sn=b7a075acfabf6b477ebeb09bc9720110&amp;chksm=973cd74da04b5e5b6ecf7641df727988ff9b181009f6697d0ddd05587c3e7e67383aaa627814&amp;token=1576720142&amp;lang=zh_CN#rd','有','无','文章','原始'],
['净土次第修','原始资料','','','193','有控制心，就是走魔道','https://mp.weixin.qq.com/s/RGMbbkhh4mDgHNbsUM6lUA','无','无','文章','原始'],
['净土次第修','原始资料','','','194','没有出离心，你做再多的事，也依然是轮回业','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=8&amp;sn=f92415a6f0ac1b4aada3e93b82d7f333&amp;chksm=973cd736a04b5e20507023a5084746d95e7338550a4f139f7bce4242e5970cb182e7949362d6&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','195','一切法都是缘起的，一切法从心想生','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=3&amp;sn=34e11ea494d6ae884538a7fabaebdcf6&amp;chksm=973cd74da04b5e5b66e65fe5f5a603202382f8b842990acb5c0a863bcd4a2ba531065e35e0c3&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','196','这是佛法里常讲的几句话，它们是怎样融通的？','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=4&amp;sn=2395fd95629fb8436fd0777d38f2df48&amp;chksm=973cd74da04b5e5bbedb6ff66bbc031f8acb56ce1b7e5cd45ee3821e5363c0709e916765f8e3&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','197','人人都是本自具足，都是可以成佛，这是理上讲','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=5&amp;sn=2159564ab5b894a05f507b87e2aea176&amp;chksm=973cd74da04b5e5b10543abf13e77dbbe5a176b298d9951d40574ea29263d7bf0c9322125add&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','198','此有故彼有-好事的心“有”，所以事就来了','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=6&amp;sn=e6a5eda8955249bcc23665d6a3912344&amp;chksm=973cd74da04b5e5bc776ff57077143952b499f7dcbc7c176d9dc85592bf0a8fea0fb783703af&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','199','打开佛法千经万论的金钥匙','https://mp.weixin.qq.com/s/E9y5poH7BuXmboi0kEbJyg','无','有','文章','原始'],
['净土次第修','原始资料','','','200','重点是对于缘起的理解悟入，这是开启、融通佛法的关键','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=7&amp;sn=5ea43d0cce2f50e229baa29232c33bd7&amp;chksm=973cd74da04b5e5b5240ff67ef51525ad12f68863a4ecc263228737e0415729c8b316103c47a&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','201','“缘起”是怎样融通佛法的？','https://mp.weixin.qq.com/s/7X9uGwuanTr6VDSBDk6A6Q','有','无','文章','原始'],
['净土次第修','原始资料','','','202','吴居士把讲的缘起部分画了图','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=8&amp;sn=1de9bf1c64323df283d442c54f9a2111&amp;chksm=973cd74da04b5e5b7a4b6aa00412e8a80fcdd21db88f077b8d836f718f171ba7089030641822&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','203','通过《缘起怎样融通佛法》讲“归纳总结”','https://mp.weixin.qq.com/s/Goud7PY6kS2RDbVoGzRfJw','无','无','文章','原始'],
['净土次第修','原始资料','','','204','《缘起怎样融通佛法》的三个问题总结并画图说明','https://mp.weixin.qq.com/s/wOQSJGNuUlWjhKz6cF6yNw','无','无','文章','原始'],
['净土次第修','原始资料','','','205','互为主伴','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487203&amp;idx=1&amp;sn=5815bfa6376f51f7df30cd7f81088393&amp;chksm=973cd765a04b5e739dc4299bf1db6ddc09fe82e3339a71b2fbab335db9a863a0b19bc8fd57a6&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','206','体相用-从不同方面去看待','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487203&amp;idx=2&amp;sn=63498c31cdea5b2939b9215aac47f7eb&amp;chksm=973cd765a04b5e7345e2086cf788a0c33ac0b34429bdb08b615f230ce2fd04536843be01d44a&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','原始'],

/*
['净土次第修','原始资料','','','207','督导修学-缘起','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491773&amp;idx=8&amp;sn=84ea61d088f7dab7aeb919679326fab8&amp;chksm=cff6f1aff88178b987bb3e52e23c68e5d481bf84d9936a2c085e2474006131a115fd6cc501c8#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','208','何谓督导修学，模式','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=1&amp;sn=c74531da140d886c20f2d8270c1e8a2c&amp;chksm=cff6f1acf88178ba73bf262caeac233a1314e3337b66dbda731c861b41d03270fe5a9aeec8bd#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','209','督导修学模式有什么优势','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=2&amp;sn=5355d461be02510c7a8ae51b2f9c2c88&amp;chksm=cff6f1acf88178ba1afa40d993deeff90695a2dd0dc83cc3bb2485d9673a31152ea410996b12#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','210','督导修学模式分几种','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=3&amp;sn=5a149fbd8cf5f02a773091b87fb24bd4&amp;chksm=cff6f1acf88178ba0ef94f6a438a7789e4782572e8baccd40b864e4b9f03e13e5d9cfd75146a#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','211','何谓五级修心次第','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=4&amp;sn=a9d02c7575731515e13cf255a51d628e&amp;chksm=cff6f1acf88178ba75409db2a07c48bb2ec8cf00eaea3ea3ee1b4a4a2958bccda4d803fb70f1#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','212','为什么要重视基础心态的建立','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=5&amp;sn=0176ab54ad2b6c0f66be31e25323d199&amp;chksm=cff6f1acf88178ba8b41d824c11f2787cd571a50b2dfee67f07fb348de03c21d572cdcf87bf3#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','213','为什么不能轻视基础理论','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=6&amp;sn=fcf7489426963b87d2de6ddca95dc4d9&amp;chksm=cff6f1acf88178bacc81e7d633ae83954424b408e5bfa3c690331cf76a7cf4c1f51beb13e149#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','214','修心方法主要是什么','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=7&amp;sn=d98c98fa61ff4bdf6444affbac6fec36&amp;chksm=cff6f1acf88178ba8272337aa7ead1a592a0ccf6b5730aa77ff7b9a9c0c0d00d7415d3741a5c#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','215','修心的理论依据是什么','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491774&amp;idx=8&amp;sn=5c381742a434851420833e23f264eae2&amp;chksm=cff6f1acf88178ba8b75783bc0b021a0e900b97238d934a3f8661039fd08beda88ac273ebdee#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','216','督导修学模式具体实施细节是什么','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491777&amp;idx=1&amp;sn=2daaa002d21871b014d300bc254b6094&amp;chksm=cff6f1d3f88178c5d89a7793a56ebcc229361c6c0ec7dff744cf3d475cf0f69d19a7bdfe991e#rd','无','无','文章','原始'],
['净土次第修','原始资料','','','217','参与督导修学的条件是什么','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491777&amp;idx=2&amp;sn=caadce1b1297e009e6f40b56b9c36313&amp;chksm=cff6f1d3f88178c58cd714b18f34944125f0b56b456f67b3531a7078074601fe540a412286ac#rd','无','无','文章','原始'], */

//净土次第修 分类导读

['净土次第修','分类导读','','','001','01菩提心',myaddr+'jtcdx/fldd/01.html','无','无','目录',''],
['净土次第修','分类导读','','','002','02次第修',myaddr+'jtcdx/fldd/02.html','无','无','目录',''],
['净土次第修','分类导读','','','003','03功课',myaddr+'jtcdx/fldd/03.html','无','无','目录',''],
['净土次第修','分类导读','','','004','04窍诀',myaddr+'jtcdx/fldd/04.html','无','无','目录',''],
['净土次第修','分类导读','','','005','05止观',myaddr+'jtcdx/fldd/05.html','无','无','目录',''],
['净土次第修','分类导读','','','006','06觉照',myaddr+'jtcdx/fldd/06.html','无','无','目录',''],
['净土次第修','分类导读','','','007','07缘起',myaddr+'jtcdx/fldd/07.html','无','无','目录',''],
['净土次第修','分类导读','','','008','08学习',myaddr+'jtcdx/fldd/08.html','无','无','目录',''],
['净土次第修','分类导读','','','009','09拜忏 改过',myaddr+'jtcdx/fldd/09.html','无','无','目录',''],
['净土次第修','分类导读','','','010','10静修',myaddr+'jtcdx/fldd/10.html','无','无','目录',''],


['净土次第修','分类导读','','','011','11-01思维修-经论依据',myaddr+'jtcdx/fldd/11-01.html','无','无','目录',''],
['净土次第修','分类导读','','','012','11-02思维修-理念与方法',myaddr+'jtcdx/fldd/11-02.html','无','无','目录',''],
['净土次第修','分类导读','','','013','11-03思维修项目-修行意愿',myaddr+'jtcdx/fldd/11-03.html','无','无','目录',''],
['净土次第修','分类导读','','','014','11-04思维修项目-自律性',myaddr+'jtcdx/fldd/11-04.html','无','无','目录',''],
['净土次第修','分类导读','','','015','11-05思维修项目-包容心',myaddr+'jtcdx/fldd/11-05.html','无','无','目录',''],
['净土次第修','分类导读','','','016','11-06思维修项目-感恩心',myaddr+'jtcdx/fldd/11-06.html','无','无','目录',''],
['净土次第修','分类导读','','','017','11-07思维修项目-礼敬心',myaddr+'jtcdx/fldd/11-07.html','无','无','目录',''],
['净土次第修','分类导读','','','018','11-08思维修项目-谦卑心',myaddr+'jtcdx/fldd/11-08.html','无','无','目录',''],
['净土次第修','分类导读','','','019','11-09思维修项目-帮助之心',myaddr+'jtcdx/fldd/11-09.html','无','无','目录',''],
['净土次第修','分类导读','','','020','11-10思维修项目-去虚荣心',myaddr+'jtcdx/fldd/11-10.html','无','无','目录',''],
['净土次第修','分类导读','','','021','11-11思维修项目-放松去紧张急躁散乱',myaddr+'jtcdx/fldd/11-11.html','无','无','目录',''],
['净土次第修','分类导读','','','022','11-12思维修项目-因缘果',myaddr+'jtcdx/fldd/11-12.html','无','无','目录',''],
['净土次第修','分类导读','','','023','11-13思维修项目-情感',myaddr+'jtcdx/fldd/11-13.html','无','无','目录',''],
['净土次第修','分类导读','','','024','11-14思维修项目-欲望',myaddr+'jtcdx/fldd/11-14.html','无','无','目录',''],
['净土次第修','分类导读','','','025','11-15思维修项目-病苦',myaddr+'jtcdx/fldd/11-15.html','无','无','目录',''],
['净土次第修','分类导读','','','026','11-16思维修项目-弱化我执',myaddr+'jtcdx/fldd/11-16.html','无','无','目录',''],
['净土次第修','分类导读','','','027','11-17思维修项目-弱化法执',myaddr+'jtcdx/fldd/11-17.html','无','无','目录',''],
['净土次第修','分类导读','','','028','11-18思维修项目-出离心',myaddr+'jtcdx/fldd/11-18.html','无','无','目录',''],
['净土次第修','分类导读','','','029','11-19思维修项目-极乐世界',myaddr+'jtcdx/fldd/11-19.html','无','无','目录',''],
['净土次第修','分类导读','','','030','11-20思维修项目-阿弥陀佛',myaddr+'jtcdx/fldd/11-20.html','无','无','目录',''],


['净土次第修','分类导读','','','012','12安住修',myaddr+'jtcdx/fldd/12.html','无','无','目录',''],
['净土次第修','分类导读','','','013','13纠偏',myaddr+'jtcdx/fldd/13.html','无','无','目录',''],
['净土次第修','分类导读','','','014','14点评摘录系列',myaddr+'jtcdx/fldd/14.html','无','无','文章','原始'],
//['净土次第修','分类导读','','','015','15督导修学模式',myaddr+'jtcdx/fldd/15.html','无','无','文章','原始'],
['净土次第修','分类导读','','','015','15辨析与破斥',myaddr+'qtzt/pxxz/','无','无','目录',''],
['净土次第修','分类导读','','','016','16新年寄语',myaddr+'qtzt/xnjy/','无','无','目录',''],


['净土次第修','分类导读','菩提心','','001','菩提心（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488902&amp;idx=2&amp;sn=8b37cd907f6270661e480ed032db9b2b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','菩提心','','002','劝发菩提心文（前言）1','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491847&amp;idx=3&amp;sn=7a4fee91cce96445e70b781d0395f819&amp;chksm=cff6f015f8817903b2f7c9633bad6e3c1ad1aae034e7ec50b40d1e4200e254846e02d50c7cf9&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','003','劝发菩提心文（正文）2','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=6&amp;sn=eef79360ccaaeff1669457478e7eff42&amp;chksm=cff50fbff88286a960f90074522a8d8ffb923bc9f746343d1d635642ab883814673e1b4b090f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','004','劝发菩提心文（正文）3','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=7&amp;sn=fa4646635d0771d49075848b35d6cd32&amp;chksm=cff50fbff88286a9dabfad9435e2e83f9b14f9a7b39a81765fe3e1ffff2ce6580e8956c33f54&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','005','劝发菩提心文（正文）4','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=8&amp;sn=7a8b3ff38db8c99908c97168e80ebdfb&amp;chksm=cff50fbff88286a929728286576536d943b3949101a83236101d77cf05d984c833b938d0b3c2&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','菩提心','','006','次第修学导图(框架脉络)','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491399&amp;idx=1&amp;sn=b131acecd13e687fec5d93ab1ef4b000&amp;chksm=cff50e55f8828743b7a770525879160240e59183bb95b336fe4b5d40f8842a4cb7df4f246ddc&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','007','次第修心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492312&amp;idx=1&amp;sn=99357a013e370bd7ae868dd13648a551&amp;chksm=cff6f3caf8817adc2cbe8cfc7285317c9ae94cb3e29fa71aeaefc0d9acc3cb5049ffc3dce3b2&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','008','关于净土菩提心和般若净土的问答','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=3&amp;sn=3252182199fc4403adaf3eaca22ed8c8&amp;chksm=cff6f14df881785b4b858268a67425ae6e58b2d44c145b241770f746bbcf0bd0105d922497b8&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','009','施食 ','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485711&amp;idx=8&amp;sn=c6f11c989397ea8cf4e5e8a45b5a28e4&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','0010','大光明真言 ','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485480&amp;idx=5&amp;sn=569ace007e2b4a34b9c648873ad34094&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','011','日行一善的神奇效验','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=5&amp;sn=0f781044351f54f53cb60a008ce6b296&amp;chksm=cff6f160f8817876ad0c4c93dce8dcc5e99536ca3131b377eb4e7d1008f7e459425ba2b8f12e&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','012','印祖破斥求开悟不求往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=5&amp;sn=86578e21b04ced04c0393276f48eb538&amp;chksm=cff6f162f881787468faf3c72b83509ada27de4b75b1da4c7c15949433f4b0a761c40a5f7487&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','菩提心','','013','老实念佛（2021）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=6&amp;sn=16166d0ac9a2c3cc952d1eb4b6ad1a1c&amp;chksm=cff6f192f881788421ff837db6c4cf41332bd3f4637a39e1ca4de744ecd4a464c5d6831bc48f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','013','咱们所修项目，跟佛讲的十种心紧密相关','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=6&amp;sn=79ff0be602a05b61fc8925e299cb0b79&amp;chksm=973cd736a04b5e20cc402e8beef18df2c13e691876a8cdd1ba67abc32ec93a3f6640cc070360&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','014','平等具体体现在什么地方？','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=7&amp;sn=a704e4a2a268108c512c3fc21844ac25&amp;chksm=973cd736a04b5e2014cd2cbcd075619c6346a5ddbec19e348c9882f44ad8aeedd9f9ade060f5&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','菩提心','','015','师父开示平等心','https://mp.weixin.qq.com/s/QKV5nqSEZ7cl9byLNGRbeQ','有','无','文章','引用'],


['净土次第修','分类导读','次第修','','001','次第修（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488902&amp;idx=3&amp;sn=c2b5577c0efd68ba001ea1286008a0b9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','次第修','','002','次第修心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492312&amp;idx=1&amp;sn=99357a013e370bd7ae868dd13648a551&amp;chksm=cff6f3caf8817adc2cbe8cfc7285317c9ae94cb3e29fa71aeaefc0d9acc3cb5049ffc3dce3b2&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','次第修','','003','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=3&amp;sn=1c52cdb9868d2b36bc1037efeb6e8e1e&amp;chksm=cff6f162f8817874eab76e5304c98727a5888812f0c9950ca0605708942cc23f0caa507b4f38&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','次第修','','004','佛陀渐次成熟罗睺罗解脱智','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=6&amp;sn=85e88aca70a755a57e730b666e129cb0&amp;chksm=cff6f160f8817876029615650cf423410418a740ba7afc813e2feb1e38df6c8d9691b3952474&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','次第修','','005','本来是佛与次第修','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=1&amp;sn=8aa1d39a843a83b6f7391dd5d9e8b33d&amp;chksm=973cd736a04b5e2004cf4b0ec36c542175ac23410c3a67572721fa466e4669fd022bad653695&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','次第修','','006','有没有将四级内容综合在一起的更为简捷高效的修法？','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=2&amp;sn=6dcec914ec751511601b38c54875799a&amp;chksm=973cd736a04b5e20f21deae7d0dd13f3d3164decde8b734999313dd14e4f572b5ad36811fb14&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','次第修','','007','为何要遵循次第修','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=3&amp;sn=26065b0675ca2a7e5c16c930587d8899&amp;chksm=973cd736a04b5e20e66374ed1c6303e609adb3c2772139e870a42df79f771afdf55c211fc276&amp;token=1576720142&amp;lang=zh_CN#rd','有','无','文章','引用'],


['净土次第修','分类导读','功课','','001','功课（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488902&amp;idx=4&amp;sn=3e85e1995a987301373ba5321ce6c908&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','功课','','002','每天四项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488233&amp;idx=8&amp;sn=9593e81ffe3078f371d26cf9aa596307&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','功课','','003','每日四项流程图','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491399&amp;idx=2&amp;sn=6f22102ea4f77b6378d1a82c59396f53&amp;chksm=cff50e55f88287439012cd7eb2bdccb826e738612049195958ca271b2be076ff0305dfbdebc7&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','功课','','004','佛堂设置及供养礼拜','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=5&amp;sn=b05029e59001e5fce2177d5e7282d3c7&amp;chksm=cff50ee7f88287f1809b68634ac0b59770d5def1f8e084a1dfb6ffa25d7042231a71a79f96d7&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','功课','','005','每日四项流程图四大要项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=8&amp;sn=b0cca4aed0c2e55554d0a27fd16a7038&amp;chksm=cff6f14df881785bb3bb3386800233b77251ea5612337e11baf906d8b138d9067128efb98f7c&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','功课','','006','师父开示反思总结具体化','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=2&amp;sn=3d69514c5b428f57e99fba9b8bdd3082&amp;chksm=cff6f14df881785b58b774c3952374e053cc63d6003f00561a5272d602caa540e68c5cd955f0&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','功课','','007','反思总结的总标准和具体标准','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=4&amp;sn=ef46ed3f9b4326e77ce79013b07079d8&amp;chksm=cff6f162f8817874d58ea9180ebaf134f2349441767243d6138dca1500e3122d6629ad8b71c1&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','功课','','008','反思总结具体化示范','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491961&amp;idx=4&amp;sn=55d30d44bca40b89593d897e813b935f&amp;chksm=cff6f06bf881797d7dac71d6e36d32e2fc1271e6ac69a6f20820dbcc7e963e6f5eeddfbdf3cd&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','窍诀','','001','窍诀（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488902&amp;idx=5&amp;sn=105c88930ed2d8dd415af269a2d76720&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//['净土次第修','分类导读','窍诀','','002','极妙秘诀（印祖）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=8&amp;sn=d6faa31af962031fa2a78c4a0d276f0e&amp;chksm=cff502dcf8828bca744f91e0d7a22d3f407d70701775323a4b67d56f22f964f419ebe16e7689&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','窍诀','','003','有针对性','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=4&amp;sn=00cde288164a56979f853d643c6ad5ab&amp;chksm=cff50444f8828d52a4f6d7e024aadec0cc578b43012da368a9a821b0588fc297c97266e7af72&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','窍诀','','004','重复的力量','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=5&amp;sn=4bc672ddf0902255972f192368c22624&amp;chksm=cff50444f8828d5240d4a487afdd4abeeb609a08d8eac12f8529055ef7426b2c80a25036a65f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','窍诀','','005','降化烦恼','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=6&amp;sn=348f5b61efdde8628d6973871a77eca0&amp;chksm=cff50fb0f88286a6865a3082ab1f9050f78b74452cab97de88212261549eb7aab9722d79e7c5&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','窍诀','','006','快速提升','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=1&amp;sn=68ea9bef6f120131901e2398dd798975&amp;chksm=cff50fbff88286a90d4c10370665d1e5568bcaedf0486370c2e59a55b276ed0a2de752af4292&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','窍诀','','007','正确和完整','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=2&amp;sn=e130cdaa49b2efd97ee9046b58897a55&amp;chksm=cff50e11f88287073122828fc708ffea9ccba3b270d2a489e2d7181134d34b0481f67953418a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','窍诀','','008','师父教师节开示','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=4&amp;sn=10d3345c4e456e6a21cf47ce5edc762d&amp;chksm=cff6f160f8817876e4303406f8db14a0fde3a183cc684ceb423ff651c34c122ecaaf92711d78&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','窍诀','','009','佛陀渐次成熟罗睺罗解脱智','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=6&amp;sn=85e88aca70a755a57e730b666e129cb0&amp;chksm=cff6f160f8817876029615650cf423410418a740ba7afc813e2feb1e38df6c8d9691b3952474&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','止观','','001','止观（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488902&amp;idx=6&amp;sn=e3a808f8f22a6135629e167ed05564c3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','止观','','002','思维修安住修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488233&amp;idx=6&amp;sn=401921bf64040550abdb133d5b130297&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','止观','','003','阶段小结','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=6&amp;sn=4c057981ee4eb04f8352d926261f3cb5&amp;chksm=cff50278f8828b6e4f8df6a0be175c61f5b06ae9c70858b347a588ea0145a5f730e8171c258d&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','止观','','004','阶段小结二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=2&amp;sn=18daca59455f23662df76f2bd219a5e8&amp;chksm=cff50464f8828d72d55552613df349f5a24850ab9836b1eb2750d1e53a181d3629e9ba408e75&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','止观','','005','定慧等持','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=6&amp;sn=9df83326aafdf66dce8f5712c504a505&amp;chksm=cff6f00bf881791d3f570c63ac1c5c09b05d204944b17c0affb583caa81c34f3c82096e11d06&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','觉照','','001','觉照（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495401&amp;idx=1&amp;sn=74ec68e009bddda04e842efeadfad512&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','觉照','','002','国王与大臣','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=4&amp;sn=fc1b3783c31e9c4152d6cdb06cd01c05&amp;chksm=cff50fbff88286a9eeebf484961b7bb79730c80801815caf2f51feee5ab0109bdbdaa29f4046&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','觉照','','003','对境时怎么灵活运用项目','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=2&amp;sn=50bdf2072d2da14f060f49ed980603b4&amp;chksm=cff6f160f881787653e07c0a7ff478aaa5b64d09c22a8c63eb9986c7583c547d64c7e7021766&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','觉照','','004','对境时怎样更好的提起觉照','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=3&amp;sn=b39251c35e399f6ea76552fcef0fc288&amp;chksm=cff6f160f8817876bd46aff61cda31dd005d178508bea6d38dd583719fa4b19627a98303ac11&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','缘起','','001','缘起（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488902&amp;idx=7&amp;sn=b989151820c97f0d0672ed371134a67f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','缘起','','002','讲理','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=7&amp;sn=8dae4dcc9e35ead52f7bdcb879aaec17&amp;chksm=cff502dcf8828bca75b24fc1b822e7d23fb7f5576d2e22056e50b2813d2c1285a50a3a03dcbc&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','003','不见世间过','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=6&amp;sn=b626845be5153228cb7e02c8eee74bff&amp;chksm=cff50fa4f88286b2b1543781d9bcdad81f417e43ac182871035353cd8fb44a4a275bf3ecfb8f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','004','关于“我”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=6&amp;sn=c4ac2d7098dacc353bd1ab828fad329e&amp;chksm=cff50e11f88287074dcc685b3188c8f2f88d9620b8754fec555d6d4ceae1399867a9b50f1ded&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','005','缘起浅谈','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=8&amp;sn=bf267f32028e5803c02411afcce1652d&amp;chksm=cff50e11f88287078e5dbb8b2fb41e979aab5bc3dd9f9f2e520414e719794dede7fae09e10a0&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','006','一切法都是缘起的，一切法从心想生','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=3&amp;sn=34e11ea494d6ae884538a7fabaebdcf6&amp;chksm=973cd74da04b5e5b66e65fe5f5a603202382f8b842990acb5c0a863bcd4a2ba531065e35e0c3&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','007','这是佛法里常讲的几句话，它们是怎样融通的？','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=4&amp;sn=2395fd95629fb8436fd0777d38f2df48&amp;chksm=973cd74da04b5e5bbedb6ff66bbc031f8acb56ce1b7e5cd45ee3821e5363c0709e916765f8e3&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','008','人人都是本自具足，都是可以成佛，这是理上讲','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=5&amp;sn=2159564ab5b894a05f507b87e2aea176&amp;chksm=973cd74da04b5e5b10543abf13e77dbbe5a176b298d9951d40574ea29263d7bf0c9322125add&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','009','此有故彼有-好事的心“有”，所以事就来了','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=6&amp;sn=e6a5eda8955249bcc23665d6a3912344&amp;chksm=973cd74da04b5e5bc776ff57077143952b499f7dcbc7c176d9dc85592bf0a8fea0fb783703af&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','010','打开佛法千经万论的金钥匙','https://mp.weixin.qq.com/s/E9y5poH7BuXmboi0kEbJyg','无','有','文章','引用'],
['净土次第修','分类导读','缘起','','011','重点是对于缘起的理解悟入，这是开启、融通佛法的关键','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=7&amp;sn=5ea43d0cce2f50e229baa29232c33bd7&amp;chksm=973cd74da04b5e5b5240ff67ef51525ad12f68863a4ecc263228737e0415729c8b316103c47a&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','012','“缘起”是怎样融通佛法的？','https://mp.weixin.qq.com/s/7X9uGwuanTr6VDSBDk6A6Q','有','无','文章','引用'],
['净土次第修','分类导读','缘起','','013','吴居士把讲的缘起部分画了图','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=8&amp;sn=1de9bf1c64323df283d442c54f9a2111&amp;chksm=973cd74da04b5e5b7a4b6aa00412e8a80fcdd21db88f077b8d836f718f171ba7089030641822&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','014','通过《缘起怎样融通佛法》讲“归纳总结”','https://mp.weixin.qq.com/s/Goud7PY6kS2RDbVoGzRfJw','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','015','《缘起怎样融通佛法》的三个问题总结并画图说明','https://mp.weixin.qq.com/s/wOQSJGNuUlWjhKz6cF6yNw','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','016','互为主伴','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487203&amp;idx=1&amp;sn=5815bfa6376f51f7df30cd7f81088393&amp;chksm=973cd765a04b5e739dc4299bf1db6ddc09fe82e3339a71b2fbab335db9a863a0b19bc8fd57a6&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','缘起','','017','体相用-从不同方面去看待','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487203&amp;idx=2&amp;sn=63498c31cdea5b2939b9215aac47f7eb&amp;chksm=973cd765a04b5e7345e2086cf788a0c33ac0b34429bdb08b615f230ce2fd04536843be01d44a&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],

['净土次第修','分类导读','学习','','001','学习（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488902&amp;idx=8&amp;sn=95a1113502814a6e8416c35deef13748&amp;scene=21#wechat_redirect','无','无','文章','原始'],

['净土次第修','分类导读','拜忏改过','','001','拜忏改过（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495401&amp;idx=2&amp;sn=5804607535723fb7137f18bd1f7050cb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//['净土次第修','分类导读','拜忏改过','','002','迅速转变','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=5&amp;sn=d097ed2e8235cf49c9c596562e4f79ec&amp;chksm=cff5024cf8828b5a2e5ee0143b232c75e6310296f1579262f083639ecb1eb1deee53a30004f8&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','拜忏改过','','003','改过要有重点','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=4&amp;sn=679e9bc9de558404d3d48fca16ea09fa&amp;chksm=cff5024df8828b5ba928a3e0f9c38c541870a9d3f24f228ecd5215b01ebe2ec0ca196a1026eb&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','拜忏改过','','004','忏悔改过之次第','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=5&amp;sn=6b6e6027e9da4a1001a82df8a4fe5f96&amp;chksm=cff5024df8828b5bdee3a498ec99ea16ce7d9c736a2cebccc17ec5bf7a0e0c43041b989f94e7&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','拜忏改过','','005','烦恼种类','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=7&amp;sn=0ccfc9a1b5d240ea9a3f82d37e10c5d5&amp;chksm=cff50fbef88286a8ffb2da9ef635f0816e93dea230590de499dc14efcdca3eeac2a96d079ab1&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','拜忏改过','','006','善护口业','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=5&amp;sn=0d2c6aebe1459c260f12afd3b29e0213&amp;chksm=cff50fa4f88286b2e473e76946031059c3dd5ee8709b7091943e33c4a766b1ade14a1e361ef5&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','拜忏改过','','007','居士礼仪戒规','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=1&amp;sn=91a3069ed9c71057e45dd82159e0307b&amp;chksm=cff50e11f8828707144297710e5a35295b718a02b25b5e14df14468dbfb0a44dd5bbbbdc600f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','拜忏改过','','008','女居士与出家师父的相关礼仪','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=3&amp;sn=d937aff81e77e63f36f7d75a3c1da9a9&amp;chksm=cff50ee7f88287f1b0f47c9725c83771559851fe49067e1c1ef690c8224b82966a3bfe7a622d&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','拜忏改过','','009','破邪显正之一','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485761&amp;idx=1&amp;sn=eeeb7ca6903ad9bd09064e0c51cd971f&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','静修','','001','静处养动处练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491961&amp;idx=1&amp;sn=e4abd5eba9868c1163e24aeedca401cf&amp;chksm=cff6f06bf881797da87b5375cb79450e1d7d21cef006058e417dad681cf5643b08ba62087778&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','静修','','002','静心入手处','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=1&amp;sn=0e58bc1a6f7bad7fa43fc1c36cdcd5e8&amp;chksm=cff502dcf8828bcaad554efeee6f8294127dff7503635065ff2faeb92ea7c1d42250687efe93&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','静修','','003','深入改变','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=4&amp;sn=85359f5a83496138217db26c60ae8808&amp;chksm=cff502dcf8828bcaa51ec2171ddfc1d5a4b2fb971c0f7f78d0807ee48906d01fe590a2acab27&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','静修','','003','如何打坐','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=4&amp;sn=4e419eab599ca742ab85baf5a818332a&amp;chksm=973cd736a04b5e205dee155c807e5d2f780265e8d99fec32cd521b8383a8f125031dd88d1727&amp;token=1576720142&amp;lang=zh_CN#rd','无','有','文章','引用'],
['净土次第修','分类导读','静修','','004','静坐时间长，腰一直疼','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=5&amp;sn=3e892d4ef657e3d18aa8c77205aec89b&amp;chksm=973cd736a04b5e20f6b78c8c31c556c2f3814b3ae963a82a2e78df1640f6163d412696f1da8d&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],

['净土次第修','分类导读','思维修-经论依据','','001','陌生又熟悉','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=3&amp;sn=d4d6e30a88e8bbef648fbb22f110d541&amp;chksm=cff6f00bf881791d0f99faa87eb01dac803a8121d395012751f2170eaf571c71cd372bb1344c&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-经论依据','','002','无量寿经中的思维修',myaddr+'jtcdx/yszl/079.html','无','无','文章','引用'],
['净土次第修','分类导读','思维修-经论依据','','003','劝发菩提心文（前言）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491847&amp;idx=3&amp;sn=7a4fee91cce96445e70b781d0395f819&amp;chksm=cff6f015f8817903b2f7c9633bad6e3c1ad1aae034e7ec50b40d1e4200e254846e02d50c7cf9&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-经论依据','','004','学佛四步曲','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=1&amp;sn=fd075a51731cb06e342484e6adf02b27&amp;chksm=cff50fa4f88286b2668d2228bdbe1bce863f613e49818d2cc7307f45774f5dc8cf13dd2a8dbf&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-经论依据','','005','关于“正思维”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=8&amp;sn=c25661cfe5917741015fc97e6668d9b3&amp;chksm=cff50fa4f88286b222a2b26946869b06f415152d0d676f58a082f2141e8ad89820b52b471cbb&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-经论依据','','006','思维修之运用（印祖）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=3&amp;sn=cad8c6f2d5db705b732c5e23c56cf0d4&amp;chksm=cff50e11f882870721022cd1e6743e1c0e0570baade219915ca4b636a5d1107998a2bc49af8c&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-经论依据','','007','关于“无记业”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=1&amp;sn=19491abad4676751584885102a870922&amp;chksm=cff6f192f8817884d4311963e36c8fe3077cfc714e815c79fe2d71679e9b6d8114b9f926f447&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修-理念与方法','','001','理念与方法（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495401&amp;idx=3&amp;sn=97c2c8b435516f0212966b06262a9b3c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//['净土次第修','分类导读','思维修-理念与方法','','002','思维修的说明','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=3&amp;sn=7d198515e3b12f3817c6f783785b80f9&amp;chksm=cff5024df8828b5b0ad43870ad6bde90c89d33438788ba6c90a3a9a2f3318b340211d7de050d&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','思维修-理念与方法','','003','补充说明一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488368&amp;idx=1&amp;sn=f530d76471a4d5afe7c7aa2adab471e0&amp;chksm=cff50262f8828b745fa8176e60ee6b7615989dedde6f2b1d28a58f5b3166aa230b7c6e82c3aa&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','004','善调心态','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=5&amp;sn=ff87bb8dd6d71b6e0c4f93b77c560686&amp;chksm=cff50470f8828d666e6e2e6d0246f517ec3974c1c865d2f0a90432e114da4952587b35d0c046&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','005','思维修补充一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=3&amp;sn=f20a1d5313eba54e82dc36e4f292ac6f&amp;chksm=cff50464f8828d7242fb4d3974156b50d52bbfa5fa02b7c68886de8bbb5e4524bd57f9c8aa55&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','006','思维修补充二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&mid=2247494903&idx=6&sn=dcdf70a5184dc5c4fc4b1a380e3eba26&chksm=cff6fde5f88174f3c40aa935f77cd11cf1ed483a48a3824a7bdf63ae347901ef3554d4a7acf1#rd','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','007','思维修补充三','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=1&amp;sn=912886f6bd6e0acfc142bc817a60321f&amp;chksm=cff6f00bf881791da7acbf469e9cae09f9a642d1f09f5891c4fe838344baa03cdf0d5f56152d&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','008','思维修补充四','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=2&amp;sn=f1295b4a0922846c0acab4ebd0e19781&amp;chksm=cff6f00bf881791dced6b256943ce17393037e42336aa916bfa1c955f62d4f3494b0f3b23680&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','009','思维修补充五','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=4&amp;sn=e9ad1f2889171cc2c6ccb694228c3bd6&amp;chksm=cff6f00bf881791d2434a70b8e66b6ae97fe4c078509705b1d9e3f925e6df24830e85f5fc9a1&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','0010','思维修补充六','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491847&amp;idx=1&amp;sn=d595298ce014192ae2d884dc1aa19d9e&amp;chksm=cff6f015f88179039cd62d31b6fd251c3cb1b1d6959769bb92b3e0a854e87689e4796e9ef98e&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','011','思维修补充七','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=4&amp;sn=48b4a691ad8a39e3b88811852b85068e&amp;chksm=cff50fb0f88286a605f8fb5aec6b35b2317e974880821762c9f55f8523098e22e288c41fdad2&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','012','思维修补充八','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=2&amp;sn=fe4893d26935b907eea1969f5ec34f40&amp;chksm=cff50fbef88286a8c8399c621752a6c226647042aafedfb03564e6a3f4fcb30a72b2a35df730&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','013','思维修补充九','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491254&amp;idx=3&amp;sn=3ef96783ad57468d0649616da956e7fd&amp;chksm=cff50fa4f88286b27b52d3918e0bd9731d2c5626f4a2811f405aeba656bffbebac15fa04ee3f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','014','榜样的力量','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=6&amp;sn=6fde2171d3f7c9cc53af1ba25e678896&amp;chksm=cff50ee7f88287f151f3ee8c6c140543b140d6a09142a9fd3cf56203f3adcd94f916cfc5c19f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','015','思维修要简捷高效','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=5&amp;sn=ae7b60563bb118a3c720c82a3f7f52e7&amp;chksm=cff6f14df881785b1f7dea39d9c6d5db2f1db4c038b24b5d51dea1a3de7d207e94c0c62dfa03&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','016','每个项目修学所遵循的过程','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=1&amp;sn=8b83dd687fab312173560ebefe5dc9c9&amp;chksm=cff6f160f881787642ebadd2cbd6fdc2b2a9a1c0db78447f3e964b82a2439a1c04618967aaf0&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修-理念与方法','','017','对境时怎么灵活运用项目','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=2&amp;sn=50bdf2072d2da14f060f49ed980603b4&amp;chksm=cff6f160f881787653e07c0a7ff478aaa5b64d09c22a8c63eb9986c7583c547d64c7e7021766&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-修行意愿','','001','关于诚信和誓愿','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=7&amp;sn=7f6a754e1a8966dacef6a6ee7154ba59&amp;chksm=cff6f160f88178761c0c59b2688bdc5bb000a8c8ea97ad33a4d1547580c9b4805fa3be26097b&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-修行意愿','','002','修学纲领','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488233&amp;idx=4&amp;sn=027751384cf4326fe04b1d1da9773efa&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-修行意愿','','003','心田种子','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=1&amp;sn=ec90d44dd1fd183750b1f61b9c576cb4&amp;chksm=cff50470f8828d66f6fab0bb0afe504ea6b2f14fbdbfc85ab975b4efcc3c4d65372622a0fe84&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-修行意愿','','004','真正的道人  ','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=2&amp;sn=c74dddf57312101ea5bc854020983171&amp;chksm=cff6f162f8817874cb713c7ebc135f2ddacbf3e1a1ec6613c55eb7bd449802af88013201cc7f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-修行意愿','','005','修行意愿（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495420&amp;idx=6&amp;sn=1f4e99eeb2511e8cdc7e9de939c344ea&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//['净土次第修','分类导读','思维修项目-修行意愿','','006','如何起精进心？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=5&amp;sn=ea10f432cc8cfef5b522b59862267de2&amp;chksm=cff50278f8828b6e5142232e5b2f36c9b6cc8f67c1bfd097d9866902db47e46713e34de9b016&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-修行意愿','','007','七笔勾（莲池大师）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=2&amp;sn=c1d868407c9f10f2155c5cc92f422396&amp;chksm=cff50444f8828d52d245eaec2e3d5eb1efe66a45b8905ae759f4710cac8c9815bb0e86e3d854&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-修行意愿','','008','世事浮华','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=1&amp;sn=c0679cbea8506ebd66fc196cbf2a5334&amp;chksm=cff50464f8828d72a7bf8363c32e4077d666f02275bead27cbc9cad03145b66bf4456eb8cf09&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-修行意愿','','009','师父开示:苦苦·行苦·坏苦','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=1&amp;sn=98beec0192c406f0d5059f6127382746&amp;chksm=cff50ee7f88287f1e43024d61fb84d877cb13cb79c716450b96a25a9d4b2c0208db70797635b&amp;scene=21#wechat_redirect','无','无','文章','引用'],

//['净土次第修','分类导读','思维修项目-自律性','','001','自律','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=4&amp;sn=1d6acd7d2b6325db9b6f4a93c7a6d3b7&amp;chksm=cff5024cf8828b5aedeee0596f4a1911cfbcd013c4144ec10391e231c3efd453ac42260d608a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-自律性','','002','自警（莲池大师）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=8&amp;sn=355d8a980e79b4d972cbbd8e65c548cb&amp;chksm=cff50444f8828d5206ebae77a805498775667aa540ca71b9e118b6dccdf88efae1d803871a71&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-自律性','','003','关于戒律','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=3&amp;sn=c40b3e4e9fd3aaa63e8de5e9a00d0064&amp;chksm=cff50fb0f88286a6789a32d0e69c06fa089bb607decb819717afa1ce24638c229ddb31bd5569&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-自律性','','004','八退八进之训','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=4&amp;sn=5912392cffe638c1297523d0016234f7&amp;chksm=cff50ee7f88287f1bfe2919c9cddfa7dd4bd092a5d778f946f9d0632b6812c687c537c80a987&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-自律性','','005','四种决定清净明诲','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=4&amp;sn=71b93abf3770ee13d80f45f05232d175&amp;chksm=cff6f14df881785b4fd30637739f3dee3fa92f15fe3cd4f09e41781f12bd2006799a21c36745&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-自律性','','006','以果决心做好自律','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=3&amp;sn=0dffc8ff65e0fd4b00c8081218b50b43&amp;chksm=cff6f192f8817884a2a802cc92cf759f12f18bb3f01d0be9493b380c3ef7c2acaef06791cf1a&amp;scene=21#wechat_redirect','无','无','文章','引用'],

//['净土次第修','分类导读','思维修项目-包容心','','001','包容心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=3&amp;sn=2182da9219d8e2c9242b32fd8ccc3d3f&amp;chksm=cff502dcf8828bcac3d4e471ab2291a70d9e6ee0883b3f91789b8cf01bc019061d5eac62a1d2&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-感恩心','','001','感恩心（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495420&amp;idx=7&amp;sn=68f2a91841ab0a180f9cac9b7f4faa8a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','思维修项目-感恩心','','002','思维修项目“感恩心”里加一条内容','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=1&amp;sn=f78cd5808348ce5e0bae9bbcd6b80bd0&amp;chksm=973cd74da04b5e5bd32ebf5dfd80f6b345aaa325066dc7d73afbd41cc3ec0b3e7dbd5233d3b7&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-感恩心','','003','师父开示感恩心','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487179&amp;idx=2&amp;sn=b7a075acfabf6b477ebeb09bc9720110&amp;chksm=973cd74da04b5e5b6ecf7641df727988ff9b181009f6697d0ddd05587c3e7e67383aaa627814&amp;token=1576720142&amp;lang=zh_CN#rd','有','无','文章','引用'],

['净土次第修','分类导读','思维修项目-礼敬心','','001','礼敬心开示之一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=6&amp;sn=90f65fff3f4676a41bd51d1fa6b74027&amp;chksm=cff6f162f8817874d9887dc1531f6065013f8bfed8c7fc2207aaca260b53115fa14009a11db7&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-礼敬心','','002','礼敬心开示之二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=7&amp;sn=7e21a4c39d8e37fa3ef4b5b5736099b5&amp;chksm=cff6f162f881787483d7b545fafc07835c5bf04097e003282df29fd909f802f1f2e88ab5b4f7&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-谦卑心','','001','谦卑心（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495401&amp;idx=4&amp;sn=7b2682a2f821c115e172bb9926277258&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','思维修项目-谦卑心','','002','平凡','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=1&amp;sn=5613ea6343fa91b5d1d180c364f118a3&amp;chksm=cff50278f8828b6e984c414040a24b7a7c36354828292ae4e652faa4a41279fb67dc62d77863&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-帮助之心','','001','帮助之心（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495401&amp;idx=5&amp;sn=2b7de6bc3ad01e7ff0e6fafc807bdaf6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','思维修项目-帮助之心','','002','关于孩子的问题','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492298&amp;idx=2&amp;sn=632082c5a33967eba4359f4d0632f4d0&amp;chksm=cff6f3d8f8817ace56bc42385862471724083fdf08daee5f536692d207e891b1faf051dfb13f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-帮助之心','','003','佛法助人','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491390&amp;idx=1&amp;sn=6958d24d296bf56456ac293680376bbb&amp;chksm=cff50e2cf882873a628d09ac19158da3e08972a54f9bdae3f9b7d4ddec1bf769524cb4c7683e&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-帮助之心','','004','有控制心，就是走魔道','https://mp.weixin.qq.com/s/RGMbbkhh4mDgHNbsUM6lUA','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-去虚荣心','','001','去虚荣心（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495401&amp;idx=6&amp;sn=0cb7e60d18e7c5ad4a71093d0e8089d8&amp;scene=21#wechat_redirect','无','无','文章','原始'],

['净土次第修','分类导读','思维修项目-放松去紧张急躁散乱','','001','放松去紧张急躁散乱（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495420&amp;idx=1&amp;sn=627fa88fbe78d59204b2c3d32e1b25f3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','思维修项目-放松去紧张急躁散乱','','002','放松训练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491865&amp;idx=5&amp;sn=c5c9e8b5bd3891e94293d651655d778a&amp;chksm=cff6f00bf881791d876056303a76aaad20df452f0b1258de3c4a0b2e3f5d05a26b3cce95c91c&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-放松去紧张急躁散乱','','003','当下','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=7&amp;sn=9c2d8de373a025bea1a20bf22046f5c4&amp;chksm=cff50e11f8828707179f711a9b0d8e74e99a9402f7297ced9a82f8457b4a64b4c4824cfad45f&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-因缘果','','001','因缘果（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495420&amp;idx=2&amp;sn=ae4b5a488257fed0e94b207d58563f46&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','思维修项目-因缘果','','002','因果无情','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=8&amp;sn=413def253f8fff1be59b44a4d589299d&amp;chksm=cff5024cf8828b5a7d5ec84a7b3e2734de769ee885cb75a65817c53258eb669d1391f436c093&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-因缘果','','003','再谈因果','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=2&amp;sn=cc350c0f414df514c1ed0dc24dd6f18d&amp;chksm=cff50fbff88286a92342a8af00151dc647ade008b2bcf551ef8e01ef0b468c243222cbf1dc70&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-因缘果','','004','因缘果四条的简要概括','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=6&amp;sn=0a0492ae508d2a336bb98ff2291bc947&amp;chksm=cff6f14df881785b25330359effc05ede073508494f21430229cff508b1603e0486f6a634120&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-因缘果','','005','当下的心行即是种因又是助缘','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=7&amp;sn=acb50bf733b80709c76c8c1060a3401c&amp;chksm=cff6f14df881785b51254a73259bedc8e485e804ed09c2d72dcf92014956cc934345df61b13a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','思维修项目-因缘果','','006','民国第一术士','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=8&amp;sn=a515cbe191178ff327917933ab6a1727&amp;chksm=cff6f160f88178764986cab9e5d0a43620bc6f000bfd338dcc17869c757fe8b5bb9010ee61a1&amp;scene=21#wechat_redirect','无','无','文章','原始'],

['净土次第修','分类导读','思维修项目-情感','','001','世事浮华','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488886&amp;idx=1&amp;sn=c0679cbea8506ebd66fc196cbf2a5334&amp;chksm=cff50464f8828d72a7bf8363c32e4077d666f02275bead27cbc9cad03145b66bf4456eb8cf09&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-情感','','002','国王与大臣','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=4&amp;sn=fc1b3783c31e9c4152d6cdb06cd01c05&amp;chksm=cff50fbff88286a9eeebf484961b7bb79730c80801815caf2f51feee5ab0109bdbdaa29f4046&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-欲望','','001','欲望（小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495420&amp;idx=3&amp;sn=5336593a00553c702c8fe6e26c643fdd&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','思维修项目-欲望','','002','莫跟着感觉走','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491961&amp;idx=2&amp;sn=25a8257af22a304bc6ce2794393eb391&amp;chksm=cff6f06bf881797d5b64b2e2d0254264925c5a6eb369221c5995e42dd37da8f2897a5a7bedbc&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-欲望','','003','欲望的本质','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=6&amp;sn=c40d0943be13c6f2a5990bf0adfaefd7&amp;chksm=cff50444f8828d52b08a6f6d44ca9a07d6529bf71ba6b5189feda586ff0b9ef419784ab0e312&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-欲望','','004','四种决定清净明诲','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=4&amp;sn=71b93abf3770ee13d80f45f05232d175&amp;chksm=cff6f14df881785b4fd30637739f3dee3fa92f15fe3cd4f09e41781f12bd2006799a21c36745&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-病苦','','001','怎样对待病苦？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=4&amp;sn=995af457532a16b63313dd6d4b8d2776&amp;chksm=cff50470f8828d66aaba052555e4e15ecc96a09f2aa099c1172b8b32ef5611992d88677ce494&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-弱化我执','','001','平凡','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=1&amp;sn=5613ea6343fa91b5d1d180c364f118a3&amp;chksm=cff50278f8828b6e984c414040a24b7a7c36354828292ae4e652faa4a41279fb67dc62d77863&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-弱化我执','','002','拓开心量','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491244&amp;idx=4&amp;sn=51f0ad041f9bc3d3e82eee49fcb38e38&amp;chksm=cff50fbef88286a8020fc47b450bcd82a69d8ba675d7ce5210fd7968e3eef5964480c9e2aeec&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-弱化我执','','003','国王与大臣','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491245&amp;idx=4&amp;sn=fc1b3783c31e9c4152d6cdb06cd01c05&amp;chksm=cff50fbff88286a9eeebf484961b7bb79730c80801815caf2f51feee5ab0109bdbdaa29f4046&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-弱化我执','','004','关于“我”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=6&amp;sn=c4ac2d7098dacc353bd1ab828fad329e&amp;chksm=cff50e11f88287074dcc685b3188c8f2f88d9620b8754fec555d6d4ceae1399867a9b50f1ded&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-弱化我执','','005','缘起浅谈','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=8&amp;sn=bf267f32028e5803c02411afcce1652d&amp;chksm=cff50e11f88287078e5dbb8b2fb41e979aab5bc3dd9f9f2e520414e719794dede7fae09e10a0&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-弱化法执','','001','弱化法执（ 小段汇集）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495420&amp;idx=4&amp;sn=5eb0c618b9c58adc7d3bb864763b359b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','思维修项目-弱化法执','','002','缘起浅谈','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491331&amp;idx=8&amp;sn=bf267f32028e5803c02411afcce1652d&amp;chksm=cff50e11f88287078e5dbb8b2fb41e979aab5bc3dd9f9f2e520414e719794dede7fae09e10a0&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-弱化法执','','003','无趣无聊','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=2&amp;sn=e433cba895117dee1103cbf8f18f7d74&amp;chksm=cff6f192f88178840b673d1591cc57c1ce77adfa3b887d6ed318b0b8f4889d055fdfcee54c37&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-出离心','','001','出离心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=2&amp;sn=4b247828d0000c2a8ccfbde9292c1806&amp;chksm=cff5024cf8828b5a22ce0df5b5eebcb97134052191b743296a5a30a164f95357d3563e2454b8&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-出离心','','002','没有出离心，你做再多的事，也依然是轮回业','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487152&amp;idx=8&amp;sn=f92415a6f0ac1b4aada3e93b82d7f333&amp;chksm=973cd736a04b5e20507023a5084746d95e7338550a4f139f7bce4242e5970cb182e7949362d6&amp;token=1576720142&amp;lang=zh_CN#rd','无','无','文章','引用'],


['净土次第修','分类导读','思维修项目-极乐世界','','001','怎能不求生？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=3&amp;sn=11ed4be1a83440e393bd64e9d5688162&amp;chksm=cff5024cf8828b5a4e5dafa0c263ee200b2f258c55515f36b9d7da9a72a087b0da69c00291bb&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-极乐世界','','002','回故乡','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247493781&amp;idx=2&amp;sn=e9e04e21ee6e429f251d6d9caa64cb41&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-极乐世界','','003','西方发愿文（莲池大师）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=1&amp;sn=9ed115d7fa854689e9072626502bb63b&amp;chksm=cff6f162f8817874f508100b402a081b55c27ab6a8dae078e7f547cf63c8ead8f681a3637a88&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','思维修项目-阿弥陀佛','','001','一心皈命','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=1&amp;sn=a72cd9d57c752637ca62784b18dd2ddb&amp;chksm=cff5024df8828b5bc307661cac75974c48b786b8f11ea91d38a679864cf1834a49e24461487c&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-阿弥陀佛','','002','靠什么往生？',myaddr+'jtcdx/yszl/024.html','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-阿弥陀佛','','003','净土法门的核心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492298&amp;idx=1&amp;sn=c8ee3ee2ae6a1df6658c16d0ef447318&amp;chksm=cff6f3d8f8817ace93a36335e39844204643aa761ffadf5ac66a3ea5a393383dd12b026bc878&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','思维修项目-阿弥陀佛','','004','三力与往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=6&amp;sn=b6fdf914841aa704f76bfdccbad5bfea&amp;chksm=cff50470f8828d668722b0c709562fbb7d8665a3a03fe2cd929707d88f474c902d67f31f7ad0&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','思维修项目-阿弥陀佛','','005','专修净土（印祖开示）','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485529&amp;idx=5&amp;sn=4062d3e1ecefcea94069e4d843927bbb&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','安住修','','001','念佛方法（印祖）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=3&amp;sn=c426724e77acefa2bdb6a65db7ef4ab4&amp;chksm=cff50278f8828b6e9b3d5417a0eaee8058fc101d27317bdd95f50ad5872311c5718e2dc1bdca&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','安住修','','002','读经方法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=4&amp;sn=5072a77b0bc162ec1c5cbf458a878846&amp;chksm=cff50278f8828b6e55292e2d288a7687bb0090400dfb61e669c575bdbc991628df271f5d37f1&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','安住修','','003','质量与数量','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=5&amp;sn=f03ffbf5fed85ade8c1afa0a93287d04&amp;chksm=cff502dcf8828bca68676178ec806cc9bd10021b659a94e8e8c7055922b459f10522a418073e&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','安住修','','004','一向专念','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=6&amp;sn=b6748ee26a4c0a35c729356461752e1d&amp;chksm=cff502dcf8828bcaee49b049a9cf961ae36a95aee7106d52f577913fb6c63e20904f0d5e1794&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','安住修','','005','念佛功夫（江味农）',myaddr+'jtcdx/yszl/053.html','无','无','文章','引用'],
['净土次第修','分类导读','安住修','','006','念佛四层功夫','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=4&amp;sn=a9e424a3d4d74e73b2b4ff58a17e56de&amp;chksm=cff6f192f8817884670a016c16e98605fe76c61a5c24a8c9bae4399896ed339c5993a9946b62&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','安住修','','007','关于每日功课的读经','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491712&amp;idx=5&amp;sn=a765e434c3d108ce2dd8a6c1768b1059&amp;chksm=cff6f192f8817884f6c80a49915a2c46036e878e0143d595abcd502e3718587f830553341cae&amp;scene=21#wechat_redirect','无','无','文章','引用'],

['净土次第修','分类导读','纠偏','','001','《纠偏》小段汇集','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495420&amp;idx=5&amp;sn=979decdaf2fee0df9616ca4438ece3f1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','分类导读','纠偏','','002','形式佛法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488233&amp;idx=7&amp;sn=c58867d8d0405c6f9d4437804a065898&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','003','修行之心（这一篇也可作为单独的思维修项目。将心调到中道）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=1&amp;sn=2688a9f6fac67658fb2f14583a356768&amp;chksm=cff5024cf8828b5a4cd68ff03b16891d670a55aecd965d094036e9fbad56b372c19d2c5b1769&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','004','不可以任何理由生气','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488350&amp;idx=6&amp;sn=33c6c4bd544dbde1ed1bf218eede2e32&amp;chksm=cff5024cf8828b5a744321015544770f4198bf2964491d5c06db1920634a4dc9c7558d44acbd&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','005','问题出在哪里？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=2&amp;sn=a54dc47748e6a624b74e8b4464c7d06b&amp;chksm=cff5024df8828b5b07fedb223e56d7b9dcc9c46376bcd7be85ce3390da822b830b9d536355ce&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','006','法，用对否？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488351&amp;idx=8&amp;sn=7607c5bf690ee5c6b2c65a30c83405b9&amp;chksm=cff5024df8828b5b87fd5884910bb75332eb046a562a505856cc2b611e434ec3551630a62469&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','007','热衷于福报','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488362&amp;idx=2&amp;sn=c6d7f99f89861ba468902576324722e4&amp;chksm=cff50278f8828b6eb4403df2434d0a3f1197a7dfbd3f82b7e22a5cf8fc455a970e5fb9dca413&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','008','突破障难','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488462&amp;idx=2&amp;sn=8ab55ae9b405c9db50be4acc5a5ac5c6&amp;chksm=cff502dcf8828bcaeba2c9e3abd48597f85fe6ab77a2e3f897915054dc2a1340673886873d50&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','009','对法麻木','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=1&amp;sn=25de909a5ae3f7ab883f5aa41f7ee56a&amp;chksm=cff50444f8828d52ce044c446837743e61347a203fd524ea9f16a0398e7efd09f0a8d5ffa75b&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','0010','往生不是自私','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488854&amp;idx=7&amp;sn=8cf5e09b04ea43a42c59360594e15b2c&amp;chksm=cff50444f8828d52947e81ff111c00cbf2d805e080c32c97a2461791c9298a3012626f65c723&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','011','六度何成障碍法？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=2&amp;sn=133afd6e7e0138ca1b7dc129732e2dbf&amp;chksm=cff50470f8828d66f5f75759c1c4f440e0366cc499a880801737319b7246525f9684992b3dfc&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','纠偏','','012','关于净土流派','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=3&amp;sn=4caee92ba7e0b32fb7e277db7b868fb6&amp;chksm=cff50470f8828d66b05566e7a5f816540e310c02d41ed9046d69153d31701b02b7d9d8ee5e3a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','013','检验标准','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=7&amp;sn=77748bfcbe92bbe598b2bc6b15067bbd&amp;chksm=cff50470f8828d66d5ade9e425b8b86c648db275cf6771ca54d37d0cc8f8a380cb56454a5986&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','014','往生的障碍','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492298&amp;idx=3&amp;sn=6893f837be8a36a6e7122a54bf018264&amp;chksm=cff6f3d8f8817ace5a0ee7dacabb121e9e59a7331cbb7b631270f8fb6887142bf8898913d175&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','015','关于孩子的问题','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492298&amp;idx=2&amp;sn=632082c5a33967eba4359f4d0632f4d0&amp;chksm=cff6f3d8f8817ace56bc42385862471724083fdf08daee5f536692d207e891b1faf051dfb13f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','016','关于皈依','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491234&amp;idx=1&amp;sn=2418b2da2401132f11ad2e62997936b0&amp;chksm=cff50fb0f88286a6cb0d0b194319ec1985c34bb905651cba97dba3516be07a61ea950c2da6d1&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','017','布施注意事项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491573&amp;idx=2&amp;sn=d1f79b29f1a687f2b2a92220b59422aa&amp;chksm=cff50ee7f88287f189bbc7d9ab141e1bdca1df57515eccd1257886a28413822b1f9257e1eb3a&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','纠偏','','018','关于扶乩',myaddr+'jtcdx/yszl/135.html','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','019','破邪显正之一','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485761&amp;idx=1&amp;sn=eeeb7ca6903ad9bd09064e0c51cd971f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','020','师父教师节开示','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491698&amp;idx=4&amp;sn=10d3345c4e456e6a21cf47ce5edc762d&amp;chksm=cff6f160f8817876e4303406f8db14a0fde3a183cc684ceb423ff651c34c122ecaaf92711d78&amp;scene=21#wechat_redirect','无','无','文章','引用'],
['净土次第修','分类导读','纠偏','','021','真正的道人','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=2&amp;sn=c74dddf57312101ea5bc854020983171&amp;chksm=cff6f162f8817874cb713c7ebc135f2ddacbf3e1a1ec6613c55eb7bd449802af88013201cc7f&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','纠偏','','022','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=3&amp;sn=1c52cdb9868d2b36bc1037efeb6e8e1e&amp;chksm=cff6f162f8817874eab76e5304c98727a5888812f0c9950ca0605708942cc23f0caa507b4f38&amp;scene=21#wechat_redirect','无','无','文章','原始'],
//['净土次第修','分类导读','纠偏','','023','印祖破斥求开悟不求往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=5&amp;sn=86578e21b04ced04c0393276f48eb538&amp;chksm=cff6f162f881787468faf3c72b83509ada27de4b75b1da4c7c15949433f4b0a761c40a5f7487&amp;scene=21#wechat_redirect','无','无','文章','引用'],
//['净土次第修','分类导读','纠偏','','024','短期出家是不如法的','https://mp.weixin.qq.com/s/jRMWNwOgnUbkM82Xab0vqQ','无','无','文章','引用'],


//净土次第修 问题列表_全部
['净土次第修','问题列表_全部','','','001','01菩提心	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490772&amp;idx=1&amp;sn=271ff4cdeec6da0f8d38043ed9deccfb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','002','02次第修	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490772&amp;idx=2&amp;sn=9ce44b2d0aa3d2e52e8a0b229a85a11b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','003','03功课','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490772&amp;idx=3&amp;sn=19d7b5af85d4bcf325aafbbc2dc9eae0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','004','04窍诀	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490772&amp;idx=4&amp;sn=8f3b956db04312ff24fa07ca35941aca&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','005','05止观	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487821&amp;idx=8&amp;sn=1b6a4c6db8b56c99da07c79cc1ad0e72&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','006','06觉照','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247490772&amp;idx=5&amp;sn=b42264b0abe0f267639b798e8968bdad&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','007','07缘起	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487836&amp;idx=2&amp;sn=22ed0a9257f220937d423816f22242a7&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','008','08学习	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487836&amp;idx=3&amp;sn=b96ac4e445578565627b45aac7b48868&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','009','09拜忏改过','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487836&amp;idx=4&amp;sn=7c205de10968bc0facfa03857b031c5a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','0010','10静修	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487836&amp;idx=5&amp;sn=b4d09008f0a710a52e09b79da8e57af4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','011','11·1思维修的经论依据	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=1&amp;sn=a8ffd3979cd3ff9031aa9bdb456da9d7&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','012','11·2思维修理念和方法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=2&amp;sn=2f16cfc21eb16a8515520924bebbed82&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','013','11·3思维修项目【1·修行意愿】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=3&amp;sn=e393cc8059ba6351360e8613fdc81e94&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','014','11·3思维修项目【2·自律性】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=4&amp;sn=a15592f33d36d1ff4c1955ef219fc94e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','015','11·3思维修项目【3·感恩心】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487848&amp;idx=2&amp;sn=66d33bb7943ce2dbc3e157e075fde349&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','016','11·3思维修项目【4·谦卑心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=5&amp;sn=8b8f1a457ca99b568b12d1c7d11d430d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','017','11·3思维修项目【5·帮助之心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=6&amp;sn=14b357a7c7bd3cb0b6e71027494106cb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','018','11·3思维修项目【6·放松训练】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=7&amp;sn=2e1e263d8103f76efe1a5f9ebebac1e9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','019','11·3思维修项目【7·因缘果】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487802&amp;idx=8&amp;sn=7ed9975d150a9485e3341fa5b4003eb6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','020','11·3思维修项目【8·情感】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487777&amp;idx=1&amp;sn=24a4f8f32372e648e131f28ada3fcf7a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','021','11.3思维修项目【9·欲望】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487777&amp;idx=2&amp;sn=dece6565c12e21c2ad821ae5245fc8e4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','022','11·3思维修项目【10·病苦】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487777&amp;idx=3&amp;sn=955861885e3de24af8cac3ba778c0922&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','023','11·3思维修项目【11·弱化我执】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487777&amp;idx=4&amp;sn=86e06af5ccf7a3c5ee65121e017b8a39&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','024','11·3思维修项目【12·弱化法执】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487777&amp;idx=5&amp;sn=8fc2c6a53d1d0822071db2f3793dac74&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','025','11·3思维修项目【13·出离心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487777&amp;idx=6&amp;sn=c5d47c63160901e395d8ba78b133bd00&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','026','11·3思维修项目【14·欣求心】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487777&amp;idx=7&amp;sn=a7a2bb9ee7268953085dd261a00e189e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_全部','','','027','12安住修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487836&amp;idx=6&amp;sn=e46e3c8c497d68261c949464885bb946&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//净土次第修 问题列表_部分
['净土次第修','问题列表_部分','','','001','01菩提心	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=1&amp;sn=4ff07a76e51e486ab8f91ff31febe01a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','002','02次第修	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=2&amp;sn=1b63dfbeeef3575987f22cafdb555a84&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','003','03功课','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=3&amp;sn=6ac4b1405e4c5373b3d850d61cfd9b9c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','004','04窍诀	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=4&amp;sn=95ac71d47fd8f179b181003fce346cea&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','005','05止观	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=5&amp;sn=20d1d0513b4ff05d5fb723bc91a0000a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','006','06觉照','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=6&amp;sn=1c2eae8a48dd1696e21b425976c2e54b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','007','07缘起	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=7&amp;sn=fee1114c9a2838af098cc9fa80ad1c56&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','008','08学习	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494205&amp;idx=8&amp;sn=239a4e7dfe6e16d7fe4bc238e9563f32&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','009','09拜忏改过','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=1&amp;sn=79899ee7b9fa758fa0c0cdaa22c61472&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','0010','10静修	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=2&amp;sn=e0114d10432fad99cbe98364b009136b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','011','11·1思维修的经论依据	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=3&amp;sn=3a946cfcc1c261be0034d63819cd6bf4&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','012','11·2思维修理念和方法','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=4&amp;sn=6c40e046ee1aff577b8b5015d417ba1a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','013','11·3思维修项目【1·修行意愿】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=5&amp;sn=d721abf0bfe034f462ad8860019b3958&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','014','11·3思维修项目【2·自律性】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=6&amp;sn=42d0e9c18193eb5c413bd61e5e51dc4c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','015','11·3思维修项目【3·感恩心】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=7&amp;sn=92113c640dcefd16861f9d5767ac7943&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','016','11·3思维修项目【4·谦卑心】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494230&amp;idx=8&amp;sn=e5e807ba98a7a4c635c0ca205fa51d69&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','017','11·3思维修项目【5·帮助之心】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=1&amp;sn=3e6fae484f1040ca67faa415777fe377&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','018','11·3思维修项目【6·放松训练】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=2&amp;sn=ff426bcf74eec2833ad84036b4951808&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','019','11·3思维修项目【7·因缘果】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=3&amp;sn=75900e408c50240ee6b7f8cd9bd73bca&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','020','11·3思维修项目【8·情感】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=4&amp;sn=a5a0d195cfe5b26e39a9474f966246f1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','021','11.3思维修项目【9·欲望】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=5&amp;sn=03d3634b9e141784d2c2af9a95628329&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','022','11·3思维修项目【10·病苦】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=6&amp;sn=59a48eebae12524e5ea0897ac2a0a6e0&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','023','11·3思维修项目【11·弱化我执】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=7&amp;sn=5bedf1a4199be44e46cde4978407afdc&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','024','11·3思维修项目【12·弱化法执】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494241&amp;idx=8&amp;sn=5c6290bdd674af68ce1160f9e57a6054&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','025','11·3思维修项目【13·出离心】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494250&amp;idx=1&amp;sn=74753426e5bc9e3a76d56f1cdcbc00b6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','026','11·3思维修项目【14·欣求心】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494250&amp;idx=2&amp;sn=7155dfb9bcc8db0578946e5df00c1c46&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题列表_部分','','','027','12安住修','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494250&amp;idx=3&amp;sn=ada579ef750df591fcdf3b045cb89aba&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//净土次第修 问题和答案列表_全部
['净土次第修','问题和答案列表_全部','','','001','01菩提心	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486940&amp;idx=2&amp;sn=1032a4e3099851fe72c10b17e393e9e2&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','002','02次第修	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486940&amp;idx=3&amp;sn=0a0bac2d1ae8571a3300df5d8b2524bf&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','003','03功课','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486940&amp;idx=4&amp;sn=47e5b8ff753757e9765f9403ccba8ee7&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','004','04窍诀	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486940&amp;idx=5&amp;sn=3645b60714666b67643946d401f6920e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','005','05止观	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486940&amp;idx=6&amp;sn=70ca26575ba68e2acba12776dd9cadbf&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','006','06觉照','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486940&amp;idx=7&amp;sn=87046486185dc936675c1f5d676fc910&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','007','07缘起	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486940&amp;idx=8&amp;sn=a253e747eb97a30868d4164878494850&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','008','08学习	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=1&amp;sn=ad5c80ab4b18125500e1d9d6213fcf7a&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','009','09拜忏改过','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=2&amp;sn=80f8c7983360ced47af3ae908f70caea&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','0010','10静修	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=3&amp;sn=c23c2cbb047dce7572363c6f4b957dee&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','011','11·1思维修的经论依据	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487142&amp;idx=1&amp;sn=bc77eb7f413716be2ce6ee62b216adfc&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','012','11·2思维修理念和方法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487142&amp;idx=2&amp;sn=bdf9849deea001bfadc87d9e42b58144&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','013','11·3思维修项目【1·修行意愿】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=4&amp;sn=9f4e411d9c19eeecd579a47941ae8176&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','014','11·3思维修项目【2·自律性】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=5&amp;sn=16b96aa2622572e346bffac5784168e1&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','015','11·3思维修项目【3·感恩心】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=6&amp;sn=b0a6979dcbf23b6f3bc8ed9efe09d2db&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','016','11·3思维修项目【4·谦卑心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=7&amp;sn=3b7f6053ad4e01c06c9fcd5e9a9e59c7&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','017','11·3思维修项目【5·帮助之心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247486974&amp;idx=8&amp;sn=3aea78f487f0be2739163122b5d628d9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','018','11·3思维修项目【6·放松训练】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=1&amp;sn=2e1b102c0f00168084519c4471ed3c8f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','019','11·3思维修项目【7·因缘果】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=2&amp;sn=ab1bc784515f539b61f55412a89f5db8&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','020','11·3思维修项目【8·情感】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=3&amp;sn=81eacee684111e65bc6cdbabb8c20522&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','021','11.3思维修项目【9·欲望】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=4&amp;sn=56f4ae203a390bae5146dff0fa4759cd&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','022','11·3思维修项目【10·病苦】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=5&amp;sn=d886d64457e325941685362c52c0bc37&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','023','11·3思维修项目【11·弱化我执】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=6&amp;sn=e17b7b45e775faec90f2f35ef81ae46d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','024','11·3思维修项目【12·弱化法执】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=7&amp;sn=7fcc6f7883a5aa3646a25684716cacba&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','025','11·3思维修项目【13·出离心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487009&amp;idx=8&amp;sn=3db0d7625980448593a2c0f228b6adcd&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','026','11·3思维修项目【14·欣求心】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487092&amp;idx=1&amp;sn=a817cde1f4b226f638714b0d84e8185f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_全部','','','027','12安住修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487092&amp;idx=2&amp;sn=8ff1952f25133ff93a5fb8a4b380135b&amp;scene=21#wechat_redirect','无','无','文章','原始'],

//净土次第修 问题和答案列表_部分
['净土次第修','问题和答案列表_部分','','','001','01菩提心	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487943&amp;idx=1&amp;sn=7a9880bc996d6b4733c14f6f9d091dfd&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','002','02次第修	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487943&amp;idx=2&amp;sn=0d576555c8781c6f4a7a8e912b26d1bb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','003','03功课','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=1&amp;sn=d0c762c33df0d0864fb8f4de0c372e28&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','004','04窍诀	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=2&amp;sn=171ea6da0a811e96cd02a283ce96cb3b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','005','05止观	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487943&amp;idx=5&amp;sn=24ebfd13789cf89cd33d103710d16608&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','006','06觉照','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487943&amp;idx=6&amp;sn=2d7f8617a394d4a061e379553ea8c588&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','007','07缘起		','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487943&amp;idx=7&amp;sn=379a7c5f779d14b0831a27de04b45930&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','008','09拜忏改过','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=3&amp;sn=877e5aff48b7b8116d07fe9eff9253f9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','009','10静修	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=4&amp;sn=55c718681ac7a8a78a80172f5adaafe6&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','0010','11·1思维修的经论依据	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=5&amp;sn=7b40ad9410f3f2ec154d834d12ec0430&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','011','11·2思维修理念和方法','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=6&amp;sn=3395a8febd189fd0e896e23ca578538f&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','012','11·3思维修项目【1·修行意愿】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=7&amp;sn=61dc6029075d001c5e09a608895d0f5b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','013','11·3思维修项目【2·自律性】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488402&amp;idx=8&amp;sn=cbe182f993bba737aca169f461da05b3&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','014','11·3思维修项目【3·感恩心】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487960&amp;idx=7&amp;sn=195b1458d86047adfca860d5fd833e49&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','015','11·3思维修项目【4·谦卑心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247487960&amp;idx=8&amp;sn=98bc8e1b5e91881a9c338201cfba26ee&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','016','11·3思维修项目【5·帮助之心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488424&amp;idx=1&amp;sn=9886d0da163a778ec45f1058bdac94a5&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','017','11·3思维修项目【6·放松训练】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488424&amp;idx=2&amp;sn=4aaa119f100c50c1747787c50f072f85&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','018','11·3思维修项目【7·因缘果】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488424&amp;idx=3&amp;sn=c88da7ff9813af3e8d62c7a6e99f3e9b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','019','11·3思维修项目【8·情感】	','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494267&amp;idx=3&amp;sn=d15837dc10cd5c9379820d4e28d60cd9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','020','11.3思维修项目【9·欲望】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488010&amp;idx=5&amp;sn=a87f7ff414136ab375ccc98f8085647c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','021','11·3思维修项目【10·病苦】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488010&amp;idx=4&amp;sn=34a41cd7ecd462804f8e4d78e7d47f10&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','022','11·3思维修项目【11·弱化我执】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488010&amp;idx=6&amp;sn=5b2ea7a763f25e870f496872afd13e00&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','023','11·3思维修项目【12·弱化法执】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488010&amp;idx=7&amp;sn=4154348c20c72c877d44dee1d1529e9d&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','024','11·3思维修项目【13·出离心】	','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488010&amp;idx=8&amp;sn=f1a9d72af2aac810ecbe23fa1a17b16c&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','025','11·3思维修项目【14·欣求心】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494267&amp;idx=1&amp;sn=f92d1b53a4b1ba45bbf54ca497f1a78b&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['净土次第修','问题和答案列表_部分','','','026','12安住修','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488434&amp;idx=1&amp;sn=1b258aaa75a87611431c1a899f4bfb65&amp;scene=21#wechat_redirect','无','无','文章','原始']




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


var contdatas60 = [
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

var contdatas61 = [

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
['随缘开示','QQ群开示汇集','','','014','缘起','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494514&amp;idx=7&amp;sn=7d47f7314c94d1b5122f942d30daf085&amp;scene=21#wechat_redirect','无','无','文章','原始']
];

var contdatas62 = [
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


var contdatas70 = [
//其他专题 
['其他专题','辨析与破斥','','','001','关于扶乩',myaddr+'jtcdx/yszl/135.html','无','无','文章','原始'], 
['其他专题','辨析与破斥','','','002','五个佛法非正法','https://mp.weixin.qq.com/s?__biz=MzI4MTU2NTY2Mg==&amp;mid=2247483781&amp;idx=1&amp;sn=937659c215d480e38d3435c921a39551&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','辨析与破斥','','','003','此真是魔人想灭我佛教','https://mp.weixin.qq.com/s?__biz=MzIxODI4OTYyNQ==&amp;mid=2247484802&amp;idx=2&amp;sn=9e406664d56da35a7203bd0eca80976e&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','辨析与破斥','','','004','《楞严经》里辨别邪师的方法','https://mp.weixin.qq.com/s?__biz=MzA4NDQyOTgzNA==&amp;mid=2651887642&amp;idx=1&amp;sn=c67f8f199d8ae2e45ab18d9f4720dad9&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','辨析与破斥','','','005','庐山东林寺方丈大安法师二破印广法师之所说','https://mp.weixin.qq.com/s?__biz=MzI0MjE5NjY0NA==&mid=2650865916&idx=8&sn=498f801701ccddf77834f91d7f86f0ca&source=41#wechat_redirect','无','无','文章','原始'],
['其他专题','辨析与破斥','','','006','破邪显正之一',myaddr+'jtcdx/yszl/137.html','无','无','文章','原始'],
['其他专题','辨析与破斥','','','007','关于净土流派','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247488866&amp;idx=3&amp;sn=4caee92ba7e0b32fb7e277db7b868fb6&amp;chksm=cff50470f8828d66b05566e7a5f816540e310c02d41ed9046d69153d31701b02b7d9d8ee5e3a#rd','无','无','文章','原始'],
//专修净土，可以替换的地址： myaddr+'jtcdx/yszl/136.html'
['其他专题','辨析与破斥','','','008','专修净土【印祖开示】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485529&amp;idx=5&amp;sn=4062d3e1ecefcea94069e4d843927bbb&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','辨析与破斥','','','009','关于净土菩提心和般若净土的问答','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491679&amp;idx=3&amp;sn=3252182199fc4403adaf3eaca22ed8c8&amp;chksm=cff6f14df881785b4b858268a67425ae6e58b2d44c145b241770f746bbcf0bd0105d922497b8#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','0010','印祖破斥求开悟不求往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=5&amp;sn=86578e21b04ced04c0393276f48eb538&amp;chksm=cff6f162f881787468faf3c72b83509ada27de4b75b1da4c7c15949433f4b0a761c40a5f7487#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','011','与泰顺林枝芬居士书二【印祖开示】','https://mp.weixin.qq.com/s?__biz=MjM5OTIwNDM2OQ==&mid=2247492367&idx=1&sn=898fbefc164f41a63babf8ac30c7eef7&source=41#wechat_redirect','无','无','文章','原始'],
['其他专题','辨析与破斥','','','012','不要让修行成为一场骗局','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247491696&amp;idx=3&amp;sn=1c52cdb9868d2b36bc1037efeb6e8e1e&amp;chksm=cff6f162f8817874eab76e5304c98727a5888812f0c9950ca0605708942cc23f0caa507b4f38#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','013','吃肉就是度这些众生，这种说法对吗?','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494045&amp;idx=1&amp;sn=0d083b50a14d829d52007b7dd011a401&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','辨析与破斥','','','014','法义辨析20230819之一','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=1&amp;sn=64dae3551184741c30cfc636f351ab21&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','辨析与破斥','','','015','法义辨析20230819之二','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=2&amp;sn=47736031c0186420ee07dc783e241165&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','辨析与破斥','','','016','法义辨析20230819之三','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=3&amp;sn=350379153f1b3fcfd4c2692ef7a97ff7&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','辨析与破斥','','','017','法义辨析20230819对于修学的几点提醒说明','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247486225&amp;idx=4&amp;sn=41c334d832e1f04a3ba4081b8274424e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','辨析与破斥','','','018','从她身上，我们吸取一些教训','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487245&amp;idx=2&amp;sn=bdca829e5951311dc62ed458cc25c142&amp;chksm=973cd68ba04b5f9db16ec8e5c990d4374e6779df9263adddf7bdce40cba621fa75d3698f9629&amp;token=1235667089&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','019','关于印广法师','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487245&amp;idx=3&amp;sn=c0280a7cd2b940363d4cb61ce8773aaa&amp;chksm=973cd68ba04b5f9d1975c44aa4bf343830ed66c1812a1968f07ac0d9e6ae4d7117e71218db87&amp;token=1235667089&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','020','关于绝食求往生','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487245&amp;idx=4&amp;sn=193b003eb6849c6d49d8d5fda2645eaf&amp;chksm=973cd68ba04b5f9d16bdfe87b6ebd9bfafccaf9e2ba28d8a517b5817b455bc3a10e27b5f5559&amp;token=1235667089&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','021','对于印广法师讲法的辨析','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487245&amp;idx=5&amp;sn=79f847cf3786e4683d72cddb0c37c973&amp;chksm=973cd68ba04b5f9dd089b5989ba6aa7a7a2db0462d72e1e9691d6d5617c98f65120065d2dbe0&amp;token=1235667089&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','022','五个佛法非正法-中国佛教界发声','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487245&amp;idx=6&amp;sn=017a4dad81d39ca70b0260c20cfbe9bf&amp;chksm=973cd68ba04b5f9d140cd7b6c6f4134dceecc9b7c2e9848757ea8878ba6f77b22543c582cb17&amp;token=1235667089&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','023','分析某同修修学上的欠缺（自我反观、有则改之无则加勉）','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487307&amp;idx=5&amp;sn=3594eca5f2680d29ce924c752e0d291b&amp;chksm=973cd6cda04b5fdb02286ac9bd2310184404b39c6329a43ab9cf13a4d9ae964a56126f645fdf&amp;token=56110212&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','024','以为粘了“因果”就是佛法，其实是邪见',myaddr+'qtzt/pxxz/01.html','无','无','文章','原始'],
['其他专题','辨析与破斥','','','025','“万法皆空因果不空”-辨析-1','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487307&amp;idx=1&amp;sn=ab3b011da7e82d6dfdd29813af414d8d&amp;chksm=973cd6cda04b5fdb2fa2eee46a7fe73e0ef210e63dedcbdd75eac4f4f4f0000cc469cf9d39c2&amp;token=56110212&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','026','“万法皆空因果不空”-辨析-2',myaddr+'qtzt/pxxz/02.html','有','无','文章','原始'],
['其他专题','辨析与破斥','','','027','“万法皆空因果不空”-辨析-补充开示','https://mp.weixin.qq.com/mp/wappoc_appmsgcaptcha?poc_token=HAXRnWajj3SC1WhTgYESYdu36jH7DNwYUI5Z3gKE&amp;target_url=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzIwNDYwNzcyMQ%3D%3D%26mid%3D2247487307%26idx%3D2%26sn%3Da8f4a6bded68032b5bf386fd6a6de305%26chksm%3D','无','无','文章','原始'],
['其他专题','辨析与破斥','','','028','认为水乃至一切物质都有见闻觉知，这明显是违背经义的','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487307&amp;idx=3&amp;sn=b1105997ba08a9ceeebdfe4008eb15e6&amp;chksm=973cd6cda04b5fdb90510331fd226b587111473f75f214b7247ccd5b228e2e2ef4751ff666ff&amp;token=56110212&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','029','德文法师往生纪实-辨析-1','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487307&amp;idx=4&amp;sn=e3f17336da3585142865b12ee7f5d3bd&amp;chksm=973cd6cda04b5fdb388aa4a9d1533edfc6956a283fac8bd136cc374634c4457164ee61c59faa&amp;token=56110212&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辨析与破斥','','','030','德文法师往生纪实-辨析-2',myaddr+'qtzt/pxxz/03.html','有','无','文章','原始'],
['其他专题','辨析与破斥','','','031','短期出家是不如法的','https://mp.weixin.qq.com/s/jRMWNwOgnUbkM82Xab0vqQ','有','无','文章','原始']

];

var contdatas71 = [
//其他专题 新年寄语
['其他专题','新年寄语','','','001','辞旧迎新【2017·恩师】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247485323&amp;idx=7&amp;sn=a602934e835a5c9555655cf94e266229&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','新年寄语','','','002','新年贺卡【2018·恩师】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494637&amp;idx=5&amp;sn=1f8ec9b74a7fb7831234e8c4cd47b902&amp;scene=21#wechat_redirect','无','无','文章','原始'],
['其他专题','新年寄语','','','003','新春嘱语【2019·恩师】','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488349&amp;idx=2&amp;sn=98f8370f7e9b04d82807e29057467883&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['其他专题','新年寄语','','','004','新年共勉【2020·恩师】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494637&amp;idx=3&amp;sn=8001e893046f3a7adf6d6c94fde36bef&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['其他专题','新年寄语','','','005','新春嘱语-老实念佛【2021·恩师】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494637&amp;idx=2&amp;sn=2e56dab6445a0d6f9f7ccf350fd6ab3a&amp;scene=21&amp;token=1052206643&amp;lang=zh_CN#wechat_redirect','无','有','文章','原始'],
['其他专题','新年寄语','','','006','人生审思-忙【2022·恩师】','https://mp.weixin.qq.com/s/EPNa6Jpkv3DG2O-Pbeq93w','有','无','文章','原始'],
['其他专题','新年寄语','','','007','苦与乐【2023·恩师】','https://mp.weixin.qq.com/s/7eI1Wc05pzox7_T0sBh0bw','有','无','文章','原始']
];

var contdatas72 = [
//辅导员资料汇集
['其他专题','辅导员资料汇集','类别一','','001','小组规约','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=2&amp;sn=010364687bb63447f3ea38eeddff45dc&amp;chksm=973cd7a6a04b5eb04f455fcb3dbc52d53d4fb1bf1cb1744205088c3f289728c4e5657e7fe8df&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别一','','002','不允许杂学杂修','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=6&amp;sn=8f435ceb3ef7394da921646e78d379d3&amp;chksm=973cd7b4a04b5ea2e0d4a687dd2423fc033c4fdae158623a0b40963c2487d4dc2b108abe3190&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别一','','003','修学类型选择表','https://mp.weixin.qq.com/s/OUAHtLlR45Zn4xOeq1m1zA','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别一','','004','在选择修学类型时要注意，可以先选择低的','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487071&amp;idx=5&amp;sn=ba40f49d5b054845c15f574be0fcc056&amp;chksm=973cd7d9a04b5ecfc14f8d0aec1f02bacc60d0d57100919cba653040e91086e0680451d710f8&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别一','','005','每日四项-学习安排参考','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487119&amp;idx=1&amp;sn=4f4be875cd28cf4a1ef44bf9c88912ae&amp;chksm=973cd709a04b5e1f07a674e43e2f98b4ad434009baab993293d6a7f2602bd3f3561d3692d29c&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别一','','006','净土次第修-学习安排参考','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487119&amp;idx=2&amp;sn=31ac0bba323ecec7bf4f65bc2deaf69c&amp;chksm=973cd709a04b5e1fffd30a19df6e3f0c2434d27e758317ddd06bdc93ff4d68cc0566863300ee&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别一','','007','关于辅导员的学习、考核','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487071&amp;idx=3&amp;sn=e41ef95c5c1233c1e85840487b415a48&amp;chksm=973cd7d9a04b5ecff4710e9677b571aecbd6d29fae8a0b303d000964c4a599a46624090804ad&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],

['其他专题','辅导员资料汇集','类别二','','001','融入团队','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=1&amp;sn=a0efaa4cc5b7788189f30e1a27712f03&amp;chksm=973cd7a6a04b5eb0ed59d6e21a699be7374741bce71d0356ae80207ad2d6e49e41a2f11fbc20&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','002','是你自己想成就、决心成就，莲社来帮助你','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=3&amp;sn=543733cd80b385c5b6851d555258650e&amp;chksm=973cd7a6a04b5eb06cb86cac31249a1350e1456074d1dfc27540b69198fea507c6f67962ff76&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','003','天天给人讲，自己就不用做功课了，这个决定不可以','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=4&amp;sn=b3ed923a15a75ca314adead8b116bea9&amp;chksm=973cd7a6a04b5eb0ad242b379404e432775f5c1fd6528f2d03e77dd5b33ddd1fa3757654915a&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','004','非是我度人，实是人度我','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=5&amp;sn=2372bc85dac633e5a9c1339ad772b6eb&amp;chksm=973cd7a6a04b5eb0e5ecd5d03c57b970f44e2ff6c1b756859c93c5d5d0a5f49afd2b7d3b0982&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','005','孙居士帮助同修细致查找解决问题','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=6&amp;sn=2efbab6de3ef26b60b3868b72428e3dc&amp;chksm=973cd7a6a04b5eb0f7819b74a56caca758398d4a5d391994537980beba9d659bf32a79db6a0b&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','006','我们是在兴法还是在坏法？','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=7&amp;sn=3e4da6313f4724d4d505ca95a0372a93&amp;chksm=973cd7a6a04b5eb04f42e7330891ac85bd1d281b3156bbcfdd77fc7419a57269edbbdeba02e4&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','007','一位同修的建议，控制好交流时间','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487008&amp;idx=8&amp;sn=0b3dc117dfa466befb04b4a7523f4f65&amp;chksm=973cd7a6a04b5eb05215953b1af00fae3e56ab2951991082f96c19540d75a8001e603a6a517a&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','008','你讲的有问题，大家可以帮你纠正过来','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=1&amp;sn=359a1daf9fdeb36f273d4b26dbee2297&amp;chksm=973cd7b4a04b5ea255bcb0eb9c0aa2459933a0d4b216ecef12ba5d0740b6159d45e54b7187cb&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','009','都皈到法上去，这就是自度化他的根本','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=2&amp;sn=58c0e4cce7108f739c523400b5d60cf4&amp;chksm=973cd7b4a04b5ea28eb6182615340eaa6b2859cee534986ab0308f404cee8d28b538ba62cb96&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','0010','咱们共同走过了5年','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=3&amp;sn=8a1040bf682bd5d017cf3ef0919c002f&amp;chksm=973cd7b4a04b5ea2d5016acf9039443393dd6e60ffb37ec3834e88b9b290044c7b5f207e0982&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','011','他这上面着重说了宗教信息服务与宗教信息他们之间的区别','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=4&amp;sn=183df37f7fc9e71c60c0be0e6bb7ab36&amp;chksm=973cd7b4a04b5ea2d0e2742a0d593a100fcca0fdb0de7f2e54daca60d6f13e62103260851d9d&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','012','生病这种情况小组同修给回向就可以','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=5&amp;sn=52c6f23c331c0215deefadb66bf93368&amp;chksm=973cd7b4a04b5ea2ec2c158a72a0ecddbad952f4d5c0c0ec2ca961af806e92439b05c3c18556&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','013','应当做好“积极回应”，不能默不吱声','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=7&amp;sn=e84e8d4e9b656c62423546df121a4a9a&amp;chksm=973cd7b4a04b5ea22f94502b841395f723983dfae7a6a770cb5d17afd843bdf576e4f3be1b81&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','014','咱们越是老修，越应该依教奉行，越应该积极响应','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487026&amp;idx=8&amp;sn=87e31c15803d71064fe6b25c2e684cc9&amp;chksm=973cd7b4a04b5ea22d878a6bd1278e4c8a360fab83985222dc981b6fec8d58ba14a50a98cf0e&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','015','我们在文稿整理上一定要尊重原话','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487071&amp;idx=1&amp;sn=9179f12c1e2470c0f96ac5134759d2e8&amp;chksm=973cd7d9a04b5ecfa0bf3e955485f20611662fc9b9ea902ef819f4d3e42f2c4ca791a74b777d&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','016','刘居士分享带小组','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&mid=2247487119&idx=3&sn=0a11dd77348b098beabb676fa080cfeb&chksm=973cd709a04b5e1f7a278752cdac4ddc657c2853e91c54035dabdfd660ace6f6c0796397c385&token=1313133918&lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','017','不能长时带着功课，可以采用阶段性的带一带','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487119&amp;idx=4&amp;sn=388e92705c1ab5ce54c153e1db8b4bf8&amp;chksm=973cd709a04b5e1fd6efb51566cbc385ebcec15994a235b2de316800b3f432541da5263e4c80&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','018','这个普润群里的，现在要求每日必须汇报','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487071&amp;idx=2&amp;sn=3b12ae52ead34b79a75f78628d1d1359&amp;chksm=973cd7d9a04b5ecf797819af57fecfa550de75d4585b9157d938beb703930e6410ebd7413914&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','019','给大家介绍个智能产品～睡眠监测带','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487071&amp;idx=4&amp;sn=8d30485bf1c8fcd64f1364e9f17046ad&amp;chksm=973cd7d9a04b5ecf80cf57317d11f92bdc2876f5858e9f107cece4b3c9a83d2c4d6d9821eb30&amp;token=1654992247&amp;lang=zh_CN#rd','无','有','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','020','有些同修提到眼睛视力的问题','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&mid=2247487203&idx=3&sn=ac3f36da26a76d35eeb6afa674b2634a&chksm=973cd765a04b5e737d1e3e6ae178de55159b7355fa780fa04c09c8516daa7e5eeee50dadfd7d&token=1576720142&lang=zh_CN#rd','无','有','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','021','普润app','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487071&amp;idx=7&amp;sn=4f286dddbc5dd65bb1943a3f34cc5d46&amp;chksm=973cd7d9a04b5ecf1520d308993a2a3a3e4b41de0824225fc0dcbf48def6e436bfdeecc62a3b&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','022','一个帮助背法抽考的链接','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487071&amp;idx=8&amp;sn=5db5e7972d1d9770c094aef86cc6f3fe&amp;chksm=973cd7d9a04b5ecff00a321abb3a481c5cba04de4da43baff8110cac93b114c017010bafdf01&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','023','后面提升内容的学习，能够具备条件的同修都是可以参加的','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487119&amp;idx=5&amp;sn=0fe75f64eed3ca6429e20b10219bf068&amp;chksm=973cd709a04b5e1fa543bf50ed3fe679fba09da71d29f43247f353b754a73c04745605103a2c&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','024','每月反思总结','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487119&amp;idx=6&amp;sn=94170357a167dfeb4865d74bb04a960d&amp;chksm=973cd709a04b5e1fda4cd904f71722813958f0ea6b05c9301bdb96407db7394a2dbae78768db&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','025','在对待处理问题上，张居士是个好的表法','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487119&amp;idx=7&amp;sn=a90b440cfc4b10d1f3114f02f6208309&amp;chksm=973cd709a04b5e1f4bba9d3b821c3aaa888479465b9ec4c26fbb43fd4ae735b34ddbafb75d6a&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','026','自己要如理如法地功课','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&amp;mid=2247487119&amp;idx=8&amp;sn=f472a892fae2f7a1dbb9830764ff25c1&amp;chksm=973cd709a04b5e1fad2a675c1dc0b411b96ab0b15e99f392a9816723a8362929a0a45e20bb03&amp;token=1654992247&amp;lang=zh_CN#rd','无','无','文章','原始'],
['其他专题','辅导员资料汇集','类别二','','027','帮助人把握好一个度','https://mp.weixin.qq.com/s?__biz=MzIwNDYwNzcyMQ==&mid=2247487245&idx=1&sn=61d20163ef3c572bcb574c731a72a552&chksm=973cd68ba04b5f9d5ef7bf8d99aefe1f6380c0d60cbb17ce6fcbaa24289a02db1c061fc9bbf2&token=1235667089&lang=zh_CN#rd','无','无','文章','原始']



];


var contdatas80 = [
//选学资料汇总 佛教动画

['选学资料汇总','佛教动画','','','001','《佛说轮转五道罪福报应经》','http://aputi.com/c/1works/play_page/01fo_5dao.html?id=302','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','002','《佛说十善业道经》','http://aputi.com/c/1works/play_page/01fo_shishanye.html?id=302?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','003','','《佛说阿弥陀经','上》','http://aputi.com/c/1works/play_page/01fo_jt5j_amita.html?id=302?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','004','《无量寿经》','http://aputi.com/c/1works/play_page/01fo_jt5j_wlsj.html?id=302?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','005','《佛说观无量寿佛经》','http://aputi.com/c/1works/play_page/01fo_jt5j_guanjing.html?id=302?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','006','《大势至菩萨念佛圆通章》','http://aputi.com/c/1works/play_page/01fo_jt5j_dashizhi.html?id=302?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','007','《普贤行愿品》','http://aputi.com/c/1works/play_page/01fo_jt5j_puxian.html?id=302?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','008','《观世音菩萨普门品01-水难》','http://aputi.com/c/1works/play_page/01fo_pmp_01water.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','009','《观世音菩萨普门品02-火难》','http://aputi.com/c/1works/play_page/01fo_pmp_02fire.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','010','《观世音菩萨普门品03-刑难》','http://aputi.com/c/1works/play_page/01fo_pmp_03xing.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','011','《观世音菩萨普门品04-风难》','http://aputi.com/c/1works/play_page/01fo_pmp_04wind.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','012','《观世音菩萨普门品05-刀杖难》','http://aputi.com/c/1works/play_page/01fo_pmp_05dao.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','013','《观世音菩萨普门品06-鬼难》','http://aputi.com/c/1works/play_page/01fo_pmp_06gui.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','014','《观世音菩萨普门品07-满愿送子》','http://aputi.com/c/1works/play_page/01fo_pmp_07songzi.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','015','《观世音菩萨普门品08-化身救度》','http://aputi.com/c/1works/play_page/01fo_pmp_08huashen.html?id=176?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','016','《地藏菩萨的故事-婆罗门女》','http://aputi.com/c/1works/play_page/01fo_dizang_poluomen.html?id=2584?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','017','《地藏菩萨的故事-两个国王》','http://aputi.com/c/1works/play_page/01fo_dizang_2king.html?id=2584?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','018','《地藏菩萨的故事-生死利益》','http://aputi.com/c/1works/play_page/01fo_dizang_shengsi.html?id=2718?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','019','《地藏菩萨的故事-五逆重罪与无间地狱》','http://aputi.com/c/1works/play_page/01fo_dizang_diyu.html?id=2718?aputi','无','有','文章','原始'],
['选学资料汇总','佛教动画','','','020','《地藏菩萨的故事-地藏菩萨见闻利益品》','http://aputi.com/c/1works/play_page/01fo_dizang_liyipin.html?id=2718?aputi','无','有','文章','原始']


];

var contdatas8 = [

//选学资料汇总 老年修学资料

['选学资料汇总','老年修学资料','','','001','《四十八大愿》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/46_61.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','002','《大势至菩萨念佛圆通章》-净空法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/62_77.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','003','《发菩提心一向专念》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/78_82.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','004','《往生净土的理论与事实》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/83_86.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','005','《往生净土之因》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/87_98.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','006','《怎样取得往生的把握》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/99_100.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','007','《印祖开示往生要道暨净土修学座谈会》-定弘法师	',myaddr+'xxzlhz/lnxxzl/ljsjjyp/101_102.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','008','《无上醍醐决定往生》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/103.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','009','《末世无如念佛好》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/104_114.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','010','《如何护持老人往生》-定弘法师',myaddr+'xxzlhz/lnxxzl/ljsjjyp/115.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','011','《印光大师开示临终三大要》-定弘法师	',myaddr+'xxzlhz/lnxxzl/ljsjjyp/116_117.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','012','《喜送姐姐回家》-刘素云',myaddr+'xxzlhz/lnxxzl/ljsjjyp/118_126.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','013','《我为净土鼓与呼》-刘素云',myaddr+'xxzlhz/lnxxzl/ljsjjyp/127_131.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','014','《海会圣贤》-海贤老和尚',myaddr+'xxzlhz/lnxxzl/ljsjjyp/132.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','015','《黄忠昌居士闭关往生纪实》',myaddr+'xxzlhz/lnxxzl/ljsjjyp/133.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','016','《刘素云姐夫郭永发往生报告》-刘素云',myaddr+'xxzlhz/lnxxzl/ljsjjyp/134.html','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','017','《助念心得报告》-程晋林',myaddr+'xxzlhz/lnxxzl/ljsjjyp/135_176.html','有','无','文章','原始'],
//['选学资料汇总','老年修学资料','','','016','《刘素云姐夫郭永发往生报告》-刘素云','myaddr+'xxzlhz/lnxxzl/ljsjjyp/134.html','有','无','文章','原始'],
//['选学资料汇总','老年修学资料','','','017','《助念心得报告》-程晋林','myaddr+'xxzlhz/lnxxzl/ljsjjyp/135_176.html','有','无','文章','原始'],




['选学资料汇总','老年修学资料','','','018','忏悔发愿文【音频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=1&amp;sn=be05748cf2df531405bc859be20a1d86&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','019','忏悔发愿文【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=2&amp;sn=ea69509bc0cde3d18ef14698e69d47ca&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','020','慈父唤子归【音频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=3&amp;sn=dd35883486b6e426752864cc31730255&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','021','慈父唤子归【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=4&amp;sn=f400b43d10c7fbc783b178b1c1082a66&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','022','阿弥陀佛的一封家书【音频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=5&amp;sn=fbfec811e1da397c67397c71dd154249&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','023','阿弥陀佛的一封家书【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=6&amp;sn=2ae88068c3efd045abacc59fca7f961c&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','024','我要往生【音频】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=7&amp;sn=676b259c6fc27febdb1ee1d657fb1c43&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','025','我要往生【视频版】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494691&amp;idx=8&amp;sn=f53d97a426ecb79fbb791acb05a42dfa&amp;scene=21#wechat_redirect','无','有','文章','原始'],
['选学资料汇总','老年修学资料','','','026','中阴身境界的开示','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=6&amp;sn=a304a37473f33fb5d2e3bb5564e00ab5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','027','请您必须听清楚','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=7&amp;sn=c62f83fcaa4b6dd68f237ffc400a9885&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','028','地大分离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=5&amp;sn=847bbc1d7454ed653e73214dbc04bb90&amp;scene=21#wechat_redirect','有','无','文章','原始'],

['选学资料汇总','老年修学资料','','','029','水大分离','https://mp.weixin.qq.com/s?__biz=MzkzNjI1MzQzOQ==&amp;mid=2247488671&amp;idx=2&amp;sn=b4720174bc7dcb5876433e5835797db3&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','030','火大分离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=7&amp;sn=204259801a6a0d90d0128a409032b75b&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','031','风大分离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=8&amp;sn=62daf9429a3db351ee6c075fbee98e3c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','032','佛在成佛时已向我们保证...','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=1&amp;sn=7c4f9534851dc8d96133c5e1f9f52db6&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','033','轮回路险 一念之差','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=2&amp;sn=18d5e94cc9aeeb50c8dcd8e1661bbb71&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','034','你要知道阿弥陀佛名号具备无量功德','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=3&amp;sn=1bd4a72c6379452e7962186b070703b0&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','035','你要知道做人是不可能永久做人的','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=4&amp;sn=ddae9cc3ceebd5507e68f4f0154e2fb6&amp;scene=21#wechat_redirect','有','无','文章','原始'],


['选学资料汇总','老年修学资料','','','036','您一定要相信佛经上所说的六道生死轮回','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=5&amp;sn=88b6ae5058f6e36d01f404ed69f1a8fa&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','037','你只要愿意升到极乐世界去','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=6&amp;sn=80cc64fd277f030a3ca3fe91904501b1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','038','人生无常 人命同样无常','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=7&amp;sn=357a9c20b3291ab1a069686dffab27ab&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','039','人生在世免不了病苦和世间的爱憎别离','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494883&amp;idx=8&amp;sn=3e4717dfa67412b71e5280c1c7bcd792&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','040','世事无常 变幻莫测','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=1&amp;sn=f3c1c9d9eedc93500a8f866b32678067&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','041','这个世界太苦了','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=2&amp;sn=8d5d71923b4b46522cd0c88fb5f85f66&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','042','针对病苦，无常观，出离心，欣求心的开示','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=3&amp;sn=821b796abad4031addba72f1a08fc183&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','043','真的不忍心告诉你','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=4&amp;sn=c0bdf8135bfdb8e3987a2e8958f02350&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','044','在业力的推动下 没有人是故意的','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495147&amp;idx=5&amp;sn=79073dd04132f833a0ec8645c478e5c2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','045','陪助老伴往生的日子（上）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=1&amp;sn=086a3ba46f0fc1010a6ce7fbb1798ca5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','046','陪助老伴往生的日子（下）','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=2&amp;sn=c1fb94f860a729ee13d510d67f626163&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','047','妈妈说 我看到好大一朵金色的莲花在我的被子上','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=3&amp;sn=496071369cdd318e5b0eaec2a0f24dca&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','048','主人念佛十年不如她','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=4&amp;sn=f9390f733b75b7cdddeb9b34354f9f6c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','049','70岁的监狱重犯，临终见佛来迎','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=5&amp;sn=780b6907679d361bad917e405bdeb77c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','050','彻底全放下 念佛求往生--甘肃甘谷县念佛居士安德往生记','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=6&amp;sn=100fe2c70eff2022d825851193d74bc1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','051','弟弟习气很重，除佛号外什么也不会 竟然预知时至 自在往生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=7&amp;sn=f73666c94b61e2c2fd3fed4f126dab9c&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','052','发生在四川的一个极为感人的往生故事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495099&amp;idx=8&amp;sn=9a7c4b88348d36459fb7d1947942208e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','053','十二岁孩子临终念佛号往生极乐','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=1&amp;sn=fa9c775536f1efd2faef1d154eb57d93&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','054','陈进迟居士往生纪实','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=2&amp;sn=5398f6b16077267d6f21e3a7190dd856&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','055','陈妙元本愿念佛潇洒往生纪实','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=3&amp;sn=691251734e81afe000b0f0080dfb5f2e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','056','念珠放光双亲预知时至','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=4&amp;sn=8fdc8c4a291d3b83a2e06cb8502eecda&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','057','刘素云-姐夫的往生出乎我的意料之外','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=5&amp;sn=86dae312c7b0608b0979e8e6b14d3060&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','058','河东夫人念佛 临终身上发出一道强烈佛光','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=6&amp;sn=ac40ee388eb90083c993c378db6c2022&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','059','刘泽高老人临终遇法三日往生纪实','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494991&amp;idx=7&amp;sn=0b1ee76a676f86a5d6b27a7a41d33a44&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','060','死刑犯念佛往生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=1&amp;sn=938cacd39cab1d519c33e8c2ce3d13a8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','061','乳癌病人的往生故事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=2&amp;sn=60638935ff00aab0e26a3b38f67c67a4&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','062','王维义居士往生实录','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=3&amp;sn=98f91036a0505bbc708d6768e229fb14&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','063','一句佛号念三年 从容站立往生','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=4&amp;sn=2954e1b27f5dbde92894fdcc3f785c85&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','064','钟茂森博士讲的几个往生故事','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=6&amp;sn=c57ac93dca4fa48dbe15488928cb2a76&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','065','往生要放下情执之一','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494714&amp;idx=1&amp;sn=7bf1a4e877fbfe97b576b7a227b71e26&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','066','往生要放下情执之二','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494821&amp;idx=4&amp;sn=8b4c7bd178e5713b41c01fe914e58938&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','067','挖掘消融问题 修菩提心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=1&amp;sn=af0a02c637b8cff549301a6c1cd4b4b1&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','068','放下与提起双向努力','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=2&amp;sn=04b431556fedb09e85d7be8d04c409b2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','069','发大心发大愿','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=3&amp;sn=23cf0b2c7b7d5232c07cd9170d4099de&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','070','学习百不管','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=4&amp;sn=38ad77d376c4b30347bc1d64c794a9e9&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','071','培积福报','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=5&amp;sn=ab0ae1b891927ea956cca209b1e192d5&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','072','把握当下，精进念佛','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=6&amp;sn=8c5598e89284b030172874fe323fcc71&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','073','皈依忏悔发愿','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=7&amp;sn=94ebe4f8e638957b90efe2b9611ef260&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','074','修往生的三项训练【百不管·接受境缘·随时往生】','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247494787&amp;idx=8&amp;sn=10bbb5cc7312ca6e3eff4dbe2eaaf410&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','075','往生的障碍','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=7&amp;sn=080a71f9b6621371301880f7d1b70858&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','076','往生不是自私','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495018&amp;idx=8&amp;sn=3ad8d217062874366092f4f3b09305ca&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','077','突破障难','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=1&amp;sn=0f522aff82c91bac5e1a85bb85524d78&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','078','修行之心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=2&amp;sn=cad14c0495ac86ec13e1b0ea5704cf36&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','079','自律','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=3&amp;sn=28d1bbb8ac8838e030124499f714845a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','080','包容心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=4&amp;sn=705ac8de75489604bc914f33e6b37bb8&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','081','因缘果','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=5&amp;sn=f63f525c33550e6cdb510e312a154a87&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','082','百不管','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=6&amp;sn=597172efbe9f21a899d18d4d71695911&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','083','放下','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=7&amp;sn=5254cc9c33a1559fefa3864890f79400&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','084','出离心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495069&amp;idx=8&amp;sn=3aa97031b4c1c6f9e2313d56d3258c95&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','085','观苦','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=1&amp;sn=b6f397f8d93a92f05672d05e5ceaeab2&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','086','愿心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=2&amp;sn=c7f08a392f1bb585623fb9b8221f711a&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','087','信心','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=3&amp;sn=3be711f92d5a40a79ae393668274d84e&amp;scene=21#wechat_redirect','有','无','文章','原始'],
['选学资料汇总','老年修学资料','','','088','当下','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247495164&amp;idx=4&amp;sn=09a15516ce7dd8847f153daaf082e605&amp;scene=21#wechat_redirect','有','无','文章','原始']
];

var contdatas9 = [
//选学资料汇总 静修班资料
['选学资料汇总','静修班资料','师父随缘开示','','001','01、往生训练(百不管、接受一切因果，做好随时往生的准备)','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=1&amp;sn=788f70b29d267e0d813a0d60d63f9f4d&amp;chksm=cff6f689f8817f9f6182744a7115f9ff8dfb57aae666ab2a04e6e4a298dc563f7f188e60c149#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','002','02、邬婆婆一心求往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=2&amp;sn=acfc4d5d9bc2b5323f56cb2286f73880&amp;chksm=cff6f689f8817f9f1d1097703cf04e23cddc67100a7cdc9769ef33546845f15e584ebfc5d978#rd','无','有','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','003','03、定心去修','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=3&amp;sn=a12435876fadd3afe02c6a6fa774e223&amp;chksm=cff6f689f8817f9ffa0e3e268b32a30dc01eeccb3b9194207beb24fbc1611df92ad3b9fbb416#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','004','04、往生训练（克服情执障碍）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=4&amp;sn=50e6f5bbcf0b264c2ecc4212db0c62e3&amp;chksm=cff6f689f8817f9fef8c6a5ae73a0ff9ec56e35a14b08cd85912eb836f966f30b01d1f23b7c7#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','005','05-1、一位年轻的病重者','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=5&amp;sn=eaa62f0d7b216fc3e9d14233416dd73e&amp;chksm=cff6f689f8817f9f3e3c4d482b9d56c08093e4c95c502314c13b4858272c8f5f680a8d4c37c3#rd','有','无','文章0','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','006','05-2、年轻的病重者往生后续','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=6&amp;sn=033c24a36227b95b7ea6e930feeb61ec&amp;chksm=cff6f689f8817f9fe5d79aafbfcb6e692890df7fb17a000d886c8c937790534284cd725e8930#rd','有','无','文章2','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','007','06、听佛号注意事项','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=7&amp;sn=a714429c530875daa4af40d249710172&amp;chksm=cff6f689f8817f9f6e17ae8d52e7228b4159026b448a223581b45f628010d9ba64141885966d#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','008','07、静修方法','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493531&amp;idx=8&amp;sn=7bf3b2a390cb2b4e833070f0180784de&amp;chksm=cff6f689f8817f9f4a40a7b04768f5716ad4f4b98abb76e98bef709704b9817ba848ff7179c2#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','009','08、去情执（化小爱为大爱）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=1&amp;sn=29651322839dff8b77ce256fc678f241&amp;chksm=cff6f6d6f8817fc05ca5ffec30a2783abe265755b574049953903e8f825faa338f1db86496dc#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','0010','09、在修往生上不要存在侥幸心理','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=2&amp;sn=ff259efdee743087c2e496a33db30861&amp;chksm=cff6f6d6f8817fc080b5ff6e7eb19d393e2058482079d9eae153fab89b4e017219b5872b33b5#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','011','10、念佛时过去人事不断涌现怎么办','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=3&amp;sn=cd1f68271ea9f8f7d7973c4d74a1fa4c&amp;chksm=cff6f6d6f8817fc027c0ebe437098f05a9076428da3e3301ace8297f4696d13f65b27c1130a1#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','012','11、克服往生最大障碍（人情世故）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=4&amp;sn=83e6f1ac50fb4c739dcbb057c52cb6d6&amp;chksm=cff6f6d6f8817fc061cbc6c33744fbd71ce8f13275a41f4e56b47512a11ffe2552f3aeae5527#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','013','12、念佛要常发愿，当下要念清楚听清楚','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=5&amp;sn=9944ea4b8e35549013ef78dfd9460d28&amp;chksm=cff6f6d6f8817fc02bec2f082e18db332d165cdf8e26e82158f1dd35bb2c3dd83a5d829b4695#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','014','13、真正的报恩是往生极乐世界','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=6&amp;sn=63392d5bd5456d89d025265d29bd2bdf&amp;chksm=cff6f6d6f8817fc053150e80a0b069a9342cf1c52b48a2aea44684697b496b355f486d46884c#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','015','14、《阿弥陀经》动画','https://mp.weixin.qq.com/s/UvZbRBpw_GzM7L9CrjJo4Q','无','有','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','016','15、最不受干扰的念佛就是心念心听','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=7&amp;sn=999e46cb79d490289460a0d2877d67fe&amp;chksm=cff6f6d6f8817fc0717d6ca1a3e2d620421854e2dc817177ae6d90d1410257db4708fac71f1c#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','017','16、念佛四层功夫','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493572&amp;idx=8&amp;sn=10081fbbe46583ad7c86d4d2bf1124da&amp;chksm=cff6f6d6f8817fc0a4d43c5c16292e176083250fa9add051e163a9cc0bd06d2beec5ad089ed8#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','018','17、求往生要有魄力','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493646&amp;idx=1&amp;sn=989d3cdaee160d182e6e899ce1afd1ef&amp;chksm=cff6f91cf881700ae335d937cf164c0308b75ee58d54f05156379fbd3a11779c5de2f833b3e3#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','019','18-01往生见闻记（思归子讲解）01',myaddr+'xxzlhz/jxbzl/wsjwj/01.html','无','有','文章0','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','020','18-02往生见闻记（思归子讲解）02',myaddr+'xxzlhz/jxbzl/wsjwj/02.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','021','18-03往生见闻记（思归子讲解）03',myaddr+'xxzlhz/jxbzl/wsjwj/03.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','022','18-04往生见闻记（思归子讲解）04',myaddr+'xxzlhz/jxbzl/wsjwj/04.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','023','18-05往生见闻记（思归子讲解）05',myaddr+'xxzlhz/jxbzl/wsjwj/05.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','024','18-06往生见闻记（思归子讲解）06',myaddr+'xxzlhz/jxbzl/wsjwj/06.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','025','18-07往生见闻记（思归子讲解）07',myaddr+'xxzlhz/jxbzl/wsjwj/07.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','026','18-08往生见闻记（思归子讲解）08',myaddr+'xxzlhz/jxbzl/wsjwj/08.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','027','18-09往生见闻记（思归子讲解）09',myaddr+'xxzlhz/jxbzl/wsjwj/09.html','无','有','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','028','18-10往生见闻记（思归子讲解）10',myaddr+'xxzlhz/jxbzl/wsjwj/10.html','无','有','文章2','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','029','19-01《往生见闻记》讲解-前言','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493646&amp;idx=2&amp;sn=3ff6b5ccfd4cbea9440e091369a12761&amp;chksm=cff6f91cf881700a09d10c486687ccc0ddd5ed347a54f704b90c84f1e2175fc710c027675737#rd','有','无','文章0','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','030','19-02《往生见闻记》讲解-台中莲社和印祖简介','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493646&amp;idx=3&amp;sn=ad18697af254f44d9bda51cad988db3d&amp;chksm=cff6f91cf881700a8af7b77fe15eefda770eec74f6b1f1b6e51cce910c479a31947750dfbc2c#rd','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','031','19-03《往生见闻记》讲解-出家师父往生案例','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493646&amp;idx=4&amp;sn=6c375708ec1535791771d45591f0ac62&amp;chksm=cff6f91cf881700a51e8b490264e5ddaaba028045c2be291c8797deed9eeb370c4d825f023ef#rd','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','032','19-04《往生见闻记》讲解-日常事务是不是修学的障碍','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493646&amp;idx=5&amp;sn=62dc85d7ecfc460f3262bdaeef966162&amp;chksm=cff6f91cf881700a09a816cc340cd505b90852ecec611644ee417c7f519c71bd727952d8e0a0#rd','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','033','19-05《往生见闻记》讲解-忏悔为辅，极力仰靠阿弥陀佛','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493646&amp;idx=6&amp;sn=87b16cb9c376d446691d6d02e63eeb84&amp;chksm=cff6f91cf881700a3470bcc04348fad2a86b222df521c7e7a3639d7cde5b86321fd0143e2651#rd','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','034','19-06《往生见闻记》讲解-居士往生案例讲解之一','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490857&amp;idx=8&amp;sn=f9d1036f0254ffe1c2dc4924b8a0af08&amp;scene=21#wechat_redirect','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','035','19-07《往生见闻记》讲解-居士往生案例之二','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=1&amp;sn=2319e80a6de95fb213cf5f58584ef891&amp;scene=21#wechat_redirect','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','036','19-08《往生见闻记》讲解-居士往生案例之三','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=2&amp;sn=589a21d0f6cbdebd21d00d7f06f0eac6&amp;scene=21#wechat_redirect','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','037','19-09《往生见闻记》讲解-居士往生案例讲解之四','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493685&amp;idx=1&amp;sn=93ec94bc464dae57ab93a58c13d41e25&amp;chksm=cff6f927f88170311b97db3586e0ca9b6719cab59f02507c476ee767c3499396c2c26d36f7f7#rd','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','038','19-10《往生见闻记》讲解-世间和出世间的结合','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493685&amp;idx=2&amp;sn=98313741407e3ecbe8380d7baee12c39&amp;chksm=cff6f927f881703141a442bcb9ec0a7b73f35d64bdf0d21159117db031577c9ac742fd169118#rd','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','039','19-11《往生见闻记》讲解-李炳南老师','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247487186&amp;idx=3&amp;sn=4b71973945eb15be602f4697d445b6c5&amp;scene=21#wechat_redirect','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','040','19-12《往生见闻记》讲解-印光大师','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=6&amp;sn=af98518a248ab8fc703c1d7cb6d20255&amp;scene=21#wechat_redirect','有','无','文章1','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','041','19-13《往生见闻记》讲解-其他祖师大德；纯正净土知见','https://mp.weixin.qq.com/s?__biz=MzU4ODE2NzM2OQ==&amp;mid=2247490917&amp;idx=7&amp;sn=998cc74db0e185b6f70f75deed0c5aac&amp;scene=21#wechat_redirect','有','无','文章2','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','042','20、往生极乐世界纪实（这是一位居士亲身经历和自述）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493685&amp;idx=3&amp;sn=ab346c836ddc73e169b5524b27ff54e9&amp;chksm=cff6f927f881703179b43b5c50c6f9b69c49d5b803c1fcdc7800c319df4750073a9a595f4adf#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','043','21、静修训练（旧版）','https://mp.weixin.qq.com/s/fNKNjDaU-uveSV-DPnp7tw','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','044','22、胡松年居士往生记（旧版）','https://mp.weixin.qq.com/s/at2VPCl4V9u1fM3S0-hqbA','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','045','23、生死心切，专修净业','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493814&amp;idx=1&amp;sn=d2b56c4df0c1ef6c294fee200c18dadc&amp;chksm=cff6f9a4f88170b2972834fc6655fc5742e14569ee65a51f285fbe8f500389f263d1cdcb4f40#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','046','24、《佛说阿弥陀经》白话解释','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493958&amp;idx=2&amp;sn=f2ad931d05b02aeaf55911d9a6dcc62e&amp;chksm=cff6f854f8817142f1f8bdc458e61eeb972f3e71ab61051342b758cadde018058715d07337dc#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','047','25、《吊藤馋蜜图》的故事','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493814&amp;idx=2&amp;sn=227d07a15cbdf37a52e0cd6d81c99ed9&amp;chksm=cff6f9a4f88170b26ecd6f8bdc3cc25eb4358db143eb0176c88acad91e6762ce0bf7752e0141#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','048','26、《五母子经》原文','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493814&amp;idx=3&amp;sn=aed58021990862f0ab930630ce904112&amp;chksm=cff6f9a4f88170b299726557c43a6abd1b793de0731e766bfe8f4a161813d7a4aea7f58acdf6#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','049','27、为什么五逆十恶的人临终能往生极乐世界','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493814&amp;idx=4&amp;sn=a3836e63abe4c98f7d65a7651bfef6af&amp;chksm=cff6f9a4f88170b26cb2d11a03c67960f5cf34bea71723c9e817820138ac533f35b79b87c548#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','050','28、印光大师开示周余志莲女居士法语','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493814&amp;idx=5&amp;sn=8abc5c7dd3fc1f04a2ca3aaf3612b0ba&amp;chksm=cff6f9a4f88170b28f327d0f158abd2a04549e0533dffc8d84c8acb2918a247a5155f1c5e659#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','051','29、一场大病，让蕅益大师彻底通身靠倒，含泪念佛','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493814&amp;idx=6&amp;sn=04d5f4da43b010b1794ea5dfbc768a55&amp;chksm=cff6f9a4f88170b23258c5403a5c37363a31c6c92a7b0b1c78c6e531dc5dc21398add0de3bde#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','052','30、传印长老力修净土','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=1&amp;sn=a3f2b253b3ec68340dde5ffc62763d24&amp;chksm=cff6f9c6f88170d01b7caac9f331ebec89a16707ff62f892505960a8a0d53bc846759d05f4e0#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','053','31、都觉得来日方长，可是世事无常','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=2&amp;sn=442567f3a361b8e49d3bf177debc7b1e&amp;chksm=cff6f9c6f88170d0d7ee179e1a6e45c86e82894b8e8976ad3af56fc71ca7566b9c5b35b7452d#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','054','32、平时大家都很赞叹的人，临终不念佛了','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=3&amp;sn=c987274dfe323d5ce30c3e78f6d5f346&amp;chksm=cff6f9c6f88170d04a83ac7314dd092774481a375d16e08f95c588d1e07ea7fb256346d046c6#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','055','33、往生极乐世界九品莲位图文详解','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=4&amp;sn=e665c9c2b9adf2d2a44781f7d6e14d66&amp;chksm=cff6f9c6f88170d03b6fd696d5016b9ffe54102fb528d284de30c4dbbfc652da1d13bd580063#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','056','34、是由阎罗王审判定罪才能决定去处吗','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=5&amp;sn=4ca7e57a7190d3ef0fb07c64eeb03e87&amp;chksm=cff6f9c6f88170d01c6b8662c0c91f4bddad30920e12f9812d8ebec33c55c33445425b7c9b51#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','057','35、恶业重能否往生','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=6&amp;sn=861be076668a9e74f947d9c770d4df78&amp;chksm=cff6f9c6f88170d095d667fef5a5f0e58be9e755308d84442bd0c546a90961beca2f42b824a7#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','058','36、净土法门属“果教派”','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=7&amp;sn=ac734ce506af8b7bf3930851341b365c&amp;chksm=cff6f9c6f88170d0b55274e165510cca4f85a67e92e0f137c8d628a9ae9f6761b599500f5de5#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','059','37、贪恋好东西不会生西方','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493844&amp;idx=8&amp;sn=e079ba4db83820b1bcc679eeb5581d55&amp;chksm=cff6f9c6f88170d065c3999129eb95a6a95fe3ad27765504ce313d9f7f5809d342f6c56dc3fd#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','060','38、我们死的时候是不是也像做梦一样','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493867&amp;idx=1&amp;sn=0af7ee5f72afb801cef3aad65fe375f4&amp;chksm=cff6f9f9f88170efc07894239075e934ce7bfec14989250dca56bd29a3519075aa77e92210b4#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','061','39、我们人怎么还不如它们呢','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493867&amp;idx=2&amp;sn=f4ec97e2bdbd865d631298787e4b4403&amp;chksm=cff6f9f9f88170efb42efcb25ee9253bbc65c3da2649831fd4b8bd35be05ef551e160e7bbe95#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','062','40、极乐世界不都是菩萨吗？为何还有声闻缘觉？','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493867&amp;idx=3&amp;sn=d7373607de42e90678c7966f46de16d6&amp;chksm=cff6f9f9f88170ef96b539d40571ddf00cb871b2db9b31b92dce3752cf7f8008839bc38d6c7e#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','063','41、一天纵然念十万声也不能往生，为什么','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493867&amp;idx=4&amp;sn=f4d5586b6b0eaf559548cf980eb78da8&amp;chksm=cff6f9f9f88170ef340838c2204e8c122beb20f05ed07fcd3c9141d750a2c0becf12ce2d4d94#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','064','42、早发现早解决，攒到后面就麻烦了','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493867&amp;idx=5&amp;sn=aac739040723316d59c67444d62d29f9&amp;chksm=cff6f9f9f88170eff8aa6e3d4ebb24350e59808d18b61dec208710c171bef39ca7af361e4897#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','065','43、不可带新业，具体怎么讲','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493867&amp;idx=6&amp;sn=fec262661a90a3d35e93a6bb892736f2&amp;chksm=cff6f9f9f88170ef243985adf62dfa590a41a1ebde98b5f11cf208f6414f0874acbc6efbbf14#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','066','44、愿力大过业力的实际标准是什么','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493867&amp;idx=7&amp;sn=245c413ab85a30af0bb7d6d06915a041&amp;chksm=cff6f9f9f88170efaab4c40c37ed0a2ee9c71b8398fa13df1d96418982ba7ec95c14e55f1082#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','067','45、不是佛那边有问题，是自己的问题','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494317&amp;idx=1&amp;sn=44fe15d664e69dbe6d92ee4e71a96619&amp;chksm=cff6fbbff88172a9150c33494d9576f854a76ccbc334b6ff56f2ca270cd4554cdcd43d7cffe8#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','068','46、要老实专注在净土法门',myaddr+'xxzlhz/jxbzl/46.html','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','069','47、我们求佛接引，是不是外求?',myaddr+'xxzlhz/jxbzl/47.html','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','070','48、往生到极乐世界或是依然生到六道中的某一道，也都是自己心现识变','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493922&amp;idx=1&amp;sn=6f2858d080bcb6b085b43f837078f082&amp;chksm=cff6f830f88171265e505272f117fc785f271b28db51023a414ad7765e6d61d5a4228c129065#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','071','49、师父，我临终的时候想现个出家相','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493922&amp;idx=2&amp;sn=a3e2b52783b0e3dd865922d072db9aa3&amp;chksm=cff6f830f8817126c99a493a9f18f03ed9b4e58ea189be7c414076b96dafe76196ed0d5f0d8f#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','072','50、将所有善根，心心回向，愿生极乐净土','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493922&amp;idx=3&amp;sn=8962b75c9f78a59840b50f1faa245a20&amp;chksm=cff6f830f88171262845e0ee3eb84cb6b9205c91924cf64cec9e8b24840b204222d52a92fb7d#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','073','51、老法师这段开示告诫我们不要贪图享受，不要贪恋世间','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493922&amp;idx=4&amp;sn=1211b3a03e25d5a946d5b54483d151c7&amp;chksm=cff6f830f8817126ae8bbe0b1e15c38cf2b301abbe41b674007737cbe96269e69953779e36dc#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','074','52、佛门历史上很有名的“三生石”公案','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493922&amp;idx=5&amp;sn=ac250a0d97028edcd45f14e60c986cec&amp;chksm=cff6f830f8817126126f4759b047f70e0ec9e673bdcbe55ec3eddcb3e5e43ddd5da359c60a9a#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','075','53、佛陀明确的告诉我们，轮回的主因就是贪爱','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493922&amp;idx=6&amp;sn=6743c07828b878723499a3edfa75c529&amp;chksm=cff6f830f8817126ea78634efcca3d37cf5d662db3535b957174401efabd7e6c2a48c6096729#rd','无','有','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','076','54、对于督导修学、对于净土宗更加深入的认识，建立更为坚定的信心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493948&amp;idx=1&amp;sn=dd8cd6649881edc9a2d5f0ea9a04c89d&amp;chksm=cff6f82ef8817138fa1582357c381818123b1802beb83c89d1f4c96744e45a707a9ec971760f#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','077','55、净士法门是一个特殊法门，不是外面所有宗派所能解释的','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493948&amp;idx=2&amp;sn=613930f749b11c3aaaf3acef4f9c5fa8&amp;chksm=cff6f82ef8817138b4eadf3153ef4d7557e53678f343b97ff354a240452aa837415056decbbd#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','师父随缘开示','','078','56、往生模拟训练，神识怎么个出法，那个不必操心','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247493948&amp;idx=3&amp;sn=35e53e2c372b3a6da0db840ea459302a&amp;chksm=cff6f82ef8817138836055a4d8c05d19110481be6ef04d13927fcdfdde5b1c907b8277fe34b7#rd','无','无','文章','原始'],

//助念专题
['选学资料汇总','静修班资料','助念专题','','001','01、助念案例（乌市迟老菩萨）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494001&amp;idx=1&amp;sn=e558e1bb627651357aafbabe05492147&amp;chksm=cff6f863f881717513ab1dafd960125a63cf431820f5e33451ff216438dc4e923b2c475c6bcc#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','002','02、助念案例（白城王淑琴）','https://mp.weixin.qq.com/s/jnqReitUdmNgebputu0GGg','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','003','03、助念案例（孙淑云）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494001&amp;idx=2&amp;sn=2cf4c829eeca016d12928a5b6b11ea4d&amp;chksm=cff6f863f881717575d34c3398bb08561c23c7c469b90650ce703ef18b561c94a66a3e459f08#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','004','04、助念小组成立和筹备','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494001&amp;idx=3&amp;sn=da0cff37ad0c44f311f9d4c807014a98&amp;chksm=cff6f863f8817175426d5acd59125edd0eb66dc4dd3db0eb653e39f036d41474fef4882addd5#rd','无','无','文章','原始'],

['选学资料汇总','静修班资料','助念专题','','005','05-1、助念简要手册',myaddr+'xxzlhz/jxbzl/zn05-1.html','无','无','文章0','原始'],
['选学资料汇总','静修班资料','助念专题','','006','05-2-1、助念简要手册-讲解',myaddr+'xxzlhz/jxbzl/zn05-2-1.html','有','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','006','05-2-2、助念简要手册-补充说明',myaddr+'xxzlhz/jxbzl/zn05-2-2.html','有','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','006','05-2-3、助念简要手册-如何用佛法看待和面对疫情',myaddr+'xxzlhz/jxbzl/zn05-2-3.html','有','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','006','05-2-4、助念简要手册-问答',myaddr+'xxzlhz/jxbzl/zn05-2-4.html','有','无','文章2','原始'],

['选学资料汇总','静修班资料','助念专题','','007','06、助念佛号的练习','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494001&amp;idx=4&amp;sn=e5a9b50856c06f05293c029b5daab859&amp;chksm=cff6f863f8817175b9a8ee6ca06594171a0687b8286d99e60e53554dafca2eba35ff7b390768#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','008','07、法器引领念佛时的节奏变化','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494001&amp;idx=5&amp;sn=8034a0faa3e9eff895fa1d3bac25fcc0&amp;chksm=cff6f863f8817175e7302551b6eae669f65b404ae17208bd0140c004ebedf47fc9225a638746#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','009','08、亡者是男众，现前身边如果没有男众探视，女众可探视吗','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494001&amp;idx=6&amp;sn=4378e2abcb4ecd930e3b500b269aba15&amp;chksm=cff6f863f8817175eb44e160feb0800e6e518b21cf7795d09f410cba94ae15dfa7e351c14ec2#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','0010','09-1、《中阴身救度整理》','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494337&amp;idx=5&amp;sn=54aa167cc81a27d02fbe5264fc9623fa&amp;chksm=cff6fbd3f88172c5cfcac279accb70ae1bc69b5ef805b5eee5cb99e05db0d61d65990301373d#rd','无','无','文章0','原始'],
['选学资料汇总','静修班资料','助念专题','','011','09-2、《中阴身救度整理》里对远程助念做了特别说明','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=1&amp;sn=dd3b386141d6327ae5894729feab40b2&amp;chksm=cff6fb32f881722464a8fd2cabfd96e159399bd683872cfcd5e62bfbcff10262437a410481c2#rd','无','无','文章2','原始'],
['选学资料汇总','静修班资料','助念专题','','012','10、可以用“远程助念方式”作为补救','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=2&amp;sn=7847590e0f71f7fcb01b8cb223c53727&amp;chksm=cff6fb32f881722485feb2ada73c0bebe077c3d5b76c067710c8c96c95924eecf2212091fa6e#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','013','11、助念案例(朱燃)佛像支架','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494227&amp;idx=1&amp;sn=cd5c5b446043237832fc46a61b8b2aa3&amp;chksm=cff6fb41f88172573483dabd54e5c8c35f935488d7678529ad965e3decfa272040609c917276#rd','无','有','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','014','12、助念案例（赵同新）关于身体回软','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=3&amp;sn=603b3c4f0dc6951a5a5d33cd01b93451&amp;chksm=cff6fb32f8817224a2cb473bd5e7443d294de60067d5fa146ada5ba4dfeb0134fd670eb8823d#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','015','13、助念案例（丁艳霞）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=4&amp;sn=6a2371b590e6eddc7ed81098aada8b43&amp;chksm=cff6fb32f881722448a5035d8c5d7e8b519e47dbc5c3569bf6d06a3edb66e0c031c848eb3c8b#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','016','14、张景丽给婆婆助念','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=5&amp;sn=0429f3c0967e6c0bd2bd977692916987&amp;chksm=cff6fb32f88172247906a54ea3d2a5d91555f97152fdeb4f7828aff65af64e0323c4f1670dcb#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','017','15、助念案例（一位同修的父亲停留在鬼道）','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=6&amp;sn=4a037450335034a924354221daa3e692&amp;chksm=cff6fb32f881722422d3b5576e42e9455388e6136b397f7be226a33c680affc0901d9f57a659#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','018','16、几段国外“濒死体验”的研究记录',myaddr+'xxzlhz/jxbzl/zn16.html','无','有','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','019','17、两个给动物助念送往生的案例','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=7&amp;sn=a04ff88eb429d81d9b1909a1bf96debc&amp;chksm=cff6fb32f881722406480f597b9b017760296385a83f5904625d21c2e218c629504b382444a6#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','020','18、平时不要随意拿起就敲','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494176&amp;idx=8&amp;sn=47fbcde481fb50ec836e8729dc68c068&amp;chksm=cff6fb32f88172246b525d96f527da97d53567db383d4d7ebdba20cfa0677a5dc40df5518dc5#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','021','19-1、助念案例（刘淑贤老菩萨）',myaddr+'xxzlhz/jxbzl/zn19-1.html','有','无','文章0','原始'],
['选学资料汇总','静修班资料','助念专题','','022','19-2、刘淑贤老菩萨往生助念专题','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247492870&amp;idx=1&amp;sn=9089e05d4862ba9899bb02339c97fe0d&amp;scene=21#wechat_redirect','有','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','022','19-3、刘淑贤老菩萨视频整理-待制作','#','无','有','文章2','原始'],
['选学资料汇总','静修班资料','助念专题','','023','20、热成像仪的使用','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494227&amp;idx=2&amp;sn=96187b7a103422fc2de8be845569ce58&amp;chksm=cff6fb41f88172574c4c71e509b9120bb4f6c67e21f1f29697e9d54b202194a781a3df7286ce#rd','有','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','024','21、关于助念的一些问答','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494227&amp;idx=3&amp;sn=23008e0ace30c60c7d6b245a90dd57b5&amp;chksm=cff6fb41f88172572cc02cd79225daa6338321e130dcbec451134dfe87f49303201ea024bef3#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','025','22、关于“远程助念”的问答','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494227&amp;idx=4&amp;sn=9a6609023a318ac537be2c2ae94b34fe&amp;chksm=cff6fb41f8817257be5b64a690b87dbb187505aa01e6da84b6dcd073cefb0618bdd3802c7daf#rd','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','026','23-1、通过刘瑛案例给大家讲修往生的注意事项1','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494317&amp;idx=2&amp;sn=5059b454c5bd4a0670d0702ea7aba5df&amp;chksm=cff6fbbff88172a93da0d305b86c5a9e926c853206809f266859858826ef093d51eca7219087#rd','有','无','文章0','原始'],
['选学资料汇总','静修班资料','助念专题','','027','23-2、通过刘瑛案例给大家讲修往生的注意事项2','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494317&amp;idx=3&amp;sn=8a3581ba6cb65213dd8174325b197be1&amp;chksm=cff6fbbff88172a994b208cee500c5452f4bc1a37e24a54ee4c4ff7ae7401f6d184a137813cb#rd','有','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','028','23-3、通过刘瑛案例给大家讲修往生的注意事项3','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494317&amp;idx=4&amp;sn=0b7d72fed9f5f2242483bf79436c03ee&amp;chksm=cff6fbbff88172a9779ddaac379e1d8242212717a957da0d33891ce6343e2c8398ad5cb7f2ea#rd','有','无','文章2','原始'],
['选学资料汇总','静修班资料','助念专题','','029','24-1“助念模拟训练”前的开示1-每个阶段都要模拟训练','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494317&amp;idx=5&amp;sn=319b23d7d319e205550ee34140815d36&amp;chksm=cff6fbbff88172a96b78e543fa848d744d5de592117cebb4a5a072d4d7cf8e13718eb2444552#rd','无','无','文章0','原始'],
['选学资料汇总','静修班资料','助念专题','','030','24-2“助念模拟训练”前的开示2-助念时如何念佛','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494317&amp;idx=6&amp;sn=0f513d090a312036a02e0c2090c9b286&amp;chksm=cff6fbbff88172a92ac271488b08e433ab07b872f7c99f2d6450c3f27aa8d0ff0ad3e5d21bdc#rd','无','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','031','24-3“助念模拟训练”前的开示3-实修为主，助念为辅','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494317&amp;idx=7&amp;sn=0bd58114d4296f02e301620f45aa64f5&amp;chksm=cff6fbbff88172a9d17bf4eb76f7c609bf15fd02bca87167cdf2d25ecd4f383889ec8a292190#rd','无','无','文章2','原始'],
['选学资料汇总','静修班资料','助念专题','','032','25、助念模拟训练',myaddr+'xxzlhz/jxbzl/zn25.html','无','无','文章','原始'],
['选学资料汇总','静修班资料','助念专题','','033','26-1“助念模拟训练”后的开示1-把问题提前挖掘出来并解决掉','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494337&amp;idx=1&amp;sn=429f202e17c9b9066809a9f0960b4b1d&amp;chksm=cff6fbd3f88172c5fbfab2a463366351ece31af889da39452c9246bf57f4f1c28b9913735e35#rd','无','无','文章0','原始'],
['选学资料汇总','静修班资料','助念专题','','034','26-2“助念模拟训练”后的开示2-佛号要听清要念熟','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494337&amp;idx=2&amp;sn=de53409aac2e085419454a9c20f07917&amp;chksm=cff6fbd3f88172c5d664910908ff319c1d970d136481ea161a452722201f66c5a9edce2232a6#rd','无','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','035','26-3“助念模拟训练”后的开示3-回向是在做往生的转化','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494337&amp;idx=3&amp;sn=8dc87571d68de8c3cf30b02005db05cc&amp;chksm=cff6fbd3f88172c55e22d58141118b4e4a99b6801709f436b5e744627db73110aa34c014afec#rd','无','无','文章1','原始'],
['选学资料汇总','静修班资料','助念专题','','036','26-4“助念模拟训练”后的开示4-所见景象皆是业力幻化','https://mp.weixin.qq.com/s?__biz=Mzg4ODg4MzMyNQ==&amp;mid=2247494337&amp;idx=4&amp;sn=777af71e6c947c06d73bc2c56c192486&amp;chksm=cff6fbd3f88172c56a4d7f24c3289edce60f878da14f7906f829704471328bf1fdf3634672fd#rd','无','无','文章2','原始']

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
		//alert('在随缘开示');
		switch(p2)
		{
			case '因缘果汇集':
				contdatas = contdatas60.map(innerArray => innerArray.slice());
				//alert(contdatas.length);

			break;
			
			case 'QQ群开示汇集':
				contdatas = contdatas61.map(innerArray => innerArray.slice());
				
			break;
			case '小组开示汇集':
				contdatas = contdatas62.map(innerArray => innerArray.slice());
			break;
			default:
				alert('未知类型，在随缘开示');
    			break;
		}

	break;
	case '其他专题':
		switch(p2)
		{
			case '辨析与破斥':
				contdatas = contdatas70.map(innerArray => innerArray.slice());
				//alert(contdatas.length);

			break;
			
			case '新年寄语':
				contdatas = contdatas71.map(innerArray => innerArray.slice());
				
			break;
			case '辅导员资料汇集':
				contdatas = contdatas72.map(innerArray => innerArray.slice());
				//alert(contdatas.length);

			break;
			default:
				alert('未知类型，在其他专题');
    			break;
		}

	break;
	case '选学资料汇总':
		
		switch(p2)
		{
			case '佛教动画':
				contdatas = contdatas80.map(innerArray => innerArray.slice());
				
			break;

			
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
	//alert('查询关键词的情形');
	if ( p1=='不选择' )
	{
		if ( p5=='' )
			return datas;
		else
		{
			//依次查询所有文章
			pushDatas(datas,contdatas1,p5);//概览说明
			pushDatas(datas,contdatas2,p5);//基础班资料
			pushDatas(datas,contdatas3,p5);//每日四项
			pushDatas(datas,contdatas4,p5);//净土次第修
			pushDatas(datas,contdatas5,p5);//学员分享摘选
			pushDatas(datas,contdatas60,p5);//随缘开示 因缘果汇集
			pushDatas(datas,contdatas61,p5);//随缘开示 QQ群开示汇集
			pushDatas(datas,contdatas62,p5);//随缘开示 小组开示汇集
			pushDatas(datas,contdatas70,p5);//其他专题 辨析与破斥
			pushDatas(datas,contdatas71,p5);//其他专题 新年寄语
			pushDatas(datas,contdatas72,p5);//其他专题 辅导员资料汇集
			pushDatas(datas,contdatas80,p5);//选学资料汇总 佛教动画
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
			//alert(sLen);
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
		//alert('不是查询关键词的情形');
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
			//alert(sLen);

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
