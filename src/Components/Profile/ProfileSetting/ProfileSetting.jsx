import React, { useContext, useState } from "react";
import { updateProfile, updatePassword, deleteUser } from "firebase/auth";
import { AuthContext } from "../../../Provider/AuthProvider";

const ProfileSetting = () => {
    const { user, logOut } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    // profile update
    const handleUpdate = (e) => {
        e.preventDefault();
        if (!user) return;

        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setMessage("✅ Profile updated successfully!");
            })
            .catch((error) => {
                setMessage(`❌ Error: ${error.message}`);
            });
    };

    // password update
    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (!user) return;
        if (password.length < 6) {
            setMessage("❌ Password must be at least 6 characters long.");
            return;
        }

        updatePassword(user, password)
            .then(() => {
                setMessage("✅ Password updated successfully!");
                setPassword("");
            })
            .catch((error) => {
                setMessage(`❌ Error: ${error.message}`);
            });
    };

    // delete user
    const handleDelete = () => {
        if (!user) return;

        const confirmDelete = window.confirm(
            "⚠️ Are you sure you want to delete your account? This action cannot be undone!"
        );

        if (confirmDelete) {
            deleteUser(user)
                .then(() => {
                    setMessage("✅ Account deleted successfully!");
                    logOut(); // logOut context থেকে কল করলে redirect হবে
                })
                .catch((error) => {
                    setMessage(`❌ Error: ${error.message}`);
                });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="card w-96 shadow-xl bg-white p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Profile Settings
                </h2>

                {/* Profile Update Form */}
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Photo URL</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Update Profile
                    </button>
                </form>

                {/* Password Change Form */}
                <form onSubmit={handlePasswordChange} className="space-y-4 mt-6">
                    <div>
                        <label className="block mb-1 font-medium">New Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary w-full">
                        Change Password
                    </button>
                </form>

                {/* Delete Account Button */}
                <div className="mt-6">
                    <button
                        onClick={handleDelete}
                        className="btn btn-error w-full"
                    >
                        Delete Account
                    </button>
                </div>

                {message && (
                    <p className="mt-3 text-center text-sm text-green-600">{message}</p>
                )}
            </div>
        </div>
    );
};

export default ProfileSetting;
