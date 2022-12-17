import { useState } from "react";

const App = () => {
  const pictures = ["pic1.jpeg"];
  const [picture, setPicture] = useState(0);

  return (
    <div className="">
      <center className="mt-2">
        <p className="text-color text-2xl font-semibold">
          We all will miss you Mohit Sir 😭
        </p>
      </center>
      <div className="grid grid-cols-1 xl:grid-cols-5 max-w-7xl mx-auto p-4 mt-4 gap-x-4 gap-y-4">
        <div className="col-span-2 border-[2px] rounded-lg flex items-center justify-center bg-blue-700 relative">
          <button
            disabled={picture === 0}
            onClick={() => {
              setPicture(picture - 1);
            }}
            className="picture-buttons left-[68px]"
          >
            {"<"}
          </button>
          <img
            className="h-[500px] py-6"
            style={{ borderRadius: "25%" }}
            src={`/${pictures[picture]}`}
            alt="Mohir_Sir"
          />
          <button
            disabled={pictures.length === picture + 1}
            onClick={() => {
              setPicture(picture + 1);
            }}
            className="picture-buttons right-[68px]"
          >
            {">"}
          </button>
        </div>
        <div className="col-span-3 border-[2px] rounded-lg p-6 text-color font-semibold text-xl space-y-4 text-justify bg-blue-700">
          <p className="">Hello Sir,</p>
          <p className="">
            We are all deeply saddened to see you go, but we also understand
            that sometimes these things are just a part of life and we must move
            on. We want you to know that you have been an invaluable part of our
            vidyalaya and we will always be grateful for everything you have
            done for us.
          </p>
          <p className="">
            Your guidance and support as our librarian has been invaluable. You
            have always been there to help us find the resources we needed, and
            your kindness and generosity have touched the lives of so many
            people. You have helped to create a warm and welcoming atmosphere in
            the library, and we will always be grateful for the time and effort
            you have put into making it such a special place.
          </p>
          <p className="">
            We will miss you greatly, but we know that you will go on to do
            great things in your new position. Please don't hesitate to stay in
            touch and let us know how you are doing.
          </p>
          <p className="">I will miss you the most Sir!</p>
          <p className="">Your Assistant, Jonak</p>
        </div>
      </div>
    </div>
  );
};

export default App;
