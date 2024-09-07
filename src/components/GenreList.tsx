import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error } = useGenre();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
