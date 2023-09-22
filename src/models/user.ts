export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  pictureUrl: string;
  location: string;
  coordinates: number[];
  stack: {
    front: string[];
    back: string[];
  };
  hobbies: string;
  linkedIn: string;
  gitHub: string;
}
