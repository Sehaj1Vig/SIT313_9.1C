import React, { useState } from "react";
import { Form, Radio, Segment, Header } from "semantic-ui-react";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";

export default function PostPage() {
  const [postType, setPostType] = useState("question"); // default type

  // State to store form data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    abstract: "", // for articles
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Type:", postType);
    console.log("Form Data:", formData);
    alert("Post submitted! Check console for details.");

    // Reset form
    setFormData({
      title: "",
      content: "",
      tags: "",
      abstract: "",
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "30px auto" }}>
      <Header as="h2">New Post</Header>

      {/* Select Post Type */}
      <Form>
        <Form.Field>
          <Radio
            label="Question"
            name="radioGroup"
            value="question"
            checked={postType === "question"}
            onChange={() => setPostType("question")}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Article"
            name="radioGroup"
            value="article"
            checked={postType === "article"}
            onChange={() => setPostType("article")}
          />
        </Form.Field>
      </Form>

      <Segment>
        <Header as="h4">What do you want to ask or share</Header>

        {/* Conditional Rendering with props for hooks */}
        {postType === "question" ? (
          <QuestionForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <ArticleForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </Segment>
    </div>
  );
}
