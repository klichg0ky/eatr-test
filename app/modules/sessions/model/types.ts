export type Session = {
  username: string;
  email: string;
};

type SessionUsername = Session['username'];

export type SessionsStore = {
  currentUser: Session | null;
  setUser(user: Session): void;
};

export type SessionByUsername = Record<SessionUsername, Session>;

export type SessionByUsernameStore = {
  map: SessionByUsername;
  addUser(session: Session): void;
};
