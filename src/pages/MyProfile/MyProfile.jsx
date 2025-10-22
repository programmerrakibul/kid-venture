import Container from "../../components/Container/Container";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { currentUser } = useAuth();
  const { displayName, photoURL, email } = currentUser;
  console.log(currentUser);

  return (
    <>
      <title>My Profile</title>
      <section className="my-16">
        <Container className="grid place-items-center w-full min-h-[calc(100vh-284px)]">
          <div className="bg-white max-w-sm drop-shadow-2xl drop-shadow-primary-content rounded-lg relative">
            <div className="absolute -top-7 left-[50%] -translate-x-[50%]">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 size-24 rounded-full ring-2 bg-primary-content">
                  <img src={photoURL} alt={displayName} />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-5 sm:p-0 mt-24">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {displayName}
                  </dd>
                </div>

                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MyProfile;
