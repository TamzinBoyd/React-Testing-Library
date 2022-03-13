import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

it("should render basic fields", () => {
  // arrange test
  render(<Form />);
  //   act - get textbox, then look for label of name
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  // checking if the elemant is present in the document
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

// check that the screen shows something went wrong message when the email isn't valid
it("should not submit the form on invalid credentials & show relevant warning", () => {
  render(<Form />);

  // get input box values and button
  // userEVent is companion library to simulate browser interaction. Simulating that the name box contains an empty string and would therefore be invalid
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  userEvent.type(nameInput, "");

  //   pass sample wrong email text (not valid email) to check it throws an error
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(emailInput, "notvalidemail");

  //   simulate click on submit button, if working this should show the error text
  userEvent.click(screen.getByRole("button", { name: /Sign In/i }));

  // check alert exists by looking for the text that appears when invalid info is entered
  const alert = screen.getByText("Sorry something went wrong");
  expect(alert).toBeTruthy();

  //   expect that the successful submit text isn't shown
  //   QueryBy instead of getBy as this doens't throw an error
  const success = screen.queryByText(
    /Thank you for submitting! We'll be in touch./i
  );
  expect(success).toBeFalsy();
});

// Check screen shows thank you for submitting when valid credentials are inputted
it("should show welcome message when valid credentials are submitted", () => {
  render(<Form />);

  //   get info
  const name = screen.getByRole("textbox", { name: /name/i });
  userEvent.type(name, "Tamzin");
  const email = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(email, "tamzinb86@gmail.com");
  userEvent.click(screen.getByRole("button", { name: /Sign In/i }));

  //   tests
  const success = screen.queryByText(
    /Thank you for submitting! We'll be in touch./
  );
  expect(success).toBeTruthy();
  const error = screen.queryByText(/Sorry something went wrong/);
  expect(error).toBeFalsy();
});

// check image appears on welcome screen
it("should show image on submitting valid data", () => {
  render(<Form />);
  // simulate correct info & user click
  const name = screen.getByRole("textbox", { name: /name/i });
  userEvent.type(name, "Tamzin");
  const email = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(email, "tamzinb86@gmail.com");
  userEvent.click(screen.getByRole("button", { name: /Sign In/i }));

  // tests
  const image = screen.getByRole("img", { name: "welcome" });
  expect(image).toBeTruthy();
});
