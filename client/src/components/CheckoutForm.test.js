import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

const testUser = {
    firstName: "First",
    lastName: "Last",
    address: "my adress",
    city: "my city",
    state: "my state",
    zip: "0000"
};

test("form header renders", () => {
    //checking for proper rendering form
    render(<CheckoutForm />);
    //checking for header existense
    screen.getByText("Checkout Form");
});

test("form shows success message on submit with form details", () => {
    //checking for proper rendering form
    render(<CheckoutForm />);
    
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);


    userEvent.type(firstName, testUser.firstName);
    userEvent.type(lastName, testUser.lastName);
    userEvent.type(address, testUser.address);
    userEvent.type(city, testUser.city);
    userEvent.type(state, testUser.state);
    userEvent.type(zip, testUser.zip);


    const button = screen.getByRole("button");
    userEvent.click(button);

    screen.getByTestId("successMessage");

    const newName = screen.queryByText(`${testUser.firstName} ${testUser.lastName}`);
    const newAddress = screen.queryByText(testUser.address);
    const newLocation =screen.queryByText(`${testUser.city}, ${testUser.state} ${testUser.zip}`);

    expect(newName).toBeInTheDocument();
    expect(newAddress).toBeInTheDocument();
    expect(newLocation).toBeInTheDocument();
});
