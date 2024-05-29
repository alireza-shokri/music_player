const music=[
   {
        cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png",
        name_song:'Anonymus',
        name_kh:'we',
        path:"music/music.mp3",
    }
    ,
    {
        cover:"https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
        name_song:'music.mp3',
        name_kh:' ',
        path:"music/20.mp3",
    },
    {
        cover:"https://i1.sndcdn.com/artworks-rvxsB6y5jJLgWpyP-FM5WzA-t500x500.jpg",
        name_song:'chiez-shahin.mp3',
        name_kh:'shahin-najafi',
        path:"music/Shahin Najafi - Chiz 128.mp3",
    }
    ,
    {
        cover:"https://i1.sndcdn.com/artworks-sWIdYVG7GvTLx3ur-0jnzBw-t500x500.jpg",
        name_song:'Tramadol-Shahin.mp3',
        name_kh:'shahin_najafi',
        path:"music/04 Tramadol.mp3",
    }
    ,
    {
        cover:"https://i1.sndcdn.com/avatars-nuQJbtWy1PzIzbUG-XyeeZw-t500x500.jpg",
        name_song:'Marge Nazli.mp3',
        name_kh:'shahin_najafi',
        path:"music/028 - Shahin Najafi - Marge Nazli.mp3",
    }
    ,
    {
        cover:"https://m.media-amazon.com/images/M/MV5BZGE3Njk3MDktMzg1YS00YjJkLWJhMDEtNzlhNTQ1MTY3MGM2XkEyXkFqcGdeQXVyNzM1MDU5Mjc@._V1_.jpg",
        name_song:'Shahin Najafi - Iran (320).mp3',
        name_kh:'shahin_najafi',
        path:"music/Shahin Najafi - Iran (320).mp3",
    }
    ,
    {
        cover:"https://golsarmusic.ir/wp-content/uploads/2019/09/Modern-Talking-%E2%80%93-No-Face-No-Name-No-Number.jpg",
        name_song:"shery shery leadi  (320).mp3",
        name_kh:"uncwon",
        path:"music/Modern Talking - Cheri Cheri Lady (320).mp3",
    },
    {
        cover:"https://music-fa.com/wp-content/uploads/2019/11/Farhad-Barf-Music-fa.com_-150x150.jpg",
        name_song:"ayne (320).mp3",
        name_kh:"farhad mehrad",
        path:"music/Farhad Mehrad - Ayne (320).mp3",
    },
    {
        cover:"https://music-fa.com/wp-content/uploads/2023/12/Alireza-Ghorbani-Dar-Zolfe-To-Avizam-Music-fa.com_-300x300.jpg",
        name_song:"Parishani (320).mp3",
        name_kh:"alireza ghorbani",
        path:"music/Alireza Ghorbani - Parishani (320).mp3",
    },
   
]


    let $=document;

    let imgcover=$.getElementById('img_cover');
    let audio=$.getElementById('audio');

    let parentimg=$.querySelector('.parent_img');
    let info=$.querySelector('.info');
    let naemmusic=$.querySelector('.naem_music');
    let namekh=$.querySelector('.name_kh');
    let timesh=$.querySelector('.time_sh');
    let timefinsh=$.querySelector('.time_finsh');
    let parentnavar=$.querySelector('.parent_navar');
    let navar=$.querySelector('.navar');
    let previous=$.querySelector('.previous');
    let next=$.querySelector('.next');
    let speed=$.querySelector('.speed');
    let menu=$.querySelector('.menu');
    let play=$.querySelector('.play');
    let ul=$.querySelector('.ul');
    let timemusic=$.querySelector('.time_music');

    let iteam=$.getElementsByClassName('iteam');
    let piteam=$.getElementsByClassName('p_iteam');
    let imgiteam=$.getElementsByClassName('img_iteam');

    let a=false;
    let add=0;
    let musicselect;

    audio.addEventListener('timeupdate',time_update);
    audio.addEventListener('ended',ended);
    play.addEventListener('click',playaudio);
    next.addEventListener('click',nextmusic);
    previous.addEventListener('click',previousmusic);
    speed.addEventListener('click',musicspeed);
    parentnavar.addEventListener('click',rol);
    menu.addEventListener('click',musicmenu);


    // for/////////////

    for (var i=0;i<music.length;i++){
        let newli=$.createElement('li');
        let newimg=$.createElement('img');
        let newp=$.createElement('p');
        newimg.classList.add('img_iteam');
        newp.classList.add('p_iteam');
        newli.classList.add('iteam');
        newli.append(newimg);
        newli.append(newp);
        ul.append(newli);
        imgiteam[i].src=music[i].cover;
        piteam[i].textContent=music[i].name_song;
        iteam[i].addEventListener('click',iteamplay) ;
        
    }

    // time_update////////////////////////////////////// time_update

    function time_update(){
        let minutes=Math.floor(audio.currentTime /60);
        let seconds=Math.floor(audio.currentTime %60);
        let minut=Math.floor(audio.duration/60 );
        let second=Math.floor(audio.duration%60);
    
        if (seconds < 10) 
            seconds = "0" +seconds;

        if(minut && second)
            timefinsh.textContent=minut +':'+second;

            timesh.textContent = minutes + ":" + seconds;
            let y=(audio.currentTime/audio.duration)*100;
            navar.style.width=y+'%';
    }

    // play//////////////////////////////////////play
    nextpreviousplay(add)
    function playaudio(){
        parentimg.style.display='inline';
        info.style.opacity='100';
        if(!a){
        
            play.src='img/pause-icon.png';
            play.removeEventListener('click',playaudio);
            play.addEventListener('click',musicpause);
            play.title='pause';
            play.alt='pause';
                setTimeout(() => {
                    timemusic.style.opacity='100';
                    audio.play();
                }, 700);
            }  
        a=true;
    }

    // pause//////////////////////////////////////pause

    function musicpause(){
        play.src='img/play-icon.png';
        play.removeEventListener('click',musicpause);
        play.addEventListener('click',playaudio);
        play.title='play';
        play.alt='play';
        audio.pause();
        a=false;
    }

    // next//////////////////////////////////////next
    function nextmusic(){
        add++;
        if(add>music.length-1)
            add=0;

        nextpreviousplay(add);
    }
    function previousmusic(){
        add--;
        if(add<0)
            add=music.length-1;
            nextpreviousplay(add);
    }

    // nextpreviousplay/////////////////////////////////////
    
    function nextpreviousplay(wech){
        if(audio.playbackRate=1.5){
            audio.playbackRate=1;
            speed.style.backgroundColor='#e7e7e7';
        }
        info.style.opacity='100';
        parentimg.style.display='inline';
        musicselect=(music[wech]);
        imgcover.src=musicselect.cover;
        naemmusic.innerHTML=musicselect.name_song;
        namekh.innerHTML=musicselect.name_kh;
        audio.src=musicselect.path;
        if(a){
            setTimeout(() => {  
                audio.play();
            }, 500);
        }
    }

    // click chang navar///////////////////////////////////////

    function rol(n){
        let jam=(n.offsetX/this.clientWidth)*audio.duration;
        audio.currentTime=jam;
    }

    // speed////////////////////////////speed

    let b=false;
    function musicspeed(){
        if(a&!b){
            audio.playbackRate=1.5;
            speed.style.backgroundColor='orangered';
            b=true;
        }
        else{
            audio.playbackRate=1;
            speed.style.backgroundColor='#e7e7e7';
            b=false;
        } 
    }

    // menu//////////////////////////menu

    let vazeat=false;
    let widthbody;
    function musicmenu(){
            if(!vazeat){
                ul.style.top='40%';
                menu.src="img/cancel-icon.png";
                menu.title='cancel';
                menu.classList='menu_cancle';
                vazeat=true;
            }
            else {
                ul.style.top='-250px';
                menu.src="img/menu-icon.png";
                menu.title='menu';
                menu.classList='menu';
                vazeat=false;
            }
    }

    // iteamplay//////////////////////////itemplay

    function iteamplay(event2){
        let liselect=event2.target.parentElement;
        let find=music.findIndex(element3 => {
            return  (element3.name_song==liselect.children[1].textContent);
        });
    add=find-1;
    nextmusic();
    playaudio();
    }

    // finsh audio =next audio//////////////////////

    function ended(){
        nextmusic();
    }
