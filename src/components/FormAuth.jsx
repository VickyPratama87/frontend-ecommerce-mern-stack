import React from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './Form/FormInput';
import Button from './ui/Button';

const FormAuth = ({ isRegister }) => {
	return (
		<div className="grid h-screen place-items-center">
			<Form
				method="POST"
				className="flex flex-col p-8 shadow-lg card w-96 bg-base-300 gap-y-4">
				<h4 className="text-3xl font-bold text-center">{isRegister ? 'Register' : 'Login'}</h4>

				{isRegister && (
					<FormInput
						type="text"
						name="name"
						label="Username"
					/>
				)}

				<FormInput
					type="email"
					name="email"
					label="Email"
				/>

				<FormInput
					type="password"
					name="password"
					label="Password"
				/>

				<div className="mt-5">
					<Button
						type="submit"
						className="btn btn-sm btn-primary btn-block">
						{isRegister ? 'Register' : 'Login'}
					</Button>
				</div>

				{isRegister ? (
					<p className="text-sm text-center">
						Have an account? Login
						<Link
							to="/login"
							className="ml-1 capitalize link link-hover link-accent">
							here
						</Link>
					</p>
				) : (
					<p className="text-sm text-center">
						Don't have account? Register
						<Link
							to="/register"
							className="ml-1 capitalize link link-hover link-accent">
							here
						</Link>
					</p>
				)}
			</Form>
		</div>
	);
};

export default FormAuth;
