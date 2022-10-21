import React from "react";
import BasicForm from "../../molecules/BasicForm";
import useCrud from "../../hooks/useCrud";

const ManageLaboratories = () => {
    const {data, status, deleteMutate, updateMutate, createMutate} = useCrud('laboratories')
    const onSubmit = (values) =>{
        try{
            createMutate(values)
        }catch (err){
            console.debug(err)
        }
    }

    return (
        <div className='justify-center flex pt-10'>
            <div className={'w-1/2'}>
                <div className='border border-blue-900'>
                    <div className='bg-blue-700 text-white pt-5 pb-5 pl-4 pr-4'>
                        Registro de Laboratorio
                    </div>
                    <div className='pt-5 pb-5 pl-4 pr-4'>
                        <BasicForm initialValues={{}} onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageLaboratories
