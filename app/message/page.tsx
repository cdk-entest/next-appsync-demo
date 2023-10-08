import { getOne, listBooks, listMessages } from "@/src/graphql/queries";
import { API } from "@aws-amplify/api";

const config = {
  aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
  aws_appsync_region: process.env.aws_appsync_region,
  aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
  aws_appsync_apiKey: process.env.aws_appsync_apiKey,
};

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {messages
          ? messages.map((item, id) => <div key={id}>Hello {item.content}</div>)
          : "error"}
      </div>
    </main>
  );
};

export default Home;
