import React from 'react';
import {useForm} from 'react-hook-form';

function ContactForm() {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();

    const formSubmitHandler = (data) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(formSubmitHandler)} className="w-full border rounded-lg p-8 my-10">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label title="This field is necessary" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-first-name">
                        First Name <i className="text-red-500">*</i>
                    </label>
                    <input
                        {...register("firstname", {
                            required: true,
                        })}
                        className={`appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                         ${errors.firstname ? "border-red-500" : "border-gray-200"}`}
                        id="grid-first-name"
                        type="text"/>
                    {errors.firstname && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label title="This field is necessary" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                        Last Name <i className="text-red-500">*</i>
                    </label>
                    <input
                        {...register("lastname", {
                            required: true,
                        })}
                        className={`appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                         ${errors.lastname ? "border-red-500" : "border-gray-200"}`}
                        id="grid-last-name"
                        type="text"/>
                    {errors.lastname && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label title="This field is necessary" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        E-mail Address<i className="text-red-500">*</i>
                    </label>
                    <input
                        {...register("email", {
                            required: true,
                        })}
                        className={`appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                         ${errors.email ? "border-red-500" : "border-gray-200"}`}
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"/>
                    {/*<p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>*/}
                    {errors.email && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label title="This field is necessary" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        Message <i className="text-red-500">*</i>
                    </label>
                    <textarea
                        {...register("message", {
                            required: true,
                        })}
                        className={`no-resize appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none
                         ${errors.message ? "border-red-500" : "border-gray-200"}`}
                        id="message"/>
                    {errors.message && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button
                        className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Send
                    </button>
                </div>
                <div className="md:w-2/3"/>
            </div>
        </form>
    );
}

export default ContactForm;