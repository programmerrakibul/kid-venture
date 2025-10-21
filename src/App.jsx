import { RouterProvider } from "react-router";
import router from "./routes/router";
import ToysProvider from "./providers/ToysProvider";

function App() {
  return (
    <>
      <ToysProvider>
        <RouterProvider router={router} />
      </ToysProvider>
    </>
  );
}

export default App;
