const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "pluto", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "earth", isGasPlanet: false },
  { name: "Saturn", isGasPlanet: true },
  { name: "Jupiter", isGasPlanet: false },
  { name: "Titan", isGasPlanet: true },
];

export const PlanetsComponent = () => {
  return planets.map((planet) => {
    return planet.isGasPlanet && <h1>{planet.name}</h1>;
  });
};
