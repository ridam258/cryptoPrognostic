<template>
    <div class="allHead">
        <div>
            <img style="width:80%" src="../assets/Crypo.png" alt="">
        </div>
        <div class="dashHead">
            <h2>Dashboard</h2>
            <p >{{this.time}}{{this.date}}</p>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                loader:0,
                time:"",
                date:""
            }
        },
        created(){
            this.time = new Date().toString().substring(16,25);
            this.date = new Date().toString().substring(0,15);
        }
    }
</script>
<style>

    .allHead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:1rem 3rem;
        margin-bottom: 2rem;
    }
    .dashHead{
        display: flex;
        flex-direction: column;
        /* align-items: flex-start; */
        /* flex: ; */
    }
 .search {
    position: relative;
    box-shadow: 0 0 40px rgba(51, 51, 51, .1);
    width: 100%;
}

.search input {
    height: 50px;
    text-indent: 25px;
    border: 2px solid #111;
    font-size: 14px;
    background-color: #111;
}

.search input:focus {
    box-shadow: none;
    border: 2px solid gray;
    background-color: black;

}

.search .fa-search {
    position: absolute;
    top: 18px;
    left: 16px;
    color:white;
}

.search button {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 40px;
    width: 110px;
    background: blue
}
.searchHead{
    flex: 1;
}
.form-control{
    font-size: 16px;
}
</style>