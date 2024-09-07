import { firestore } from "../firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export interface UserProfile {
  name: string;
  email: string;
  score: number;
  rewards: string[];
}


export const updateUserScore = (userId: string, newScore: number) => {
  const userRef = doc(firestore, 'users', userId);
  return updateDoc(userRef, {
    score: newScore,
  });
};

export const saveUserProfile = (userId: string, profile: UserProfile) => {
  const userRef = doc(firestore, 'users', userId);
  return setDoc(userRef, profile);
};

export const getUserProfile = async (
  userId: string
): Promise<UserProfile | undefined> => {
  const userRef = doc(firestore, 'users', userId);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserProfile;
  } else {
    console.log('No such document!');
    return undefined;
  }
};
