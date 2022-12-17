const App = () => {
  return (
    <div className="">
      <center className="mt-2">
        <p className="text-color text-2xl font-semibold">
          This goes to Mohit Sir!!
        </p>
      </center>
      <div className="grid grid-cols-1 xl:grid-cols-5 max-w-7xl mx-auto p-4 mt-4 gap-x-4 gap-y-4">
        <div className="col-span-2 border-[2px] rounded-lg flex items-center justify-center">
          <img
            className="h-[500px] rounded-3xl py-6"
            src="/pic1.jpeg"
            alt="Mohir_Sir"
          />
        </div>
        <div className="col-span-3 border-[2px] rounded-lg p-6 text-color font-semibold text-xl">
          <p className="">Hello Sir,</p>
          <p className=""></p>
        </div>
      </div>
    </div>
  );
};

export default App;
