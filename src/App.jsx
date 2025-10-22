import { RouterProvider } from "react-router";
import router from "./routes/router";
import ToysProvider from "./providers/ToysProvider";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ToysProvider>
          <RouterProvider router={router} />
        </ToysProvider>
      </AuthProvider>
    </>
  );
}

export default App;
