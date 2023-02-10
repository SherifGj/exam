/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react';
import { IUser } from '../interfaces/IUser';

interface UserContextProps {
	user: IUser;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export default function UserProvider({ user, children }: { user: IUser; children: React.ReactNode }) {
	return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}
