import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../assets/data/data.json";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import styles from "./Map.module.css"

export const Map = () => {
  const markers = data;

    const dataMapping = (dataToMap: string[]) => {
        const mappedData = dataToMap.map((data: string) => {
            return data
        })
        return mappedData
    }

    return (
    <MapContainer center={[49.6205, 2.9373]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker: any) => (
        <Marker key={marker.id} position={marker.coordinates}>
          <Popup>
            <div>
                <img src={marker.pictureUrl} alt={`picture of ${marker.firstName} ${marker.lastName}`} className={styles.popImage} />
                <h4>{marker.firstName} {marker.lastName}</h4>
                <div className="language-container">
                    <p key={marker.id + "front"}>{dataMapping(marker.stack.front)}</p>
                    <p key={marker.id + "back"}>{dataMapping(marker.stack.back)}</p>
                </div>
                <p key={marker.id + "hobbies"}>{dataMapping(marker.hobbies)}</p>
                <div className="social-icons-container">
                    <a href={marker.linkedIn} target="_blank"><AiFillLinkedin /></a>
                    <a href={marker.gitHub} target="_blank"><AiFillGithub /></a>
                </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
