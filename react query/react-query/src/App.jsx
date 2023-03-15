import { ChakraProvider, Heading } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import { ReactQueryDevtools } from "react-query/devtools";
import Post from "./Post/Post";

function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/post/:id" element={<Post />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
