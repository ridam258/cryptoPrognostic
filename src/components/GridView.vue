<template>
    <div class="main">
        <div >
            <img :src="trend.media" alt="">
        </div>
        <div>
            <p>{{trend.published_date}}</p>
            <a :href="trend.link"><h4 style="height:9.5vh;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;">{{trend.title}}</h4></a>
            
            <h6 style="height:10vh;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;">{{trend.summary}}</h6>
            <p style="height:3vh;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;">{{trend.rights}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['trend'],
    
}
</script>
<style scoped>
    /* .main:hover{
        transform: scale(1.1);
        transition: .5s;
    } */
    img{
        width:100%;
        height: 200px;
        object-fit: cover;
    }
    p{
        font-size: .8rem;
        margin: 0; 
        color: rgb(177, 177, 177);
        font-family: 'Lato', sans-serif;

    }
    a{
        text-decoration: none;
        color: white;
    }
    h6{
        font-family: 'Lato', sans-serif;
        color: rgb(177, 177, 177);
        font-size: 1.2rem;
    }
    h4{
        padding: .5rem 0;
    }
</style>