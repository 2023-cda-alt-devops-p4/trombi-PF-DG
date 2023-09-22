import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import data from "../assets/data/data.json";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import styles from "./Map.module.css"
import {IUser} from "../models/user.ts";

export const Map = () => {
  const markers = data as IUser[];

    const dataMapping = (dataToMap: string[]): string => {
        const mappedData = dataToMap.map((data: string) => {
            return data
        }).join(", ");
        return mappedData
    }

    // Create custom icon from pictures
    const findCustomIcon = (customUrl: string) => {
        const customIcon = L.icon({
            className: styles.customedIcon,
            iconUrl: customUrl,
            iconSize: [50, 50],
            iconAnchor: [12, 12],
            popupAnchor: [0, 0],
        });
        return customIcon;
    }


    return (
    <MapContainer center={[49.6205, 2.9373]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker: IUser) => (
        <Marker icon={findCustomIcon(marker.pictureUrl)} key={marker.id} position={marker.coordinates}>
          <Popup>
            <div>
                <img src={marker.pictureUrl} alt={`picture of ${marker.firstName} ${marker.lastName}`} className={styles.popImage} />
                <h4  className={styles.fullName}>{marker.firstName} {marker.lastName}</h4>
                <h5 className={styles.languagesContainerTitle}>Stack :</h5>
                <ul className={styles.languagesContainer}>
                    <li className={styles.languages} key={marker.id + "front"}>Frontend : <i>{dataMapping(marker.stack.front)}</i></li>
                    <li className={styles.languages} key={marker.id + "back"}>Backend : <i>{dataMapping(marker.stack.back)}</i></li>
                </ul>
                <p className={styles.hobbies} key={marker.id + "hobbies"}><span className={styles.hobbiesTitle}>Hobbies</span> : {dataMapping(marker.hobbies)}</p>
                <div className={styles.socialIconsContainer}>
                    <a className={[styles.icons, styles.linkedInIcon].join(" ")} href={marker.linkedIn} target="_blank"><AiFillLinkedin /></a>
                    <a className={[styles.icons, styles.gitHubIcon].join(" ")} style ={{color: "#171515"}} href={marker.gitHub} target="_blank"><AiFillGithub /></a>
                </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
