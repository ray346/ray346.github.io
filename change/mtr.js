NAME_OF_HKO = {
    WFIREY:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/firey.gif align=bottom width=\"40px\" height=\"40px\">",
    WFIRER:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/firer.gif align=bottom width=\"40px\" height=\"40px\">",
    WRAINB:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/rainb.gif align=bottom width=\"40px\" height=\"40px\">",
    WRAINR:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/rainr.gif align=bottom width=\"40px\" height=\"40px\">",
    WRAINA:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/raina.gif align=bottom width=\"40px\" height=\"40px\">",
    八號西南烈風或暴風信號:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/tc8sw.gif align=bottom width=\"40px\" height=\"40px\">",
    八號東南烈風或暴風信號:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/tc8se.gif align=bottom width=\"40px\" height=\"40px\">",
    八號西北烈風或暴風信號:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/tc8nw.gif align=bottom width=\"40px\" height=\"40px\">",
    八號東北烈風或暴風信號:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/tc8ne.gif align=bottom width=\"40px\" height=\"40px\">",
    三號強風信號:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/tc3.gif align=bottom width=\"40px\" height=\"40px\">",
    一號戒備信號:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/tc1.gif align=bottom width=\"40px\" height=\"40px\">",
    強烈季候風信號:"<img src=https://www.hko.gov.hk/tc/wservice/warning/images/smsimg.png align=bottom width=\"40px\" height=\"40px\">",
    寒冷天氣警告:"<img src=https://www.hko.gov.hk/tc/wservice/warning/images/warncold.gif align=bottom width=\"40px\" height=\"40px\">",
    雷暴警告:"<img src=https://www.hko.gov.hk/tc/textonly/img/warn/images/ts.gif align=bottom width=\"40px\" height=\"40px\">",
    取消所有熱帶氣旋警告信號:"",
    NA:""
}

var temp = "";

async function getv(){
    const d1 = await fetch('https://api.countapi.xyz/hit/ray346.github.io/visits')
    const json1 = await d1.json()
    const v=json1.value
    document.getElementById('count').innerHTML="共有 "+v+" 到訪過！感謝支持！";
}

async function getInfo(){
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    box1="NA";
    box2="NA";
    box3="NA";
    box4="NA";
    box5="NA";
    box6="";
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
        const t2= json1.WFIRE.code
        if(typeof(t2)=="undefined"){
            box6="NA";
        } else box6=t2;
    } catch(err){
        box6="NA";
    }
    try {
        const t2= json1.WRAIN.code
        if(typeof(t2)=="undefined"){
            box5="NA";
        } else box5=t2;
    } catch(err){
        box5="NA";
    }
    try {
        const t2= json1.WTS.name
        if(typeof(t2)=="undefined"){
            box4="NA";
        } else box4=t2;
    } catch(err){
        box4="NA";
    }
    try {
        const t2= json1.WCOLD.name
        if(typeof(t2)=="undefined"){
            box3="NA";
        } else box3=t2;
    } catch(err){
        box3="NA";
    }
    try {
        const t3= json1.WTCSGNL.type
        if(typeof(t3)=="undefined"){
            box1="NA";
        } else box1=t3;
    } catch(err){
        box1="NA";
    }
    try {
        const t4= json1.WMSGNL.name
        if(typeof(t4)=="undefined"){
            box2="NA";
        } else box2=t4;
    } catch(err){
        box2="NA";
    }
    const allbox=" "+NAME_OF_HKO[box1]+NAME_OF_HKO[box5]+NAME_OF_HKO[box6]+NAME_OF_HKO[box2]+NAME_OF_HKO[box3]+NAME_OF_HKO[box4];
        if(d.getMinutes()<10){
            document.getElementById('bg1').innerHTML="輕鐵班次 - 良景站 "+d.getHours()+":0"+d.getMinutes()+" "+temp+allbox;
        } else {
            document.getElementById('bg1').innerHTML="輕鐵班次 - 良景站 "+d.getHours()+":"+d.getMinutes()+" "+temp+allbox;
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
async function getENGInfo(){
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    box1="NA";
    box2="NA";
    box3="NA";
    box4="NA";
    box5="NA";
    box6="";
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
        const t2= json1.WFIRE.code
        if(typeof(t2)=="undefined"){
            box6="NA";
        } else box6=t2;
    } catch(err){
        box6="NA";
    }
    try {
        const t2= json1.WRAIN.code
        if(typeof(t2)=="undefined"){
            box5="NA";
        } else box5=t2;
    } catch(err){
        box5="NA";
    }
    try {
        const t2= json1.WTS.name
        if(typeof(t2)=="undefined"){
            box4="NA";
        } else box4=t2;
    } catch(err){
        box4="NA";
    }
    try {
        const t2= json1.WCOLD.name
        if(typeof(t2)=="undefined"){
            box3="NA";
        } else box3=t2;
    } catch(err){
        box3="NA";
    }
    try {
        const t3= json1.WTCSGNL.type
        if(typeof(t3)=="undefined"){
            box1="NA";
        } else box1=t3;
    } catch(err){
        box1="NA";
    }
    try {
        const t4= json1.WMSGNL.name
        if(typeof(t4)=="undefined"){
            box2="NA";
        } else box2=t4;
    } catch(err){
        box2="NA";
    }
    const allbox=" "+NAME_OF_HKO[box1]+NAME_OF_HKO[box5]+NAME_OF_HKO[box6]+NAME_OF_HKO[box2]+NAME_OF_HKO[box3]+NAME_OF_HKO[box4];
        if(d.getMinutes()<10){
            document.getElementById('bg1').innerHTML="Light Rail - Leung King Station "+d.getHours()+":0"+d.getMinutes()+" "+temp+allbox;
        } else {
            document.getElementById('bg1').innerHTML="Light Rail - Leung King Station "+d.getHours()+":"+d.getMinutes()+" "+temp+allbox;
        }
        document.getElementById('message').innerHTML="A <b>"+infoup1.train_length+"</b>-car route <b>"+infoup1.route_no+ "</b> train to <b>" +infoup1.dest_en+"</b> <br>Time： " +infoup1.time_en
        document.getElementById('message1').innerHTML="A <b>"+infoup12.train_length+"</b>-car route <b>"+infoup12.route_no+ "</b> train to <b>" +infoup12.dest_en+"</b> <br>Time： " +infoup12.time_en
        document.getElementById('message2').innerHTML="A <b>"+infoup2.train_length+"</b>-car route <b>"+infoup2.route_no+ "</b> train to <b>" +infoup2.dest_en+"</b> <br>Time： " +infoup2.time_en
        document.getElementById('message3').innerHTML="A <b>"+infoup22.train_length+"</b>-car route <b>"+infoup22.route_no+ "</b> train to <b>" +infoup22.dest_en+"</b> <br>Time： " +infoup22.time_en
    if(infoup1.time_en == "Arriving"){
        document.getElementById('abc').style.display = 'block';
    document.getElementById('abc').innerHTML="A <b>"+infoup1.train_length+"</b>-car route <b>"+infoup1.route_no+ "</b> train to <b>" +infoup1.dest_en+"</b> is arriving at<b> platform 1</b>"
} else {
    document.getElementById('abc').style.display = 'none';
}
    if(infoup12.time_en == "Arriving"){
        document.getElementById('abc2').style.display = 'block';
    document.getElementById('abc2').innerHTML="A <b>"+infoup12.train_length+"</b>-car route <b>"+infoup12.route_no+ "</b> train to <b>" +infoup12.dest_en+"</b> is arriving at<b> platform 1</b>"
} else {
    document.getElementById('abc2').style.display = 'none';
}
if(infoup2.time_en == "Arriving"){
    document.getElementById('abc1').style.display = 'block';
    document.getElementById('abc1').innerHTML="A <b>"+infoup2.train_length+"</b>-car route <b>"+infoup2.route_no+ "</b> train to <b>" +infoup2.dest_en+"</b> is arriving at<b> platform 2</b>"
} else {
    document.getElementById('abc1').style.display = 'none';
}
if(infoup22.time_en == "Arriving"){
    document.getElementById('abc3').style.display = 'block';
    document.getElementById('abc3').innerHTML="A <b>"+infoup22.train_length+"</b>-car route <b>"+infoup22.route_no+ "</b> train to <b>" +infoup22.dest_en+"</b> is arriving at<b> platform 2</b>"
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
    box1="";
    box2="";
    box3="";
    box4="";
    box5="";
    box6="";
    const d1 = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc')
    const json1 = await d1.json()
    try {
        const t2= json1.WFIRE.code
        if(typeof(t2)=="undefined"){
            box6="NA";
        } else box6=t2;
    } catch(err){
        box6="NA";
    }
    try {
        const t2= json1.WRAIN.code
        if(typeof(t2)=="undefined"){
            box5="NA";
        } else box5=t2;
    } catch(err){
        box5="NA";
    }
    try {
        const t2= json1.WTS.name
        if(typeof(t2)=="undefined"){
            box4="NA";
        } else box4=t2;
    } catch(err){
        box4="NA";
    }
    try {
        const t2= json1.WCOLD.name
        if(typeof(t2)=="undefined"){
            box3="NA";
        } else box3=t2;
    } catch(err){
        box3="NA";
    }
    try {
        const t3= json1.WTCSGNL.type
        if(typeof(t3)=="undefined"){
            box1="NA";
        } else box1=t3;
    } catch(err){
        box1="NA";
    }
    try {
        const t4= json1.WMSGNL.name
        if(typeof(t4)=="undefined"){
            box2="NA";
        } else box2=t4;
    } catch(err){
        box2="NA";
    }
    const allbox=" "+NAME_OF_HKO[box1]+NAME_OF_HKO[box5]+NAME_OF_HKO[box6]+NAME_OF_HKO[box2]+NAME_OF_HKO[box3]+NAME_OF_HKO[box4];
    /*
        if(TL==0){
        document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  正在離開";
    } else { document.getElementById('kmb1').innerHTML=kmb58m.route+ " 往 " +kmb58m.dest_tc+"<br>時間：  "+TL+"分鐘 - "+kmb58m.rmk_tc;}
     */
    if(d.getMinutes()<10){
    document.getElementById('bg1').innerHTML="巴士班次 - 良景站 "+d.getHours()+":0"+d.getMinutes()+" "+temp+allbox;
    } else {
        document.getElementById('bg1').innerHTML="巴士班次 - 良景站 "+d.getHours()+":"+d.getMinutes()+" "+temp+allbox;
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
/*async function getGMB(){
    const res = await fetch('https://data.etagmb.gov.hk/eta/route-stop/2003999/20001400')
    const json = await res.json()
    const lt = "上水站"
    const rt = "44A"
    const gmb1 = json.data[0].eta[0].diff
    document.getElementById('message1').innerHTML="<b>"+rt+"</b> 往 <b>"+lt+"</b>(經屯轉)<br>時間： <b>"+gmb1+"</b>分鐘 "

}*/
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
async function WeatherAPI(){
    const d1 = await fetch('https://api.openweathermap.org/data/2.5/weather?id=1819730&units=metric&appid=9fe31bd5341d9709a82650a83a441bd2')
    const json = await d1.json()
    const tmp = json.main.feels_like
    temp = tmp.toFixed(1)+"℃"
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
    if(box=="" || box=="取消所有熱帶氣旋警告信號"){
        box="現時無任何熱帶氣旋或天氣警告";
    }
    box+="現正生效";

    document.getElementById("wtr").innerHTML=box;
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

getv();
getInfo();
getTMLInfo();
//getKMBinfo();
getHKO();
WeatherAPI();
//getGMB();
//getWeather();
var mtrt="";
setInterval(function(){
    WeatherAPI();
},30000)

setInterval(function(){

        getInfo();
        getTMLInfo();
        setTimeout(function() {
        getENGInfo()
        getTMLInfo()
        getTMLInfo()
    }, 4000)
    setTimeout(function() {
        getKMBinfo();
        getKMB58xInfo();
        getTMLInfo();
    }, 7000)
},11000)