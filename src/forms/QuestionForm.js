import React from "react";
import { Form, Button } from "semantic-ui-react";

export default function QuestionForm({ formData, handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <input
          name="title"
          placeholder="Start your question with how, what, why, etc."
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Field>

      <Form.Field>
        <label>Describe your problem</label>
        <textarea
          name="content"
          placeholder="Describe your problem here..."
          rows="5"
          value={formData.content}
          onChange={handleChange}
        />
      </Form.Field>

      <Form.Field>
        <label>Tags</label>
        <input
          name="tags"
          placeholder="e.g., Java, React, API"
          value={formData.tags}
          onChange={handleChange}
        />
      </Form.Field>

      <Button primary type="submit">
        Post
      </Button>
    </Form>
  );
}
