import { Heading, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import React from "react";
import { useMutation, useQueryClient } from "react-query";

const addNewPost = async ({ title, body }) => {
  try {
    const { data } = await axios.post(`http://localhost:3000/posts`, {
      title,
      body,
    });
    return data;
  } catch (error) {
    throw Error("Unable to post");
  }
};

const AddNewPost = () => {
  const toast = useToast();
  const cache = useQueryClient();
  const { isLoading, data, mutateAsync } = useMutation(
    "addNewPost",
    addNewPost,
    {
      onSuccess: () => {
        cache.invalidateQueries("posts");
      },
      onError: (error) => {
        toast({ status: "error", title: error.message });
      },
    }
  );
  console.log(data);
  return (
    <div>
      <Formik
        initialValues={{ title: "", body: "" }}
        onSubmit={async (values) => {
          await mutateAsync({ title: values.title, body: values.body });
        }}
      >
        <Form>
          <Stack my="4">
            <Heading fontSize="2xl" textAlign="center">
              Add New Post
            </Heading>
            <InputControl name="title" label="Title" />
            <TextareaControl name="body" label="Content" />
            <SubmitButton isLoading={isLoading}>ADD POST</SubmitButton>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewPost;
