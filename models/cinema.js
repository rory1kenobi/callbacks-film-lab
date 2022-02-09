const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.addFilms = function(film_list){
//   this.films.push(film_list);
// }

Cinema.prototype.makeArrayOfFilmTitles = function(films){
  let titlesList = [];
    for (const film of this.films){
      titlesList.push(film.title)
    };
  return titlesList;
};

Cinema.prototype.findFilmByTitle = function(title){
  let findFilmByTitle = null;
    for (const film of this.films){
      if (film.title === title){
        findFilmByTitle = film
      };
    };
    return findFilmByTitle;
};

Cinema.prototype.nameGenre = function(genre, films){
    const result = [];
    films.forEach((film) => {
      if (film.genre === genre){
        result.push(film)
      }
    })
    return result;
};

Cinema.prototype.nameYear = function(year, films){
  const result = films.filter((film) =>{
    return film.year === year;
  })
  return result;
};

Cinema.prototype.noYear = function(year, films){
  const result = films.filter((film) => {
    return film.year === year;
  })
  return result;
}

Cinema.prototype.isLengthOfAllFilmsOverCertainTime = function(length, films){
  const result = films.filter((film) => {
    return film.length > length;
  })
  return result;
}

Cinema.prototype.lengthOfAllFilms = function(films){
  let result = 0;
    for (const film of this.films){
      result += film.length
    };
  return result;
}

Cinema.prototype.filmsByProperty = function(property, value, films){
  const result = [];
  films.forEach((film) => {
    if (film[property] === value){
      result.push(film)
    }
  })
  return result;
};

module.exports = Cinema;
