import React from "react";
import BasicForm from "../molecules/BasicForm";

const ManageLaboratories = () => {
    return (
        <div class='justify-center flex pt-10'>
            <div class={'w-1/2'}>
                <div className='border border-blue-900'>
                    <div className='bg-blue-700 text-white pt-5 pb-5 pl-4 pr-4'>
                        Registro de Laboratorio
                    </div>
                    <div className='pt-5 pb-5 pl-4 pr-4'>
                        <BasicForm initialValues={{}} onSubmit={() => null}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageLaboratories
