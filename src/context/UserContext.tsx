import { createContext } from 'react';
import { IUser } from '../interfaces/IUser';

interface UserProviderProps extends UserContextProps {
	children: React.ReactNode;
}
interface UserContextProps {
	user: IUser;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider: React.FC<UserProviderProps> = ({ user, children }) => {
	return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;
