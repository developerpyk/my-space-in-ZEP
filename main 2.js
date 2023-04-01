App.onJoinPlayer.Add(function(player){
    App.showCenterLabel("Hello, Buddy")
    let mbtis = ["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"];
    let nth = Math.floor(Math.random() * mbtis.length);
    player.moveSpeed = 200;
    player.title = mbtis[nth];
    player.sendUpdated();
})

let cloud = App.loadSpritesheet("cloud.png", 659, 400, [0], 6);

App.onJoinPlayer.Add(function(player){

    Map.putObject(5, 5, cloud);
    Map.moveObject(5, 5, 100, 5, 34);

})

App.onSay.Add(function(player, text){
    if(text == 'speed up'){
        player.moveSpeed = 300;
    }
    if(text == 'speed down'){
        player.moveSpeed = 100;
    }
    player.sendUpdated();
    let message = player.name + '님이 ' + text + '(이)라고 말했습니다';
    App.showCenterLabel(message);
})

