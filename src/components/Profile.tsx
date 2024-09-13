import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { getUserProfile, UserProfile } from '../services/userService';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const profile = await getUserProfile(user.uid);
          setUserData(profile || null);
        }
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return <div>No user data available</div>;

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
