REACT TESTING LIBRARY
This was a code along session to delve into the React Testing Library, utilising it to test a form.
The form accepts a name and email and considers an empty name field of email address with no @ as invalid entries.
The information's validity is assessed on the click of a button.

If the information is valid it shows a welcome message. If invalid it shows and error.

We tested together to check the form functions correctly when given both valid and invalid data, using the following library resources:

- getByRole
- userEvent
- getByText
- queryByText
- toBeTruthy/Falsy

I wanted to explore futher so I created an image that would only appear on a successful submit, and then testing that this was truthy/falsy depending on the validity of he data entered.

Looking at the Testing Library documentation I found you can access and image with getByRole - img. I then wanted to check this was truthy on valid data, so I passed this in to the test as a userEvent.

\*As this was purely a testing project, there is no styling or folder/componenet organisation.
