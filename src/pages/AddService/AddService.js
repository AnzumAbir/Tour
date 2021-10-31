import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("http://localhost:5000/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Succesfully inserted')
                    reset();
                }
                console.log(res);
            })
    }
    return (
        <div className="box">
            <h2>Add a service</h2>
            <div className="addService">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="name" />
                    <input {...register("description")} placeholder="description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;