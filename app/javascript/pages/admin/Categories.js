import React, {useState} from 'react'
import AppLayout from '../../templates/AppLayout'
import ManageBrandsModal from "../../organisms/ManageBrandsModal"
import ManageCategoriesModal from "../../organisms/ManageCategoriesModal"
import ManageLaboratoriesModal from "../../organisms/ManageLaboratoriesModal"
import {Form} from "react-final-form"
import TextFieldField from "../../atoms/TextFieldField"
import AutoCompleteField from "../../atoms/AutoCompleteField"
import useCrud from "../../hooks/useCrud"
import DataTable from "../../molecules/DataTable"
import CustomMaterialMenu from "../../molecules/CustomMaterialMenu"
import Button from "../../atoms/Button"
/*import Add from "@mui/icons-material/Add"*/
import {Alert, Snackbar} from "@mui/material"
import {mix, required, isPrice } from "../../validations/Validations"

const Categories = () =>{

}