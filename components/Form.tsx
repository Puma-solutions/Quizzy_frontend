"use client";
import Link from "next/link";

interface FormProps {
  formElements: {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
  }[];
  textButton: string;
  refLink: {
    text: string;
    ref: string;
  };
}

const Form = ({ formElements, textButton, refLink }: FormProps) => {
  const formHandler = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form
      action=""
      className="flex flex-col p-16 text-black w-128 form"
      onSubmit={formHandler}
    >
      {formElements.map((element) => (
        <div key={element.name} className="flex flex-col gap-1">
          <label htmlFor="" className="text-black">
            {element.label}
          </label>
          <input
            type={element.type}
            placeholder={element.placeholder}
            className=" bg-slate-200 p-2 rounded-md outline-none text-black"
          />
        </div>
      ))}
      <button
        className="bg-yellow-500 text-black p-3 rounded-xl mt-4"
        type="submit"
      >
        {textButton}
      </button>
      <Link href={refLink.ref}>
        <p className=" text-slate-500 underline mt-2">{refLink.text}</p>
      </Link>
    </form>
  );
};

export default Form;
