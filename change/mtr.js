async function getInfo(){
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    box1="";
    const d1 = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc')
    const json1 = await d1.json()
    const res = await fetch('https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=150')
    const json= await res.json()
    const infoup1=json.platform_list[0].route_list[0]
    const infoup12=json.platform_list[0].route_list[1]
    const infoup2=json.platform_list[1].route_list[0]
    const infoup22=json.platform_list[1].route_list[1]
    //hko
    try {
        const t3= json1.WTCSGNL.type
        if(typeof(t3)=="undefined"){
            box1+="";
        } else box1+=t3;
    } catch(err){
        box1+="";
    }
    if(box1==""){
        box1="";
    }
        if(box1=="三號強風信號"){
            box1="<img src=No._03_Strong_Wind_Signal.png width=\"30px\" height=\"30px\">";
        }
        if(box1=="一號戒備信號"){
            box1="<img src=No._01_Standby_Signal.png width=\"30px\" height=\"30px\">";
        }
        if(d.getMinutes()<10){
            document.getElementById('bg1').innerHTML="輕鐵班次 - 良景站 "+d.getHours()+":0"+d.getMinutes()+" "+box1;
        } else {
            document.getElementById('bg1').innerHTML="輕鐵班次 - 良景站 "+d.getHours()+":"+d.getMinutes()+" "+box1;
        }
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
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
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
    //hko
    box12="";
    const d1 = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc')
    const json1 = await d1.json()
    try {
        const t3= json1.WTCSGNL.type
        if(typeof(t3)=="undefined"){
            box12+="";
        } else box12+=t3;
    } catch(err){
        box12+="";
    }
    if(box12==""){
        box12="";
    }
        if(box12=="三號強風信號"){
            box12="<img src=No._03_Strong_Wind_Signal.png width=\"30px\" height=\"30px\">";
        }
        if(box12=="一號戒備信號"){
            box12="<img src=No._01_Standby_Signal.png width=\"30px\" height=\"30px\">";
        }
    /*
        if(TL==0){
        document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  正在離開";
    } else { document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  "+TL+"分鐘 - "+kmb58m.rmk_tc;}
     */
    if(d.getMinutes()<10){
    document.getElementById('bg1').innerHTML="巴士班次 - 良景站 "+d.getHours()+":0"+d.getMinutes()+" "+box12;
    } else {
        document.getElementById('bg1').innerHTML="巴士班次 - 良景站 "+d.getHours()+":"+d.getMinutes()+" "+box12;
    }
    if(TL==0){
        document.getElementById('message').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b>(經屯轉)<br>時間： 正在離開";
    } else {
        document.getElementById('message').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b>(經屯轉)<br>時間： <b>"+TL+"</b>分鐘 "+kmb58m.rmk_tc;}
    document.getElementById('message1').innerHTML="<b>"+kmb58m2.route+ "</b> 往 <b>" +kmb58m2.dest_tc+"</b>(經屯轉)<br>時間： <b>"+TL2+"</b>分鐘 "+kmb58m2.rmk_tc
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
    if(TL==0 || TL<0){
        document.getElementById('message2').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b><br>時間： 正在離開";
    } else { document.getElementById('message2').innerHTML="<b>"+kmb58m.route+ "</b> 往 <b>" +kmb58m.dest_tc+"</b><br>時間： <b>"+TL+"</b>分鐘 "+kmb58m.rmk_tc;}
    document.getElementById('message3').innerHTML="<b>"+kmb58m2.route+ "</b> 往 <b>" +kmb58m2.dest_tc+"</b><br>時間： <b>"+TL2+"</b>分鐘 "+kmb58m2.rmk_tc
}
async function getTMLInfo(){
    const res = await fetch('https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=TML&sta=TUM');
    const json = await res.json()
    const TML = json.data["TML-TUM"].DOWN[0]
    const TML1 = json.data["TML-TUM"].DOWN[1]
    const TML2 = json.data["TML-TUM"].DOWN[2]
    const ct = json.curr_time;
    const ctt2=new Date(ct).getTime();
    const etat1 =new Date(TML.time).getTime();
    const etat2 =new Date(TML1.time).getTime();
    const etat3 =new Date(TML2.time).getTime();
    const TL2=Math.ceil((etat1-ctt2)/1000/60);
    const TL3=Math.ceil((etat2-ctt2)/1000/60);
    const TL4=Math.ceil((etat3-ctt2)/1000/60);
    const STA_NAMETC ={
        WKS:"烏溪沙"
    }
    const STA_NAME ={
WKS: "Wu Kai Sha",
MOS: "Ma On Shan",
HEO: "Heng On",
TSH: "Tai Shui Hang",
SHM: "Shek Mun",
CIO: "City One",
STW: "Sha Tin Wai",
CKT: "Che Kung Temple",
TAW: "Tai Wai",
HIK: "Hin Keng",
DIH: "Diamond Hill",
KAT: "Kai Tak",
SUW: "Sung Wong Toi",
TKW: "To Kwa Wan",
HOM: "Ho Man Tin",
HUH: "Hung Hom",
ETS: "East Tsim Sha Tsui",
AUS: "Austin",
NAC: "Nam Cheong",
MEF: "Mei Foo"
    }
    if(TL2==0){
        document.getElementById('message4').innerHTML=`<b>屯門站</b> - <b>${STA_NAMETC[TML.dest]}</b>`+" <b>"+TML.plat+"</b>號月台 <br>正在離開... | <b>"+TL3+"</b> 分鐘 | <b>"+TL4+"</b> 分鐘"
    } else {
        document.getElementById('message4').innerHTML=`<b>屯門站</b> - <b>${STA_NAMETC[TML.dest]}</b>`+" <b>"+TML.plat+"</b>號月台 <br>時間： <b>"+TL2+"</b> 分鐘 | <b>"+TL3+"</b> 分鐘 | <b>"+TL4+"</b> 分鐘"
    }
}
async function getHKO(){
    box="";
    const d1 = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc')
    const json1 = await d1.json()
    const d = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc')
    const json = await d.json()
    const tt= json.forecastDesc
    try {
        const t3= json1.WTCSGNL.type
        if(typeof(t3)=="undefined"){
            box+="";
        } else box+=t3+" ";
    } catch(err){
        box+="";
    }
    try {
        const w1= json1.WFIRE.name
        if(typeof(w1)=="undefined"){
            box+="";
        } else box+=w1+" ";
    } catch(err){
        box+="";
    }
    if(box==""){
        box="現時無任何熱帶氣旋或天氣警告";
    }
    box+="現正生效";
    
document.getElementById('wtr').innerHTML=box;
}
/*var seconds = 9;
setInterval(function() {
document.getElementById('t').innerHTML = "每 "+seconds--+" 秒更新";
if(seconds <0){
    seconds = 9;
}
}, 1000);*/
$(document).ready(function(){
    setInterval(function(){
      $('#news li:first-child').slideUp(function(){      $(this).appendTo($('#news')).slideDown()
      })       
    },4000)
  })

getInfo();
getTMLInfo();
//getKMBinfo();
getHKO();
//getWeather();

setInterval(function(){
    getKMBinfo();
    getHKO();
    getKMB58xInfo();
    getTMLInfo();
}, 7000);
setInterval(function(){
    getInfo();
}, 14000);