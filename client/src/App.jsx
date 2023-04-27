import "./App.css";
import FormField from "./components/FormField";

import { QueryClient, QueryClientProvider } from "react-query";
import Tasks from "./components/Tasks";
const queryProvider = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryProvider}>
        <FormField />
        <Tasks />
      </QueryClientProvider>
    </>
  );
}

export default App;
