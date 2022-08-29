import axios from "axios";

const user = {
  getUsers: () => axios.get("https://jsonplaceholder.typicode.com/users"),

  // getById: async (payload: { id: string }) =>
  //   axios.get("/events/" + payload.id),

  // add: async (payload: {
  //   title: string;
  //   description: string;
  //   startsAt: string; //ISO date
  //   capacity: number;
  // }) => axios.post("/events", payload),

  // update: async (
  //   id: string,
  //   payload: {
  //     title?: string;
  //     description?: string;
  //     startsAt?: string;
  //     capacity?: number;
  //   }
  // ) => axios.patch("/events/" + id, payload),

  // _delete: async (id: string) => axios.delete("/events/" + id),

  // attend: async (id: string) => axios.post("/events/" + id + "/attendees/me"),

  // unattend: async (id: string) =>
  //   axios.delete("/events/" + id + "/attendees/me"),
};

export default user;