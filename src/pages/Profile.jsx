import useAuth from "../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    
    const { email, displayName, photoURL, phoneNumber } = user;

    return (
        <div className="flex flex-col my-10 items-center">
            <div className="avatar">
                <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={photoURL} />
                </div>
            </div>
            <h1 className="my-5 text-4xl">{displayName}</h1>
            <h1 className="my-5 text-2xl">{email}</h1>
            <h1 className="my-5 text-xl">{phoneNumber}</h1>
        </div>
    );
};

export default Profile;