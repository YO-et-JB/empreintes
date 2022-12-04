import Input from "@/web/components/Input"
import axios from "axios"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Formik, Form } from "formik"
import sitMagnifying from "public/icons/social networks icons/magnifying-glass-solid.svg"

const initialValues = {
  label: "",
  input: "",
}

const Search = () => {
  const [state, setState] = useState()

  const handleSubmit = useCallback(async ({ label, input }) => {
    console.log(label, input)
  }, [])

  const handleChange = (event) => setState(event.target.value)

  return (
    <div className="mb-3 mt-2">
      <Formik
        initialValues={initialValues}
        OnSubmit={handleSubmit}
        onChange={handleChange}
        className=""
      >
        <Form className="w-7 flex rounded-lg bg-gray-100 ml-[-2rem]">
          <Image
            src={sitMagnifying}
            alt="magnifying"
            layout="responsive"
            className=""
          />
          <Input
            placeholder="Search"
            className="bg-gray-100 p-2 bl-none rounded-lg"
          />
        </Form>
      </Formik>
    </div>
  )
}

export default Search
