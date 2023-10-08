import { listBooks } from "@/src/graphql/queries";
import { API } from "@aws-amplify/api";
import { config } from "./appsync";
import { Book } from "./appsync";
import Image from "next/image";

API.configure(config);

const getBooks = async () => {
  "use server";

  const response = (await API.graphql({
    query: listBooks,
  })) as any;

  const books = response.data.listBooks as [Book];
  console.log(books);
  return books;
};

const Home = async () => {
  let books: any[] = [];

  try {
    books = await getBooks();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="min-h-screen dark:bg-slate-800">
      <div className="mx-auto max-w-3xl px-5 dark:bg-slate-800 dark:text-white">
        <div className="grid grid-cols-1 gap-5 pt-20">
          {books.map((book, id) => (
            <div
              key={id}
              className="dark:bg-slate-700 p-5 shadow-lg rounded-sm"
            >
              <h4 className="font-bold mb-8">{book.title}</h4>
              <div>
                <Image
                  src={book.image}
                  alt={book.title}
                  width={300}
                  height={300}
                  className="float-left h-auto w-64 mr-6"
                  loading="eager"
                  priority
                ></Image>
              </div>
              <p className="text-sm">{book.description}</p>
              <a href={book.url} target="_blank">
                <button className="bg-orange-400 px-14 py-3 rounded-sm shadow-md hover:bg-orange-300 mt-2">
                  Amazon
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
