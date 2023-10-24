import { listImages } from "@/src/graphql/queries";
import { API } from "@aws-amplify/api";
import { config } from "@/appsync";

API.configure(config);

type Image = {
  id: string;
  name: string;
  title: string;
};

const getImages = async () => {
  "use server";

  const response = (await API.graphql({
    query: listImages,
    variables: {
      limit: 10,
    },
  })) as any;

  const images = response.data.listImages.images as [Image];

  console.log(images);

  return images;
};

const Home = async () => {
  const images = await getImages();

  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <div className="mx-auto max-w-3xl ">
        <div className="grid grid-cols-1 gap-3 p-5">
          {images
            ? images.map((item, id) => (
                <div key={id} className="">
                  <img src={item.name} alt={"test"}></img>
                  <h1 className="dark:text-white">{item.title}</h1>
                </div>
              ))
            : "error"}
        </div>
      </div>
    </div>
  );
};

export default Home;
