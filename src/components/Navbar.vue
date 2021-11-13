<template>
     <div id="mySidebar" class="sidebar" :class="{'decreasedWidth':mini,'increasedWidth':!mini}" @mouseover="toggleSidebar()"  @mouseout="toggleSidebar()">
        <router-link to="/home" :class="{'miniLink':mini,'link':!mini}" href="#"><span><i class="material-icons">dashboard</i><span class="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</span></span></router-link><br>
        <router-link to="/prices"><span><i class="material-icons">monetization_on</i><span class="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Prices</span></span></router-link><br>
        <router-link to="/setAlert"><span><i class="material-icons">spa</i><span class="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Set Alert</span></span>
        </router-link><br>
        
        <router-link to="/news"><span><i class="material-icons">article</i><span class="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Crypto News</span></span>
        </router-link><br>
        
    </div>

    
</template>
<script>
    export default{
        data(){
            return{
                mini:true
            }
        },
        created(){
            // this.toggleSidebar();
        },
        methods:{
            toggleSidebar() {
                console.log('hello');
                    this.$emit('mini');
                
                if (this.mini) {
                    
                    this.mini = false;
                    
                    // this.$store.commit('dash/changeMini',{value:this.mini});
                    
                } else {
                    
                    this.mini = true;
                    // this.$store.commit('dash/changeMini',{value:this.mini});
                }
            }
        },
        emits:['mini']
    }
</script>
<style scoped>
        body {
            font-family: "Lato", sans-serif;
        }
        .link{
            background-color: blue;
            color: white;
        }
        
        .sidebar {
            height: 100vh;
            width: 85px;
            z-index: 100;
            top: 0;
            left: 0;
            background-color: #111;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 25px;
            white-space: nowrap;
            overflow-y: hidden  ;
            position: fixed;
        }
        
        .sidebar a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
        }
        
        .sidebar a:hover {
            color: #f1f1f1;
        }
        
        .sidebar .closebtn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
        }
        
        .material-icons,
        .icon-text {
            vertical-align: middle;
        }
        
        .material-icons {
            /* padding-bottom: 3px; */
        }
        
        #main {
            transition: margin-left .5s;
            padding: 16px;
            margin-left: 100px;
        }
        .increasedWidth{
            width: 250px;
        }
        .decreasedWidth{
            width: 80px;
        }
        /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
        
        @media screen and (max-height: 450px) {
            .sidebar {
                padding-top: 15px;
            }
            .sidebar a {
                font-size: 18px;
            }
        }
</style>