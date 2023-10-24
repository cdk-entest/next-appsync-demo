"use server";

import { redirect } from "next/navigation";
import { addBook } from "@/src/graphql/mutations";
import { API } from "@aws-amplify/api";
import { config } from "@/appsync";

API.configure(config);

const handleForm = async (data: FormData) => {
  const title = data.get("title") ? data.get("title") : "Machine Learning";
  const author = data.get("author") ? data.get("author") : "hai tran";
  const url = data.get("url")
    ? data.get("url")
    : "https://d2cvlmmg8c0xrp.cloudfront.net/book/data_engineering_with_aws.pdf";
  const description = data.get("description")
    ? data.get("description")
    : "no description";
  const order = data.get("order") ? Number(data.get("order")) : 100;
  const image = data.get("image")
    ? data.get("image")
    : "https://d2cvlmmg8c0xrp.cloudfront.net/web-css/data_engineering_with_aws.jpg";
  const amazon = data.get("amazon")
    ? data.get("amazon")
    : "https://www.amazon.com/Data-Engineering-AWS-Gareth-Eagar/dp/1800560419/ref=sr_1_1?crid=28BFB3NXGTM9G&keywords=data+engineering+with+aws&qid=1682772617&sprefix=data+engineering+with+aws%2Caps%2C485&sr=8-1";

  const response = await API.graphql({
    query: addBook,
    variables: {
      // id: "112",
      title: title,
      author: author,
      description: description,
      order: order,
      url: url,
      amazon: amazon,
      image: image,
    },
  });

  // console.log(response);

  redirect("/");
};

export default handleForm;
