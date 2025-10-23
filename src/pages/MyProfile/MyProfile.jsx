import { toast } from "react-toastify";
import Container from "../../components/Container/Container";
import useAuth from "../../hooks/useAuth";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { useState } from "react";

const MyProfile = () => {
  const { currentUser, updateUserProfile, setCurrentUser } = useAuth();
  const { displayName, photoURL, email } = currentUser || {};
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const displayName = form.name.value;
    const photoURL = form.photo_url.value;

    try {
      if (displayName) {
        await updateUserProfile({ ...currentUser, displayName });
        setCurrentUser({ ...currentUser, displayName });
      }

      if (photoURL) {
        await updateUserProfile({ ...currentUser, photoURL });
        setCurrentUser({ ...currentUser, photoURL });
      }

      form.reset();
      toast.success("Profile updated successfully!");
    } catch (error) {
      const message = getAuthErrorMessage(error);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>My Profile</title>
      
      <section className="my-10">
        <Container className="grid place-items-center w-full min-h-[420px]">
          <div className="bg-white w-full max-w-lg drop-shadow-2xl drop-shadow-primary-content rounded-lg relative text-base">
            <div className="absolute -top-7 left-[50%] -translate-x-[50%]">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 size-24 rounded-full ring-2 bg-primary-content">
                  <img src={photoURL} alt={displayName} />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-5 sm:p-0 mt-24">
              <div className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="font-semibold font-['Raleway'] text-neutral text-lg">
                    Full Name:
                  </p>
                  <p className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                    {displayName}
                  </p>
                </div>

                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="font-semibold font-['Raleway'] text-neutral text-lg">
                    Email Address:
                  </p>
                  <p className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                    {email}
                  </p>
                </div>

                <div className="collapse py-3 sm:py-5 sm:px-6">
                  <input type="checkbox" />

                  <div className="collapse-title p-0 font-semibold font-['Raleway'] text-indigo-700">
                    Want to update your profile info?
                  </div>

                  <form
                    onSubmit={handleUpdateProfile}
                    className="collapse-content p-0 space-y-3.5"
                  >
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="label font-semibold text-neutral"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={displayName}
                        placeholder="Enter your name"
                        className="input bg-indigo-100 outline-indigo-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="photo_url"
                        className="label font-semibold text-neutral"
                      >
                        Photo URL
                      </label>
                      <input
                        type="text"
                        id="photo_url"
                        name="photo_url"
                        defaultValue={photoURL}
                        placeholder="Enter valid url"
                        className="input bg-indigo-100 outline-indigo-400"
                      />
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="btn btn-neutral btn-block"
                    >
                      {loading ? "Updating..." : "Update"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MyProfile;
