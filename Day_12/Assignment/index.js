document.getElementById("movie_form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("des").value.trim();
    const year = document.getElementById("release").value.trim();
    const rating = document.getElementById("rating").value.trim();
    const genre = document.getElementById("genre").value;
    const poster = document.getElementById("poster").value.trim();

    if (!name || !description || !year || !rating || !genre || !poster) {
        alert("Please fill out all fields.");
        return;
    }

    const movie = { name, description, year, rating, genre, poster };

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    document.getElementById("movie_form").reset();
    document.getElementById("successMessage").style.display = "block";
    
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
    }, 2000);
});
