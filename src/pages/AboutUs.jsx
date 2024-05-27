import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsContent>
        <AboutUsText>
          <h2>Welcome to our Movie App!</h2>
          <p>
            <span>Our Story:</span> Our passion for films and the belief that
            every cinematic art deserves to be discovered and shared led to the
            creation of our application. We started with the idea of creating a
            place where movie enthusiasts of all genres and cultures can
            discover new films, share their experiences, and be inspired by one
            another.
            <br />
            <br />
            <span>Our Team:</span> We are a group of passionate cinema fans,
            developers, and designers working diligently to provide the best
            user experience. Our diverse team dynamics and cultural variety
            inspire us to seek constant innovation and improvements that cater
            to the needs of our users.
            <br />
            <br />
            <span>Unique Features:</span> Our app offers not only an extensive
            collection of movies but also personalized recommendations based on
            your preferences. Additionally, you can engage with our community,
            share your reviews, rate films, and discover what other users are
            watching.
            <br />
            <br />
            <span>User Experience:</span> We believe that every movie experience
            is unique. Therefore, we have made our app intuitive and easy to use
            so that you can enjoy your favorite films the way you prefer.
            <br />
            <br />
            <span>Future Plans and Development:</span> Our goal is to continue
            enhancing our app by adding new features and improving existing
            ones. We plan to introduce new interactive functions and expand our
            film community to make your experience with us even more exciting.
          </p>
        </AboutUsText>
        <AboutUsImage>
          <img
            src="https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg?w=740"
            alt="Movie"
          />
        </AboutUsImage>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutUsText = styled.div`
  font-size: 18px;
  flex: 1;
  padding: 20px;

  span {
    font-weight: bold;
  }

  h2 {
    font-weight: bold;
    color: #80395a;
    font-size: 35px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

const AboutUsImage = styled.div`
  flex: 1;
  text-align: center;
  object-fit: cover;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;