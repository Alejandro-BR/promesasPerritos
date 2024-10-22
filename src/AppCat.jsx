import { useEffect, useState } from "react"

// https://dog.ceo/api/breeds/image/random

function AppCat() {

  const [urlCat, seturlCat] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchingData() {

    try {
      setIsLoading(true);
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      if (response.ok) {
        const urlPromesa = await response.json();
        seturlCat(urlPromesa[0].url);
        setError(null);
      } else {
        setError("Error server");
      }
    } catch (error) {
      console.log(error);
      setError("Error server " + error);
    } finally {
      console.log("Foto")
      setIsLoading(false);
    }
  }

  // Si el array es vacio al cargar el dom se ejecuta
  useEffect(() => { fetchingData() }, []);

  function handlePerrito() {
    fetchingData();
  };

  return (
    <div className="App">
      {error && <p>Error {error}</p>}
      {isLoading && <p>Estoy cargando</p>}
      {!error && !isLoading && (
        <>
          <img src={urlCat} alt="Imagen de perrito aleatorio" />
          <button onClick={handlePerrito}>Otro</button>
        </>

      )}
    </div>
  )
}

export default AppCat
