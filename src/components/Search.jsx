import React from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord }) {

    const onSubmit = (e) => {
        e.preventDefault();
        let target = document.getElementById('p-name');
        let value = target.value;
        if (value === "0")
            alert("Please select a patient name");
        else {
            setRecord(medical_records[value - 1]);
        }
    }

    return (
        <div className="flex flex-row items-center justify-center gap-5">
            <div className="">
                <select data-testid="patient-name" id="p-name" defaultValue={"0"}>
                    <option value={"0"} disabled>Select Patient</option>
                    {
                        medical_records.map((record, idx) => (
                            <option value={idx + 1} key={record.id}>{record.data[0].userName}</option>
                        ))
                    }
                </select>
            </div>
            <button type="button" data-testid="show" onClick={onSubmit}>
                Show
            </button>
        </div>
    );
}

export default Search;
