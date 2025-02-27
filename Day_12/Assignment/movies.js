document.addEventListener("DOMContentLoaded", function () {
    const movieTableBody = document.getElementById("movieTableBody");
    const noMoviesMessage = document.getElementById("noMoviesMessage");
    const searchBar = document.getElementById("searchBar");

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    function renderMovies() {
        movieTableBody.innerHTML = "";
        
        if (movies.length === 0) {
            movieTableBody.appendChild(noMoviesMessage);
            return;
        }

        movies.forEach((movie, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${movie.name}</td>
                <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + '... <a href="#">Read More</a>' : movie.description}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.genre}</td>
                <td><img src="${movie.poster}" alt="Poster" width="50"></td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;

            row.querySelector(".delete-btn").addEventListener("click", function () {
                movies.splice(index, 1);
                localStorage.setItem("movies", JSON.stringify(movies));
                renderMovies();
            });

            movieTableBody.appendChild(row);
        });
    }

    searchBar.addEventListener("input", function () {
        let searchValue = searchBar.value.toLowerCase();
        let filteredMovies = movies.filter(movie =>
            movie.name.toLowerCase().includes(searchValue) || 
            movie.genre.toLowerCase().includes(searchValue)
        );

        movieTableBody.innerHTML = "";
        filteredMovies.forEach(movie => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${movie.name}</td>
                <td>${movie.description}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.genre}</td>
                <td><img src="${movie.poster}" alt="Poster" width="50"></td>
                <td ><button class="delete-btn" >Delete</button></td>
            `;
            movieTableBody.appendChild(row);
        });
    });

    renderMovies();
});
