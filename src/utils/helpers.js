export const valuesInputs = (values) => {
  const inputs = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Should be a valid email adress",
      required: true,
    },
    {
      id: 2,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and should include at least one letter, one number and one special character",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 3,
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      required: true,
      pattern: values.password,
    },
  ];
  return inputs;
};

export const request =
  "https://api.themoviedb.org/3/movie/popular?api_key=f9246f47d869b76facb0c10c35451acb&languange=en-US&page=1";
