import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { getUserProfile, UserProfile } from '../services/userService';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const profile = await getUserProfile(user.uid);
        setUserData(profile || null);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Score: {userData.score}</p>
      <p>Recompensas: {userData.rewards.join(', ')}</p>
    </div>
  );
};

export default Profile;
