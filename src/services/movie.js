let movies=[
    {
        index:0,
        id:31,
        name:'shrek',
        length:'2:20',
        genre:'fantasy'  //index0

    },
    {
        index:1,
        id:4363,
        name:'ironman',
        length:'1:45',   //index1
        genre:'fantasy'

    },
    {
        index:2,
        id:2,
        name:'f&f3',
        length:'3:10',  //index2
        genre:'action'

    },
    {
        index:3,
        id:80439,
        name:'titanic',
        length:'3:40',  //index3
        genre:'drama'

    }

]; 

 export function getmovies(){
    return movies
}

 export function delMovie(id){
    movies.splice(id,1)
    for(let i=0;i<movies.length;i++){
        movies[i].index=i;// מאפס את האיידי שיהיה אותו מספר כמו האינדקס החדש של הטבלה 
    }
    return movies
}
export function delName(id){
    movies[id].name=null
    return movies;
}



