import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from './firebase'; // Import your Firebase auth instance

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? (
        <p>User is signed in: {user.uid}</p>
      ) : (
        <p>User is signed out</p>
      )}
    </div>
  );
}
export default MyComponent; 