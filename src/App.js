
import "./App.css";
import image from "./images/Annural.jpeg";

function App() {
  let greeting = "Annural Khalid";

  let para =
    "Annural Khalid is a talented Pakistani singer and songwriter.";

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

      <div className="profile-card text-center">

        <img
          src="/profile.jpg"
          alt="Profile"
          width="200"
        />
      <h1>{greeting}</h1>

      <p>{para}</p>

      {/* Internal image */}
      <img src={image} alt="Annural Khalid" />

      {/* External image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4VGlVdkNE5ePEA-5LJ2jPOYvfILvDaYOTDBRL5x7xb1DW7A_J2u-ntU&s=10"
        alt="Annural Khalid"
      />
    </div>
    </div>
  );
}

export default App;