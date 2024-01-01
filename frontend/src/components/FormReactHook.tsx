import React, { FormEvent } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

interface FormData {
    name: string;
    age: number;
}

const FormReactHook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FieldValues) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    {...register("name", { required: true, minLength: 3 })}
                    id="name"
                    type="text"
                    className="form-control"
                />
                {errors.name?.type === "required" && (
                    <p>The name field is required</p>
                )}
                {errors.name?.type === "minLength" && (
                    <p>The minimal length must be at least three characters</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    {...register("age")}
                    id="age"
                    type="number"
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default FormReactHook;
