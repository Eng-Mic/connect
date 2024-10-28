// hooks/useUserState.ts
import { IUser } from '@/types/userTypes';
import { create } from 'zustand';


interface UserState {
    authUser: IUser | null;
    isAuthenticated: boolean;
    setUser: (user: IUser | null) => void;
    logout: () => void;
}

const useUserState = create<UserState>((set) => ({
    authUser: JSON.parse(localStorage.getItem('user') || 'null'),
    isAuthenticated: !!localStorage.getItem('user'),
    setUser: (user: IUser | null) => {
        set({ authUser: user, isAuthenticated: !!user });
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    },
    logout: () => {
        set({ authUser: null, isAuthenticated: false });
        localStorage.removeItem('user');
    },
}));

export default useUserState;
