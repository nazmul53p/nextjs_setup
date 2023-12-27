"use client";

import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

interface IFormInput {
    name: string;
    email: string;
    gender: GenderEnum;
    age: number;
    date: Date;
    mobile: string;
    formState: {
        errors: {
            name: {
                message: string;
            };
            email: {
                message: string;
            };
            gender: {
                message: string;
            };
            age: {
                message: string;
            };
            date: {
                message: string;
            };
            mobile: {
                message: string;
            };
        };
    };
}

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    console.log("errors", errors);

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
    };

    return (
        <div className="min-h-screen items-center bg-blue-100 p-24">
            <div className="flex justify-center text-3xl">Example Form</div>

            <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                <div className="-mx-3 mb-2 flex flex-wrap">
                    {/* First Name - Input Field */}
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-first-name"
                        >
                            Name
                        </label>
                        <input
                            {...register("name", {
                                required: "Please type name.",
                            })}
                            className={`${
                                errors?.name
                                    ? "border-red-500"
                                    : "border-gray-200"
                            } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                            id="grid-first-name"
                            placeholder="Sir Johny"
                        />
                        <p className="text-xs italic text-red-500">
                            {errors?.name?.message}
                        </p>
                    </div>
                    {/* Email - Input Field */}
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-last-name"
                        >
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "Please type email.",
                            })}
                            className={`${
                                errors?.email
                                    ? "border-red-500"
                                    : "border-gray-200"
                            } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                            id="grid-last-name"
                            placeholder="johny@bravo.com"
                            type="text"
                        />
                        <p className="text-xs italic text-red-500">
                            {errors?.email?.message}
                        </p>
                    </div>
                    {/* Gender - Select Field */}
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-state"
                        >
                            Gender
                        </label>
                        <div className="relative">
                            <select
                                {...register("gender")}
                                className={`${
                                    errors?.gender
                                        ? "border-red-500"
                                        : "border-gray-200"
                                } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                                id="grid-state"
                            >
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="h-4 w-4 fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                            <p className="text-xs italic text-red-500">
                                {errors?.gender?.message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 mb-2 flex flex-wrap">
                    {/* Age - Input Field - Only Accept Numbers 18 to 180 */}
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-last-name"
                        >
                            Age
                        </label>
                        <input
                            {...register("age", {
                                required: "Please type age.",
                            })}
                            className={`${
                                errors?.age
                                    ? "border-red-500"
                                    : "border-gray-200"
                            } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                            id="grid-last-name"
                            placeholder="Age"
                            type="text"
                        />
                        <p className="text-xs italic text-red-500">
                            {errors?.age?.message}
                        </p>
                    </div>
                    {/* Date - Date Field */}
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-last-name"
                        >
                            Date
                        </label>
                        <input
                            {...register("date", {
                                required: "Please type date.",
                            })}
                            className={`${
                                errors?.date
                                    ? "border-red-500"
                                    : "border-gray-200"
                            } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                            id="grid-last-name"
                            placeholder="Date"
                            type="text"
                        />
                        <p className="text-xs italic text-red-500">
                            {errors?.date?.message}
                        </p>
                    </div>
                    {/* Mobile - Bangladeshi Mobile Number */}
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-last-name"
                        >
                            Mobile
                        </label>
                        <input
                            {...register("mobile", {
                                required: "Please type mobile number.",
                            })}
                            className={`${
                                errors?.date
                                    ? "border-red-500"
                                    : "border-gray-200"
                            } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                            id="grid-last-name"
                            placeholder="+8801XXXXXXXXX"
                            type="text"
                        />
                        <p className="text-xs italic text-red-500">
                            {errors?.mobile?.message}
                        </p>
                    </div>
                </div>
                <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="w-full px-3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-password"
                        >
                            Password
                        </label>
                        <input
                            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-password"
                            placeholder="******************"
                            type="password"
                        />
                        <p className="text-xs italic text-gray-600">
                            Make it as long and as crazy as you&apos;d like
                        </p>
                    </div>
                </div>
                <div className="-mx-3 mb-2 flex flex flex-wrap justify-center">
                    <button
                        className="mb-2 me-2 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
