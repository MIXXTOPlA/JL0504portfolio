console.clear();
var _data = JSON.parse(`
{"lyrics":[{"line":"--------------","time":-1},
{"line":"Blue","time":14500},
{"line":"Martini blue","time":15300},
{"line":"너란 파도 속에 헤엄치고 있잖아","time":17300},
{"line":"Mmm baby you're my","time":20000},
{"line":"Blue","time":21100},
{"line":"Martini blue","time":22000},
{"line":"너란 바닷속에 헤어 나오지 못하게","time":24300},
{"line":"더 감싸 안아줘","time":27000},
{"line":"My baby My lady My baby My lady","time":28000},
{"line":"Yeah you're my","time":34500},
{"line":"Blue","time":35100},
{"line":"Martini blue","time":36000},
{"line":"You got me moving on","time":38000},
{"line":"That martini blue yeah","time":39000},
{"line":"Everything you do yeah","time":41000},
{"line":"눈빛만 보면 알아 girl","time":42300},
{"line":"You wanna mmm","time":44000},
{"line":"그럼 나는 고갤 끄떡 거려","time":45700},
{"line":"Cause you mmm","time":47500},
{"line":"Girl whats your flavor","time":49000},
{"line":"Flavor mmm","time":50100},
{"line":"전화기는 꺼놔","time":53000},
{"line":"I don't want that brr","time":54000},
{"line":"20/20 focused on you baby","time":56200},
{"line":"바닐라 아이스크림 그 위 체리","time":58200},
{"line":"파스텔 색 lake 그 위 ferry","time":59600},
{"line":"파란 ocean 그 위 도시 베니스","time":61300},
{"line":"내가 블루 네가 베리","time":62700},
{"line":"그게 우리 둘의 케미","time":63500},
{"line":"Yeah yeah","time":64500},
{"line":"Faisons l'amour Paris","time":65250},
{"line":"Yeah yeah yeah","time":66200},
{"line":"So in love with","time":67200},
{"line":"The way you move","time":67800},
{"line":"I'm so into you","time":68800},
{"line":"Into you","time":71000},
{"line":"You got me I got you","time":73000},
{"line":"Our love's deep Like the blue","time":74500},
{"line":"Into you Into you","time":76500},
{"line":"You got me I got you","time":80000},
{"line":"You're my martini","time":81800},
{"line":"Blue","time":82800},
{"line":"Martini blue","time":84000},
{"line":"너란 파도 속에 헤엄치고 있잖아","time":86000},
{"line":"Mmm baby you're my","time":89000},
{"line":"Blue","time":90000},
{"line":"Martini blue","time":91000},
{"line":"너란 바닷속에 헤어 나오지 못하게","time":93000},
{"line":"더 감싸 안아줘","time":95500},
{"line":"My baby My lady My baby My lady","time":97000},
{"line":"Yeah you're my","time":103000},
{"line":"Blue","time":103700},
{"line":"Martini blue","time":104500},
{"line":"You got me moving on","time":106500},
{"line":"That martini blue yeah","time":107500},
{"line":"Everything you do yeah","time":109800},
{"line":"눈빛 만 보면 알지 girl","time":110700},
{"line":"I wanna mmm","time":112200},
{"line":"그럼 넌 머리를 쓸어 넘겨","time":114000},
{"line":"Cause I'm mmm","time":115800},
{"line":"Girl guess my flavor","time":117800},
{"line":"Flavor mmm","time":118900},
{"line":"전화기는 이미 껐어","time":121000},
{"line":"You don't want that brr","time":122500},
{"line":"허나 내가 원하는 건","time":125000},
{"line":"지금 그것 뿐만은 아니야","time":126600},
{"line":"너가 힘들어할 때면 꽉 안고 싶단 말이야","time":128400},
{"line":"깊고 험한 바닷속에 사는 Your my Ariel","time":132000},
{"line":"Yeah wait Need you close","time":135400},
{"line":"Yeah hear my note","time":136300},
{"line":"I've been really looking Forward to this like oh","time":137300},
{"line":"(Coming to you live)","time":140400},
{"line":"Girl you got me like oh","time":141200},
{"line":"아름다움에 깊이 빠져있어","time":144000},
{"line":"Like oh like oh oh","time":145300},
{"line":"가라앉고 있는 나를 와서 구해줘","time":147200},
{"line":"You're my martini blue","time":150000},
{"line":"Blue","time":151800},
{"line":"Martini blue","time":152500},
{"line":"너란 파도 속에 헤엄치고 있잖아","time":154600},
{"line":"Mmm baby you're my","time":157300},
{"line":"Blue","time":158200},
{"line":"Martini blue","time":159200},
{"line":"너란 바닷속에 헤어 나오지 못하게","time":161500},
{"line":"더 감싸 안아줘","time":163900},
{"line":"My baby My lady My baby My lady","time":165000},
{"line":"Yeah you're my","time":171600},
{"line":"Blue","time":172200},
{"line":"Martini blue","time":173200},
{"line":"You got me moving on","time":175000},
{"line":"That martini blue yeah","time":176000},
{"line":"Everything you do yeah","time":178000},
{"line":"-","time":180000},
{"line":"--","time":182000},
{"line":"---","time":184000},
{"line":"----","time":186000},
{"line":"-----","time":188000},
{"line":"------","time":190000},
{"line":"-------","time":192000}]}`

);
var currentLine = "";

function align() {
   var a = $(".highlighted").height();
   var c = $(".content").height();
   var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
   var e = d + (a/2) - (c/2);
   $(".content").animate(
       {scrollTop: e + "px"}, {easing: "swing", duration: 250}
   );
}

var lyricHeight = $(".lyrics").height();
$(window).on("resize", function() {
   if ($(".lyrics").height() != lyricHeight) { 
      lyricHeight = $(".lyrics").height();
      align();
   }
});

$(document).ready(function(){
   $("audio").on('timeupdate', function(e){
      var time = this.currentTime*1000;
      var past = _data["lyrics"].filter(function (item) {
         return item.time < time;
      });
      if (_data["lyrics"][past.length] != currentLine) {
         currentLine = _data["lyrics"][past.length];
         $(".lyrics div").removeClass("highlighted");
         $(`.lyrics div:nth-child(${past.length})`).addClass("highlighted"); 
         align();
      }
   });
});

generate();

function generate() {
   var html = "";
   for(var i = 0; i < _data["lyrics"].length; i++) {
      html += "<div";
      if(i == 0) {
         html+=` class="highlighted"`;
         currentLine = 0;
      }
      if(_data["lyrics"][i]["note"]) {
         html += ` note="${_data["lyrics"][i]["note"]}"`;
      }
      html += ">";
      html += _data["lyrics"][i]["line"] == "" ? "•" : _data["lyrics"][i]["line"];
      html += "</div>"
   }
   $(".lyrics").html(html);
   align();
}