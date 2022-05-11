import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewAppointment({ user }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    image_url: "",
    summary: "",
  })

  const [appointment, setAppointment] = useState({
    date_of_reading: "",
  
  })

  const handleChange = (e) => {
    setBook({
    ...book,
    [e.target.name]: e.target.value
    })
}

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book)
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>First, tell us about the book you would like to read</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              onChange={handleChange}
              name="title"
              type="text"
              id="title"
              value={book.title}
            />
          </FormField>
          <FormField>
            <Label htmlFor="author">Author</Label>
            <Input
              onChange={handleChange}
              name="author"
              id="author"
              value={book.author}
            />
          </FormField>
          <FormField>
            <Label htmlFor="book_img">Book Image</Label>
            <Input
              onChange={handleChange}
              name="book_img"
              type="image"
              id="book_img"
              value={book.image_url}
            />
          </FormField>
          <FormField>
            <Label htmlFor="summary">Summary</Label>
            <Input
              onChange={handleChange}
              name="summary"
              type="text"
              id="summary"
              value={summary}
            />
          </FormField>
          <h2>Second, select a date to volunteer to read</h2>
          <FormField>
            <Label htmlFor="date_of_reading">Date</Label>
            <Input
              onChange={handleChange}
              name="date_of_reading"
              type="datetime"
              id="date_of_reading"
              value={appointment.date_of_reading}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Add Appointment"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewAppointment;
