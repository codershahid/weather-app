const Dash = ({ weatherData }) => {
  return (
    <div>
      <h1>Dash Component</h1>
      <h3>The weather today is {weatherData.main.temp}</h3>
    </div>
  );
};

export default Dash;
