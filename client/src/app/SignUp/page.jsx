'use client';
import { useState } from 'react';
import { validateForm } from './validates';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    lastName: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(validateForm({ ...formData, [name]: value }));
  };

  const clearForm = () => {
    setFormData({
      username: '',
      lastName: '',
      email: '',
      mobile: '',
      password: ''
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData, setErrors, errors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      await axios.post('http://localhost:3001/users', formData);
      console.log('Appraisals successfully send');
    }
    clearForm();
  };

  const handleSingUpValidate = () => {
    if (Object.keys(errors).length === 0) {
      alert('Registro exitoso');
    }
  };

  return (
    <div class=" min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-no-repeat bg-cover ">
      <div className=" mx-auto md:max-w-35rem h-50 space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Signup
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className=" max-w-xl mr-12 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900"></dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <form onSubmit={handleSubmit}>
                  {/* input Name */}
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2">
                      {' '}
                      Usuario <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Ingresa tu nombre"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                  {/* input apellido */}
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2">
                      {' '}
                      Apellido <abbr title="required">*</abbr>
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="lastName"
                      placeholder="Ingrese su apellido"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                  </div>
                  {/* input mail */}
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2">
                      {' '}
                      Mail <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="nombre@dominio.com"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="email"
                      id="integration_shop_name"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>

                  {/* input celular */}
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2">
                      {' '}
                      Celular <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="ingrese su numero de celular"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                    {errors.mobile && <p>{errors.mobile}</p>}
                  </div>

                  {/* input password */}
                  <div class="mb-3 space-y-2 w-full text-xs">
                    <label class="font-semibold text-gray-600 py-2">
                      {' '}
                      Contraseña <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="ingrese contraseña"
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {errors.mobile && <p>{errors.mobile}</p>}
                  </div>

                  <button
                    class="mx-auto block mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    type="submit"
                    onClick={handleSingUpValidate}
                  >
                    Enviar{' '}
                  </button>
                </form>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
