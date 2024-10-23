import { useEffect } from "react";

function AppImperativo() {
  //const [urlDog, setUrlDog] = useState("");

  async function fetchingData() {
    const urlDogImperativo = document.querySelector("#dogImage");
    if (urlDogImperativo) {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (response.ok) {
          const urlPromesa = await response.json();
          console.log(urlPromesa);
          urlDogImperativo.src = urlPromesa.message;
          //setUrlDog(urlPromesa.message);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("estoy en finally");
      }
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  function handlePerrito() {
    fetchingData();
  }

  return (
    <div className="App">
      <h1>Imperativo</h1>
      <img id="dogImage" src="" />
      <button onClick={handlePerrito}>Otro</button>
    </div>
  );
}

export default AppImperativo;
