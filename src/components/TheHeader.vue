<template>
    <div class="allHead">
        <div class="dashHead">
            <h2>Dashboard</h2>
            <p >{{this.time}}{{this.date}}</p>
        </div>
        <div class="searchHead">
            <div class="search"> <i class="fa fa-search"></i><input type="text" class="form-control" placeholder="Search for Crypto ">  </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
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
<style scoped>

    .allHead{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2rem;
    }
    .dashHead{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 3;
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
    border: 2px solid blue

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