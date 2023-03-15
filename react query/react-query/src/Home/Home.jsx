import { useQuery } from "react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddNewPost from "./components/AddNewPost";

const fetchPosts = async ({ queryKey }) => {
  try {
    const { data } = await axios.get(
      ` http://localhost:3000/posts?_page=${queryKey[1]}&_limit=5`
    );
    return data;
  } catch (error) {
    throw Error("Unable to fetch Posts");
  }
};
const Home = () => {
  const toast = useToast();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["posts", page],
    fetchPosts,
    {
      keepPreviousData: true,
    },
    {
      onError: (error) => {
        toast({ status: "error", title: error.message });
      },
    }
  );

  return (
    <Container maxW="1300px" mt="4">
      {isLoading ? (
        <Grid placeItems="center" height="100vh">
          <Spinner />
        </Grid>
      ) : (
        <>
          <AddNewPost />
          <Flex justify="space-between" mb="4">
            <Button
              colorScheme="red"
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </Button>
            <Text>Current Page: {page}</Text>
            <Button
              colorScheme="green"
              onClick={() => setPage((old) => old + 1)}
            >
              Next
            </Button>
          </Flex>
          {data &&
            data.map((post) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <Stack
                  p="4"
                  boxShadow="md"
                  borderRadius="xl"
                  border="1px solid #ccc"
                  key={post.id}
                  mb="4"
                >
                  <Flex justify="space-between">
                    <Text>PostId: {post.id}</Text>
                  </Flex>
                  <Heading fontSize="2xl">{post.title}</Heading>
                  <Text>{post.body}</Text>
                </Stack>
              </Link>
            ))}
        </>
      )}
    </Container>
  );
};

export default Home;
