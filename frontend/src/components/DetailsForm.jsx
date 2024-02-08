import React, { useState, useContext } from 'react';

const FormDataContext = React.createContext();

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    zipCode: '',
    phone: '',
    email: ''
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, handleChange }}>
      {children}
    </FormDataContext.Provider>
  );
};

const useFormData = () => useContext(FormDataContext);

const Detail = ({name, label}) => {
  const { formData, handleChange } = useFormData();

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type="text"
        name={name}
        placeholder={`Enter your ${label}`}
        value={formData[name]}
        onChange={(e) => handleChange(name, e.target.value)}
      />
    </div>
  );
};

const DetailsFormStyle = () => {
  const { formData } = useFormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Detail name={"firstName"} label="First Name" />
        <Detail name={"lastName"} label="Last Name" />
        <Detail name={"city"} label="City" />
        <Detail name={"zipCode"} label="Zip Code" />
        <Detail name={"phone"} label="Phone" />
        <Detail name={"email"} label="Email" />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

const DetailsForm = () => {
  return (
    <FormDataProvider>
      <DetailsFormStyle />
    </FormDataProvider>
  );
};

export default DetailsForm;
