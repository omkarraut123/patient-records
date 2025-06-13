import React, { useState } from "react";
import Search from "./components/Search";
import PatientRecords from "./components/PatientRecords";

const title = "Patient Medical Records";

const App = () => {

  const [record, setRecord] = useState(null);

  return (
    <div className="max-w-6xl w-full mx-auto min-h-[100vh] flex flex-col gap-5 justify-start items-center bg-color-1 p-5">
      <h1 className='text-36 sm:text-48 lg:text-56 2xl:text-60 font-bold text-color-4'>{title}</h1>
      <div className="w-full flex flex-col gap-5">
        <Search setRecord={setRecord} />
        <PatientRecords record={record} setRecord={setRecord} />
      </div>
    </div>
  );
};

export default App;
