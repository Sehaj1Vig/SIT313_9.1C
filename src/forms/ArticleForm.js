import React from "react";
import { Form, Button } from "semantic-ui-react";

export default function ArticleForm({ formData, handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <input
          name="title"
          placeholder="Enter a descriptive title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Field>

      <Form.Field>
        <label>Abstract</label>
        <textarea
          name="abstract"
          placeholder="Enter a 1-paragraph abstract"
          rows="2"
          value={formData.abstract}
          onChange={handleChange}
        />
      </Form.Field>

      <Form.Field>
        <label>Article Text</label>
        <textarea
          name="content"
          placeholder="Enter article text..."
          rows="6"
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
