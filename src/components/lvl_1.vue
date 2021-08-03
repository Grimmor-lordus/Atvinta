<template>
    <div class="container" id="head"> <!--контейнер 01-->
      <div class="top_header"> <!--строка с логотипом и кнопкой-->
        <div name="logo"> <!--обертка для пакмена-->
          <div class="pacman"></div> <!--пакмен-->
          <div class="pacman_food">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div name="btn_container"> <!--обертка для кнопки-->
          <button name="create_biorobot">Произвести биоробота</button> <!--кнопка-->
        </div>
      </div>
      <div class="bottom_header"> <!--обертка для нижней части контейнера 01-->
      <div name="markup">
        <div name="index">01</div> <!--нумерация 01 слевой части-->
        <div name="scroll">скролл</div> <!--текст "скролл" слевой части-->
      </div>
        <div class="text-block"> <!--обертка для текста-->
          <h1 name="top_text">Фабрика по производству биороботов</h1>
          <h1 name="bottom_text">класса «монитор-крело»</h1>
        </div>
        <div class="wrap">
            <img name="img_1" src="https://s3-alpha-sig.figma.com/img/09ed/bf7d/f73d25160bb4b88810012ad0997fbdc3?Expires=1628467200&Signature=J972o-1fVTzj98i9NaNulawHRtV0YBpL4oJ2eWJrp2fTyCZaboo7r2BdmbO1Qs-GKpMUuoS5YgMyVg08hgJI~QmutOkxREX3YETgD8DcJlmYVFOw0hdPImCZTqxu8nGU~Mw-suS2Iz-cbe~oPDKx6TBdk4VK9MuiVSJrdHEFjJuBb94HIM2VqYD23AMPhND~sCcB~GYxfM92~PNVltf1bPlnL80Zfrt~WjG8fFOAm8ubGYgRy7yQ3HTi~DWYgankLVNFTpToecl15eakOmQx~V3GxM7VNpbgHj-Dmymikdf6M2jZPm34ZLwv8y9AlyvsMYBVaEg6m6wvdwLetLwZMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
            <div name="ellips"></div>
            <img name="img_2" src="https://s3-alpha-sig.figma.com/img/15ec/9301/32b447cae9a0044e9c5aadfdb3fc96bb?Expires=1628467200&Signature=ZZhTIpAJjfID4gT1Xli4eS4GVzXXuKwfSguNzubH0sSxSuWNAyer7zj9UB53FUyTfAzg0UcwHAyNjNRAL99QvFUAc3T98-YQir6Ltw-aFuq9F07SfzH3GRoPKiwAe1TgBME~iA07K1EUbW~igHWaqycm0wp-i7hJcTNDQpxQAy3JSBDT~HWRsX0aVg8rLyaLv8TIuqfvJDOknq9C9PlBMMRdyBMC0E0EzoaHxaoVnMM1BWW~-MB1WJPxjVC1Zo8RkDztinbbsi-3ehLLq1rSMeGh-uijSfP1AJkladyyMJCoYKgMEUzeYbmWUQ8FduoyQiXEsOYZ2YhLWLqOWf5LNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
        </div>
      </div>
    </div>
</template>

<style>
  #head .container {
    margin: 0 auto;
    position: relative;
  }

  #head [name=markup] {
    display: flex;
    flex-direction: column;
  }
  
  #head [name=markup] [name=index] {
    width: 24px;
    height: 24px;
    line-height: 24px;
    margin-top: 47.31px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    color: #667380;
    font-weight: 500;
  }

  #head [name=markup] [name=scroll] {
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    color: #667380;
    font-weight: 500;
    transform: rotate(270deg);
    top: 150px;
    position: relative;
  }

  #head .top_header {
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #head [name=logo] {
    position: relative;
    width: 100px;
    height: 48px;
  }

  #head .pacman {
    width: 48px;
    height: 48px;
    background-color: #FF7F22;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 50%, 50% 50%, 50% 0%);
    border-radius: 50%;
    transform: rotate(45deg);
    display: inline-block;
  }
  
  #head .pacman_food {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  #head .pacman_food ul {
    position: relative;
    margin: auto 0px;
    display: flex;
  }

  #head .pacman_food ul li{
    list-style: none;
    width: 9px;
    height: 9px;
    margin-right: 5px;
    background-color: #FF7F22;
    border-radius: 100%;
  }

  #head [name=btn_container] {
    float: right;
    margin: 0 !important;
  }

  #head [name=btn_container] [name=create_biorobot] {
    background-color: transparent;
    height: 48px;
    width: 236px;
    border: 2px solid #FF7F22;
    box-sizing: border-box;
    border-radius: 60px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  #head [name=btn_container] [name=create_biorobot]:hover {
    background: #FF5722;
    border: none;
  }

  #head [name=btn_container] [name=create_biorobot]:active {
    background: #FF7F22;
    border: 2px solid #FF7F22;
    box-sizing: border-box;
  }

  #head [name=btn_container] [name=create_biorobot]:disabled {
        background: transparent;
        border: 2px solid #4C5865;
        color:#4C5865;
    }

  #head .bottom_header {
    margin-top: 96.69px;
    display: flex;
    flex-direction: row;
  }


  #head .text-block {
    margin-top: 23.31px;
    margin-left: 106px;
    width: 470px;
    height: 216px;
  }

  #head .text-block [name=top_text]{
    margin: 0px;
    color: #fff;
    font-size: 56px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }

  #head .text-block [name=bottom_text]{
    margin-top: 23px;
    color: #A3B8CC;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }

  #head .wrap{
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow:hidden;
    height:300px;
  }

  #head .wrap [name=img_1]{
    position: absolute;
    top:50%;
    left: 35%;
    transform:translate(-45%,-55%);
    width:300px;
    height:350px;
    object-fit:cover;
  }

  #head [name=ellips] {
    width: 275px;
    height: 275px;
    background-color: #1E2936;
    border-radius: 100%;
    margin-left: 120px;
  }

  #head .wrap [name=img_2]{
    position: absolute;
    top:15%;
    left:53%;
    transform:translate(-45%,-55%);
    width:200px;
    height:236px;
    object-fit:cover;
    transform: scaleX(-1);
  }

</style>
