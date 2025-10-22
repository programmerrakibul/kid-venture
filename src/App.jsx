import { RouterProvider } from "react-router";
import router from "./routes/router";
import ToysProvider from "./providers/ToysProvider";
import AuthProvider from "./providers/AuthProvider";
import ForgetEmailProvider from "./providers/ForgetEmailProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ForgetEmailProvider>
          <ToysProvider>
            <RouterProvider router={router} />
          </ToysProvider>
        </ForgetEmailProvider>
      </AuthProvider>
    </>
  );
}

export default App;
