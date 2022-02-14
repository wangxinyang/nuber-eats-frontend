import React from "react"
import { useForm } from "react-hook-form"

interface ILoginForm {
  email?: string
  password?: string
}

const Login = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>()
  const onSubmit = () => {}
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center">
        <h3 className="font-bold text-lg text-gray-800">Log in</h3>
        <form className="grid gap-3 mt-5 px-10" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: "Email is required" })}
            name="email"
            className="input mb-5"
            type="email"
            placeholder="email"
          />
          {errors.email?.message && (
            <span className="text-medium text-red-500">{errors.email?.message}</span>
          )}
          <input
            {...register("password", { required: "Password is required", minLength: 10 })}
            name="password"
            className="input"
            type="password"
            placeholder="password"
          />
          {errors.password?.type === "minLength" && (
            <span className="text-medium text-red-500">
              Password must be more than 10 characters.
            </span>
          )}
          {errors.password?.message && (
            <span className="text-medium text-red-500">{errors.password?.message}</span>
          )}
          <button className="btn">login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
