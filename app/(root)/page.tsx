import { auth } from "@auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-500">
        Hello World - inter
      </h1>
      <p className="font-space-grotesk text-4xl font-bold text-purple-500">
        Hello World - space grotesk
      </p>
    </div>
  );
};

export default Home;
