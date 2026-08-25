import React, { useRef, useState } from "react";
import "./Profile.css";

function Profile() {
    const fileInputRef = useRef(null);

    const [profileImage, setProfileImage] = useState(
        "https://i.ytimg.com/vi/IvZM8GyHFs8/mqdefault.jpg"
    );

    const [likeCount, setLikeCount] = useState(0);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    return (
        <div className="profile-container">

            <div className="profile-card">

                <h1>My Profile</h1>

                <div className="profile-image-container">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="profile-image"
                    />
                </div>

                {/* Hidden File Input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="file-input"
                    hidden
                />

                <button
                    className="upload-button"
                    onClick={handleUploadClick}
                >
                    Upload Image
                </button>

                <div className="like-section">

                    <button
                        className="like-button"
                        onClick={handleLike}
                    >
                        ❤️ Like
                    </button>

                    <p>
                        Likes: <strong>{likeCount}</strong>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Profile;