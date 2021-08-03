<template>
    <div id="ErrorMessage">
        <div class="background" v-on:click="hide"></div>
        <div class="modal_window">
            <div class="row_1">
                <button name="cross" v-on:click="hide"><img src="img\cross.svg" alt=""></button>
            </div>
            <div class="row_2">
                <img name="message_ico" src="img\coin.svg" alt="">
                <p name="title">{{ title }}</p>
            </div>
            <div class="row_3">
                <p name="message">{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Title",
            message: "Message"
        }
    },
    methods: {
        show: function (msg, msgTitle, imgUrl) {
            if(!msg) {
                return;
            }
            
            
            document.getElementById("ErrorMessage").setAttribute("show", true);
            document.querySelector("#ErrorMessage [name=title]").innerHTML = msgTitle || "Собщение";
            document.querySelector("#ErrorMessage [name=message]").innerHTML = msg;
            
            if(!!imgUrl) {
                document.querySelector("#ErrorMessage img[name=message_ico]").setAttribute("src", imgUrl);
                document.querySelector("#ErrorMessage img[name=message_ico]").setAttribute("disabled", "enabled");
            } else {
                document.querySelector("#ErrorMessage img[name=message_ico]").setAttribute("disabled", "disabled");
            }
        },
        hide: function () {
            document.getElementById("ErrorMessage").setAttribute("show", false);
        }
    }
}
</script>

<style>
    #ErrorMessage {
        position: fixed;
        left: 0;
        top: 0;
        display: none;
        visibility: hidden;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }

    #ErrorMessage .background {
        position: relative;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.397)
    }

    #ErrorMessage[show=true] {
        display: block;
        visibility: visible;
    }

    #ErrorMessage .modal_window {
        width: 496px;
        height: 240px;
        background-color: #fff;
        border-radius: 10px;
        z-index: 999;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: auto;
    }

    #ErrorMessage [name=cross] {
        position: relative;
        width: 30px;
        height: 30px;
        background: transparent;
        border: none;
        cursor: pointer;
        float: right;
        margin: 10px;
    }

    #ErrorMessage [name=cross] img {
        width: 100%;
        height: 100%;
    }

    #ErrorMessage .row_2 {
        display: flex;
        margin: 40px 39px 0px 34px;
        height: 80px;
    } 

    #ErrorMessage .row_2 img[name=message_ico] {
        width: 43px;
        height: 52px;
        padding-right: 29px;
        margin-top: 10px;
    }

    #ErrorMessage .row_2 img[name=message_ico][disabled=disabled] {
        visibility: hidden;
    }

    #ErrorMessage .row_2 p {
        font-family: Montserrat;
        margin: 0;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0em;
        text-align: left;
    }

    #ErrorMessage .row_3 p {
        width: 306px;
        height: 64px;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        color: #4C5865;
        margin: 0 0 0 105px;
    }
</style>
