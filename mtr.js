async function getInfo(){
    const res = await fetch('https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=150')
    const json= await res.json()
    const infoup1=json.platform_list[0].route_list[0]
    const infoup12=json.platform_list[0].route_list[1]
    const infoup2=json.platform_list[1].route_list[0]
    const infoup22=json.platform_list[1].route_list[1]

    document.getElementById('message').innerHTML=infoup1.route_no+ " 往 " +infoup1.dest_ch+" 的 "+infoup1.train_length+ "卡列車 <br>時間： " +infoup1.time_ch
    document.getElementById('message1').innerHTML=infoup12.route_no+ " 往 " +infoup12.dest_ch+" 的 "+infoup12.train_length+ "卡列車 <br>時間： " +infoup12.time_ch
    document.getElementById('message2').innerHTML=infoup2.route_no+ " 往 " +infoup2.dest_ch+" 的 "+infoup2.train_length+ "卡列車 <br>時間： " +infoup2.time_ch
    document.getElementById('message3').innerHTML=infoup22.route_no+ " 往 " +infoup22.dest_ch+" 的 "+infoup22.train_length+ "卡列車 <br>時間： " +infoup22.time_ch
    if(infoup1.time_ch == "即將抵達"){
    document.getElementById('abc').innerHTML=infoup1.route_no+ " 往 " +infoup1.dest_ch+" 的 "+infoup1.train_length+ "卡列車即將抵達1號月台"
} else {
    document.getElementById('abc').innerHTML=""
}
if(infoup12.time_ch == "即將抵達"){
    document.getElementById('abc').innerHTML=infoup12.route_no+ " 往 " +infoup12.dest_ch+" 的 "+infoup12.train_length+ "卡列車即將抵達1號月台"
} else {
    document.getElementById('abc').innerHTML=""
}
if(infoup2.time_ch == "即將抵達"){
    document.getElementById('abc').innerHTML=infoup2.route_no+ " 往 " +infoup2.dest_ch+" 的 "+infoup2.train_length+ "卡列車即將抵達2號月台"
} else {
    document.getElementById('abc').innerHTML=""
}
if(infoup22.time_ch == "即將抵達"){
    document.getElementById('abc').innerHTML=infoup22.route_no+ " 往 " +infoup22.dest_ch+" 的 "+infoup22.train_length+ "卡列車即將抵達2號月台"
} else {
    document.getElementById('abc').innerHTML=""
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
    if(TL==0){
        document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  正在離開";
    } else { document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  "+TL+"分鐘 - "+kmb58m.rmk_tc;}
    document.getElementById('kmb2').innerHTML=kmb58m2.route+ " 往 " +kmb58m2.dest_tc+"<br>時間：  "+TL2+"分鐘 - "+kmb58m2.rmk_tc
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
    getInfo();
    getKMBinfo();
}, 10000);