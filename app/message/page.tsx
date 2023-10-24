import { listMessages } from "@/src/graphql/queries";
import { API } from "@aws-amplify/api";
import { config } from "@/appsync";

API.configure(config);

type Message = {
  id: string;
  content: string;
};

const getMessages = async () => {
  "use server";

  const response = (await API.graphql({
    query: listMessages,
    variables: {
      limit: 10,
    },
  })) as any;

  const messages = response.data.listMessages.messages as [Message];

  console.log(messages);

  return messages;
};

const Home = async () => {
  const messages = await getMessages();

  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <div className="mx-auto max-w-3xl ">
        <div className="grid grid-cols-1 gap-3 p-5">
          {messages
            ? messages.map((item, id) => (
                <div
                  key={id}
                  className="dark:bg-slate-500 dark:text-white px-5 py-3"
                >
                  {item.content}
                </div>
              ))
            : "error"}
        </div>
      </div>
    </div>
  );
};

export default Home;
