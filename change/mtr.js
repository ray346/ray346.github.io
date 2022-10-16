async function getInfo(){
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    const res = await fetch('https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=150')
    const json= await res.json()
    const infoup1=json.platform_list[0].route_list[0]
    const infoup12=json.platform_list[0].route_list[1]
    const infoup2=json.platform_list[1].route_list[0]
    const infoup22=json.platform_list[1].route_list[1]

    document.getElementById('bg1').innerHTML="輕鐵班次 - 良景站 "+d.getHours()+":"+d.getMinutes();
    document.getElementById('message').innerHTML="<b>"+infoup1.route_no+ "</b> 往 <b>" +infoup1.dest_ch+"</b> 的 <b>"+infoup1.train_length+ "</b>卡列車 <br>時間： " +infoup1.time_ch
    document.getElementById('message1').innerHTML="<b>"+infoup12.route_no+ "</b> 往 <b>" +infoup12.dest_ch+"</b> 的 <b>"+infoup12.train_length+ "</b>卡列車 <br>時間： " +infoup12.time_ch
    document.getElementById('message2').innerHTML="<b>"+infoup2.route_no+ "</b> 往 <b>" +infoup2.dest_ch+"</b> 的 <b>"+infoup2.train_length+ "</b>卡列車 <br>時間： " +infoup2.time_ch
    document.getElementById('message3').innerHTML="<b>"+infoup22.route_no+ "</b> 往 <b>" +infoup22.dest_ch+"</b> 的 <b>"+infoup22.train_length+ "</b>卡列車 <br>時間： " +infoup22.time_ch
    if(infoup1.time_ch == "即將抵達"){
        document.getElementById('abc').style.display = 'block';
    document.getElementById('abc').innerHTML="<b>"+infoup1.route_no+ "</b> 往 <b>" +infoup1.dest_ch+"</b> 的 <b>"+infoup1.train_length+ "</b>卡列車即將抵達<b>1號月台</b>"
} else {
    document.getElementById('abc').style.display = 'none';
}
    if(infoup12.time_ch == "即將抵達"){
        document.getElementById('abc2').style.display = 'block';
    document.getElementById('abc2').innerHTML="<b>"+infoup12.route_no+ "</b> 往 <b>" +infoup12.dest_ch+"</b> 的 <b>"+infoup12.train_length+ "</b>卡列車即將抵達<b>1號月台</b>"
} else {
    document.getElementById('abc2').style.display = 'none';
}
if(infoup2.time_ch == "即將抵達"){
    document.getElementById('abc1').style.display = 'block';
    document.getElementById('abc1').innerHTML="<b>"+infoup2.route_no+ "</b> 往 <b>" +infoup2.dest_ch+"</b> 的 <b>"+infoup2.train_length+ "</b>卡列車即將抵達<b>2號月台</b>"
} else {
    document.getElementById('abc1').style.display = 'none';
}
if(infoup22.time_ch == "即將抵達"){
    document.getElementById('abc3').style.display = 'block';
    document.getElementById('abc3').innerHTML="<b>"+infoup22.route_no+ "</b> 往 <b>" +infoup22.dest_ch+"</b> 的 <b>"+infoup22.train_length+ "</b>卡列車即將抵達<b>2號月台</b>"
} else {
    document.getElementById('abc3').style.display = 'none';
}
}
async function getKMBinfo(){
    const res = await fetch('https://data.etabus.gov.hk/v1/transport/kmb/eta/4CF25CB2C36E36F0/58M/1')
    const json = await res.json()
    //1
    const kmb58m = json.data[0]
    const ct= kmb58m.data_timestamp;
    const ctt=new Date(ct).getTime();
    const etat=new Date(kmb58m.eta).getTime();
    const TL=Math.ceil((etat-ctt)/1000/60);
    //2
    const kmb58m2 = json.data[1]
    const ct2= kmb58m2.data_timestamp;
    const ctt2=new Date(ct2).getTime();
    const etat2=new Date(kmb58m2.eta).getTime();
    const TL2=Math.ceil((etat2-ctt2)/1000/60);
    /*
        if(TL==0){
        document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  正在離開";
    } else { document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  "+TL+"分鐘 - "+kmb58m.rmk_tc;}
     */
    if(TL==0){
        document.getElementById('message').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b><br>時間： 正在離開";
    } else {
        document.getElementById('message').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b><br>時間： <b>"+TL+"</b>分鐘 "+kmb58m.rmk_tc;}
    document.getElementById('message1').innerHTML="<b>"+kmb58m2.route+ "</b> 往 <b>" +kmb58m2.dest_tc+"</b><br>時間： <b>"+TL2+"</b>分鐘 "+kmb58m2.rmk_tc
}
async function getKMB58xInfo(){
    const res = await fetch('https://data.etabus.gov.hk/v1/transport/kmb/eta/692B63F1A1F42D8C/58X/1')
    const json = await res.json()
    //1
    const kmb58m = json.data[0]
    const ct= kmb58m.data_timestamp;
    const ctt=new Date(ct).getTime();
    const etat=new Date(kmb58m.eta).getTime();
    const TL=Math.ceil((etat-ctt)/1000/60);
    //2
    const kmb58m2 = json.data[1]
    const ct2= kmb58m2.data_timestamp;
    const ctt2=new Date(ct2).getTime();
    const etat2=new Date(kmb58m2.eta).getTime();
    const TL2=Math.ceil((etat2-ctt2)/1000/60);
    if(TL==0){
        document.getElementById('message2').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b><br>時間： 正在離開";
    } else { document.getElementById('message2').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b><br>時間： <b>"+TL+"</b>分鐘 "+kmb58m.rmk_tc;}
    document.getElementById('message3').innerHTML="<b>"+kmb58m2.route+ "</b> 往 <b>" +kmb58m2.dest_tc+"</b><br>時間： <b>"+TL2+"</b>分鐘 "+kmb58m2.rmk_tc
}
var seconds = 9;
setInterval(function() {
document.getElementById('t').innerHTML = "每 "+seconds--+" 秒更新";
if(seconds <0){
    seconds = 9;
}
}, 1000);

getInfo();
getKMBinfo();

setInterval(function(){
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    getKMBinfo();
    getKMB58xInfo();
    document.getElementById('bg1').innerHTML="巴士班次 - 良景站 "+d.getHours()+":"+d.getMinutes();
}, 10000);
setInterval(function(){
    getInfo();
}, 20000);