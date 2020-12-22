import slug from 'slug';

function Episode(title, video) {
  const id = slug(title);
  return { title, id, video };
}

function Series(title, episodes) {
  const id = slug(title);
  return { title, id, episodes };
}

export { Episode, Series };
