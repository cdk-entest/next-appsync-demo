import handleForm from "./action";

const FormPage = () => {
  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <div className="mx-auto max-w-3xl px-5">
        <form action={handleForm}>
          <div className="grid gap-6 mb-6 grid-cols-1">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Machine Learning"
                name="title"
                className="text-sm rounded-sm block w-full p-2.5 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium dark:text-white "
              >
                Author
              </label>
              <input
                id="author"
                type="text"
                placeholder="hai tran"
                name="author"
                className="text-sm rounded-sm block w-full p-2.5 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium dark:text-white "
              >
                Image
              </label>
              <input
                id="image"
                type="text"
                placeholder="image"
                name="image"
                className="text-sm rounded-sm block w-full p-2.5 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                placeholder="about machine learning"
                name="description"
                className="text-sm rounded-sm block w-full p-2.5 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="url"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                URL
              </label>
              <input
                id="url"
                type="text"
                placeholder="url"
                name="url"
                className="text-sm rounded-sm block w-full p-2.5 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="amazon"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Amazon
              </label>
              <input
                id="amazon"
                type="text"
                placeholder="amazon"
                name="amazon"
                className="text-sm rounded-sm block w-full p-2.5 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="Order"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Order
              </label>
              <input
                id="order"
                type="text"
                placeholder="100"
                name="order"
                className="text-sm rounded-sm block w-full p-2.5 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="upload"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Upload File
              </label>
              <input
                id="upload"
                type="file"
                name="upload"
                className="text-sm rounded-sm w-full p-2.5 cursor-pointer dark:bg-white"
              ></input>
            </div>
            <div>
              <button className="bg-orange-400 px-10 py-3 rounded-sm">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
