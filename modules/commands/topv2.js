module.exports.config={name:"topv2",version:"1.0.0",hasPermssion:0,credits:"ManhG",description:"Xem những đứa lắm mồm nhất quả đất",commandCategory:"info",usages:"[thread/user/money]",cooldowns:5},module.exports.run=async({event:e,api:n,args:t,Currencies:s,Users:a})=>{const{threadID:o,messageID:r}=e;if(t[1]&&isNaN(t[1])||parseInt(t[1])<=0)return n.sendMessage("thông tin độ dài list phải là một con số và không dưới 0",e.threadID,e.messageID);var i=parseInt(t[1]||10),g="";if("thread"==t[0]||"-t"==t[0]){var m=[];try{h=await n.getThreadList(i,null,["INBOX"])}catch(e){console.log(e)}for(const e of h)1==e.isGroup&&m.push({threadName:e.name,threadID:e.threadID,messageCount:e.messageCount});m.sort(((e,n)=>e.messageCount>n.messageCount?-1:e.messageCount<n.messageCount?1:void 0));var l=0;for(const e of m){if(l==i)break;g+=`${l+1}. ${e.threadName||"Không tên"}[${e.threadID}] với ${e.messageCount} tin nhắn\n`,l+=1}return n.sendMessage(`Dưới đây là top ${m.length} các nhóm lắm mồm nhất quả đất:\n\n${g}`,o,r)}if("user"==t[0]||"-u"==t[0]){g="",l=0;try{h=await s.getAll(["userID","exp"])}catch(e){console.log(e)}h.sort(((e,n)=>e.exp>n.exp?-1:e.exp<n.exp?1:void 0)),h.length<i&&(i=h.length);const e=global.data.botID;h=h.filter((n=>n.userID!=e));for(const e of h){if(l==i)break;g+=`${l+1}. ${(await a.getData(e.userID)).name} với ${e.exp} tin nhắn\n`,l+=1}return n.sendMessage(`Dưới đây là top ${i} các người dùng lắm mồm nhất quả đất:\n\n${g}`,o,r)}if("money"==t[0]||"-m"==t[0]){var h;g="",l=0;try{h=await s.getAll(["userID","money"])}catch(e){console.log(e)}h.sort(((e,n)=>e.money>n.money?-1:e.money<n.money?1:void 0)),h.length<i&&(i=h.length);const e=global.data.botID;h=h.filter((n=>n.userID!=e));for(const e of h){if(l==i)break;g+=`${l+1}. ${(await a.getData(e.userID)).name} với ${e.money} đô\n`,l+=1}return n.sendMessage(`Dưới đây là top ${i} các người dùng giàu nhất quả đất:\n\n${g}`,o,r)}return global.utils.throwError(this.config.name,o,r)};
