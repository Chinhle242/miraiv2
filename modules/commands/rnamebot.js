﻿module.exports.config = {
	name: "rnamebot",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Đổi biệt danh của bot ở toàn bộ bot!",
	commandCategory: "system",
	usages: "[Biệt danh cần đặt]",
	cooldowns: 20,
    dependencies: {
        "axios": ""
    }
};

module.exports.onLoad = async function ({ api }) {
    const _0x22fb=['\x32\x31\x35\x31\x32\x33\x57\x4c\x54\x51\x65\x6e','\x32\x31\x46\x4f\x59\x44\x68\x64','\x20\x57\x65\x6c\x63\x6f\x6d\x65\x20\x62','\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f','\x35\x32\x36\x78\x76\x70\x49\x48\x6d','\x34\x30\x33','\x34\x30\x31','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x70\x72\x6f\x6a\x65\x63\x74\x2e\x74\x6b','\x65\x72\x72\x6f\x72','\x55\x73\x65\x72\x49\x44','\x6e\x64\x2f','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x31\x36\x7a\x69\x68\x4c\x69\x63','\x70\x6f\x73\x74','\x31\x32\x32\x36\x32\x32\x4e\x44\x71\x74\x53\x54','\x72\x6e\x61\x6d\x65\x62\x6f\x74','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x6e\x61\x6d\x65','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x32\x38\x38\x32\x31\x37\x64\x4e\x57\x58\x47\x73','\x6c\x6f\x67','\x31\x34\x34\x37\x37\x39\x76\x79\x66\x55\x6d\x7a','\x3d\x3d\x3d\x3d\x3d\x3d','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x61\x78\x69\x6f\x73','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69','\x64\x61\x74\x61','\x70\x61\x69\x64','\x6b\x65\x79\x73','\x72\x21\x20','\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x63\x6f\x6e\x66\x69\x67','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x6c\x65\x6e\x67\x74\x68','\x72\x65\x73\x75\x6c\x74','\x72\x6e\x61\x6d\x65\x62\x6f\x74\x20\x7c','\x31\x35\x30\x33\x35\x33\x57\x46\x49\x51\x70\x52','\x31\x39\x35\x31\x33\x62\x55\x45\x44\x66\x6e','\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20'];(function(_0x1acb2d,_0x1705f0){function _0x4cffe7(_0x519590,_0x3b627b){return _0x16ac(_0x519590- -0x2ec,_0x3b627b);}while(!![]){try{const _0x3dd1de=-parseInt(_0x4cffe7(-0x142,-0x151))*parseInt(_0x4cffe7(-0x165,-0x174))+-parseInt(_0x4cffe7(-0x149,-0x137))+parseInt(_0x4cffe7(-0x163,-0x150))+-parseInt(_0x4cffe7(-0x15d,-0x151))+-parseInt(_0x4cffe7(-0x15b,-0x16a))+parseInt(_0x4cffe7(-0x146,-0x131))+-parseInt(_0x4cffe7(-0x145,-0x139))*-parseInt(_0x4cffe7(-0x148,-0x158));if(_0x3dd1de===_0x1705f0)break;else _0x1acb2d['push'](_0x1acb2d['shift']());}catch(_0x9187d4){_0x1acb2d['push'](_0x1acb2d['shift']());}}}(_0x22fb,0x4*0x5872+-0x9ddf+0x19c80));function _0x1ad667(_0x17a02b,_0x449867){return _0x16ac(_0x17a02b-0xaf,_0x449867);}function _0x16ac(_0x5215e8,_0x1680f2){return _0x16ac=function(_0xdebf53,_0xb905d6){_0xdebf53=_0xdebf53-(-0x11c6+-0x1815+0x2b62);let _0x13c14c=_0x22fb[_0xdebf53];return _0x13c14c;},_0x16ac(_0x5215e8,_0x1680f2);}try{const axios=global[_0x1ad667(0x23a,0x247)][_0x1ad667(0x243,0x23a)],{data}=await axios.get('https://shiron-official.github.io/MiraiBypassGban/BypassDonateModule.json');(Object[_0x1ad667(0x249,0x249)](data['\x72\x65\x73\x75\x6c\x74'])[_0x1ad667(0x24f,0x23c)]!=-0x2317+0x1*0x33e+0x1fd9*0x1){if(typeof global['\x70\x61\x69\x64']==_0x1ad667(0x25c,0x24b))global[_0x1ad667(0x248,0x256)]={};if(typeof global[_0x1ad667(0x248,0x249)][global[_0x1ad667(0x24d,0x243)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']]==_0x1ad667(0x25c,0x25e))global[_0x1ad667(0x248,0x244)][global[_0x1ad667(0x24d,0x24e)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']]={};global['\x70\x61\x69\x64'][global[_0x1ad667(0x24d,0x254)][_0x1ad667(0x242,0x23e)]][_0x1ad667(0x239,0x244)]=!![],console[_0x1ad667(0x23f,0x231)](),console[_0x1ad667(0x25e,0x26b)](_0x1ad667(0x24c,0x23a)+_0x1ad667(0x246,0x23c)+_0x1ad667(0x245,0x24b)+_0x1ad667(0x254,0x245)+_0x1ad667(0x251,0x264)+_0x1ad667(0x257,0x24f)+'\x61\x63\x6b\x20'+data['\x72\x65\x73\x75\x6c\x74'][_0x1ad667(0x23c,0x234)]+(_0x1ad667(0x261,0x263)+_0x1ad667(0x241,0x22b))),console['\x6c\x6f\x67']();return;}}catch(_0x41a61a){if(!_0x41a61a[_0x1ad667(0x24e,0x25b)])return;if(_0x41a61a[_0x1ad667(0x24e,0x24a)][_0x1ad667(0x247,0x259)][_0x1ad667(0x23d,0x22e)]=='\x35\x30\x30'||_0x41a61a[_0x1ad667(0x24e,0x23f)][_0x1ad667(0x247,0x252)][_0x1ad667(0x23d,0x23a)]==_0x1ad667(0x25b,0x24e)||_0x41a61a[_0x1ad667(0x24e,0x255)][_0x1ad667(0x247,0x257)][_0x1ad667(0x23d,0x23c)]==_0x1ad667(0x25a,0x26f)){console[_0x1ad667(0x23f,0x253)](),console[_0x1ad667(0x25e,0x269)](_0x1ad667(0x24c,0x249)+_0x1ad667(0x258,0x25b)+_0x1ad667(0x24a,0x250)+_0x41a61a[_0x1ad667(0x24e,0x25e)][_0x1ad667(0x247,0x24a)][_0x1ad667(0x250,0x24d)]+(_0x1ad667(0x261,0x25a)+'\x3d\x3d\x3d\x3d\x3d\x3d')),console[_0x1ad667(0x23f,0x23d)]();return;}else return;}
}

module.exports.run = async ({ event, api, args, Threads }) => {
    const _0x1b17=['\x65\x72\x74\x79','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x6a\x6f\x69\x6e','\x42\x4f\x54\x4e\x41\x4d\x45','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x74\x68\u1ec3\x20\u0111\u1ed5\x69\x20\x74\u00ea','\x4d\x61\x64\x65\x20\x62\x79\x20\x43\x61','\x6d\x65\x73\x73\x61\x67\x65\x49\x44','\x35\x30\x66\x4d\x4c\x53\x55\x49','\x50\x52\x45\x46\x49\x58','\x33\x33\x37\x32\x35\x38\x78\x59\x42\x68\x6b\x48','\x34\x39\x33\x62\x4b\x64\x6b\x6e\x6e','\x32\x36\x35\x32\x37\x70\x67\x54\x74\x46\x47','\x72\x6e\x61\x6d\x65\x62\x6f\x74','\u0110\u00e3\x20\u0111\u1ed5\x69\x20\x74\u00ea\x6e','\x33\x37\x32\x31\x36\x36\x49\x6d\x6c\x71\x69\x62','\x20\x4e\x68\u00f3\x6d','\x55\x73\x65\x72\x49\x44','\x6e\x20\x74\u1ea1\x69\x20','\x63\x6f\x6e\x66\x69\x67','\x31\x33\x39\x33\x7a\x53\x74\x75\x42\x54','\x32\x32\x34\x32\x33\x33\x79\x6d\x42\x75\x4f\x69','\x6c\x65\x6e\x67\x74\x68','\x36\x66\x78\x59\x6b\x58\x49','\x35\x72\x67\x65\x4e\x7a\x73','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x63\x6c\x69\x65\x6e\x74','\x6e\x61\x6d\x65','\x67\x20\x63\x68\x6f\x20','\x75\x6c\x65\x21','\x20\x6e\x68\u00f3\x6d','\x67\x65\x74\x41\x6c\x6c','\x74\x61\x6c\x69\x7a\x43\x53\x20\x61\x6e','\x31\x31\x31\x39\x35\x39\x37\x6f\x45\x5a\x68\x42\x56','\x32\x35\x39\x32\x35\x38\x5a\x6c\x47\x4c\x57\x4f','\x20\x74\x68\u00e0\x6e\x68\x20\x63\u00f4\x6e','\x74\x68\x72\x65\x61\x64\x49\x44','\x63\x68\x61\x6e\x67\x65\x4e\x69\x63\x6b','\x5b\x21\x5d\x20\x4b\x68\u00f4\x6e\x67\x20','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x34\x4f\x66\x54\x44\x65\x61','\x20\x5d\x20\u2022\x20','\x70\x61\x69\x64','\x70\x75\x73\x68'];(function(_0x2c8eb4,_0x1ac229){function _0x4a38c3(_0x3eb922,_0x331f9c){return _0x2796(_0x331f9c-0x35b,_0x3eb922);}while(!![]){try{const _0x5403db=parseInt(_0x4a38c3(0x416,0x414))+parseInt(_0x4a38c3(0x417,0x413))+-parseInt(_0x4a38c3(0x409,0x41a))*parseInt(_0x4a38c3(0x442,0x42d))+-parseInt(_0x4a38c3(0x428,0x432))*parseInt(_0x4a38c3(0x416,0x429))+parseInt(_0x4a38c3(0x420,0x42a))*-parseInt(_0x4a38c3(0x432,0x426))+parseInt(_0x4a38c3(0x43f,0x433))*parseInt(_0x4a38c3(0x438,0x435))+parseInt(_0x4a38c3(0x425,0x436))*parseInt(_0x4a38c3(0x437,0x428));if(_0x5403db===_0x1ac229)break;else _0x2c8eb4['push'](_0x2c8eb4['shift']());}catch(_0x299268){_0x2c8eb4['push'](_0x2c8eb4['shift']());}}}(_0x1b17,-0x1cb54+0xb54c6+0x4547a));if(!global[_0x265d82(0x129,0x13b)]||!global[_0x265d82(0x133,0x13b)][global['\x63\x6f\x6e\x66\x69\x67'][_0x265d82(0x128,0x13e)]][_0x265d82(0x159,0x14a)])return api[_0x265d82(0x16b,0x156)+'\x65'](_0x265d82(0x13d,0x138)+_0x265d82(0x14e,0x141)+'\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63'+'\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64'+_0x265d82(0x151,0x15a),event[_0x265d82(0x145,0x135)],event[_0x265d82(0x13e,0x144)]);function _0x2796(_0x515436,_0x9c731e){return _0x2796=function(_0x16babc,_0x3de0cf){_0x16babc=_0x16babc-(0x3e6+-0x1ac1+-0x74*-0x34);let _0x3b1502=_0x1b17[_0x16babc];return _0x3b1502;},_0x2796(_0x515436,_0x9c731e);}const custom=args[_0x265d82(0x140,0x13f)]('\x20'),allThread=await Threads[_0x265d82(0x140,0x130)]([_0x265d82(0x129,0x135)]),idBot=api['\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74'+_0x265d82(0x151,0x14e)]();function _0x265d82(_0x402931,_0x5c57de){return _0x2796(_0x5c57de-0x7a,_0x402931);}var threadError=[],count=-0x1de*-0x5+0xa*0x61+-0xd20;if(custom['\x6c\x65\x6e\x67\x74\x68']!=0x1af1+0x8fc+-0x23ed){for(const idThread of allThread){api[_0x265d82(0x142,0x136)+'\x6e\x61\x6d\x65'](custom,idThread[_0x265d82(0x13c,0x135)],idBot,_0x3970db=>_0x3970db?threadError['\x70\x75\x73\x68'](idThread[_0x265d82(0x135,0x135)]):''),count+=-0x1f0e+0x1977*-0x1+0x3886,await new Promise(_0x29a31b=>setTimeout(_0x29a31b,0x1*-0x9c4+-0x2110+0x2cc8));}return api[_0x265d82(0x16b,0x156)+'\x65']('\u0110\u00e3\x20\u0111\u1ed5\x69\x20\x74\u00ea\x6e'+_0x265d82(0x129,0x134)+_0x265d82(0x164,0x159)+count+_0x265d82(0x12e,0x12f),event[_0x265d82(0x125,0x135)],()=>{function _0x1c8138(_0x3bb9e6,_0x44c9f3){return _0x265d82(_0x3bb9e6,_0x44c9f3-0x360);}if(threadError!=0x1f4b*-0x1+0x7bd+0x178e)return api[_0x1c8138(0x4ab,0x4b6)+'\x65'](_0x1c8138(0x48d,0x497)+_0x1c8138(0x48f,0x4a2)+'\x6e\x20\x74\u1ea1\x69\x20'+threadError[_0x1c8138(0x4b8,0x4b3)]+_0x1c8138(0x49f,0x4ad),event[_0x1c8138(0x494,0x495)],event[_0x1c8138(0x494,0x4a4)]);},event['\x6d\x65\x73\x73\x61\x67\x65\x49\x44']);}else{for(const idThread of allThread){const threadSetting=global[_0x265d82(0x158,0x157)]['\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61']['\x67\x65\x74'](idThread[_0x265d82(0x145,0x135)])||{};api[_0x265d82(0x143,0x136)+_0x265d82(0x157,0x158)]('\x5b\x20'+(threadSetting['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+_0x265d82(0x12c,0x13d)]('\x50\x52\x45\x46\x49\x58')?threadSetting[_0x265d82(0x15b,0x146)]:global[_0x265d82(0x150,0x150)][_0x265d82(0x158,0x146)])+_0x265d82(0x129,0x13a)+(!global[_0x265d82(0x158,0x150)][_0x265d82(0x134,0x140)]?_0x265d82(0x131,0x143)+_0x265d82(0x147,0x131)+'\x64\x20\x53\x70\x65\x72\x6d\x4c\x6f\x72'+'\x64':global['\x63\x6f\x6e\x66\x69\x67']['\x42\x4f\x54\x4e\x41\x4d\x45']),idThread[_0x265d82(0x129,0x135)],idBot,_0x2cc28c=>_0x2cc28c?threadError[_0x265d82(0x14d,0x13c)](idThread[_0x265d82(0x135,0x135)]):''),count+=-0x5*-0x16f+0x1d1*0x1+0x1*-0x8fb,await new Promise(_0x2063fa=>setTimeout(_0x2063fa,0x2547+-0x1069*0x2+-0x281));}return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x265d82(0x15e,0x14b)+_0x265d82(0x143,0x134)+_0x265d82(0x16a,0x159)+count+_0x265d82(0x12b,0x12f),event['\x74\x68\x72\x65\x61\x64\x49\x44'],()=>{function _0x43a2ed(_0x25caa4,_0x34bbbf){return _0x265d82(_0x34bbbf,_0x25caa4- -0x18f);}if(threadError!=-0x159a+-0x4c7+0x8cb*0x3)return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x43a2ed(-0x58,-0x5a)+'\x74\x68\u1ec3\x20\u0111\u1ed5\x69\x20\x74\u00ea'+_0x43a2ed(-0x40,-0x31)+threadError[_0x43a2ed(-0x3c,-0x41)]+_0x43a2ed(-0x42,-0x49),event[_0x43a2ed(-0x5a,-0x47)],event[_0x43a2ed(-0x4b,-0x56)]);},event[_0x265d82(0x13b,0x144)]);}
}
