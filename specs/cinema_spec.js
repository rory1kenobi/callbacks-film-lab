const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;
  let film_titles;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    film_titles = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const actual = cinema.makeArrayOfFilmTitles(films);
    assert.deepStrictEqual(actual, film_titles);
  });

  it('should be able to find a film by title', function(){
    const actual = cinema.findFilmByTitle('Moonlight');
    assert.strictEqual(actual, moonlight)
  });

  it('should be able to filter films by genre', function(){
    const actual = cinema.nameGenre('action', films);
    assert.deepStrictEqual(actual, [blackPanther])
  });

  it('should be able to check whether there are some films from a particular year', function(){
    const actual = cinema.nameYear(2017, films);
    assert.deepStrictEqual(actual,[bladeRunner, dunkirk, trainspotting])
  });
  it('should be able to check whether there are no films from a particular year', function(){
    const actual = cinema.noYear(3104, films);
    assert.deepStrictEqual(actual, [])
  });
  it('should be able to check whether all films are over a particular length', function(){
    const actual = cinema.isLengthOfAllFilmsOverCertainTime(90, films)
    assert.deepStrictEqual(actual, films)
  });

  it('should be able to calculate total running time of all films', function(){
    const actual = cinema.lengthOfAllFilms(films)
    assert.deepStrictEqual(actual, 622)
  });

  it('should be able to filter films by property', function(){
    const actual = cinema.filmsByProperty('year', 2017, films)
    assert.deepStrictEqual(actual, [bladeRunner, dunkirk, trainspotting])
  });

});
