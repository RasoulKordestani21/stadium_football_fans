import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Template from "./components/template/template";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Template />
      </div>
    </QueryClientProvider>
  );
}

export default App;
