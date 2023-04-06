<template>
  <title>Capiclean</title>
  <!--header section start -->
    <div class="header_section">
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-3">
                <div class="logo"><router-link :to="{name: 'Home'}"><img src="@/assets/images/logo.png"></router-link></div>
            </div>
            <div class="col-md-9">
                <div class="menu_text">
                    <ul>
                        <div class="togle_3">
                            <div class="menu_main">
                                <div class="padding_left0"><a href="#">Register</a>
                                    <span class="padding_left0"><a href="#">Login</a></span></div>
                            </div>
                            <div class="shoping_bag"><img src="@/assets/images/search-icon.png"></div>
                        </div>
                        <div id="myNav" class="overlay">
                            <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
                            <div class="overlay-content">
                                <router-link :to="{name: 'Home'}" class="navBtn" @click="moveToHome">Home</router-link>
                                <router-link :to="{name: 'Choose'}" class="navBtn" @click="moveToPage">Choose</router-link>
                                <router-link :to="{name: 'Team'}" class="navBtn" @click="moveToPage">Team</router-link>
                            </div>
                        </div>
                        <span class="navbar-toggler-icon"></span>
                        <span @click="openNav"><img src="@/assets/images/toggle-icon.png" class="toggle_menu"></span>
                    </ul>
                </div>      
            </div>
            </div>
        </div>
        <!-- banner section start -->
    <div id="bannerDiv" class="banner_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <h1 class="banner_taital">Best YOUR</h1> 
                    <h1 class="banner_taital_1">house CLEAN</h1>
                    <p class="banner_text">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                    <div class="contact_bt"><a href="contact.html">CONTACT US<span class="contact_padding"><img src="@/assets/images/contact-icon.png"></span></a></div>
                </div>
                <div class="col-sm-2">
                    <div class="play_icon"><a href="#"><img src="@/assets/images/play-icon.png"></a></div>
                </div>
                <div class="col-sm-5">
                    <div><img src="@/assets/images/img-1.png" class="image_1"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- banner section end -->
    </div>
    <!-- header section end -->
</template>

<script>
export default {
    setup() {
        let overlay = null;
        let divObj = null;

        const openNav = () => {
            overlay = document.getElementsByClassName('overlay')[0];
            overlay.style.width = "100%";
        }
        const closeNav = () => {
            overlay.style.width = "0%";
        }

        const moveToHome = () => {
            if(divObj == null){
                divObj = document.getElementsByClassName('header_section')[0];
            }
            divObj.classList.remove("background_bg");
            document.getElementById("bannerDiv").style.display = "block";
            overlay.style.width = "0%";
        }

        const moveToPage = () => {
            if(divObj == null){
                divObj = document.getElementsByClassName('header_section')[0];
            }
            divObj.classList.add("background_bg");
            document.getElementById("bannerDiv").style.display = "none";
            overlay.style.width = "0%";
        }

        return{
            openNav,
            closeNav,
            moveToHome,
            moveToPage,
        }
    }

}
</script>

<style>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/style.css";
@import "@/assets/css/responsive.css";
@import "@/assets/css/jquery.mCustomScrollbar.min.css";
@import "@/assets/css/owl.carousel.min.css";
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css");
</style>