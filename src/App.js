import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  GiBearFace,
  GiDonkey,
  GiRattlesnake,
  GiTigerHead,
} from "react-icons/gi";
import "./App.css";

function App() {
  const [tiger, setTiger] = useState(false);
  const showTiger = () => setTiger(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Thanks for registering, please check your details in the console!");
  };
  return (
    <div className="App">
      <div className="form">
        <div className="header">
          <h1>Contact Form</h1>
        </div>

        {/* email and password section starts here */}

        <div className="email">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
              <label htmlFor="">Email: </label>
              <input
                type="email"
                {...register("Email", { required: true })}
                placeholder="Please enter a valid email address"
              />
              {errors.Email?.type === "required" && "Email is required"}
              <label htmlFor="">Password: </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 8 })}
                placeholder="Please enter a password"
                minLength="8"
              />
              {errors.password?.type === "required" && "Password is required"}
            </div>

            {/* colour section starts here */}

            <div className="colors">
              <h2>What's your favourtie colour?</h2>
              <select name="colors" {...register("Color")}>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
              </select>
            </div>

            {/* animal section starts here */}

            <div className="animals">
              <h2>What's your favourtie Animal?</h2>
              <div className="animal">
                <input
                  type="checkbox"
                  name="Animal"
                  value="Bear"
                  {...register("Animal")}
                />

                <label htmlFor="Bear">Bear</label>
                <GiBearFace />
              </div>

              <div className="animal">
                <input
                  onClick={showTiger}
                  type="checkbox"
                  name="Animal"
                  value="Tiger"
                  {...register("Animal")}
                />
                <label htmlFor="Tiger">Tiger </label> <GiTigerHead />
              </div>
              <div className="tiger">
                {tiger ? (
                  <input
                    type="text"
                    placeholder="What's your favourite type of tiger?"
                    {...register("Tiger")}
                  />
                ) : null}
              </div>
              <div className="animal">
                <input
                  type="checkbox"
                  name="Animal"
                  value="Snake"
                  {...register("Animal")}
                />
                <label htmlFor="Snake">Snake</label> <GiRattlesnake />
              </div>
              <div className="animal">
                <input
                  type="checkbox"
                  name="Animal"
                  value="Donkey"
                  {...register("Animal")}
                />
                <label htmlFor="Donkey">Donkey</label> <GiDonkey />
              </div>
            </div>
            <button type="submit" value="Submit">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
