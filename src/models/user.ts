import {LatLngExpression} from "leaflet";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  pictureUrl: string;
  location: string;
  coordinates: LatLngExpression;
  stack: {
    front: string[];
    back: string[];
  };
  hobbies: string[];
  linkedIn: string;
  gitHub: string;
}
