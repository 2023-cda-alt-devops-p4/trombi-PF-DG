import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.css"

export const Map = () => {
  const markers = [
    {
      id: 1,
      firstName: "Yassine",
      lastName: "El Azzati",
      pictureUrl: "https://source.unsplash.com/random/300×300",
      location: "Arras",
      coordinates: ["48.86957838298227", "2.347020866604488"],
      stack: {
        front: ["Angular"],
        back: ["Java SpringBoot"],
      },
      hobbies: "Jeux vidéo/sports de combat/chats (Nala et Jasmine)",
      linkedIn: "https://www.linkedin.com/in/yassine-el-azzati-7b5a331b8/",
      gitHub: "https://github.com/YassineElazzati",
    },
    {
      id: 2,
      firstName: "Yassine",
      lastName: "El Azzati",
      pictureUrl: "https://source.unsplash.com/random/300×300",
      location: "Arras",
      coordinates: ["50.69306256544878", "3.1784134535149517"],
      stack: {
        front: ["Angular"],
        back: ["Java SpringBoot"],
      },
      hobbies: "Jeux vidéo/sports de combat/chats (Nala et Jasmine)",
      linkedIn: "https://www.linkedin.com/in/yassine-el-azzati-7b5a331b8/",
      gitHub: "https://github.com/YassineElazzati",
    },
  ];

  return (
    <MapContainer center={[49.6205, 2.9373]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker: any) => (
        <Marker position={marker.coordinates}>
          <Popup>
            <div>
                <img src={marker.pictureUrl} alt="" className={styles.popImage} />
                <h4>{marker.firstName} {marker.lastName}</h4>
                {marker.stack.front.map(frontLang => (
                    <p>{frontLang}</p>
                ))}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
