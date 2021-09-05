type User = {
  _id: string;
  address: string;
  birthdate: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  present: boolean;
  ticket: number;
};

const queryUsers = async (): Promise<User[]> =>
  fetch(`/json/users.json`).then((response) => response.json());

export default queryUsers;
