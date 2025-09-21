// Import all the avatar images
import nataliCraig from '../../assets/images/dec362c56cff97abab207d069ac8d088ec898aaa.png';
import drewCano from '../../assets/images/634a36c96c03cfe9eeba44f0d83003daffa63d9c.png';
import orlandoDiggs from '../../assets/images/a4593a2a50ce3a2707fa1e7e6a708825369f6266.png';
import andiLane from '../../assets/images/f005c11996e0e2c36ac52d5ba8f5f0e7862fe055.png';
import kateMorrison from '../../assets/images/25fddc28ee996b0edb37a8f08e577c61dadbc58d.png';
import korayOkumus from '../../assets/images/561807e24f384b89a83502e0c6fc6cbc98817827.png';
import avatar6389ca3c from '../../assets/images/6389ca3c52596b27ea5732f2c15e17045ba5d34a.png';

// Activity avatars
import activityAvatar1 from '../../assets/images/d2256170d5e524fdf1c0cb0268978c382c982775.png';
import activityAvatar2 from '../../assets/images/401670ae04e9f56b8607ab9a75364d523fa15c7f.png';
import activityAvatar3 from '../../assets/images/d6381ed9535faedb3171ebf24cc083c421af6a8c.png';
import activityAvatar4 from '../../assets/images/a3368d2b4bf149055875cb73bd98f1b0dc6f1cfb.png';
import activityAvatar5 from '../../assets/images/8c9108b9d537ec99e7358705dde01753cd94f355.png';

// Create a mapping from file paths to imported images (for backward compatibility)
const imagePathMap = {
  '/src/assets/images/dec362c56cff97abab207d069ac8d088ec898aaa.png':
    nataliCraig,
  '/src/assets/images/634a36c96c03cfe9eeba44f0d83003daffa63d9c.png': drewCano,
  '/src/assets/images/a4593a2a50ce3a2707fa1e7e6a708825369f6266.png':
    orlandoDiggs,
  '/src/assets/images/f005c11996e0e2c36ac52d5ba8f5f0e7862fe055.png': andiLane,
  '/src/assets/images/25fddc28ee996b0edb37a8f08e577c61dadbc58d.png':
    kateMorrison,
  '/src/assets/images/561807e24f384b89a83502e0c6fc6cbc98817827.png':
    korayOkumus,
  '/src/assets/images/6389ca3c52596b27ea5732f2c15e17045ba5d34a.png':
    avatar6389ca3c,
  '/src/assets/images/d2256170d5e524fdf1c0cb0268978c382c982775.png':
    activityAvatar1,
  '/src/assets/images/401670ae04e9f56b8607ab9a75364d523fa15c7f.png':
    activityAvatar2,
  '/src/assets/images/d6381ed9535faedb3171ebf24cc083c421af6a8c.png':
    activityAvatar3,
  '/src/assets/images/a3368d2b4bf149055875cb73bd98f1b0dc6f1cfb.png':
    activityAvatar4,
  '/src/assets/images/8c9108b9d537ec99e7358705dde01753cd94f355.png':
    activityAvatar5,
};

// Create a mapping from avatar identifiers to imported images
const avatarMap = {
  nataliCraig,
  drewCano,
  orlandoDiggs,
  andiLane,
  kateMorrison,
  korayOkumus,
  avatar6389ca3c,
  activityAvatar1,
  activityAvatar2,
  activityAvatar3,
  activityAvatar4,
  activityAvatar5,
};

// Helper function to get the correct image source from a path or identifier
export const getImageSrc = pathOrId => {
  // First try the new identifier format
  if (avatarMap[pathOrId]) {
    return avatarMap[pathOrId];
  }
  // Fallback to old path format for backward compatibility
  if (imagePathMap[pathOrId]) {
    return imagePathMap[pathOrId];
  }
  // If neither works, return the original value (might be a valid URL)
  return pathOrId;
};

export {
  nataliCraig,
  drewCano,
  orlandoDiggs,
  andiLane,
  kateMorrison,
  korayOkumus,
  avatar6389ca3c,
  activityAvatar1,
  activityAvatar2,
  activityAvatar3,
  activityAvatar4,
  activityAvatar5,
  imagePathMap,
  avatarMap,
};
