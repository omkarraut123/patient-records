import React from "react";
import medical_records from "../medicalRecords";

const PatientRecords = ({ record, setRecord }) => {

    const onNext = () => {
        if (Number(record.id) + 1 > medical_records.length)
            setRecord(medical_records[0]);
        else
            setRecord(medical_records[Number(record.id)]);
    }

    return (
        <>
            {
                record && (
                    <div id="profile-view" className="max-w-6xl w-full mx-auto">
                        <div className="flex justify-between p-5 bg-color-5 text-white w-full">
                            <div id="patient-profile" data-testid="patient-profile" className="flex flex-col gap-2">
                                <h4 id="patient-name" className="font-bold">{record.data[0].userName}</h4>
                                <h5 id="patient-dob" className="text-14">DOB: {record.data[0].userDob}</h5>
                                <h5 id="patient-height" className="text-14">Height: {record.data[0].meta.height} cm</h5>
                            </div>
                            <button data-testid="next-btn" className="flex items-start" onClick={onNext}>
                                Next
                            </button>
                        </div>

                        <table id="patient-records-table" className="p-2 w-full text-center text-14 min-[475px]:text-base">
                            <thead id="table-header" className="bg-color-3 text-14 min-[475px]:text-18">
                                <tr>
                                    <th>SL</th>
                                    <th>Date</th>
                                    <th>Diagnosis</th>
                                    <th>Weight</th>
                                    <th>Doctor</th>
                                </tr>
                            </thead>
                            <tbody className="[&>*:nth-child(odd)]:bg-[#eaeaea] [&>*:nth-child(even)]:bg-[#f0f0f0] border-1 border-color-4" id="table-body" data-testid="patient-table">
                                {
                                    record.data.map((data, idx) => (
                                        <tr key={data.timestamp}>
                                            <td>{idx + 1}</td>
                                            <td>{new Date(data.timestamp).toLocaleString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" })}</td>
                                            <td>{data.diagnosis.name}</td>
                                            <td>{data.meta.weight}</td>
                                            <td>{data.doctor.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )}
        </>
    )
}

export default PatientRecords;
