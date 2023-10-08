import { getOne, listBooks } from "@/src/graphql/queries";
import { API } from "@aws-amplify/api";

const config = {
  aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.aws_appsync_region,
  aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
  aws_appsync_apiKey: process.env.aws_appsync_apiKey,
};

API.configure(config);

type Book = {
  BookId: string;
  name: string;
};

const getBook = async () => {
  "use server";
  const response = (await API.graphql({
    query: getOne,
    variables: {
      BookId: "111",
    },
  })) as any;

  console.log(response);

  return response;
};

const getBooks = async () => {
  "use server";

  const response = (await API.graphql({
    query: listBooks,
  })) as any;

  const books = response.data.listBooks as [Book];

  console.log(books);
  return response.data.listBooks as [Book];
};

const Home = async () => {
  const book = await getBook();
  const books = await getBooks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>Hello Hai {book ? book.data.getOne.name : "error"}</div>
        <div>
          {books
            ? books.map((item, id) => <div key={id}>{item.name}</div>)
            : "error"}
        </div>
      </div>
    </main>
  );
};

export default Home;
