// function searchMovie(){

//     $('#movie-list').html('');

//     $.ajax({
//         url : 'http://www.omdbapi.com',
//         type : 'get',
//         dataType : 'json',
//         data : {
//             'apikey' : '6fcf4185',
//             's' : $('#input-search').val()
//         },
//         success : function(res){
//             // console.log(res);
//             if(res.Response == "True"){
//                 let movie = res.Search;
                
//                 $.each(movie,function(i,data){
//                     $('#movie-list').append(`
//                         <div class="col-md-3">
//                             <div class="card mb-4">
//                                 <img src="${data.Poster}" class="card-img-top" width="100px">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${data.Title}</h5>
//                                     <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
//                                     <a href="#" class="card-link see-details" data-toggle="modal" data-target="#exampleModalScrollable" data-id="${data.imdbID}">View Details</a>
//                                 </div>
//                             </div>  
//                         </div>
//                     `)
//                 })

//                 $('#input-search').val('');

//             }else{
//                 $('#movie-list').html(`
//                     <div class="col">
//                         <h1 class="text-center">${res.Error}</h1>
//                     </div>
//                 `)
//             }
//         }
//     })

// }

const searchButton = document.getElementById('btn-search');
searchButton.addEventListener('click',function(){

    const input = document.getElementById('input-search');
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6fcf4185&s=' + input.value)
        // .then(respon => console.log(respon.json()));
        .then(respon => respon.json())
        .then(respon => console.log(respon));

})

// $('#btn-search').on('click',function(){
//     searchMovie();
// })

// $('#input-search').on('keyup',function(e){
//     if(e.which === 13){
//         searchMovie();
//     }
// })

$('#movie-list').on('click', '.see-details' , function(){
    // console.log($(this).data('id'));
    $.ajax({
        url : 'http://www.omdbapi.com',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : '6fcf4185',
            'i' : $(this).data('id')
        },
        success : function(movie){
            if(movie.Response == "True"){
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${movie.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>${movie.Title}</h3></li>
                                    <li class="list-group-item">Release : ${movie.Released}</li>
                                    <li class="list-group-item">Genre : ${movie.Genre}</li>
                                    <li class="list-group-item">Plot : ${movie.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)
            }
        }
    })
})