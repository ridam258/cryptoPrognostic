<template>
    <div>
        <div >
            <img :src="trend.urlToImage" alt="">
        </div>
        <div>
            <p>{{trend.publishedAt}}</p>
            <a :href="trend.url"><h4 style="height:9.5vh;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;">{{trend.title}}</h4></a>
            
            <h6 style="height:10vh;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;">{{trend.description}}</h6>
            <p>{{trend.author}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['trend'],
    
}
</script>
<style scoped>
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