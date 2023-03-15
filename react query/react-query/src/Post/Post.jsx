import { useQuery } from "react-query";
import axios from "axios";
import React from "react";
import {
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const fetchPost = async (id) => {
  try {
    const { data } = await axios.get(` http://localhost:3000/posts/${id}`);

    return data;
  } catch (error) {
    throw Error("Unable to fetch Post");
  }
};
const Post = () => {
  const { id } = useParams();

  const toast = useToast();
  const { data, isLoading } = useQuery(["post", id], () => fetchPost(id), {
    onError: (error) => {
      toast({ status: "error", title: error.message });
    },
  });

  return (
    <Container maxW="1300px" mt="4">
      {isLoading ? (
        <Grid placeItems="center" height="100vh">
          <Spinner />
        </Grid>
      ) : (
        <>
          <Stack
            p="4"
            boxShadow="md"
            borderRadius="xl"
            border="1px solid #ccc"
            key={id}
            mb="4"
          >
            <Flex justify="space-between">
              <Text>postId: {data.id}</Text>
            </Flex>
            <Heading fontSize="2xl">{data.title}</Heading>
            <Text>{data.body}</Text>
          </Stack>
        </>
      )}
    </Container>
  );
};

export default Post;
