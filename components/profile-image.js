import Image from "next/image";
import profileImage from "../public/profile.jpeg";

function ProfileImage() {
  return (
    <Image
      className="h-52 w-52 rounded-tl-top-left rounded-tr-top-right rounded-br-bottom-right rounded-bl-bottom-left"
      src={profileImage}
      alt="profile image"
    />
  );
}

export default ProfileImage;
