import {User} from '../schema/generated/graphql';

const getUserById = (id: string): User | undefined => {
  return [
    { id: '1', name: 'Ali', email: 'ali@example.com' },
    { id: '2', name: 'Ayşe', email: 'ayse@example.com' },
    { id: '3', name: 'Mehmet', email: 'mehmet@example.com' },
    { id: '4', name: 'Fatma', email: 'fatma@example.com' },
    { id: '5', name: 'Ahmet', email: 'ahmet@example.com' }
  ].find(user => user.id === id);
};

const getAllUsers = (): User[] => {
    return [
        { id: '1', name: 'Ali', email: 'ali@example.com' },
        { id: '2', name: 'Ayşe', email: 'ayse@example.com' },
        { id: '3', name: 'Mehmet', email: 'mehmet@example.com' },
        { id: '4', name: 'Fatma', email: 'fatma@example.com' },
        { id: '5', name: 'Ahmet', email: 'ahmet@example.com' }
    ];
};

export { getUserById, getAllUsers };