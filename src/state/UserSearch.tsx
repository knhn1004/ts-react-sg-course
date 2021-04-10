import { useRef, useState, useEffect } from 'react';
import { users } from '../users';

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  // ref.current starts at 'null'
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // immediately focus on when input is rendered
    inputRef.current?.focus();
  }, [inputRef]);

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);
    setUser(foundUser);
    // console.log(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch;
