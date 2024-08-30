export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface Filters {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserState {
  users: User[];
  filters: Filters;
  loading: boolean;
  error: string | null;
}

export interface RootState {
  users: UserState;
}
