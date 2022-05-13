import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
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
    fetch("/api/create-book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({book, appointment})
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
        <h3>Tell us about the book you plan to read or choose one from our library and we will be sure to have it waiting for you:</h3>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              onChange={e => setBook({...book, [e.target.name]: e.target.value})}
              name="title"
              type="text"
              id="title"
              value={book.title}
            />
          </FormField>
          <FormField>
            <Label htmlFor="author">Author</Label>
            <Input
              onChange={e => setBook({...book, [e.target.name]: e.target.value})}
              name="author"
              id="author"
              value={book.author}
            />
          </FormField>
          <FormField>
            <Label htmlFor="book_img">Book Image</Label>
            <Input
              onChange={e => setBook({...book, [e.target.name]: e.target.value})}
              name="book_img"
              type="image"
              id="book_img"
              value={book.image_url}
            />
          </FormField>
          <FormField>
            <Label htmlFor="summary">Summary</Label>
            <Input
              onChange={e => setBook({...book, [e.target.name]: e.target.value})}
              name="summary"
              type="text"
              id="summary"
              value={book.summary}
            />
          </FormField>
          <h3>Select a date and time to read:</h3>
          <FormField>
            <Label htmlFor="date_of_reading">Date</Label>
            <Input
              onChange={ e => setAppointment({...appointment, [e.target.name]: e.target.value})}
              name="date_of_reading"
              type="datetime-local"
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
